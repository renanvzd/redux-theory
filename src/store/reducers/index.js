import { combineReducers } from "redux";

import course from './course';
// import user from './user;'

export default combineReducers({
  course,
  // user,
});

// Usando combineReducers, transforma o State em objeto, que passaria a ficar dentro de um objeto:
/*
{ 
  course: {modules: [], activeLesson: {}, activeModule:{}}, 
  user: {name: '', avatar:''}
}
*/