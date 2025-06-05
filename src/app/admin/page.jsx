"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchContacts = async () => {
      const { data, error } = await supabase
        .from("contacts")
        .select(
          "first_name, last_name, email, phone, service, subject, message, submitted_at"
        );

      if (error) {
        console.error("Error fetching contacts:", error);
      } else {
        console.log("Fetched contacts:", data); // Debug output
        setContacts(data || []);
      }
      setLoading(false);
    };

    fetchContacts();
  }, [isAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      setIsAuthenticated(true);
      setErrorMsg("");
    } else {
      const data = await res.json();
      setErrorMsg(data.message || "Login failed");
    }
  };

  if (!hasMounted) return null;

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0A0A11] text-white p-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm space-y-4 p-6 bg-[#1a1a1a] rounded-xl shadow-xl"
        >
          <h2 className="text-2xl font-bold text-center">Admin Login</h2>
          {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 rounded bg-[#2a2a2a] text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-[#2a2a2a] text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-2 rounded text-white"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 text-white bg-[#0A0A11] min-h-screen mt-[100px]">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Admin Dashboard</h1>
      {loading ? (
        <p>Loading contacts...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full text-left border border-white text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#1a1a1a]">
                <th className="p-2 border border-white">First Name</th>
                <th className="p-2 border border-white">Last Name</th>
                <th className="p-2 border border-white">Email</th>
                <th className="p-2 border border-white">Phone</th>
                <th className="p-2 border border-white">Service</th>
                <th className="p-2 border border-white">Subject</th>
                <th className="p-2 border border-white">Message</th>
                <th className="p-2 border border-white">Time</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, idx) => (
                <tr key={idx} className="hover:bg-[#2a2a2a] transition">
                  <td className="p-2 border border-white">
                    {contact.first_name}
                  </td>
                  <td className="p-2 border border-white">
                    {contact.last_name}
                  </td>
                  <td className="p-2 border border-white">{contact.email}</td>
                  <td className="p-2 border border-white">{contact.phone}</td>
                  <td className="p-2 border border-white">{contact.service}</td>
                  <td className="p-2 border border-white">{contact.subject}</td>
                  <td className="p-2 border border-white">{contact.message}</td>
                  <td className="p-2 border border-white">
                    {contact.submitted_at
                      ? new Date(contact.submitted_at).toLocaleString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
