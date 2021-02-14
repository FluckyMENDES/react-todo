import React from "react";
import classes from "./Main.module.scss";

import TaskList from "./../TaskList/TaskList";

export default function Main(props) {
    return (
        <main className={classes.Main}>
            <TaskList
                tasks={props.tasks}
                handleTaskChange={props.handleTaskChange}
                handleTaskRemoveBtnClick={props.handleTaskRemoveBtnClick}
                handleTaskImportantBtnClick={props.handleTaskImportantBtnClick}
                handleTaskEditBtnClick={props.handleTaskEditBtnClick}
                handleTaskEditComplete={props.handleTaskEditComplete}
            />
        </main>
    );
}
