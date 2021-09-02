import React from "react";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";
import { PostCardContainer } from "./PostCards.styles";

const PostCards = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <PostCardContainer>
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </PostCardContainer>
    </>
  );
};

export default PostCards;
