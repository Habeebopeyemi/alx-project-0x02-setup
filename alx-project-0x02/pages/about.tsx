import React, { useState } from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import { type PostData } from "@/interfaces";

const about = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostData>({
    userId: 1,
    title: "",
    content: "",
  });
  return (
    <div>
      <Header />
      <Button size="small" shape="rounded-sm">
        Small Button
      </Button>
      <Button size="medium" shape="rounded-md">
        Medium Button
      </Button>
      <Button size="large" shape="rounded-full">
        Large Button
      </Button>
    </div>
  );
};

export default about;
