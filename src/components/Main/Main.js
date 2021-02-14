import React from "react";
import classes from "./Main.module.scss";

import TaskList from "./../TaskList/TaskList";

export default function Main(props) {
    return (
        <main className={classes.Main}>
            <TaskList
                tasks={props.tasks}
                handleTaskChange={props.handleTaskChange}
                handleTaskRemoveClick={props.handleTaskRemoveClick}
                handleTaskImportantClick={props.handleTaskImportantClick}
            />
        </main>
    );
}
