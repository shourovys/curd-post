import React from "react";
import { SinglePostContainer } from "./SinglePost.styles";

const SinglePost = ({
  post: { categories, createdAt, disruption, image, title, userId },
}) => {
  return (
    <SinglePostContainer>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h1>Title: {title}</h1>
        <p>Catagories: {categories}</p>
        <p>Author ID: {userId}</p>
        <p>{disruption}</p>
      </div>
    </SinglePostContainer>
  );
};

export default SinglePost;
