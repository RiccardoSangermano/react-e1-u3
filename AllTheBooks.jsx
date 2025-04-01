import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import horror from"./horror.json"

function AllTheBooks() {
    return (
      <Row xs={1} md={3} className="g-4">
        {horror.map((item) => (
          <Col key={item.asin}>
            <Card>
              <Card.Img variant="top" src={item.img} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price: ${item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
  
  export default AllTheBooks