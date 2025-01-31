import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Import Cookies

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token"); // Remove token from cookies
    localStorage.removeItem("username"); // Remove username from localStorage
    console.log("User logged out, cookies cleared"); // Debugging log
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-black px-4 py-2 rounded-md hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
}
