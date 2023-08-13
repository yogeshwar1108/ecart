import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Correct import for useSelector
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from '../store/cartSlice';

function Cart() {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    // dispatch the remove action
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div className="col-md-4" key={product.id}>
      <Card style={{ width: "18rem", margin: "0.5rem" }}>
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
            <h3>${product.price}</h3>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>Remove</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className='row'>
      {cards}
    </div>
  );
}

export default Cart;
