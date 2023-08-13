import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function Tproducts() {
  const dispatch=useDispatch()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

const addTocart=(product)=>{
  // dispatch an add action 
  dispatch(add(product))
}

  const cards = products.map((product) => (
    <div className="col-md-3" key={product.id}>
      <Card style={{ width: "18rem",margin:"0.5rem" }}>
        <center>
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "150px", height: "180px" }}
            alt="prod_img"
          />
        </center>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            <h3>{product.price}</h3>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={()=>addTocart(product)}>Add to cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <center>
        <h1>Products list</h1>
        <div className="row">{cards}</div>
      </center>
    </div>
  );
}

export default Tproducts;
