import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({tasks, name})=>(
    <div>
        <h3>
            {name}
        </h3>
        <div>
        {tasks.map(task =>(
            <div>
                {task.name}
            </div>
        ))
        } 
        </div>
    </div>
)

//How do we know which task to include
//Second argument is the props of the component
const mapStateToProps = (state, ownProps)=>{
    let groupID = ownProps.id;
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task=>task.group === groupID)
    }
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);