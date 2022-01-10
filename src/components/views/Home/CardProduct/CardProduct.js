import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
  return (
    <div>
      <Card className="my-4">
        <Card.Img className="img-fluid" variant="top" src={product.urlImg} />
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <Card.Title className="m-0 text-truncate">
              {product.productName}
            </Card.Title>
            <span className="badge bg-yellow">New</span>
          </div>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id,
            voluptate necessitatibus ex eius sunt!
          </Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 ms-4 fs-4 ">${product.price}</p>
            <Link
              to="/product/buy"
              className="btn-gray text-decoration-none text-center"
            >
              Buy
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduct;
