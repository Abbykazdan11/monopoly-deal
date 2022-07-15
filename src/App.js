import './App.css';
import {Stack, Col} from 'react-bootstrap';
import { PropertySet } from './PrppertySet';
import {Money} from './Money';

function App() {
  return (
    <div className="App">
      <Stack direction="horizontal" gap="1">
        <Col>
          <Money value="one" />
          <Money value="two" />
          <Money value="three" />
          <Money value="four" />
          <Money value="five" />
          <Money value="ten" />
        </Col>
        <PropertySet
          color="brown"
          rentValues={[1,2]}
        />
        <PropertySet
          color="blue"
          rentValues={[1,2,3]}
        />
        <PropertySet
          color="purple"
          rentValues={[1,2,4]}
        />
         <PropertySet
          color="orange"
          rentValues={[1,3,5]}
        />
        <PropertySet
          color="red"
          rentValues={[2,3,5]}
        />
        <PropertySet
          color="yellow"
          rentValues={[2,4,6]}
        />
        <PropertySet
          color="green"
          rentValues={[2,4,7]}
        />
       <PropertySet
          color="darkblue"
          rentValues={[3,8]}
        />
        <PropertySet
            color="lightgreen"
            rentValues={[1,2]}
          />
        <PropertySet
          color="black"
          rentValues={[1,2,3,4]}
        />
      </Stack>
    </div>
  );
}

export default App;
