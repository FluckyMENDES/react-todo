import React, { Component } from "react";
import classes from "./AddTask.module.scss";

import { Form, Button, InputGroup, InputGroupAddon, Input } from "reactstrap";

export default class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    handleSubmit = (e) => {
        this.props.handleAddTaskSubmit(this.state.value, e);
        this.setState({
            value: "",
        });
    };
    render() {
        return (
            <Form className={classes.AddTask} onSubmit={this.handleSubmit}>
                <InputGroup>
                    <Input
                        value={this.state.value}
                        placeholder="напр. Купить помидоры"
                        onChange={this.handleChange}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button>Добавить</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
        );
    }
}
