import React, { Component } from 'react';
import * as filterTypes from '../common/filter-types'
import * as dataUtil from "../common/date";

class TodoItem extends Component {

    constructor(props){
        super(props) ;
        //this.state = { id : }
        this.finish = this.finish.bind(this) ;
        this.delete = this.delete.bind(this) ;
    }

    finish(e){
        this.props.onFinish(this.props.item.id) ;
    }

    delete(e){
        this.props.onDelete(this.props.item.id) ;
    }

    render() {
        const state = this.props.state;
        var id = Date.now();
        //return <li key={id}>{this.props.text}</li>
        let taskState = this.props.item.state;
        if (taskState === filterTypes.ACTIVE) {
            return (
            <tr bgcolor="aqua">
                <td>{dataUtil.dateFtt("yyyy-MM-dd hh:mm:ss", this.props.item.date)}</td>
                <td>{this.props.item.user}</td>
                <td>{this.props.item.text}</td>
                <td>
                        <span className="badge badge-primary badge-pill">
                            <button className="btn btn-primary" onClick={this.finish}>完成</button>
                             <button className="btn btn-primary" onClick={this.delete}>删除</button>
                        </span>
                </td>
            </tr>)
        }else if( taskState === filterTypes.COMPLETED){
            return (
                <tr bgcolor="#7cfc00">
                    <td>{dataUtil.dateFtt("yyyy-MM-dd hh:mm:ss", this.props.item.date)}</td>
                    <td>{this.props.item.user}</td>
                    <td>{this.props.item.text}</td>
                    <td>
                        <span className="badge badge-primary badge-pill">
                            <button className="btn btn-primary" onClick={this.delete}>删除</button>
                        </span>
                    </td>
                </tr>)
        }
    }
}

export  default TodoItem ;