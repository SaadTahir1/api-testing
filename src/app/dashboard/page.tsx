"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState<string | null>(null); // Explicitly define the type
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/'); // Redirect to login if not authenticated
    } else {
      setUser('Admin');
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem('token');
    router.push('/'); // Redirect to login page
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {user ? <p>Welcome, {user}!</p> : <p>Loading...</p>}
      <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
