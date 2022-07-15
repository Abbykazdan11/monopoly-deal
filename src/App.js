import './App.css';
import {Card, ListGroup} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Card border="primary" style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title className="blue-background">Connecticut Avenue</Card.Title>
          <Card.Text>
            My Big Bam
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>1 ... $1M</ListGroup.Item>
            <ListGroup.Item>2 ... $2M</ListGroup.Item>
            <ListGroup.Item>3 ... $3M</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
