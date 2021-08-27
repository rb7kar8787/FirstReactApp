import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// component defination using class

// class Demo extends Component
// {
//     render(){
//         return <div className="myclass">
//                 <h1>Hello {this.props.name} Salute to your work</h1>
//                 <p>You are great learner</p>
//                </div>
//     }

// }

// function component defination same as above class component defination
// so means function having return type and function defib=nation and most important is ()
const Demo=({name})=> {
    return <div className="myclass">
    <h1>Hello {name} Salute to your work</h1>
    <p>You are great learner</p>
   </div>
    
}
export default Demo;