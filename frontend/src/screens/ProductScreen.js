import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link} from "react-router-dom";
import {Row,Col,Image,ListGroup,Button,Card,Form} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProductDetails } from "../actions/productActions";

const ProductScreen = ( ) => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  // , 
  // ?qty=${qty}
  const addToCartHandler = () =>
  navigate(`/cart/${id}?qty=${qty}`);


  // console.log('add to cart:', id)

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        go back{" "}
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3> {product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color={"#f8e825"}
                />
              </ListGroup.Item>

              <ListGroup.Item>price ₪{product.price}</ListGroup.Item>

              <ListGroup.Item>
                description:<br></br> {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col> price </Col>
                    <Col>
                      <strong>₪{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col> status </Col>
                    <Col>
                      {product.countInStock > 0 ? "in stock" : "out of stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col> Qty </Col>
                      <Col xs = 'auto' className="my-1">
                      <Form.Control
                        as = 'select' 
                        value = {qty}
                        onChange  = {(e) => setQty(e.target.value)}
                        >
                          {
                            [...Array(product.countInStock).keys()].map((x) =>(
                              <option  key={x + 1} value={x + 1}  style={{color:"#FF4081"}}>
                                  {x + 1}
                              </option>
                            ))
                          }
                      </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="btn-block"
                    disabled={product.countInStock == 0}
                    type="button"
                  >
                    add to cart!{" "}
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductScreen;
