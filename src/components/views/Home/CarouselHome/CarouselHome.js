import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.jasonshonbennett.com/wp-content/uploads/2019/05/Untitled-design-2-4.jpg"
            alt="cafe"
          />
          <Carousel.Caption>
            <h3>The best café!</h3>
            <p>Enjoy an unforgettable taste.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lecaroz.com/wp-content/uploads/2021/06/croissant-choco-1920x800.jpg"
            alt="croissant"
          />
          <Carousel.Caption>
            <h3>The best croissants and more here!</h3>
            <p>Enjoy an unforgettable taste.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.vendingmadridvalyval.com/wp-content/uploads/2019/05/maquina-expendedora-bebidas-madrid-slndn1.jpg"
            alt="mixed roasts"
          />
          <Carousel.Caption>
            <h3>The best mixed roasts and more!</h3>
            <p>Enjoy an unforgettable taste.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
