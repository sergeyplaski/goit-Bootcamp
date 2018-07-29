import React, {Component} from 'react';
import TaskListComp from './Components/TaskList/TaskList';
import styles from './App.css';

class AppComp extends Component {

    static defaultProps = {};
    static propTypes = {};

    state = {
        savedTasks: [
            {id: '12345', taskText: 'aaaaaaaaa'},
            {id: '23456', taskText: 'bbbbb'},
            {id: '34567', taskText: 'ccccccc'},
        ],
        inputText: '',
    };

    inputChanged = (e) => {
        this.setState({inputText: e.target.value});
    };

    addTask = (e) => {
        e.preventDefault();
        const newTaskText = this.state.inputText.trim();
        if (newTaskText !== '') {
            const newTask = {id: Date.now().toString(), taskText: newTaskText};
            this.setState(prevState => ({
                savedTasks: [newTask, ...prevState.savedTasks],
                inputText: ''
            }));
        }
    };

    deleteTaskById = (taskID) => {
        console.log('removeTask');
        this.setState(prevState => (
            {savedTasks: prevState.savedTasks.filter(task => task.id !== taskID)}
            )
        )
    };

    // update task with taskID in the Component state:
    updateTaskById = (taskID, updatedText) => {
        console.log('updateTask');
        this.setState(
            {savedTasks: this.state.savedTasks.map(task => task.id === taskID
                    // ? {id: task.id, taskText: updatedText}
                    ? {...task, taskText: updatedText} // more general form
                    : task)
            }
        )
    };

    ops = {
        update: this.updateTaskById,
        delete: this.deleteTaskById,
    };

    render() {
        return (
            <div className={styles.wrapper}>
                <h1 className={styles.header}>ToDo List</h1>
                <form
                    className={styles.form}
                    onSubmit={this.addTask}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="New Task"
                        value={this.state.inputText}
                        onChange={this.inputChanged}
                    />
                    <button
                        className={styles.btn}
                        onClick={this.addTask}>
                        Create
                    </button>
                </form>
                <TaskListComp tasks={this.state.savedTasks}
                              ops={this.ops}
                />
            </div>
        )
    }
}

export default AppComp;