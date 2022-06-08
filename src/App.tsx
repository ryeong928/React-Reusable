import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router'
import ScrollToTop from './lib/Hook/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router/>
    </BrowserRouter>
  );
}

export default App;