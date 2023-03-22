import React from 'react'
import { Card } from "react-bootstrap";
import Rating from './Rating'
import { Link } from 'react-router-dom'


const Cake = ({cake}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/cake/${cake._id}`}>
        <Card.Img src={cake.image} />
        </Link>

        <Card.Body>
            <Link to={`/cake/${cake._id}`}>
            <Card.Title as='div'>
                <strong>{cake.name}</strong>
            </Card.Title>
            </Link>
            <Card.Text as='div'>
                <div className='my-2'>
                <Rating value ={cake.rating} text={`${cake.numReviews} reviews`} color= {`#f8e825 in obj`}/>
                </div>
            </Card.Text>

            <Card.Text as='h3'>
                ₪{cake.price}
            </Card.Text>

        </Card.Body>
        
    </Card>
  )
}

export default Cake