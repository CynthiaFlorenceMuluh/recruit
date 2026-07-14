"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CandidateSignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role:"",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/candidateSignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
          role:"candidate",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Signup failed");
        setLoading(false);
        return;
      }

      alert("Registration successful! Redirecting to login...");
      router.push("/Login/candidateLogin");
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-slate-900 border-gray-700 gap-8 text-gray-700 min-h-screen">
      <div className="bg-white rounded-2xl w-full max-w-md p-8 m-10">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h2 className="font-semibold text-gray-700 text-2xl">Sign Up</h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              className="h-10 w-full border-2 border-slate-900 rounded-2xl p-2"
              type="text"
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              className="h-10 w-full border-2 border-slate-900 rounded-2xl p-2"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="">
            <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
              Role
            </label>
            <input
              className="h-10 w-full border-2 border-slate-900 rounded-2xl p-2"
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            />
             
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              className="h-10 w-full border-2 border-slate-900 rounded-2xl p-2"
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              className="h-10 w-full border-2 border-slate-900 rounded-2xl p-2"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-slate-900 rounded-2xl text-white font-medium hover:bg-slate-800 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/Login/candidateLogin" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}