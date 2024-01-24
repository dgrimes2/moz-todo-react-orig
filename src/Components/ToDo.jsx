import Form from "./Form";


function Todo(props) {
  //Test 
  console.log(props);
  // console.log(Form());
  // console.log(Form(handleChange()));
    return( 
        <li className="todo stack-small">
          <div className="c-cb">
            <input 
                id= {props.date} 
                type="checkbox" 
                defaultChecked = {props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)} />

            
            <label className="todo-label" htmlFor= {props.id}>
              {props.name + " " + props.date}
            </label>
          </div>
          <div className="btn-group">
            {/* <button type="button" className="btn">
              Edit <span className="visually-hidden">{props.name}</span>
            </button> */}
            <button 
            type="button" 
            className="btn btn__danger"
            onClick = {() => props.deleteTask(props.id)}>
              Delete <span className="visually-hidden">{props.name}</span>
            </button>
          </div>
        </li>
    );
    
  };

export default Todo;