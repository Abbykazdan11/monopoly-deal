import React from 'react';
import './Property.css';

import {Property} from './Property';
import {Col} from 'react-bootstrap';

// props: {
//   color: string;
//   rentValues: number[]; 
// }
export function PropertySet(props) {
    let title = `${props.color[0].toUpperCase()}`;
    for (let i = 1; i < props.color.length; i++) {
      title += props.color[i];
    }

    let idx = [];
    for (let i = 1; i <= props.rentValues.length; i++) {
      idx.push(i);
    }

    return (
      <Col>
        {idx.map((i) => {
          return <Property
            color={props.color}
            title={`${title} ${i}`}
            rentValues={props.rentValues}
          />
        })}
      </Col> 
    );
}

