import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handlePassword = () => {
    if (password === 'tingu') {
      console.log('password')
      navigate('/select')      
    } else {
      alert('Incorrect password!');
    }
  };

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', width: '100vw', backgroundColor: '#8247FF' }}>
      <div>
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExam5keWxzYnE1cjc4NG51dWF4YjBoMTcwdWg0a2o5bmYwajQ4MHBmaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DHYNyjAqrqkzm/giphy.gif" width="480" height="480" alt="animated gif"></img>
      </div>
      <h1 style={{ color: 'white' }}>Enter Password Below</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input
          placeholder='Enter your password'
          style={{ padding: '20px', borderRadius: '7px 0px 0px 7px', border: '0px' }}
          value={password}
          onChange={handleInputChange}
        />
        <button
          style={{ padding: '20px', backgroundColor: '#121212', color: 'whitesmoke', cursor: 'pointer', borderRadius: '0px 7px 7px 0px', border: '0px' }}
          onClick={handlePassword}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;
