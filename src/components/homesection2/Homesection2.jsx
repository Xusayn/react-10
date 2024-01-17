import React, { useEffect, useState } from 'react'
import './Homesection2.scss'
const Homesection2 = () => {
  const [cards,setcards]=useState([])



  const fetchcards= async () =>{
    try {
      const cards =await fetch(`http://localhost:3000/cards`)
    const data= await cards.json()
    setcards(data)
    } catch (error) {
      console.log(error);
    }
  }



  const fetchexp= async () =>{
    try {
      const cards =await fetch(`http://localhost:3000/cards?uch=4000000`)
    const data= await cards.json()
    setcards(data)
    } catch (error) {
      console.log(error);
    }
  }




  const fetchep= async () =>{
    try {
      const cards =await fetch(`http://localhost:3000/cards?uch=1500000`)
    const data= await cards.json()
    setcards(data)
    } catch (error) {
      console.log(error);
    }
  }





   useEffect(()=>{
    fetchcards()
 },[])




  



  
  return (
    <>
      <div className="homesection2">
        <h1>Our Products</h1>


        <h1 className='sort'>Sort</h1>
        <button onClick={()=>fetchcards()} className='all'>All</button>
        <button onClick={fetchexp} className='exp'>Expensive</button>
        <button onClick={()=>fetchep()} className='chep'>Cheap</button>





       <div className="cards">
       {cards.map((card)=>(
          <div key={card.id} className="card">
            <img src={card.img} alt="" />
            <h2>{card.bir}</h2>
            <h3>{card.ikki}</h3>
            <div className="skidok">
            <h3>{card.uch} $</h3>
            {card.skid? <h3 className='gray'>{card.skid}</h3>:null}
            </div>
            


          </div>
        ))}

       </div>
       <button className='btn'>Show More</button>
      </div>
    </>
  )
}

export default Homesection2
