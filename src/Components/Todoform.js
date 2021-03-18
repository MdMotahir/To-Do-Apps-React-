import { React } from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import { setGlobalCssModule } from "reactstrap/es/utils";


function Todoform() {
    
    const [task, setTask] = useState("")
    const [tasklist, setTaskList] = useState([])
    const [Comeplete, setComeplete] = useState([])
    const [Delete, setDelete] = useState([])

    const handleChange=(event)=>{
        setTask(event.target.value)
    }

    const handleSubmit=(event)=>{        
        event.preventDefault()
        if (task !== ""){
            const taskDetails = {
                id: Math.floor(Math.random()*1000),
                value:task,
                isCompleted: false,
            };
            setTaskList([...tasklist,taskDetails]);
        }
        event.target.reset()
        // setTask("")
    }

    const handleDelete=(event,id)=>{
        event.preventDefault()
        const index_id = tasklist.findIndex(
            (x)=>x.id ===id
        )
        const new_data = tasklist[index_id];
        setDelete([...Delete,new_data]);

        setTaskList(tasklist.filter(
            (x)=>x.id !=id
            ));
    }

    const handleComplete=(event,id)=>{
        event.preventDefault()
        const element=tasklist.findIndex(
            (x)=>x.id == id
        );
        const new_data = tasklist[element];
        
        setComeplete([...Comeplete,new_data]);
        const newTaskList=[...tasklist]

        newTaskList[element]={
            ...newTaskList[element],
            isCompleted:true,
        }
        setTaskList(newTaskList.filter(
            (x)=>x.isCompleted !=true,
        ));

    }
   
    
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="task" id="task"/>
                <input type="submit" value="Submit"/>
            </form>
            <div>
                <h1>To Do List</h1>
                <ul>
                    {tasklist.map(
                        (x)=>(
                            <li>
                                {x.value}
                                <button onClick={(event)=>handleDelete(event,x.id)}>Delete</button>
                                <button onClick={(event)=>handleComplete(event,x.id)}>Complete</button>
                            </li>
                        )
                    )}
                </ul>
                <h1>Complete List</h1>
                <ul>
                    {Comeplete.map(
                        (x)=>(
                            <li>
                                {x.value}
                            </li>
                        )
                    )}
                </ul>
                <h1>Delete List</h1>
                <ul>
                    {Delete.map(
                        (x)=>(
                            <li>
                                {x.value}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>

    );
}

export default Todoform;