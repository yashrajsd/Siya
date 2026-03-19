import React from 'react'
import { useNavigate } from 'react-router-dom'

const Thankyou = () => {

    const navigate= useNavigate()

  return (
    <div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundImage:'url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYms4djlwY3Jzc3J5aGVjdTZkbm1nZW5zbDRrcDk0cXFyMTIxNWs0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5xtDarmwsuR9sDRObyU/giphy.gif)',backgroundPosition:'center',backgroundSize:'cover'}}>
        <h1 style={{color:'white'}}>OMGG THANKYOUUU!!! Let's meet on 3rd april at 11pm then!?!?!?!</h1>
        <button style={{color:'black',borderRadius:'8px',padding:'20px'}} onClick={()=>{navigate('/')}}>DONE</button>
    </div>
  )
}

export default Thankyou
