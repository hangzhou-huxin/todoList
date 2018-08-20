import React, { Component } from 'react';
import * as filterTypes from '../common/filter-types'
import * as dataUtil from '../common/date'
import TodoItem from './TodoItem'

class TodoItems extends Component {
    constructor(props){
        super(props) ;

        this.state = { items: this.props.entries } ;
        this.createTasks = this.createTasks.bind(this) ;
        this.finishTask = this.finishTask.bind(this) ;
        this.deleteTask = this.deleteTask.bind(this) ;
    }


    createTasks(item ) {
        if ( this.props.filtertype === filterTypes.ALL || item.state === this.props.filtertype) {
            return (
                <TodoItem item={item} onDelete={this.deleteTask} onFinish={this.finishTask}/>);
        }
        return
    }

    finishTask(taskId){
        let tasks = this.props.entries ;
        for ( var i = 0; i <tasks.length; i++){
            if(tasks[i].id === taskId){
                console.log("--------------------------------------") ;
                tasks[i].state = filterTypes.COMPLETED ;
                break;
            }
        }
        this.setState({items : tasks }) ;
    }

    deleteTask(taskId){
        let tasks = this.props.entries ;
        for ( var i = 0; i <tasks.length; i++){
            if(tasks[i].id === taskId){
                console.log("--------------------------------------") ;
                tasks.splice(i,1);
                break;
            }
        }
        this.setState({items : tasks }) ;
    }

    render() {
        console.log (" begin render todoitems")
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        console.log ("listItems.length=" + listItems.length) ;
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col" width="150">创建时间</th>
                    <th scope="col" width="150">任务人</th>
                    <th scope="col" width="600">内容</th>
                    <th scope="col">操作</th>
                </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        );
    }
}

export  default TodoItems ;