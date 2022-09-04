import React, { useState } from "react";
import { showFormattedDate } from "../utils";

// "datas" is state from App.js
const Card = ({
  id,
  title,
  body,
  createdAt,
  archived,
  myDatas,
  myRemoveData,
}) => {
  // state for toggle card
  const [show, setShow] = useState(true);
  const removeItem = (e) => {
    e.preventDefault();
    let updateList = myDatas.filter((item) => item.id !== id);
    let newValue = { list: updateList };
    myRemoveData((data) => ({
      ...data,
      ...newValue,
    }));
  };

  return (
    <div className="column is-3">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{title}</p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon" onClick={() => setShow(!show)}>
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>
        {show ? (
          <>
            <div className="card-content">
              <time dateTime="2016-1-1" className="is-size-7">
                {showFormattedDate(createdAt)}
              </time>
              <br />
              <div className="content">{body}</div>
            </div>

            <footer className="card-footer">
              <a
                href="#"
                className="card-footer-item button is-danger"
                onClick={(e) => removeItem(e)}
              >
                Delete
              </a>
              <a href="#" className="card-footer-item button is-warning">
                Archive
              </a>
            </footer>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
