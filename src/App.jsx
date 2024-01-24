import React from 'react';
import { useState } from 'react';
import './App.css';
import Todo from './Components/ToDo';
// import FilterButton from './Components/FilterButton';
import Form from './Components/Form';
import { nanoid } from 'nanoid';
import DatePicker from 'react-datepicker';


// const taskList = props.tasks?.map((task) => task.name);

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  // use this addTask function as a callback to connect with "Form"
  function addTask(name) {
    // alert(name);
    // add task(name) into an object to add to array of tasks. Nanoid provides new ids for new tasks
    const newTask = {id: `todo-${nanoid()}`, name, completed: false, date: Date(new Date)};
    // remind myself what this spread is for
    setTasks([...tasks, newTask]);
  }
  
  function addDeadline(date) {
    
  }
  // console.log(props.tasks);
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
    if (id === task.id) {
      // spread for marking new object as complete
      return { ...task, completed: !task.completed };
    }
    return task;
    })
    // use this to update state
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    // console.log(id);
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  

  // map through the list of properties for each task
  const taskList = tasks.map((task) => (
    <Todo 
    id={task.id} 
    name={task.name} 
    completed={task.completed}
    key = {task.id}
    date = {task.date}
    toggleTaskCompleted = {toggleTaskCompleted}
    deleteTask = {deleteTask} />
  ));
    // Check if props.tasks is undefined before you try to assign a name
  
  // Count up and down
    const headingText = `${taskList.length} tasks remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>ProcrastiNOT ToDo List</h1>
      {/* callback to pass to "Form" */}
      <Form addTask = {addTask} />
      {/* <div className='filters btn-group stack-exception'>
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div> */}
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;


      
//         <h2 className="label-wrapper">
//           <label htmlFor="new-todo-input" className="label__lg">
//            .......
//           </label>
//         </h2>
//         <input
//           type="text"
//           id="new-todo-input"
//           className="input input__lg"
//           name="text"
//           autoComplete="off"
//         />
//         <button type="submit" className="btn btn__primary btn__lg">
//           Add Task
//         </button>
//       </form>
//       <div className="filters btn-group stack-exception">
//         <button type="button" className="btn toggle-btn" aria-pressed="true">
//           <span className="visually-hidden">Show </span>
//           <span>all</span>
//           <span className="visually-hidden"> tasks</span>
//         </button>
//         <button type="button" className="btn toggle-btn" aria-pressed="false">
//           <span className="visually-hidden">Show </span>
//           <span>Active</span>
//           <span className="visually-hidden"> tasks</span>
//         </button>
//         <button type="button" className="btn toggle-btn" aria-pressed="false">
//           <span className="visually-hidden">Show </span>
//           <span>Completed</span>
//           <span className="visually-hidden"> tasks</span>
//         </button>
//       </div>
//       {/* This is where we will count the running number of tasks */}
//       <h2 id="list-heading">3 tasks remaining</h2>
//       <ul
//         role="list"
//         className="todo-list stack-large stack-exception"
//         aria-labelledby="list-heading">
//         {/* <Todo name = "ProcrastiNOT 1" id="todo-0" completed/>
//         <Todo name = "ProcrastiNOT 2" id="todo-1"/>
//         <Todo name = "ProcrastiNOT 3" id="todo-2"/> */}
//         {taskList}
//       </ul>
//     </div>
//   );
// }

// export default App;