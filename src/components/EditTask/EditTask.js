import React, { Component } from "react";
import classes from "./EditTask.module.scss";

import OutsideClickHandler from "react-outside-click-handler";

export default class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.task.desc,
        };
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    handleEnterKeydown = (e) => {
        if (e.code === "Enter") {
            this.props.handleTaskEditComplete(this.props.task.id, e);
        }
    };

    handleEscKeydown = (e) => {
        if (e.code === "Escape") {
            this.props.handleTaskEditBtnClick(this.props.task.id, e);
        }
    };

    handleClickOutside = (e) => {};

    componentDidMount() {
        console.log(this);
        document.addEventListener("keydown", this.handleEscKeydown);
        document.addEventListener("keydown", this.handleEnterKeydown);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleEscKeydown);
        document.removeEventListener("keydown", this.handleEnterKeydown);
    }

    render() {
        return (
            <OutsideClickHandler
                onOutsideClick={() => this.props.handleTaskEditBtnClick(this.props.task.id)}>
                <input
                    className={classes.edit}
                    type="text"
                    value={this.state.value}
                    autoFocus={true}
                    onChange={this.handleChange}
                />
            </OutsideClickHandler>
        );
    }
}
