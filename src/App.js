import React from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"

import TodoData from "./TodoData"
import TodoItems from "./components/TodoItems"


class App extends React.Component{
  constructor() {
    super()
    this.state = {
        todos: TodoData
    }

    this.handleClick = this.handleClick.bind(this)
}

  handleClick(id) {
 
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) 
          {
            todo.completed = !todo.completed
          }
          return todo
        })
          return {
            todos: updatedTodos
          }
      })
    
  }


  render() {

    const MappedItems = this.state.todos.map(item => {

        return <TodoItems key = {item.id} item = {item} handleClick={this.handleClick}/>
    })

        return (
                <div>
                    <Header />     
                    {MappedItems}
                    <Footer />
                </div>
              )
      }
}

export default App;
