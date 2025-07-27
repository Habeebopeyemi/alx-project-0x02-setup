import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type PostData } from "@/interfaces";

const about = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostData>({
    userId: 1,
    title: "",
    content: "",
  });

  const handleAddPost = (newPost: PostData) => {
    setPost({ ...newPost, id: Math.floor(Math.random() * 1000) + 1 });
  };
  return (
    <div>
      <h1>about</h1>
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

export default about;
