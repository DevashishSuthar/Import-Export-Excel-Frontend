import './App.css';
import Loader from './screens/Common/Loader/Loader';
import File from './components/File';

const App = () => {
  return (
    <Loader>
      <div className="container">
        <File />
      </div>
    </Loader>
  );
};

export default App;