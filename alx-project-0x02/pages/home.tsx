import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type CardProps, type PostData } from "@/interfaces";

const home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostData>({
    userId: 1,
    title: "",
    content: "",
  });

  const handleAddPost = (newPost: PostData) => {
    setPost({ ...newPost, id: Math.floor(Math.random() * 1000) + 1 });
  };
  const cardData: CardProps = {
    title: "Welcome to Daily Contents",
    content: "Here you can find the latest posts and user information.",
  };
  return (
    <div>
      <h1>home</h1>
      <div>
        <Card title={post?.title} content={post?.content} />
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-700 px-4 py-2 rounded-full text-white">
          Add Post
        </button>
      </div>
      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export default home;
