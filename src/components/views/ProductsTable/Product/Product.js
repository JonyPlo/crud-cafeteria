import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.productName}</td>
      <td>${product.price}</td>
      <td>
        <p className="truncate-img-link m-0">{product.urlImg}</p>
      </td>
      <td>{product.category}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link
            to="/product/edit"
            className="btn-orange mx-1 text-decoration-none text-center"
          >
            Update
          </Link>
          <button className="btn-red mx-1">Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default Product;
