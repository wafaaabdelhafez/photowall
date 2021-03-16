import React from "react";
import PropTypes from "prop-types";

function Photo(props) {
    const post = props.post
    return <figure className='figure'>  
            <img className='photo' src={post.image_link} alt={post.description}/>
            <figcaption> <p> {post.description} </p>  </figcaption>
            <div className='button-container'>
                <button className='remove_button' onClick={() => {
                    props.onRemovePhoto(post)
                }}> Remove </button>
            </div>
        </figure> 
}

Photo.prototypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo