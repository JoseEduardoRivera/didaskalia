"use client";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app, { db } from "../../../firebase/config";
import Link from "next/link";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function NewAccountPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const router = useRouter();

  const collectionRef = collection(db, "users");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
        addDoc(collectionRef, {
          uid: response.user.uid,
          email: response.user.email,
          providerAuth: response.user.providerId,
        })
          .then(() => {
            alert("Data saved successfully");
            router.replace("/auth/login");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border text-black border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border text-black border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-5 text-center">
        <p className="text-black">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
