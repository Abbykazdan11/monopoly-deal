import React from 'react';
import './App.css'
import './Property.css';
import {Card, ListGroup} from 'react-bootstrap';

// props: {
//   color: string;
//   title: string;
//   rentValues: number[]; 
// }
export function Property(props) {
    const backgroundStyle = `${props.color}-background`;

    const rentText = [];
    for (let i = 1; i <= props.rentValues.length; i++) {
        rentText.push(`${i} ... $${props.rentValues[i - 1]}M`);
    }

    return (
      <Card border="primary" style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title className={`${backgroundStyle} white-text`}>{props.title}</Card.Title>
          <Card.Text>
            My Big Bam
          </Card.Text>
          <ListGroup variant="flush">
            {rentText.map((text) => {
              return <ListGroup.Item>{text}</ListGroup.Item>
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    );
}