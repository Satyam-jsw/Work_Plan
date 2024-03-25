import { createContext } from "react";


export const ToDoItemsContext = createContext({
    initialItems: [],
    addNewItem: () => { },
    deleteItem: () => { }
});