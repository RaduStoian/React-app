import React from 'react';



const TodoItems = (props) => {
    
  
    

    return (
                <div className="individual-item">

                        <input type="checkbox" 
                        checked={props.item.completed} 
                        onChange= {() => props.handleClick(props.item.id)}
                        ></input>

                        <p className= {props.item.completed ? "main-text completed-text" : "main-text"} >{props.item.text}</p>

                </div> 
            )
    }


export default TodoItems;
 