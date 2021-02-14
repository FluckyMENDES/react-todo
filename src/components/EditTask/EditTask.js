import React, { Component } from "react";
import classes from "./EditTask.module.scss";

import { Form, Button, InputGroup, InputGroupAddon, Input } from "reactstrap";
import { GoCheck } from "react-icons/go";
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

    handleSubmit = (e) => {
        this.props.handleTaskEditComplete(this.props.task.id, e);
    };

    handleEscKeydown = (e) => {
        if (e.code === "Escape") {
            this.props.handleTaskEditBtnClick(this.props.task.id, e);
        }
    };

    componentDidMount() {
        document.addEventListener("keydown", this.handleEscKeydown);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleEscKeydown);
    }

    render() {
        return (
            <div className={classes.edit}>
                <OutsideClickHandler
                    onOutsideClick={() => this.props.handleTaskEditBtnClick(this.props.task.id)}>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup>
                            <Input
                                className={classes.input}
                                nane="value"
                                value={this.state.value}
                                onChange={this.handleChange}
                                autoFocus={true}
                            />
                            <InputGroupAddon addonType="prepend">
                                <Button className={classes.apply}>
                                    <GoCheck color="green" />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Form>
                </OutsideClickHandler>
            </div>
        );
    }
}
