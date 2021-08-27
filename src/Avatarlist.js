import React from 'react';
import './Avatar.css';


const Avatarlist=(props) =>{
    return (
        <div className="avatarstyle ma4 shadow-4 bg-light-purple dib pa4 tc grow"> 
    <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avtar"></img>
    <h2>{props.name}</h2>
    <p> 
        {props.work}
    </p>
</div>
    )
}



export default Avatarlist;