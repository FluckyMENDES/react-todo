import React from "react";
import classes from "./TaskItem.module.scss";

import TaskControlls from "./../TaskControlls/TaskControlls";

export default function TaskItem(props) {
    return (
        <li className={`${classes.TaskItem} ${props.task.isDone ? classes.done : ""}`}>
            <input
                id={props.task.id}
                type="checkbox"
                checked={props.task.isDone ? true : false}
                onChange={() => props.handleTaskChange(props.task.id)}></input>
            <label htmlFor={props.task.id}>{props.task.desc}</label>
            <TaskControlls
                task={props.task}
                handleTaskRemoveClick={props.handleTaskRemoveClick}
                handleTaskImportantClick={props.handleTaskImportantClick}
            />
        </li>
    );
}