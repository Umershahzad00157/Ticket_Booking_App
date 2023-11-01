import React from 'react'

const EventCard = ({location, eventImage}) => {

  const goToEvent = ()=>{
    
  }


  return (
    <div>
      
    <div classNameName='card_main'>
    
    <div className="card-client">
    <div className="user-picture">
        <img src={eventImage}/>
    </div>
    <p className="name-client"> {location}
    </p>
    <div className="social-media">
        <a href="#">
            
            
            <button onClick={goToEvent()} className='card_btn'>See</button>
        </a>
        
    </div>
</div>




    </div>

    </div>
  )
}

export default EventCard;
