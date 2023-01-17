import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import ErrorPage from './components/utils/Error';
import Signup from './components/signup/Signup';


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/"element={<Signup/>}/>
          <Route exact path='signup' element={<Signup/>}/>
          <Route exact path="/main" element={<Main />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
  );
}

export default App;

