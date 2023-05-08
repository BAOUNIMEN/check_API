import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Apick = () => {
    const [photo, setPhoto]=useState('');
    const [result, setResult] = useState([]);
    const handleSubmit =()=>{
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=ZOoAey4A0ymRe4qk0BNpPDW5fYFoUtJvi550zaLJ6Gg`)
        .then((response)=>{
         console.log(response.data)
        setResult(response.data.results);
        })
    }
    // useEffect(()=>{
    //     handleSubmit();
    // },[]);
   
  return (
    <div className='container'>
       <input className='input' type="text" placeholder='Search for pick...' onChange={(e) => setPhoto(e.target.value)}/>
       <button type='submit'onClick={handleSubmit} className=' btn-primary ' >Get Picture</button> 
       <div className='container' >
                
                    {
                        result.map((el)=>{
                            return(
                                
                                    <img  src={el.urls.small}/>
                                
                            )
                        })
                    }
                
            </div>
    </div>
  )
}

export default Apick