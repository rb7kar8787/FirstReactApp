import React from 'react';
import './Avatar.css';
import 'tachyons';
import './Avatarlist';
import Avatarlist from './Avatarlist';


const Avatar = (props) =>
{
    const Avatarlistarray=[
        {
            id:1,
            name:"Rushikesh Satkar",
            work:"Software Developer"

        }
    ]
    return <div className="mainpage">
    <h1 className="tc">Welcome To Developers Community</h1>
    <Avatarlist id={Avatarlistarray[0].id} name={Avatarlistarray[0].name} work={Avatarlistarray[0].work}/>
    <Avatarlist id='1' name='Yogesh Wadekar' work='Full Stack Developer'/>
    <Avatarlist id='1' name='Pratik Pachpute' work='Software Engineer'/>
    <Avatarlist id='1' name='Vijay Pardhi' work='Software Tester'/>
</div>
}
export default Avatar;