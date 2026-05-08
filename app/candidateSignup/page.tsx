"use client"
import { useState } from "react";
import Link from "next/link";

export default function CandidateSignupPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
    alert("Registration successful");
  };

  return (
    <div className="flex items-center justify-center bg-slate-900 border-gray-700 gap-8 text-gray-700">
      <div className="bg-white rounded-2xl w-full max-w-md p-8 m-10">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h2 className="font-semibold text-gray-700">Register here</h2>

          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
              type="text"
              id="fullName"
              name="fullName"
              value={form.fullName}
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
              type="email"
              id="email"
              name="email"
              value={form.email}
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
              type="password"
              id="password"
              name="password"
              value={form.password}
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <button className="w-full px-20 py-3 bg-slate-900 rounded-2xl text-white" type="submit">
              Sign Up
            </button>
          </div>

          <p className="py-10 text-center text-sm text-slate-500">
            Already have an account? <Link href="/candidateLogin" className="font-semibold text-slate-900 hover:text-cyan-600">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
