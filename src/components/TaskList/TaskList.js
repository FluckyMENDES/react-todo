import React from "react";
import classes from "./TaskList.module.scss";

import TaskItem from "./../TaskItem/TaskItem";

export default function TaskList(props) {
    const tasks = props.tasks.map((task) => {
        return (
            <TaskItem
                key={task.id}
                task={task}
                handleTaskChange={props.handleTaskChange}
                handleTaskRemoveBtnClick={props.handleTaskRemoveBtnClick}
                handleTaskImportantBtnClick={props.handleTaskImportantBtnClick}
                handleTaskEditBtnClick={props.handleTaskEditBtnClick}
                handleTaskEditComplete={props.handleTaskEditComplete}
            />
        );
    });
    return <ul className={classes.TaskList}>{tasks}</ul>;
}
