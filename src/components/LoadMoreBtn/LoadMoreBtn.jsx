import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage, page }) => {
  return (
    <button
      className={s.loadMoreBtn}
      onClick={() => {
        setPage(page + 1);
      }}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
