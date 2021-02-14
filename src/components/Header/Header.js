import React from "react";
import classes from "./Header.module.scss";

export default function Header(props) {
    return <header className={classes.Header}>{props.children}</header>;
}
