import React from "react";
import Photo from './Photo.js'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoWall(props) {
    return <div>
        <Link className='add-icon' to='/AddPhoto'> </Link>
        {/* <button onClick={props.onAddPhoto} className='add-icon'> </button> */}
        <div className="photo-grid">
                {props.posts
                .sort(function(x, y) {
                    return y.id - x.id
                })
                .map((post, index) => <Photo key = {index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
            </div>
        </div>
}

PhotoWall.prototypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall