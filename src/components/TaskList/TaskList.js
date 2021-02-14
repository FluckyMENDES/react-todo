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
                handleTaskRemoveClick={props.handleTaskRemoveClick}
                handleTaskImportantClick={props.handleTaskImportantClick}
            />
        );
    });
    return <ul className={classes.TaskList}>{tasks}</ul>;
}
