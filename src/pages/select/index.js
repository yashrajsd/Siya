import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PopupModal from '../../components/PopupModal'
import Yash from './image.png'

const audioFile = '../../asset/voice.mp3'

const image=[
  {name:'Reyna',img:'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG5vYXBxaWdiZTlpN3E2ZXZsMXV4emVpM2NyZzVxcWtmZ2gyMGM1MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WqNmbi4La3IJg9PhcR/giphy.gif'},
  {name:'Sage',img:'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3dxcnpkbWNyZDd0ZDUwZXZoMXJ2b2IyOXNmd2lyenZxMXZnZTBrciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sUOkBnwf8157cVGE57/giphy.gif'},
  {name:'Omen',img:'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG14MmE0bGUzaXByb241ZGkybnVqd2ZwM2xwcGh3OHBraTF6ODgxaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LSVjXPfpbNZQVYAsLt/giphy.gif'},
  {name:'Fade',img:'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWYxbzlxZGNlZ3V2d202ZWFxYnR4ZHM4am96Znlkdm50bThqczVtdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JcfHQwkzKbTkyecrAW/giphy.gif'},
  {name:'Yashraj',img:'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW5nYjhmbGxyNW13Nm42NHl4YW9hYWFhempya2F0dzAyY3R6aTY4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4CFjzDix8jacE/giphy.gif'},
  {name:'Neon',img:'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHAyaHFya21pdWlxbWdyYXM1Z3hhN205a2k0Z2NiZDk3dHoyNjY5aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IPxZQENmZwj4Z8YfZQ/giphy.gif'},
  {name:"Jett",img:'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXBvOG1mdjZzaGs4bnVmdWRqNXE5aHZ1cDJ5NmdhYWhiMXRrNXAzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IvOFcGZeDA76P6XryO/giphy.gif'},
  {name:"astra",img:'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDFhY2g4MXNhd3plbDFzbG80Z2tqaGduaXFldWxuODN4aGw5ZGh2cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xvRPIAtMwKQ2SlxKtx/giphy.gif'}
]

const agents=[
  {name:'Reyna',img:'https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png',select:false},
  {name:'Sage',img:'https://titles.trackercdn.com/valorant-api/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png',select:false},
  {name:'Omen',img:'https://titles.trackercdn.com/valorant-api/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png',select:false},
  {name:'Fade',img:'https://tiermaker.com/images/templates/valorant-agents-fade-15154563/151545631655300856.png',select:false},
  {name:'Yashraj',img:Yash,select:false},
  {name:'Neon',img:'https://titles.trackercdn.com/valorant-api/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayicon.png',select:false},
  {name:'Jett',img:'https://titles.trackercdn.com/valorant-api/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png',select:false},
  {name:'Astra',img:'https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayicon.png',select:false}
]

const Select = () => {
  const [agentSelect,setAgentSelect] = useState(0);
  const [timer, setTimer] = useState(30);
  const [audio] = useState(new Audio(audioFile));
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [screenFade, setScreenFade] = useState(false);

  const handleSelect=(e,index)=>{
    if(index===4){
      setAgentSelect(index)
      return;
    }
    if(agentSelect===index)return;
    setAgentSelect(index)
  }

  const handleButton=()=>{
    if(agentSelect!==4){
      alert('please select correct agent for yourself')
    }else{
      // Show second popup with txt2 and audio2
      setShowSecondPopup(true);
    }
  }

  const handleSecondPopupClose = () => {
    setShowSecondPopup(false);
    // Fade to black
    setScreenFade(true);
    // Navigate after fade completes
    setTimeout(() => {
      navigate('/date');
    }, 1000);
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      console.log('Timer expired!');
      setTimer(30);
    }
    if (timer < 10) {
      audio.play().catch((error) => console.log(error));
    }
  }, [timer,audio]);



  return (
    <div style={{height:'100vh',width:'100vw',backgroundImage:`url(${image[agentSelect].img})`,backgroundSize:"cover",backgroundPosition:'center',display:'flex',justifyContent:'center',alignItems:'center',transition:'background-color 1s ease-in-out',backgroundColor: screenFade ? '#000000' : 'transparent'}}>
      {showPopup && <PopupModal onClose={() => setShowPopup(false)} />}
      {showSecondPopup && (
        <PopupModal 
          onClose={handleSecondPopupClose}
          audioSrc="/audio2.mp3"
          text="Woah… what a choice Siya. Not everyone gets this one right, you know. Lucky for you… you just unlocked me."
        />
      )}
    <div style={{ position: 'absolute', top: '10px', left: '50px', color: `${timer<10 ? 'red':'white'}` }}>
        <h1>{timer}s</h1>
    </div>
    <div style={{height:'100%',width:'10%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'20px'}}>
      <div>
      <div style={{border:'solid 1px lightgray',backgroundColor:'rgba(217,217,217,28%)',height:'90px',width:'90px',}}>
      <img src={[agents[agentSelect].img]} alt={agents[agentSelect].name} style={{height:'100%',width:'100%'}}/>
      </div>
      <p style={{margin:'0px',color:'whitesmoke',fontWeight:'regular',textAlign:'left'}}>Siya Mhatre</p>
      </div>
    </div>
    <div style={{height:'100%',width:"80%",display:'flex',justifyContent:'center',alignItems:'flex-end'}}>
      <button onClick={handleButton} style={{backgroundColor:'#3DED97',color:'white',position:'absolute',bottom:'250px',padding:'15px',borderRadius:'4px',fontWeight:'regular',border:'0px',fontSize:'15px'}}>Select Agent</button>
      <div style={{width:'60%',marginBottom:'40px',display:'flex',flexWrap:'wrap',gap:'1px'}}>
        {agents.map((agent,index)=>{
          return(
            <div key={index} style={{height:'80px',width:'80px',backgroundColor:'rgba(217,217,217,28%)',cursor:'pointer',border:'1px solid white0'}} onClick={(e)=>{handleSelect(e,index)}}>
              <img src={agent.img} alt={agent.name} style={{height:'100%',width:'100%'}}/>
            </div>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default Select