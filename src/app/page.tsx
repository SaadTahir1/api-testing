"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/dashboard'); // Redirect if already logged in
    }
  }, []);
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
  
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  
    // ✅ Log response before parsing
    const text = await res.text();
    console.log("Raw API response:", text);
  
    if (!text) {
      alert("Server error: Empty response");
      return;
    }
  
    try {
      const data = JSON.parse(text);
      console.log("Parsed API Response:", data);
  
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
      alert("Server error: Invalid response format");
    }
  }
  
  
  
  
  
  
  

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-6 border rounded-lg shadow-lg bg-white" onSubmit={handleLogin}>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input className="border p-2 mb-3 w-full" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" className="border p-2 mb-3 w-full" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Login</button>
      </form>
    </div>
  );
}
