import React from "react";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();

  return (
    <div className=" bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className=" rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <EllipsisHorizontalIcon className=" h-5" />
      </div>

      {/* Image */}
      <img src={img} className="object-cover w-full" />

      {/* Buttons */}
      {session && (
        <div className="flex justify-between px-4 py-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatBubbleOvalLeftEllipsisIcon className="btn" />
            <PaperAirplaneIcon className="btn -rotate-45" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* Captions */}
      <p className="p-5 truncate">
        <span className=" font-bold mr-1">{username}</span>
        {caption}
      </p>
      {/* Comments */}
      
      {/* Input box*/}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7" />
          <input
            type="Text"
            placeholder="Add a comment..."
            className=" border-none flex-1 focus:ring-0 outline-none"
          />
          <button className=" font-semibold text-blue-400">Post</button>
        </form>
      )}
    </div>
  );
}

export default Post;
