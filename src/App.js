import './App.css';
import Loader from './screens/Common/Loader/Loader';
import File from './components/File';

const App = () => {
  return (
    <Loader>
      <div className="App">
        <File />
      </div>
    </Loader>
  );
};

export default App;