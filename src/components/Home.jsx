import React from 'react';
import Footer from './Footer';
import EventCard from './EventCard';

const name = [
  {
    country_name : "USA"
  },
  {
    country_name : "Canada"
  },
  {
    country_name : "Australia"
  },
  {
    country_name : "Saudi Arabia"
  },
  {
    country_name : "Alaska"
  },
  {
    country_name : "Morocco"
  },
  {
    country_name : "Qatar"
  },
  {
    country_name : "Maldieves"
  },
  
]



const Home = () => {
  return (
    <div>
  
    <h1 className='enent_heading'>SELECT THE COUNTRIES</h1>



    <div className='countrty_cards'>
 
    {name.map(()=>
      <EventCard
      country_name = {name.country_name}
      />
      )}
    </div>

   


      <Footer/>
    </div>
  )
}

export default Home
