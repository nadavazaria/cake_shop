import React from 'react'
import cakes from '../cakes'
import { Row, Col} from 'react-bootstrap';
import Cake from "../components/Cake";


const HomeScreen = () => {
  return (
    <div>
        <h1> latest cakes</h1>
        <Row>
            {cakes.map(cake => (

                <Col key={cake._id} sm={12} md ={6} lg={4} xl={3}>
                <Cake cake = {cake}/>
                </Col>

            ))}
        </Row>
    </div>
  )
}

export default HomeScreen