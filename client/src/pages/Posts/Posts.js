import { React, useState } from "react";
import "react-notifications/lib/notifications.css";
import Navbar from "../../components/Navbar/Navbar";
import PostCards from "../../components/PostCards/PostCards";
import { Container } from "../../styles/common";

const Posts = () => {
  const [currentId, setCurrentId] = useState(0);
  return (
    <div>
      <Navbar />
      <Container>
        <PostCards />
      </Container>
    </div>
  );
};

export default Posts;
