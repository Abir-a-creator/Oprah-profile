
import React, {component} from "react";


function Component () {
    function handleclick (){
        e.preventDefault ();
        alert(`name of the profile user is $ {props.name}`)
    }

    return (
        <div>
            <p>The full name is <span>{props.name}</span> and the bio{props.bio} and profession{props.profession}</p>
            <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftalenty.fr%2Foprah-winfrey-citations%2F&psig=AOvVaw1fIAb-FwOmYExK--Z_EZhx&ust=1611035961224000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi7_ZT7pO4CFQAAAAAdAAAAABAD"}/>
            <br/>
            <button onClick= {handleclick}>alert the name</button>
        </div>
    )
}
export default component;