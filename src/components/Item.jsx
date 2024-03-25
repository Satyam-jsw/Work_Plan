import React from 'react'
import { ToDoItemsContext } from '../store/todoItems-store';
import { useContext } from 'react';
import { MdDelete } from "react-icons/md";

const Item = ({ ToDoName, ToDoDate }) => {

  const { deleteItem } = useContext(ToDoItemsContext);

  return (
    <>
      <div className="container text-center ">
        <div className="row row-items">
          <div className="col-sm-5 input_text" > {ToDoName}
          </div>

          <div className="col-sm-5 input_text" >
            {ToDoDate}
          </div>

          <div className="col-sm-1">
            <button className="btn btn-danger" type="button" onClick={() => deleteItem(ToDoName)}><MdDelete /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item