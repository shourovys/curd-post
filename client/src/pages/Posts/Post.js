import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SinglePost from "../../components/SinglePost/SinglePost";
import { Container, PaddingContainer } from "../../styles/common";

const Post = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const thisIdPost = posts.find((post) => post._id === id);
  return (
    <Container>
      <PaddingContainer>
        {thisIdPost && <SinglePost post={thisIdPost} />}
      </PaddingContainer>
    </Container>
  );
};

export default Post;
