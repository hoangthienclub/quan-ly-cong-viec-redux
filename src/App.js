import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            keyword: '',
            sortBy: 'name',
            sortValue: 1
        };
    }

    onToggleForm = () => {
        var { editTask } = this.props;
        if (editTask && editTask.id !== '') {
            this.props.onOpenForm();
        } else {
            this.props.onToggleForm();
        }
        this.props.onClearTask({
            id: '',
            name: '',
            status: false
        });
    }

    onShowForm = () => {
        this.props.onOpenForm();
    }

    findIndex = (id) => {
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        });
        return result;
    }

    onUpdate = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing: taskEditing
        });
        this.onShowForm();
    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        });
    }

    onSort = (sortBy , sortValue) => {
        this.setState({
           sortBy: sortBy,
           sortValue: sortValue
        });
    }

    render() {
        var { 
            // tasks, 
            sortBy,
            sortValue
        } = this.state;

        var { isDisplayForm } = this.props;

        // if (keyword) {
            // tasks = tasks.filter(task => {
            //     return task.name.toLowerCase().indexOf(keyword) !== -1;
            // });
        // }
        // if (sortBy === 'name') {
        //     tasks.sort((a, b) => {
        //         if (a.name > b.name) return sortValue;
        //         else if (a.name < b.name) return -sortValue;
        //         else return 0;
        //     });
        // }
        // else {
        //     tasks.sort((a, b) => {
        //         if (a.status > b.status) return -sortValue;
        //         else if (a.status < b.status) return sortValue;
        //         else return 0;
        //     });
        // }

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className= { isDisplayForm === true? 'col-xs-4 col-sm-4 col-md-4 col-lg-4': '' }>
                        <TaskForm/>
                    </div>
                    <div className={ isDisplayForm === true? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick= { this.onToggleForm }
                        >
                            <span className="fa fa-plus mr-5"></span> Thêm Công Việc
                        </button>
                        <Control 
                            onSearch = { this.onSearch }
                            onSort = { this.onSort }
                            sortBy = { sortBy }
                            sortValue = { sortValue }
                        />
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        editTask: state.editTask
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onClearTask: (task) => {
            dispatch(actions.editTask(task));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);