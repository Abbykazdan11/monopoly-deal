import './App.css';
import {Property} from './Property'

function App() {
  return (
    <div className="App">
      <Property
        color="blue"
        title="test title big bam"
        rentValues={[1,2,3,4]}
      />
    </div>
  );
}

export default App;
