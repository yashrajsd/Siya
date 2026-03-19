import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { PasswordProvider } from './context/passwordContext';
import Select from './pages/select';
import Date from './pages/date';
import Thankyou from './pages/thankyou';


function App() {
  return (
    <div className="App">
      <PasswordProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/select' element={<Select/>}/>
          <Route path='/date' element={<Date/>}/>
          <Route path='/thankyou' element={<Thankyou/>}/>
        </Routes>
      </PasswordProvider>
    </div>
  );
}

export default App;
