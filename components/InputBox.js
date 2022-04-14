// you stoped at 2:50:00

import React from "react";
import Images from "next/image";
import { useSession } from "next-auth/react";
import {
  VideoCameraIcon,
  EmojiHappyIcon,
  CameraIcon,
} from "@heroicons/react/solid";
import { useRef } from "react";
import { db, storage } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
import { useState } from "react";

const InputBox = ({ newPostHandler, newPost }) => {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const imagePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (event) => {
    event.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        userName: session.user.name,
        userEmail: session.user.email,
        userPhoto: session.user.image,
        time: serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();
          uploadTask.on(
            "state_change",
            null,
            (error) => console.log(error),
            () => {
              //when the upload complete
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
    inputRef.current.value = "";
    newPostHandler(!newPost);
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className=" flex items-center space-x-4 p-4">
        <Images
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1" onSubmit={sendPost}>
          <input
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button hidden type="submit">
            submit
          </button>
        </form>

        {imageToPost && (
          <div onClick={removeImage} className="flex flex-col cursor-pointer">
            <img src={imageToPost} alt="" className="h-10 object-contain" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-xl">Live Video</p>
        </div>

        <div
          onClick={() => {
            imagePickerRef.current.click();
          }}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-xl">Photo/Video</p>
          <input
            ref={imagePickerRef}
            type="file"
            hidden
            onChange={addImageToPost}
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-xl">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
