import React from "react";
import classes from "./Footer.module.scss";

import AddTask from "./../AddTask/AddTask";

export default function Footer(props) {
    return (
        <footer className={classes.Footer}>
            <AddTask handleAddTaskSubmit={props.handleAddTaskSubmit} />
        </footer>
    );
}
