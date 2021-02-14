import React from "react";
import classes from "./TaskControlls.module.scss";

import Button from "./../Button/Button";
import { AiFillEdit } from "react-icons/ai";
import { IoTrash, IoStar, IoStarOutline } from "react-icons/io5";

export default function TaskControlls(props) {
    return (
        <div className={classes.TaskControlls}>
            <Button className={classes.edit}>
                <AiFillEdit />
            </Button>
            <Button
                className={classes.important}
                onClick={() => props.handleTaskImportantClick(props.task.id)}>
                {props.task.isImportant ? <IoStar /> : <IoStarOutline />}
            </Button>
            <Button
                className={classes.remove}
                onClick={() => props.handleTaskRemoveClick(props.task.id)}>
                <IoTrash />
            </Button>
        </div>
    );
}
