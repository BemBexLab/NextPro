"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Filter,
  Mail,
  Phone,
  Search,
  ShieldCheck,
  Trash2,
  Users,
} from "lucide-react";

function formatDateParts(value) {
  if (!value) {
    return { date: "N/A", time: "" };
  }

  const date = new Date(value);

  return {
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString(),
  };
}

function formatDateOnly(value) {
  if (!value) return "No submissions yet";

  return new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function splitServices(value) {
  if (!value) return [];

  return value
    .split(",")
    .map((service) => service.trim())
    .filter(Boolean);
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [searchField, setSearchField] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
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

  const fetchData = () => {
    setLoading(true);

    fetch("/api/get-form-data")
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          setApiError(json.error);
          setSubmissions([]);
          return;
        }

        setApiError("");
        setSubmissions(json.data || []);
      })
      .catch((error) => {
        setApiError(error.message);
        setSubmissions([]);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    fetchData();
  }, [isAuthenticated]);

  const filteredSubmissions = submissions.filter((submission) => {
    const fieldValue =
      searchField === "email"
        ? submission.email
        : searchField === "contactNumber"
          ? submission.contactNumber
          : submission.name;

    const matchesSearch = searchTerm
      ? (fieldValue || "").toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    if (!matchesSearch) return false;

    if (!fromDate && !toDate) return true;
    if (!submission.createdAt) return false;

    const submissionDate = new Date(submission.createdAt);
    const submissionDay = new Date(
      submissionDate.getFullYear(),
      submissionDate.getMonth(),
      submissionDate.getDate()
    );

    const startDate = fromDate ? new Date(`${fromDate}T00:00:00`) : null;
    const endDate = toDate ? new Date(`${toDate}T00:00:00`) : null;

    if (startDate && submissionDay < startDate) return false;
    if (endDate && submissionDay > endDate) return false;

    return true;
  });

  const latestSubmission = submissions[0]?.createdAt || "";
  const visibleSelectedCount = filteredSubmissions.filter((submission) =>
    selected.includes(submission.id)
  ).length;
  const allFilteredSelected =
    filteredSubmissions.length > 0 &&
    filteredSubmissions.every((submission) => selected.includes(submission.id));

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
      return;
    }

    const data = await res.json();
    setErrorMsg(data.message || "Login failed");
  };

  const handleCheckbox = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const filteredIds = filteredSubmissions.map((submission) => submission.id);
      setSelected((prev) => [...new Set([...prev, ...filteredIds])]);
      return;
    }

    const filteredIds = new Set(filteredSubmissions.map((submission) => submission.id));
    setSelected((prev) => prev.filter((id) => !filteredIds.has(id)));
  };

  const handleDeleteSelected = async () => {
    if (!selected.length) return;
    if (!window.confirm("Delete selected submissions?")) return;

    const res = await fetch("/api/delete-submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: selected }),
    });

    if (res.ok) {
      fetchData();
      setSelected([]);
      return;
    }

    alert("Error deleting selected rows");
  };

  const handleDeleteAll = async () => {
    if (!window.confirm("Delete ALL submissions? This cannot be undone.")) return;

    const res = await fetch("/api/delete-all-submissions", {
      method: "POST",
    });

    if (res.ok) {
      fetchData();
      setSelected([]);
      return;
    }

    alert("Error deleting all data");
  };

  if (!hasMounted) return null;

  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#f5f7fb] px-4 py-10 text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(191,11,48,0.14),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(0,39,104,0.12),_transparent_36%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
          <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/60 bg-white/85 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
            <div className="hidden bg-[#002768] p-10 text-white md:flex md:flex-col md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
                  <ShieldCheck className="h-4 w-4" />
                  Secure Access
                </div>
                <h1 className="mt-8 max-w-sm text-4xl font-semibold leading-tight">
                  Welcome back to your lead management dashboard.
                </h1>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
                  Review inquiries, search leads quickly, and manage submissions from one clean workspace.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm text-white/70">Designed for faster triage</p>
                  <p className="mt-2 text-lg font-semibold">Search, filter, review, and clean up records in seconds.</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <div className="mx-auto max-w-md">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#bf0b30]/10 px-4 py-2 text-sm font-medium text-[#bf0b30]">
                  <ShieldCheck className="h-4 w-4" />
                  Admin Login
                </div>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900">
                  Sign in to continue
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Use your admin credentials to access the submission dashboard.
                </p>

                <form onSubmit={handleLogin} className="mt-8 space-y-5">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Enter username"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#002768] focus:bg-white"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#002768] focus:bg-white"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {errorMsg && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-[#002768] px-4 py-3 font-medium text-white shadow-lg shadow-[#002768]/20 transition hover:bg-[#001d4f]"
                  >
                    Enter Dashboard
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7fb] px-4 pb-10 pt-28 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-white/70 bg-[radial-gradient(circle_at_top_left,_rgba(191,11,48,0.12),_transparent_28%),linear-gradient(135deg,_#ffffff,_#f8fbff)] p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#002768]/10 bg-[#002768]/5 px-4 py-2 text-sm font-medium text-[#002768]">
                <ShieldCheck className="h-4 w-4" />
                Admin Dashboard
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Submission management, cleaned up.
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Review every lead in one modern workspace with quick filters, cleaner actions, and better scanning.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDeleteSelected}
                disabled={selected.length === 0}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#bf0b30] px-4 py-3 text-sm font-medium text-white shadow-lg shadow-[#bf0b30]/20 transition hover:bg-[#9b0a28] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
              >
                <Trash2 className="h-4 w-4" />
                Delete Selected
              </button>
              <button
                onClick={handleDeleteAll}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-red-200 hover:text-[#bf0b30]"
              >
                <Trash2 className="h-4 w-4" />
                Delete All
              </button>
            </div>
          </div>

          {apiError && (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {apiError}
            </div>
          )}

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Total submissions</p>
                <Users className="h-5 w-5 text-[#002768]" />
              </div>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{submissions.length}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Visible results</p>
                <Filter className="h-5 w-5 text-[#bf0b30]" />
              </div>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{filteredSubmissions.length}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Selected rows</p>
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
              </div>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{selected.length}</p>
              <p className="mt-2 text-xs text-slate-400">{visibleSelectedCount} in current view</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Latest submission</p>
                <CalendarDays className="h-5 w-5 text-amber-600" />
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-900">
                {formatDateOnly(latestSubmission)}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
              <div className="w-full lg:max-w-[220px]">
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Search by
                </label>
                <div className="relative">
                  <Filter className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <select
                    value={searchField}
                    onChange={(e) => setSearchField(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#002768] focus:bg-white"
                  >
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="contactNumber">Contact Number</option>
                  </select>
                </div>
              </div>

              <div className="w-full lg:flex-1">
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Search term
                </label>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder={`Search by ${searchField === "contactNumber" ? "contact number" : searchField}`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#002768] focus:bg-white"
                  />
                </div>
              </div>

              <div className="w-full lg:max-w-[190px]">
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  From date
                </label>
                <div className="relative">
                  <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#002768] focus:bg-white"
                  />
                </div>
              </div>

              <div className="w-full lg:max-w-[190px]">
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  To date
                </label>
                <div className="relative">
                  <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#002768] focus:bg-white"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSearchField("name");
                  setSearchTerm("");
                  setFromDate("");
                  setToDate("");
                }}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Clear Filters
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-slate-100 px-3 py-1.5">
                Showing {filteredSubmissions.length} of {submissions.length}
              </span>
              {selected.length > 0 && (
                <span className="rounded-full bg-[#bf0b30]/10 px-3 py-1.5 text-[#bf0b30]">
                  {selected.length} selected
                </span>
              )}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            {loading ? (
              <div className="flex min-h-[260px] items-center justify-center px-6 py-12 text-sm text-slate-500">
                Loading submissions...
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-[1240px] w-full table-fixed text-left">
                  <colgroup>
                    <col className="w-[56px]" />
                    <col className="w-[190px]" />
                    <col className="w-[210px]" />
                    <col className="w-[130px]" />
                    <col className="w-[140px]" />
                    <col className="w-[240px]" />
                    <col className="w-[220px]" />
                    <col className="w-[150px]" />
                  </colgroup>
                  <thead className="bg-slate-50 text-xs uppercase tracking-[0.16em] text-slate-500">
                    <tr>
                      <th className="px-5 py-4">
                        <input
                          type="checkbox"
                          checked={allFilteredSelected}
                          onChange={handleSelectAll}
                          className="h-4 w-4 rounded border-slate-300 text-[#002768] focus:ring-[#002768]"
                        />
                      </th>
                      <th className="px-5 py-4">Name</th>
                      <th className="px-5 py-4">Email</th>
                      <th className="px-5 py-4">Website</th>
                      <th className="px-5 py-4">Contact</th>
                      <th className="px-5 py-4">Service</th>
                      <th className="px-5 py-4">Message</th>
                      <th className="px-5 py-4">Submitted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                    {filteredSubmissions.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="px-6 py-16 text-center">
                          <div className="mx-auto max-w-md">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                              <Search className="h-6 w-6 text-slate-400" />
                            </div>
                            <p className="mt-4 text-base font-medium text-slate-700">
                              No submissions match the current filters.
                            </p>
                            <p className="mt-2 text-sm text-slate-500">
                              Try adjusting the search field or clearing the date range.
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredSubmissions.map((submission, idx) => {
                        const submittedAt = formatDateParts(submission.createdAt);
                        const services = splitServices(submission.service);

                        return (
                          <tr
                            key={submission.id || idx}
                            className="transition hover:bg-slate-50/80"
                          >
                            <td className="px-5 py-4 align-top">
                              <input
                                type="checkbox"
                                checked={selected.includes(submission.id)}
                                onChange={() => handleCheckbox(submission.id)}
                                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#002768] focus:ring-[#002768]"
                              />
                            </td>
                            <td className="px-5 py-4 align-top">
                              <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#002768]/8 text-sm font-semibold text-[#002768]">
                                  {(submission.name || "?").slice(0, 1).toUpperCase()}
                                </div>
                                <div>
                                  <p className="font-medium text-slate-900">{submission.name}</p>
                                  <p className="mt-1 text-xs text-slate-400">Lead record</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-4 align-top">
                              <div className="inline-flex items-center gap-2 text-slate-700">
                                <Mail className="h-4 w-4 text-slate-400" />
                                <span className="break-all">{submission.email}</span>
                              </div>
                            </td>
                            <td className="px-5 py-4 align-top">
                              {submission.website ? (
                                <a
                                  href={submission.website}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="break-all text-[#002768] underline-offset-4 transition hover:underline"
                                >
                                  {submission.website}
                                </a>
                              ) : (
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                                  N/A
                                </span>
                              )}
                            </td>
                            <td className="px-5 py-4 align-top">
                              {submission.contactNumber ? (
                                <div className="inline-flex items-center gap-2 whitespace-nowrap text-slate-700">
                                  <Phone className="h-4 w-4 text-slate-400" />
                                  <span>{submission.contactNumber}</span>
                                </div>
                              ) : (
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                                  N/A
                                </span>
                              )}
                            </td>
                            <td className="px-5 py-4 align-top">
                              <div className="flex flex-wrap gap-2">
                                {services.map((service, serviceIndex) => (
                                  <span
                                    key={`${submission.id}-${serviceIndex}-${service}`}
                                    className="rounded-full bg-[#bf0b30]/10 px-3 py-1 text-xs font-medium leading-5 text-[#bf0b30]"
                                  >
                                    {service}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="px-5 py-4 align-top text-slate-600">
                              <p className="break-words leading-6">{submission.message}</p>
                            </td>
                            <td className="px-5 py-4 align-top text-slate-500">
                              <div className="space-y-1">
                                <p className="font-medium text-slate-700">
                                  {submittedAt.date}
                                </p>
                                <p className="text-xs text-slate-400">
                                  {submittedAt.time}
                                </p>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
