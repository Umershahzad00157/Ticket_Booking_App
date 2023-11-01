import axios from "axios";


const getAllLoctions = async () => {
      try  {

            const response = await axios({
                method: 'GET',
                url: 'http://127.0.0.1:3001/event/location',
               
              });
              
            return(response);
        }

    catch (error) {
    console.log(error)

    }
  
   
}

export default getAllLoctions;
