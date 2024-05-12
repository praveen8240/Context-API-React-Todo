import React from 'react'
import { AppContext } from './AppContext'

const Todo = () => {

    const {comHandler,deleteHandler,list,submitHandler,todo,setTodo,loading,setLoading}=React.useContext(AppContext)
    const mapcom=()=>{
        return list.map((item,index)=>(
            <div key={index} className='list-item'>
                <p className='item'>{item}</p><button onClick={()=>deleteHandler(index)} className='btn del-btn'>Del</button><button onClick={()=>comHandler(index)} className='btn com-btn'>Completed</button>
            </div>
        ))
    }
    return (
        <div className='Todo'>
            <form onSubmit={submitHandler}>
                <input value={todo} onChange={(e)=>setTodo(e.target.value)} type='text' placeholder='Enter your task' className='inputtab' />
                <input type='submit' className='btn' value={'ADD'}/>
            </form>
            <div className='todolist'>
                <h3>Todo List</h3>
                {(list.length>0)
                    && mapcom()
                }
            </div>
        </div>
    )
    }

export default Todo