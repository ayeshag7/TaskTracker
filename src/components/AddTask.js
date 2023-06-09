export const AddTask = ({tasks, setTasks, inputValue, setInputValue, toEdit, setToEdit, currIndex}) => {
    
    const handleChange = (event) => {
        setInputValue(event.target.value)
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
            setInputValue("");
            setTasks([...tasks, task]);
        } else {
            setInputValue("");
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
