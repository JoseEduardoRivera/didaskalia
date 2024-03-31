"use client";
import app, { storage } from "@/firebase/config";
import { ImageToUpload } from "@/interfaces/image-to-upload-interface";
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useState } from "react";

export default function AdminCoursesPage() {
  const [data, setData] = useState<File>({});

  const handleSubmit = () => {
    if (!data) return;

    const imageRef = ref(storage, `images/${data.name}`); //Property 'name' does not exist on type '{}'.
    const uploadTask = uploadBytesResumable(imageRef, data); //Argument of type '{}' is not assignable to parameter of type 'Blob | Uint8Array | ArrayBuffer'
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        console.log("Upload is done");
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          console.log("File available here: " + downloadUrl);
        });
      }
    );
  };
  return (
    <div className="mt-28">
      <h1>Upload File</h1>
      <div>
        <input
          type="file"
          onChange={(event) => {
            const files = event.target.files;
            if (files && files.length > 0) {
              setData(files[0]);
            }
          }}
          // 'event.target.files' is possibly 'null'.
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
