import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validateCategory,
  validatePrice,
  validateProductName,
  validateUrl,
} from "../../helpers/ValidateFields";

const ProductCreate = ({ URL, getApi }) => {
  //States
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [urlImg, seturlImg] = useState("");
  const [category, setCategory] = useState("");
  //useNavigate
  const navigate = useNavigate();

  //Funcion para crear el producto
  const handleSubmit = (e) => {
    e.preventDefault();

    //Valido los campos
    if (
      !validateProductName(productName) ||
      !validatePrice(price) ||
      !validateUrl(urlImg) ||
      !validateCategory(category)
    ) {
      Swal.fire("Ops!", "Some data is invalid.", "error");
      return;
    }

    //Envio los datos para guardarlos
    const newProduct = {
      productName,
      price,
      urlImg,
      category,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
          });
          if (res.status === 201) {
            Swal.fire("Created!", "Your file has been created.", "success");
            getApi();
            navigate("/product/table");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div>
      <Container className="py-5">
        <h1>Add Product</h1>
        <hr />
        {/* Form Product */}
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Café"
              onChange={({ target }) => setProductName(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price*</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 50"
              onChange={({ target }) => setPrice(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://media.istockphoto.com/photos/two-freshly-baked-french-id1277579771?k=20"
              onChange={({ target }) => seturlImg(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Category*</Form.Label>
            <Form.Select onChange={({ target }) => setCategory(target.value)}>
              <option value="">Select an option</option>
              <option value="bebida-caliente">Bebida Caliente</option>
              <option value="bebida-fria">Bebida Fria</option>
              <option value="sandwitch">Sandwich</option>
              <option value="dulce">Dulce</option>
              <option value="salado">Salado</option>
            </Form.Select>
          </Form.Group>
          <div className="text-end">
            <button className="btn-yellow">Save</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ProductCreate;
