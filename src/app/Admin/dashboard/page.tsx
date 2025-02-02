"use client";
import { useEffect, useState } from "react";
import Logout from "@/component/Logout/LogoutButton";

export default function AdminDashboard() {
  const [username, setUsername] = useState<string | null>(null);
  const [users, setUsers] = useState<
    { id: number; name: string; email: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);

    fetchUsers();
  }, []);

  // Fetch user logins
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/user_logins"); // Adjust API URL if needed
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch {  
      setError("Error fetching user data");
      setLoading(false);
    }
  };

  // Delete User Function
  const deleteUser = async (user_id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch("http://127.0.0.1:8000/del-users", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id }),
      });

      console.log("Response Status:", response.status); // Debugging line
      console.log("Response Headers:", response.headers);

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error Data:", errorData); // Debugging line
        throw new Error(errorData.message || "Failed to delete user");
      }

      console.log("User deleted successfully!");

      // Remove user from UI without refresh
      setUsers(users.filter((user) => user.id !== user_id));
      alert("User deleted successfully!");
    } catch (err) {
      console.error("Delete Error:", err); // Debugging line
      alert("Error deleting user");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-semibold mb-4">
          Welcome Admin {username || "Admin"}!
        </h1>
        <Logout />
      </div>

      {/* Loading State */}
      {loading && <p className="text-blue-500">Loading users...</p>}

      {/* Error State */}
      {error && <p className="text-red-500">{error}</p>}

      {/* User Table */}
      <div className="overflow-x-auto  h-[800px] border rounded-lg shadow-md">
      {!loading && !error && (
        <table className="table-auto w-full border-collapse border border-gray-300 mt-4 ">
          <thead>
            <tr className="bg-gray-100 sticky top-0 z-10">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {user.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        
      )}
      </div>
    </div>
  );
}
