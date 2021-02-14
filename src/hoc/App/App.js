import React, { Component } from "react";
import classes from "./App.module.scss";

import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import Main from "./../../components/Main//Main";

export default class App extends Component {
    constructor(props) {
        super(props);
        const tasks = [
            {
                id: "1",
                desc: "Купить свеклу",
                isDone: true,
                isImportant: false,
                isEditing: false,
            },
            {
                id: "2",
                desc: "Помыть кастрюлю",
                isDone: false,
                isImportant: false,
                isEditing: false,
            },
            {
                id: "3",
                desc: "Сварить борщ",
                isDone: false,
                isImportant: true,
                isEditing: false,
            },
        ];

        this.state = {
            tasks,
            taskLastId: tasks[tasks.length - 1].id,
        };
    }
    handleTaskChange = (id) => {
        const tasks = this.state.tasks.slice();
        const task = tasks.find((task) => task.id === id);
        task.isDone = !task.isDone;

        this.setState({
            tasks,
        });
    };
    handleTaskEditBtnClick = (id, e) => {
        const tasks = this.state.tasks.slice();
        const task = tasks.find((task) => task.id === id);
        task.isEditing = !task.isEditing;

        this.setState({
            tasks,
        });
    };
    handleTaskEditComplete = (id, e) => {
        e.preventDefault();
        const tasks = this.state.tasks.slice();
        const task = tasks.find((task) => task.id === id);
        // console.dir(e.target.querySelector("input").value);
        const newValue = e.target.querySelector("input").value;
        task.desc = newValue;
        task.isEditing = false;

        this.setState({
            tasks,
        });
    };
    handleTaskRemoveBtnClick = (id) => {
        const tasks = this.state.tasks.slice();
        const newTasks = tasks.filter((task) => task.id !== id);
        this.setState({
            tasks: newTasks,
        });
    };
    handleTaskImportantBtnClick = (id) => {
        const tasks = this.state.tasks.slice();
        const task = tasks.find((task) => task.id === id);
        task.isImportant = !task.isImportant;
        this.setState({
            tasks,
        });
    };
    handleAddTaskSubmit = (value, e) => {
        e.preventDefault();

        const tasks = this.state.tasks.slice();
        const newTask = {
            id: +this.state.taskLastId + 1 + "",
            desc: value,
            isDone: false,
            isImportant: false,
            isEditing: false,
        };
        const newTasks = tasks.concat(newTask);

        this.setState({
            tasks: newTasks,
            taskLastId: newTask.id,
        });
    };
    render() {
        return (
            <div className={classes.App}>
                <Header>Header</Header>
                <Main
                    tasks={this.state.tasks}
                    handleTaskChange={this.handleTaskChange}
                    handleTaskRemoveBtnClick={this.handleTaskRemoveBtnClick}
                    handleTaskImportantBtnClick={this.handleTaskImportantBtnClick}
                    handleTaskEditBtnClick={this.handleTaskEditBtnClick}
                    handleTaskEditComplete={this.handleTaskEditComplete}
                />
                <Footer handleAddTaskSubmit={this.handleAddTaskSubmit}>Footer</Footer>
            </div>
        );
    }
}
