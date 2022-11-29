import React from "react";

const Card =({title,image,instructions,area,link})=>{
    return(
        <div className="movie">
          <div>
               <p>{area}</p>
            </div>
            <div>
              <img src={image!== 'N/A' ? image : 'https://via.placeholder.com/400'} alt={title} />
            </div>
            <div>
               <span><a href={link}>Link</a></span>
               <h3>{title}</h3>
            </div>
          {/* <h1>{title}</h1>
          <img src={image} alt="inam" />
          <h2>{area}</h2>
          {/* <p>{instructions}</p> */}
          {/* <a href={link}>tutorial</a> */}
        </div>
    )
}

export default Card;