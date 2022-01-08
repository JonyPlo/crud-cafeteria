import React from "react";
import { Container, Table } from "react-bootstrap";
import Product from "./Product/Product";

const ProductTable = () => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Products Table</h1>
          <button className="btn-yellow">Add Product</button>
        </div>
        <hr />
        {/* Table of products */}
        <Table bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th>N.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image url</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </tbody>
        </Table>
        {/* No products found message */}
        {/* <div className="no-products-found d-flex align-items-center justify-content-center">
          <h1>🥐 No products found ☕</h1>
        </div> */}
      </Container>
    </div>
  );
};

export default ProductTable;
