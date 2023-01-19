import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import ErrorPage from './components/utils/Error';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';



function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/"element={<Home/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/signin' element={<Signin/>}/>
          <Route exact path="/main" element={<Main />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
  );
}

export default App;

