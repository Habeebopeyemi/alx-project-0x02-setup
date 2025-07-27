import React from "react";
import Card from "@/components/common/Card";
import { CardProps } from "@/interfaces";

const home = () => {
  const cardData: CardProps = {
    title: "Welcome to Daily Contents",
    content: "Here you can find the latest posts and user information.",
  };
  return (
    <div>
      <h1>home</h1>
      <Card title={cardData.title} content={cardData.content} />
    </div>
  );
};

export default home;
