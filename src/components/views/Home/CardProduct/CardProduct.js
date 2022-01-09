import React from "react";
import { Card } from "react-bootstrap";

const CardProduct = () => {
  return (
    <div>
      <Card className="my-4">
        <Card.Img
          className="img-fluid"
          variant="top"
          src="https://media.istockphoto.com/photos/two-freshly-baked-french-croissants-with-butter-and-a-knife-picture-id1277579771?k=20&m=1277579771&s=612x612&w=0&h=n9_na7BUAUAH8UFtzVEmDz77rmRhvuK_mh63in6r660="
        />
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <Card.Title className="m-0 text-truncate">Card Title</Card.Title>
            <span className="badge bg-yellow">New</span>
          </div>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id,
            voluptate necessitatibus ex eius sunt!
          </Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 ms-4 fs-4 ">$200</p>
            <button className="btn-gray">Buy</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduct;
