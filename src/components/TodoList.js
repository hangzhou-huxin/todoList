import React, { Component } from 'react';
import TodoItems from './TodoItems';
import UserList from './UserList';
import * as filterTypes from '../common/filter-types'
import 'bootstrap/dist/css/bootstrap.css'

class TodoList extends Component{
    constructor(props) {
        super(props) ;
        this._inputElement = null;
        this.state = {items: [] , filterType: filterTypes.ALL  } ;
        this.addItem = this.addItem.bind(this);
        this.listActiveItem = this.listActiveItem.bind(this) ;
        this.listCompletedItem = this.listCompletedItem.bind(this) ;
        this.listAllItem = this.listAllItem.bind(this) ;
        this.userListValue = '' ;
        this.setUserListValue = this.setUserListValue.bind(this) ;
        this.getUserListValue = this.getUserListValue.bind(this) ;
    }



    listCompletedItem(e) {
        this.setState({ filterType:filterTypes.COMPLETED }) ;
    }

    listAllItem(e){
        this.setState({ filterType:filterTypes.ALL }) ;
    }
    listActiveItem(e) {
        this.setState({ filterType:filterTypes.ACTIVE }) ;
    }

    setUserListValue(v){
        this.userListValue = v ;
    }

    getUserListValue(){
        return this.userListValue ;
    }

    addItem(e) {
        if(this.getUserListValue() == ''){
            alert("请选择用户") ;
            e.preventDefault();
            return ;
        }

        this.setState({ filterType:filterTypes.ACTIVE }) ;
        var itemArray = this.state.items;

        itemArray.push(
            {
                text: this._inputElement.value,
                id : Date.now(),
                date : new Date(),
                user : this.getUserListValue(),
                state: filterTypes.ACTIVE
            }
        );

        this.setState({
            items: itemArray
        });

        this._inputElement.value = "";

        e.preventDefault();
    }

    render() {
       return (
           <div className="container">
               <div className="row">
                    <form  onSubmit={this.addItem}>
                        <div className="form-group">
                            <UserList callback={ this.setUserListValue }/>
                            <input size="80" ref={ (inputElement) => this._inputElement = inputElement } placeholder="输入任务"></input>
                            <button type="submit">添加</button>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" onClick={ this.listAllItem}>全部</button>
                        <button type="button" className="btn btn-secondary" onClick={ this.listActiveItem }>待处理</button>
                        <button type="button" className="btn btn-secondary" onClick={ this.listCompletedItem }>已完成</button>
                    </div>
                </div>
                <div className="row">
                    <TodoItems entries={this.state.items} filtertype={this.state.filterType}/>
                </div>
           </div>
        );
    }
}

export  default TodoList ;
