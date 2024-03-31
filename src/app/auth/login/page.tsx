"use client";
import React, { useState } from "react";
import Link from "next/link";
import app, { db } from "../../../firebase/config";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { collection, getDocs, where, query, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
        router.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogleLogin = async () => {
    const queryEmail = query(
      collection(db, "users"),
      where("email", "==", email)
    );
    const isEmailExist = await getDocs(queryEmail);

    if (isEmailExist.empty) {
      signInWithPopup(auth, provider)
        .then((response) => {
          console.log(response.user);
          const user = response.user;
          const userData = {
            uid: user.uid,
            email: user.email,
            providerAuth: user.providerId,

            // Puedes agregar más datos del usuario aquí si lo necesitas
          };
          addDoc(collection(db, "users"), userData)
            .then((docRef) => {
              console.log("User added with ID: ", docRef.id);
            })
            .catch((error) => {
              console.error("Error adding user: ", error);
            });
          router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      signInWithPopup(auth, provider)
        .then((response) => {
          console.log(response.user);
          router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
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
            className="border border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md"
        >
          Sign In
        </button>
      </form>
      <p className="mt-4 text-center">or</p>
      <button
        onClick={handleGoogleLogin}
        className="bg-red-500 hover:opacity-50 transition-all text-white py-2 px-4 rounded-md mt-2 block w-full text-center"
      >
        Sign In with Google
      </button>
      <div className="mt-5 text-center">
        <p className="text-black">You dont have an account?</p>
        <Link href="/auth/new-account" className="text-indigo-500">
          Register here
        </Link>
      </div>
    </div>
  );
}
