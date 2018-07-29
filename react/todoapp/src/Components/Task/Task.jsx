import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import styles from './Task.css';

class TaskComp extends Component {
    static defaultProps = {
        ops: {
            update: () => null,
            delete: () => null,
        }
    };

    static propTypes = {
        taskitem: PropTypes.shape({
            id: PropTypes.string.isRequired,
            taskText: PropTypes.string.isRequired,
        }),
        ops: PropTypes.shape({
            update: PropTypes.func,
            delete: PropTypes.func,
        }),
    };

    state = {
        editMode: false,
        taskText: this.props.taskitem.taskText,
    };

    toggleEditMode = () => {
        this.setState(state => (
            {editMode: !state.editMode}
            )
        )
    };

    inputTextChanged = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        // console.log(name, val);
        this.setState(
            {[name]: val}
        )
    };

    cancelSave = () => {
      this.setState(
          {editMode: false,
           taskText: this.props.taskitem.taskText,
          }
      )
    };

    saveUpdatedTask = () => {
        this.props.ops.update(this.props.taskitem.id, this.state.taskText);
        this.toggleEditMode();
    };

    deleteTask = () => {
      this.props.ops.delete(this.props.taskitem.id);
    };

    render() {
        return (
            <li className={styles.tasklist__item}>
                {/*conditional rendering:*/}
                {!this.state.editMode ?
                    <div className={styles["tasklist__item-container"]}>
                        <span className={styles["tasklist__item-text"]}>
                            {this.props.taskitem.taskText}
                        </span>
                        <div className={styles["tasklist__item-btns"]}>
                            <Button caption="Edit" onClick={this.toggleEditMode} />
                            <Button caption="Delete" onClick={this.deleteTask} />
                        </div>
                    </div>
                    :
                    <div className={styles["tasklist__item-container"]}>
                        <input
                            type="text"
                            name="taskText"
                            value={this.state.taskText}
                            onChange={this.inputTextChanged}
                            className={styles["tasklist__item-edit"]}
                        />
                        <div className={styles["tasklist__item-btns"]}>
                            <Button caption="Save" onClick={this.saveUpdatedTask}/>
                            <Button caption="Cancel" onClick={this.cancelSave}/>
                        </div>
                    </div>
                }
            </li>
        );
    }
}

export default TaskComp;