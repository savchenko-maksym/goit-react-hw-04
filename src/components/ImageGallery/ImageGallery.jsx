import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.imgList}>
      {images.map((img) => (
        <li
          className={s.imgItem}
          key={img.id}
          onClick={() => onImageClick(img)}
        >
          <ImageCard img={img} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
