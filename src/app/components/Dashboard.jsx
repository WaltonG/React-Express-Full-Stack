import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList';


//Round bracket used to return  jsx object
export const Dashboard = ({groups})=>(
    <div>
        <h2>Dashboard</h2>
        {groups.map(group =>(
            <ConnectedTaskList id={group.id} name={group.name} />
        ))}
    </div>
);

const mapStateToProps = (state)=>(
    {
        groups:state.groups
    }

);

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);