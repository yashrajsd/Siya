import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const images=[
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2c1Mms5Nmwxa3JpaTZndjdzMXh1ZmZkbXh4MWkzaHRoZnowZGY0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ASd0Ukj0y3qMM/giphy.gif',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWRsb203ZTZyOTg2Ym9hOTJwODl1eDlobDh4MWRibmRteHh0eGNicyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HzQ7KaXJHv8QKOgqrI/giphy.gif',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHp1cHVjaGx4N2RqbGswMnQxNmdpNHU5Z3RicTJ3dGVja200YjI0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ISOckXUybVfQ4/giphy.gif',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDVrMXVjNWswcTdrajkzdmYzOHV2aGhpNHFyeDQ0a25vc3J4aGYzayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7SF5scGB2AFrgsXP63/giphy.gif',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGEzMHY5bzk1enc3a3hreHd2eXI2ZDJrMHFlODE0eHo4ZXU1bThmeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1AsyjZ8XLd1V7pUk/giphy.gif',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWV1N2Rud2tma2Jub3k4N2F6N2F0cXN1ejVkcnh4cGlwd2x1M2RhOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kB1nTOOvVZFj1Q2Hik/giphy.gif'
]

const Date = () => {
    const [imgIndex,setImgIndex] = useState(0)
    const [no,setNo] = useState(0)
    const [yesButtonSize, setYesButtonSize] = useState(30);
    const navigate = useNavigate()

    const handleNo=()=>{
        setNo(no+1);
        if(no<5){
            setImgIndex(imgIndex+1);
            return;
        }
        setYesButtonSize(yesButtonSize + 10);
    }

  return (
    <div>
        <div>
        <h1>UMMM WANNA GO OUT ON A DATE WITH ME 3rd April????</h1>
        </div>
        <div>
            <img src={images[imgIndex]} style={{height:'300px',width:'300px'}}/>
        </div>
        <div style={{marginTop:'20px'}}>
            <button style={{ fontSize: `${yesButtonSize}px`,marginRight:'10px'}} onClick={()=>navigate('/thankyou')}>Yes</button>
            <button onClick={handleNo} style={{fontSize:'30px'}}>No</button>
        </div>
    </div>
  )
}

export default Date