import React from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Photowall(props){
    return (
    <div>
        <Link className="addIcon" onClick={props.onNavigate} to="/AddPhoto"></Link>
        {/*<button onClick={props.onNavigate} className="addIcon"></button>*/}
        <div className="photo-Grid"> 
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>
    </div>
)}

Photowall.propTypes={
    posts: PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}

export default Photowall