import React, { useContext } from 'react'
import Item from './Item'
import { ToDoItemsContext } from '../store/todoItems-store'


const WorkItems = ({ deleteItem }) => {

    const { initialItems } = useContext(ToDoItemsContext)

    return (
        <>
            {
                initialItems.map((x) =>
                (
                    <Item
                        key={x.name}
                        ToDoName={x.name}
                        ToDoDate={x.date}
                        deleteItem={() => deleteItem(x.name)}
                    />
                ))
            }
        </>
    )
}

export default WorkItems