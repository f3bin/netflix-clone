import React ,{useEffect, useState} from 'react'
import "./Banner.css"
import {API_KEY , imageURL}from "../../Constants/Constants"
import axios from "../../axios"

function Banner() {
    const [movie, setMovie] = useState();

    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) =>{
        console.log(response.data.results[0]);
        
        setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
      })
    }, [])
    
    return (
        <div 
        style={{backgroundImage:`url(${movie? imageURL+movie.backdrop_path : ""})` }}

        className='banner'>
            <div className='content'>
                <h1 className='title'>{movie? movie.name : ""}</h1>
                <div className='banner-buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie? movie.overview : ""}</h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner