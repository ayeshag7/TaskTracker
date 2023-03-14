import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import { useEffect, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [inputValue, setInputValue] = useState("");
  const [toEdit, setToEdit] = useState(false);
  const [currIndex, setCurrIndex] = useState(null);

  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "gradientTwo");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <div className={"App " + theme}>
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
        <main>
          
          <AddTask tasks={tasks} setTasks={setTasks} inputValue={inputValue} setInputValue={setInputValue} 
          toEdit={toEdit} setToEdit={setToEdit}
          currIndex={currIndex} setCurrIndex={setCurrIndex}/>

          <TaskList tasks={tasks} setTasks={setTasks} inputValue={inputValue} setInputValue={setInputValue} 
          toEdit={toEdit} setToEdit={setToEdit}
          currIndex={currIndex} setCurrIndex={setCurrIndex}/>

        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
