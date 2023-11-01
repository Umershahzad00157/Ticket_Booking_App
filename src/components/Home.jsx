import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import EventCard from './EventCard';
import getAllLoctions from './api/getAllLocation';





const Home = () => {
  const [event,setEvent]=useState([]);
  // console.log(event.location)
  const getLocation=async ()=>{
    const res= await getAllLoctions();

    setEvent(res.data.data);
  }
useEffect( ()=>{
getLocation();

},[]);
  return (
    <div>
  
    <h1 className='enent_heading'>SELECT THE COUNTRIES</h1>



    <div className='countrty_cards'>
 
    {event.map((event)=>
      <EventCard
      location = {event.location}
      eventImage = {event.image}

      />
      // <h1>hello</h1>
      )}
    </div>

   


      <Footer/>
    </div>
  )
}

export default Home
