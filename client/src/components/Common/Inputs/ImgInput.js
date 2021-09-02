import axios from "axios";
import React, { useState } from "react";
import { ImageInput } from "./ImgInput.styles";

const ImgInput = ({ priviesImage, handelBlur }) => {
  const [image, setImage] = useState("");
  const uploadImage = (img) => {
    handelBlur({ image: "" });
    let body = new FormData();
    body.set("key", "df4598080cf75bed94d127b4e328aa24");
    body.append("image", img);

    return axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload",
      data: body,
    });
  };

  const upload = (e) => {
    uploadImage(e.target.files[0]).then((resp) => {
      setImage(resp.data.data.image.url);
      handelBlur({ image: resp.data.data.image.url });
    });
    e.preventDefault();
  };
  return (
    <>
      <ImageInput class="">
        <i class="fa fa-upload" aria-hidden="true"></i> &nbsp;
        <span>Upload Post Image</span>
        <input type="file" class="upload" onChange={upload} />
      </ImageInput>
      {(priviesImage || image) && (
        <img
          src={image || priviesImage}
          height={200}
          width={200}
          style={{ objectFit: "cover", marginBottom: "25px", display: "block" }}
        />
      )}
    </>
  );
};

export default ImgInput;
