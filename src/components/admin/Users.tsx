import { User } from "@/interfaces";
import React from "react";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

interface Props {
  users: User[];
  isLoading: boolean;
}

export function Users({ users, isLoading }: Props) {
  const handleDelete = async (id: string) => {
    try {
      const userDocRef = doc(db, "users", id);
      await deleteDoc(userDocRef);
      alert("User deleted");
    } catch (error: any) {
      alert("Error deleting user: " + error.message);
    }
  };

  const handleUpdate = (id: string) => {
    console.log(id);
  };
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={2} className="px-4 py-2">
                Loading...
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-white hover:opacity-50 transition-all text-black font-bold py-2 px-4 mr-2 "
                    onClick={() => handleUpdate(user.id)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:opacity-50 transition-all text-white font-bold py-2 px-4"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
