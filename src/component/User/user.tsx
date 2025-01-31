'use client'; // Enable client-side interactivity

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';  // Add this import at the top
import user_image from "@/assets/user_setting.jpg"
export default function UserProfile() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: '',
    
  });

  useEffect(() => {
    // Fetch user data from the backend API
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/user_logins', {
          method: 'GET',
          credentials: 'include', // Include cookies if authentication is required
        });

        if (response.ok) {
          const data = await response.json();
          // Set the user's name while keeping the default image
          setUser(prevUser => ({
            ...prevUser,
            name: data.name,
          }));
        } else {
          console.error('Failed to fetch user data');
          router.push('/login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        router.push('/login');
      }
    };

    fetchUserData();
  }, [router]);

  const handleLogout = () => {
    // Perform logout logic here
    localStorage.clear(); // Example: Clear local storage
    sessionStorage.clear(); // Clear session storage
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'; // Clear cookies

    // Redirect to login page
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-end p-4 bg-gray-100">
      <div className="flex items-center space-x-4 bg-white p-3 rounded-lg shadow-md">
        {/* User Image */}
        <Image
          src={user_image}
          alt="User profile"
          width={48}  // w-12 = 48px
          height={48} // h-12 = 48px
          className="rounded-full object-cover"
        />

        {/* User Name and Logout Button */}
        <div className="flex flex-col text-right">
          <span className="text-sm font-medium text-gray-700">
            {user.name || 'Guest'}
          </span>
          <button
            onClick={handleLogout}
            className="text-xs text-red-500 hover:underline"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
