import React, {Component} from 'react';
import axios from 'axios'; // 0730 - added axios pkg for communicating with json-server
import TaskListComp from './Components/TaskList/TaskList';
import styles from './App.css';

class AppComp extends Component {

    static defaultProps = {};
    static propTypes = {};

    state = {
        savedTasks: [],
        inputText: '',
    };

    componentDidMount() {
        axios.get('/tasks') //using proxy on port 3001
            .then(({status, data}) => {
                if (status === 200) {
                    this.setState({savedTasks: data})
                }
            })
    };

    inputChanged = (e) => {
        this.setState({inputText: e.target.value});
    };

    addTask = (e) => {
        e.preventDefault();
        // const newTaskText = this.state.inputText.trim();
        // if (newTaskText !== '') {
        //     const newTask = {id: Date.now().toString(), taskText: newTaskText};
        //     this.setState(prevState => ({
        //         savedTasks: [newTask, ...prevState.savedTasks],
        //         inputText: ''
        //     }));
        // }

        // server version:
        const newTaskText = this.state.inputText.trim();
        if (newTaskText !== '') {
            const newTask = {taskText: newTaskText};  // id is no longer needed, it will be generated on server
            axios.post('/tasks', newTask)
                .then(({data, status}) => {
                    if (status === 201) {
                        this.setState( prev => ({savedTasks: [data, ...prev.savedTasks], inputText: ''}) )
                    }
                })
        }
    };

    deleteTaskById = (taskID) => {
        // this.setState(prevState => (
        //         {savedTasks: prevState.savedTasks.filter(task => task.id !== taskID)}
        //     )
        // )

        // server version:
        axios.delete(`/tasks/${taskID}`)
        .then(({status}) => {
            if (status === 200) {
                this.setState({savedTasks: this.state.savedTasks.filter(task => task.id !== taskID)})
            }
        })
    };

    // update task with taskID in the Component state:
    updateTaskById = (taskID, updatedText) => {
        // this.setState(
        //     {savedTasks: this.state.savedTasks.map(task => task.id === taskID
        //             ? {...task, taskText: updatedText} // more general form
        //             : task)
        //     }
        // )

        // server version:
        // first, get the object to pass into the axios.put()
        const updTask = this.state.savedTasks.find(task => task.id !== taskID);
        axios.put(`/tasks/${taskID}`, {...updTask, taskText: updatedText})
            .then(({status, data}) => {  // we receive the updated object in data
                if (status === 200) {
                    this.setState({savedTasks: this.state.savedTasks.map(
                        task => task.id === taskID
                            ? data
                            : task
                        )})
                }
            })
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
