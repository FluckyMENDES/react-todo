import React from "react";
import classes from "./TaskControlls.module.scss";

import Button from "./../Button/Button";
import { AiFillEdit } from "react-icons/ai";
import { IoTrash, IoStar, IoStarOutline } from "react-icons/io5";

export default function TaskControlls(props) {
    return (
        <div className={classes.TaskControlls}>
            <Button
                className={classes.edit}
                onClick={() => props.handleTaskEditBtnClick(props.task.id)}>
                <AiFillEdit />
            </Button>
            <Button
                className={classes.important}
                onClick={() => props.handleTaskImportantBtnClick(props.task.id)}>
                {props.task.isImportant ? <IoStar /> : <IoStarOutline />}
            </Button>
            <Button
                className={classes.remove}
                onClick={() => props.handleTaskRemoveBtnClick(props.task.id)}>
                <IoTrash />
            </Button>
        </div>
    );
}
