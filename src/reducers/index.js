import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import editTask from './editTask';
import filterTable from './filterTable';

const myReducer = combineReducers({
	tasks,
	isDisplayForm,
	editTask,
	filterTable
});

export default myReducer;