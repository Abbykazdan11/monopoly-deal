import React from 'react';
import './App.css'
import './Money.css';
import {Card} from 'react-bootstrap';

function getNumber(num) {
  if (num === "one") {
    return "1M";
  } else if (num === "two") {
    return "2M"
  } else if (num === "three") {
    return "3M"
  } else if (num === "four") {
    return "4M"
  } else if (num === "five") {
    return "5M"
  } else if (num === "ten") {
    return "10M"
  } else {
    throw Error;
  }
}

// props: {
//   value: string;
// }
export function Money(props) {
    const backgroundStyle = `${props.value}-background`;

    return (
      <Card border="primary" style={{ width: '15rem', height: '20rem' }}>
        <Card.Body className={backgroundStyle}>
          <Card.Title className={`white-text`}>{getNumber(props.value)}</Card.Title>
        </Card.Body>
      </Card>
    );
}
