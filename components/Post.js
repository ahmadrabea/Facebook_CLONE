import React, { useState } from "react";
import Image from "next/image";
import { ThumbUpIcon, ChatAltIcon, ShareIcon } from "@heroicons/react/outline";
import Modal from "./Modal";

function Post({ name, message, timestamp, image, postImage }) {
  const [showImage, setShowImage] = useState(false);
  const showImageModal = () => {
    setShowImage(true);
  };
  const hideImageModal = () => {
    setShowImage(false);
  };
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            src={image}
            className="rounded-full"
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white cursor-pointer">
          <Image
            src={postImage}
            objectFit="cover"
            layout="fill"
            alt=""
            onClick={showImageModal}
          />
        </div>
      )}
      {/* footer of post  */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">like</p>
        </div>
        <div className="inputIcon rounded-none ">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
      {showImage && <Modal src={postImage} onClick={hideImageModal} />}
    </div>
  );
}

export default Post;
