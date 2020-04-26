import React, {Component} from 'react'
import CardContainer from './CardContainer'

export default function MainContainer(props){
    return(
        <div className='main-container'>
            <CardContainer action={props.action} characters={props.characters}/>
        </div>
    )
}