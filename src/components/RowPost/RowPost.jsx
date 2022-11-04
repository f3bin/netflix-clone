import React, { useEffect, useState } from 'react'
import axios from "../../axios"
import YouTube from 'react-youtube'
import {imageURL ,API_KEY} from "../../Constants/Constants"
import "./RowPost.css"


function RowPost(props) {
    const [movie, setMovie] = useState([])
    const [urlId , setUrlId]=useState('')

    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data);
            setMovie(response.data.results)
        })
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0,
        }
    };
const handleMovieClick = (id)=>{
console.log(id)
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
    if(res.data.results.length !==0){
        setUrlId(res.data.results[0])
    }else
    alert("No Trailer Available")
})
}
    
    return (
        <div className='row'>
            <h2>{props.title} </h2>
            <div className="poster-container">
                {movie.map((res) => 
                    <img onClick={()=>handleMovieClick(res.id)} className={props.isSmall ? 'small-poster' :'poster'} alt='poster' src={ `${imageURL+ res.backdrop_path}`} />
                )}
            </div>
         {urlId &&  <YouTube opts={opts} videoId={urlId.key} />}  
        </div>
    )
}

export default RowPost