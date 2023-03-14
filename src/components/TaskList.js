import editIcon from "../assets/edit-icon-2.png";
import deleteIcon from "../assets/delete-icon.png";


export const TaskList = ({tasks, setTasks, setInputValue, setToEdit, setCurrIndex}) => {

  const handleClearAll = () => {
    setTasks([]);
  }

  const handleEdit = (item, index) => {
    setInputValue(item.name);
    setToEdit(true);
    setCurrIndex(index);
  }

  const handleDelete = (itemToDelete) => {
    setTasks(tasks.filter((task) => task !== itemToDelete));
  }

  return (
    <section className="showtasks">
        <p className="top">
            <span>
                <span className="title">Tasks</span>
                <span className="count">{tasks.length}</span>
            </span>
            <span onClick={handleClearAll} className="clear">Clear All</span>
        </p>
        <ul>
          {tasks.map((task, index) => (
            <li key={task.id}>
              <p>
                <span className="info">{task.name}</span>
                <span className="time">{task.time}</span>
              </p>
              <span onClick={() => handleEdit(task, index)}><img className="iconImage" src={editIcon} alt="" /></span>
              <span onClick={() => handleDelete(task)}><img className="iconImage" src={deleteIcon} alt="" /></span>
            </li>
          ))}
        </ul>
    </section>
  )
}
