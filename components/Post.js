import React, { useState, useEffect } from "react";

import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconFilled,
} from "@heroicons/react/24/solid";

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";
import Moment from "react-moment";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db, id]);

  useEffect(() => {
    onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
      setLikes(snapshot.docs)
    ),
      [db, id];
  });

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  return (
    <div className=" bg-white my-5 border rounded-sm">
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
            {hasLiked ? (
              <HeartIconFilled onClick={likePost} className="btn text-red-500"/>

            ):(
              <HeartIcon onClick={likePost} className="btn" />
            )}
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
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                className="h-7 rounded-full"
                src={comment.data().userImage}
              />
              <p className=" text-sm flex-1">
                <span className=" font-bold">{comment.data().username}</span>{" "}
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* Input box*/}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7" />
          <input
            type="Text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className=" border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className=" font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
