import React from 'react';
import {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useContext } from 'react';
import { Context } from '../Context';



function Form(props) {
    
    const [name, setName] = useState("");
    // const [date, setDate] = useState("");
    const [date, setDate] = useContext(Context);

    
    //Listener: Allows you to see what you're typing
    function handleChange(e) {
        setName(e.target.value);
        setDate(e.target.date);
        console.log(name);
        console.log(date);
        
    }
    //Listener: Popup alert once you click to add task
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name, date);
        console.log(name);
        console.log(date);
        // console.log(date-deadline);
        // console.log(typeof(date));
        setName("");
        setDate("");
        
        // alert("You get a task!");
    }
// console.log(date);

    return (
      <form onSubmit = {handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            .......
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value = {name}
          deadline = {date}
          onChange = {handleChange}
        />
        <div>
      <DatePicker
        showTimeInput
        // once date/time are selected update setDate
        selected={date}
        datetime = {props.datetime}
        onClick = {props.onClick}
        onChange={date => setDate(date)}
        // onChange={handleChange}
        dateFormat="MMMM d, yyyy hh:mmaa"
      />
        </div>
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    );
  }
  
  export default Form;
  