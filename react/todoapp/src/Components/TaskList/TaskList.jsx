import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskList.css';
import TaskComp from "../Task/Task";

const TaskListComp = ({tasks, ops}) => {
    // console.log(ops);
    return (
        <ul className={styles.tasklist}>
            {tasks.map(task =>
                <TaskComp taskitem={task}
                          ops={ops}
                          key={task.id}
                />)}
        </ul>)
};

TaskListComp.defaultProps = {};

TaskListComp.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            taskText: PropTypes.string.isRequired,
        })
    ),
    ops: PropTypes.shape({
        update: PropTypes.func,
        delete: PropTypes.func,
    }),
};

export default TaskListComp;