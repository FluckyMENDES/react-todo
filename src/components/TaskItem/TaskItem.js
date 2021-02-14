import React from "react";
import classes from "./TaskItem.module.scss";

import TaskControlls from "./../TaskControlls/TaskControlls";
import EditTask from "./../EditTask/EditTask";

export default function TaskItem(props) {
    let value = <label htmlFor={props.task.id}>{props.task.desc}</label>;
    if (props.task.isEditing) {
        value = (
            <EditTask
                task={props.task}
                handleTaskEditBtnClick={props.handleTaskEditBtnClick}
                handleTaskEditComplete={props.handleTaskEditComplete}
            />
        );
    }
    return (
        <li className={`${classes.TaskItem} ${props.task.isDone ? classes.done : ""}`}>
            <input
                className={classes.checkbox}
                id={props.task.id}
                type="checkbox"
                checked={props.task.isDone ? true : false}
                onChange={() => props.handleTaskChange(props.task.id)}
            />
            {value}
            <TaskControlls
                task={props.task}
                handleTaskRemoveBtnClick={props.handleTaskRemoveBtnClick}
                handleTaskImportantBtnClick={props.handleTaskImportantBtnClick}
                handleTaskEditBtnClick={props.handleTaskEditBtnClick}
            />
        </li>
    );
}
