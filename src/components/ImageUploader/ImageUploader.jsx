import React from "react";
import { Camera } from "../../icons";
import "./imageUploader.css";

export default function ImageUploader({ image, setImage }) {
  const handleImageChange = (e) => {
    const lastImage = e.target.files[e.target.files.length - 1];
    URL.createObjectURL(lastImage);

    setImage(URL.createObjectURL(lastImage));
  };

  return (
    <>
      <label htmlFor="courseImage" className="img-uploader">
        {!image && (
          <>
            <Camera />
            <p className="img-uploader-text">Selecione uma imagem</p>
          </>
        )}
        {image && (
          <img
            src={image}
            alt="imagem do curso"
            className="course-image-uploader"
            width="170"
            height="100"
          />
        )}
      </label>
      <input
        type="file"
        id="courseImage"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </>
  );
}
