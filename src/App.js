import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [toEdit, setToEdit] = useState(false);
  const [currIndex, setCurrIndex] = useState(null);

  const [theme, setTheme] = useState("gradientTwo");

  return (
    <div className={"App " + theme}>
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
        <main>
          
          <AddTask tasks={tasks} setTasks={setTasks} count={count} setCount={setCount}
          inputValue={inputValue} setInputValue={setInputValue} 
          toEdit={toEdit} setToEdit={setToEdit}
          currIndex={currIndex} setCurrIndex={setCurrIndex}/>

          <TaskList tasks={tasks} setTasks={setTasks} count={count} setCount={setCount}
          inputValue={inputValue} setInputValue={setInputValue} 
          toEdit={toEdit} setToEdit={setToEdit}
          currIndex={currIndex} setCurrIndex={setCurrIndex}/>

        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
