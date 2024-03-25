import React, { useContext } from 'react'
import styles from '../components/styles/WelcomeMessage.module.css'
import { ToDoItemsContext } from '../store/todoItems-store'

const WelcomeMessage = () => {

    const { initialItems } = useContext(ToDoItemsContext);

    return (
        <>
            {initialItems.length === 0 && <p className={styles.heading}> Welcome to today Plane </p>}
        </>
    )
}

export default WelcomeMessage