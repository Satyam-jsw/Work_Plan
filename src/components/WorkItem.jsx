import React, { useContext, useState } from 'react'
import { ToDoItemsContext } from '../store/todoItems-store'
import { MdOutlineAddCircle } from "react-icons/md";
const WorkItem = () => {

    // const todateElement = useRef()
    // const toNameElement = useRef();


    // const handleAddButtonClicked = (event) => {
    //     event.preventDefault();
    //     let name = toNameElement.current.value
    //     let date = todateElement.current.value
    //     toNameElement.current.value=""
    //     todateElement.current.value=""
    //     newItem(name, date);
    // }


    // using context api --> all the methods store in context Api to use by useContext HOOK



    const [ItemName, setItemName] = useState('');
    const [ItemDate, setItemDate] = useState('');


    const { addNewItem } = useContext(ToDoItemsContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!ItemDate.trim() || !ItemName.trim()) {
            alert('Please Fill all the Field!');
            return;
        };
        addNewItem(ItemName, ItemDate);
        setItemDate('');
        setItemName('');
    }


    return (
        <>
            <div className="container text-center text-margin">
                <form className="row row-items" onSubmit={handleSubmit}>
                    <div className="col-sm-5 ">
                        <input className='input_box' type='text' placeholder='Enter Your Plan' value={ItemName} onChange={(e) => setItemName(e.target.value)} />
                    </div>
                    <div className="col-sm-5">
                        <input className='input_box' type='date' value={ItemDate} onChange={(e) => setItemDate(e.target.value)} />
                    </div>
                    <div className="col-sm-1">
                        <button className="btn btn-primary" type="submit" ><MdOutlineAddCircle /></button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default WorkItem