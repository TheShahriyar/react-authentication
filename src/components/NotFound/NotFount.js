import React from "react";
import { Link } from "react-router-dom";

const NotFount = () => {
  return (
    <div>
      <h2>404</h2>
      <h4>Page not found!!</h4>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default NotFount;
