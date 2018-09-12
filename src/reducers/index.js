import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import editTask from './editTask';
import filterTable from './filterTable';
import searchTask from './searchTask';
import sortTask from './sortTask';

const myReducer = combineReducers({
	tasks,
	isDisplayForm,
	editTask,
	filterTable,
	searchTask,
	sortTask
});

export default myReducer;