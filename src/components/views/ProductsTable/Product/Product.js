import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <tr>
      <td>1</td>
      <td>Medialuna</td>
      <td>$25</td>
      <td>
        <p className="truncate-img-link m-0">
          https://media.istockphoto.com/photos/fresh-croissants-on-wooden-board-and-orange-jam-in-bowl-picture-id1199388833?k=20&m=1199388833&s=612x612&w=0&h=RzQ3L1uDy9Id4Xx5-GxMeGvm5V00J02F_nnksyZ0f-s=
        </p>
      </td>
      <td>Bebida Fria</td>
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
