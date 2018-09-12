import React, { Component } from 'react';
import * as actions from './../actions/index';
import { connect } from 'react-redux';

class Sort extends Component {

    onClick = (by, value) => {
        this.props.onSort({by, value});
    }

    render() {
        const { sort } = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={ () => this.onClick('name', 1) }>
                            <a 
                                role="button"
                                className={ (sort.by === 'name' && sort.value === 1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={ () => this.onClick('name', -1) }>
                            <a 
                                role="button"
                                className={ ( sort.by === 'name' && sort.value === -1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={ () => this.onClick('status', 1) }>
                            <a 
                                role="button"
                                className={ ( sort.by === 'status' && sort.value === 1) ? 'sort_selected' : ''}
                            >Trạng Thái Kích Hoạt</a>
                        </li>
                        <li onClick={ () => this.onClick('status', -1) }>
                            <a 
                                role="button"
                                className={ ( sort.by === 'status' && sort.value === -1) ? 'sort_selected' : ''}
                            >Trạng Thái Ẩn</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sort: state.sortTask
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sort);