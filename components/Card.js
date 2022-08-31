import React from "react";
import { showFormattedDate } from "../utils";

const Card = ({ title, body, createdAt, archived }) => {
  // return archived(false);
  return !archived ? (
    <div className="column is-3">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{title}</p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>
        <div className="card-content">
          <time dateTime="2016-1-1" className="is-size-7">
            {showFormattedDate(createdAt)}
          </time>
          <br />
          <div className="content">{body}</div>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item button is-danger">
            Delete
          </a>
          <a href="#" className="card-footer-item button is-warning">
            Archive
          </a>
        </footer>
      </div>
    </div>
  ) : (
    <h1>Test</h1>
  );
};

export default Card;
