import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import WorkName from './components/WorkName'
import { ToDoItemsContext } from './store/todoItems-store'
import WorkItem from './components/WorkItem'
import WorkItems from './components/WorkItems'
import WelcomeMessage from './components/WelcomeMessage'
import './App.css'
import { useState } from 'react'

const App = () => {
  let planItems =
    [
      {
        name: "Dancing",
        date: "21/01/2023"
      },
      {
        name: "Study,Practice more question",
        date: "12/02/2024"

      }, {
        name: "Complete the assignment before date of submission",
        date: "06/06/2024"
      }
    ];

  const [initialItems, setPlanItems] = useState(planItems);

  const addNewItem = (ItemName, ItemDate) => {
    const newList = [...initialItems, { name: ItemName, date: ItemDate }];
    setPlanItems(newList);
  }


  const deleteItem = (name) => {
    const newInitialItem = initialItems.filter((item) => (item.name !== name))
    setPlanItems(newInitialItem);
  }

  return (

    <ToDoItemsContext.Provider value={{
      initialItems,
      addNewItem,
      deleteItem
    }}>
      <center className="work-container back_ground_color" >
        <WorkName />
        <WelcomeMessage />
        <WorkItem />
        <WorkItems />
      </center>
    </ToDoItemsContext.Provider>
  )
}

export default App