import React from 'react'
import {Link  } from 'react-router-dom'
import { Row, Col, Image, ListGroup,Button, Card } from 'react-bootstrap'
import  Rating  from '../components/Rating'
import cakes from '../cakes'

const CakeScreen = ({match}) => {
    const cake = match? cakes.find((c) => c._id == match.params.id): null;
  return (
    <div>
         {cake ? cake.name : 'Cake not found'}
    </div>
  )
}

export default CakeScreen