"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Avatar from "@/component/Voice/Avatar";
import Logout from "@/component/Logout/LogoutButton";

export default function Dashboard() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("name");

    console.log("Stored Username:", storedUsername); // Debugging log

    if (!token) {
      router.push("/login");
    } else {
      setUsername(storedUsername || "User"); // Set default to "User" if null
    }
  }, [router]);

  return (
    <>
      <div className="flex justify-between p-4 bg-black">
        <h2 className="text-xl font-semibold text-white">
          Welcome, <span className="text-color">{username || "User"}!</span>
        </h2>
        <Logout />
      </div>

      <Avatar />
    </>
  );
}
