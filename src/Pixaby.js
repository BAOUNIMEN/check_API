import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Pixaby = () => {
    const [img, setImg] = useState()
    const [resultat, setResultat] = useState([])
    // var API_KEY = '36055986-bab8a116bbdfa0e8b9fd14dbb';
    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchdata = async () => {
            try {
                const res = await axios.get(`https://pixabay.com/api/?key=36055986-bab8a116bbdfa0e8b9fd14dbb&q=${img}&image_type=photo&pretty=true`)
                console.log(res)
                setResultat(res.data.hits);
            } catch (error) {
                console.log(error)
            }
        }

        fetchdata()
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}  >
                <input className='input'
                    type="text"
                    placeholder="enter pic name..."
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />
                <button className=' btn-primary ' type="sumbit">Get photo</button>
            </form>
            <div className='container' >

                {
                    resultat.map((el) => {
                        return (
                            <>
                                <img  src={el.largeImageURL} />
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Pixaby