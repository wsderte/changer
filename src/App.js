import './App.css';
import Changer from './components/changer/changer';
import Header from './components/header/header';
import { store } from './redux/index'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Changer/>
      </div>
    </Provider>
  );
}

export default App;
