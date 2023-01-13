import { useEffect, useState } from "react";


export function MainTitle () {
  const [day, setDay] = useState(0)
  useEffect(()=>{
    const dayNow = setInterval(()=>{
      setDay(new Date().toLocaleString('ru', { hour12: false }))
    }, 1000)
    
    return () =>clearInterval(dayNow)
  }, [day])

  return <h1 className="auction__title">
    <span>Ход торгов&nbsp;&nbsp;</span>
    Тестовые торги на аппарат Лотос №2033564 ({day})
  </h1>
}