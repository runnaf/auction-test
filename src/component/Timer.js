import { useState, useEffect } from 'react';
import { Picture } from './Picture';
import sandglass from '../img/sandglass.png'



export function Timer () {
  const [timer, setTimer] = useState(0);

  useEffect(()=>{
    const time = setInterval(()=>{
      setTimer((new Date().getMinutes()%2)*60 + (60 - new Date().getSeconds()));     
    }, 1000)

      return () => clearInterval(time);
  
  }, [timer])

  function transform (number) {
    if (number === 60) {
      return '00'
    } else if (number < 10) {
      return `0${number}`
    } else { return number }
  }

  return <div className='timer'>
    <p>0{Math.floor(timer/(60*24))}:</p>
    <p>0{Math.floor(timer/60)}:</p>
    <p>{timer > 60 ? transform(timer - 60) : transform(timer) }</p>
    <Picture src = { sandglass } alt = 'sandglass' width= '30' height = '30' />
  </div>
}