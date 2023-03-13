import { useState } from "react";

export const AddTask = ({tasks, setTasks, count, setCount, inputValue, setInputValue, toEdit, setToEdit, currIndex, setCurrIndex}) => {
    
    const handleChange = (event) => {
        setInputValue(event.target.value)
    };

    const handleReset = () => {
        setInputValue("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const now = new Date();
        if (inputValue !== "" && !toEdit) {
            const task = {
                id: Math.floor(Math.random() * 100000),
                name: inputValue,
                time: `${now.toLocaleTimeString()} ${now.toLocaleDateString()}`
            }
            handleReset();
            setTasks([...tasks, task]);
            setCount(count + 1);
        } else {
            handleReset();
            setTasks(prevTasks => {
                const newTasks = [...prevTasks]; 
                newTasks[currIndex] = {
                  ...newTasks[currIndex],
                  name: inputValue,
                  time: `${now.toLocaleTimeString()} ${now.toLocaleDateString()}`
                };
                return newTasks; 
              });
            setToEdit(false);
        }
    };

  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="task" id="task" placeholder="Add task" autoComplete="off" value={inputValue}/>
            <button type="submit">Add</button>
        </form>
    </section>
  )
}
