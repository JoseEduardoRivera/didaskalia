"use client";
import { db } from "@/firebase/config";
import { getDocs, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Users } from "@/components/admin/Users";
import { User } from "@/interfaces";
import Link from "next/link";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers();
    setIsLoading(false);
  }, []);

  //   const getUsers = () => {
  //     getDocs(collection(db, "users"))
  //       .then((querySnapshot) => {
  //         const fetchedUsers: User[] = querySnapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           email: doc.data().email,
  //           providerAuth: doc.data().providerAuth,
  //         }));
  //         setUsers(fetchedUsers);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching users: ", error);
  //       });
  //   };

  const getUsers = () => {
    onSnapshot(collection(db, "users"), (querySnapshot) => {
      const fetchedUsers: User[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        email: doc.data().email,
        providerAuth: doc.data().providerAuth,
      }));
      setUsers(fetchedUsers);
    });
  };

  console.log(users);

  return (
    <div className="mt-28">
      <h1>Check Users information</h1>
      <p>Create a new user here </p>
      <Link className="bg-didaskalia-yellow p-2" href={"/auth/new-account"}>
        Create
      </Link>
      <Users users={users} isLoading={isLoading} />
    </div>
  );
}
