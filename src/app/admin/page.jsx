"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState("");
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
    setLoading(true);
    fetch("/api/get-form-data")
      .then((res) => res.json())
      .then((json) => {
        console.log("Fetched submissions (frontend):", json); // Debug
        if (json.error) {
          setApiError(json.error);
          setSubmissions([]);
        } else {
          setApiError("");
          setSubmissions(json.data || []);
        }
      })
      .catch((error) => {
        console.error("Error fetching submissions:", error);
        setApiError(error.message);
        setSubmissions([]);
      })
      .finally(() => setLoading(false));
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
      <div className="flex items-center justify-center min-h-screen bg-white text-black p-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm space-y-4 p-6 bg-white rounded-xl shadow-xl"
        >
          <h2 className="text-2xl text-black font-bold text-center">Admin Login</h2>
          {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 rounded bg-white text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-white text-black"
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
    <div className="p-4 sm:p-8 text-black bg-white min-h-screen mt-[100px]">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Admin Dashboard</h1>
      {apiError && (
        <div className="mb-4 text-red-400 font-semibold">{apiError}</div>
      )}
      {loading ? (
        <p>Loading submissions...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full text-left border border-black text-xs sm:text-sm">
            <thead>
              <tr className="bg-white">
                <th className="p-2 border border-white">Name</th>
                <th className="p-2 border border-white">Email</th>
                <th className="p-2 border border-white">Website</th>
                <th className="p-2 border border-white">Service</th>
                <th className="p-2 border border-white">Message</th>
                <th className="p-2 border border-white">Time</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s, idx) => (
                <tr key={s.id || idx} className="hover:bg-gray-300 transition">
                  <td className="p-2 border border-white">{s.name}</td>
                  <td className="p-2 border border-white">{s.email}</td>
                  <td className="p-2 border border-white">{s.website}</td>
                  <td className="p-2 border border-white">{s.service}</td>
                  <td className="p-2 border border-white">{s.message}</td>
                  <td className="p-2 border border-white">
                    {s.createdAt
                      ? new Date(s.createdAt).toLocaleString()
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
