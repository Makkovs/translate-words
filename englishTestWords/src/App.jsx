import { BrowserRouter } from 'react-router-dom';

import AppRouter from './components/Router/AppRouter';
import Header from './components/Header/Header';

import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
