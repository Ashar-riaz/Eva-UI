"use client";
import { useEffect, useState } from "react";
import Logout from "@/component/Logout/LogoutButton";

export default function AdminDashboard() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  return (
    <>
      <h1>Welcome Admin {username || "Admin"}!</h1>
      <Logout />
    </>
  );
}
