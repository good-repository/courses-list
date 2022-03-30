import React from "react";
import { Camera } from "../../icons";
import "./imageUploader.css";

export default function ImageUploader({ image, setImage, name }) {
  const handleImageChange = (e) => {
    const lastImage = e.target.files[e.target.files.length - 1];
    URL.createObjectURL(lastImage);

    setImage(URL.createObjectURL(lastImage));
  };

  return (
    <>
      <label htmlFor="imageUploader" className="img-uploader-wrapper">
        {!image && (
          <>
            <Camera />
            <p className="img-uploader-text">Selecione uma imagem</p>
          </>
        )}
        {image && (
          <img
            src={image}
            alt="imagem"
            className="img-uploader"
            width="170"
            height="100"
          />
        )}
      </label>
      <input
        type="file"
        id="imageUploader"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
        name={name}
      />
    </>
  );
}
