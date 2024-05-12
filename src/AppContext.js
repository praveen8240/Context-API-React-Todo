import React from "react";
export const AppContext = React.createContext();
export function AppContextProvider({children}){
    const [loading,setLoading]=React.useState(false);
    const [todo,setTodo]=React.useState('');
    const [list,setList]=React.useState([]);
    const [Completed,setCompleted]=React.useState([]);

    function submitHandler(e){
        e.preventDefault();
        if(todo.trim()!==' '){
            const updated=[...list];
            updated.push(todo);
            setList(updated);
        }else{
            alert('Please enter todo and ADD');
        }
        setTodo('');
    }
    function deleteHandler(index){
        const updated=[...list];
            updated.splice(index, 1);
            setList(updated);
    }
    function comHandler(index){
            const updated=[...list];
            const comtask=updated[index];
            updated.splice(index, 1);
            setList(updated);
            const updatedcom=[...Completed]
            updatedcom.push(comtask)
            setCompleted(updatedcom);
    }
    const value={
        loading,
        setLoading,
        todo,
        setTodo,
        submitHandler,
        list,
        deleteHandler,
        comHandler,
        Completed,
    }

    return<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}