import React from "react";
import classes from "./Button.module.scss";

export default function Button(props) {
    // console.log(props.className);
    const cls = [classes.Button].concat(props.className).join(" ");

    return (
        <button className={cls} onClick={props.onClick}>
            {props.children}
        </button>
    );
}
