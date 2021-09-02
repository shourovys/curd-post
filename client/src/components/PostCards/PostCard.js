import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Meta } = Card;

const PostCard = ({ post: { image, title, _id } }) => {
  return (
    <Link to={`/post/${_id}`}>
      <Card
        hoverable
        style={{
          width: 240,
          height: '100%',
          boxShadow: "0px 0px 10px lightgray",
          borderRadius: "5px",
        }}
        cover={
          <img
            alt="example"
            src={image}
            style={{ width: 240, height: 240, objectFit: "cover" }}
          />
        }
      >
        <h2>Title: {title}</h2>
      </Card>
    </Link>
  );
};

export default PostCard;
