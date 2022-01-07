import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "./CardProduct/CardProduct";
import CarouselHome from "./CarouselHome/CarouselHome";

const Home = () => {
  return (
    <div>
      {/* Carousel */}
      <CarouselHome />
      {/* Products */}
      <Container className="py-5">
        <h1>Products</h1>
        <hr />
        <Row>
          <Col xl={3} lg={4} md={6}>
            <CardProduct />
          </Col>
          <Col xl={3} lg={4} md={6}>
            <CardProduct />
          </Col>
          <Col xl={3} lg={4} md={6}>
            <CardProduct />
          </Col>
          <Col xl={3} lg={4} md={6}>
            <CardProduct />
          </Col>
          <Col xl={3} lg={4} md={6}>
            <CardProduct />
          </Col>
          <Col xl={3} lg={4} md={6}>
            <CardProduct />
          </Col>
          <Col xl={3} lg={4} md={6}>
            <CardProduct />
          </Col>
          <Col xl={3} lg={4} md={6}>
            <CardProduct />
          </Col>
        </Row>
        {/* No products found message */}
        {/* <div className="no-products-found d-flex align-items-center justify-content-center">
          <h1>🥐 No products found ☕</h1>
        </div> */}
      </Container>
    </div>
  );
};

export default Home;
