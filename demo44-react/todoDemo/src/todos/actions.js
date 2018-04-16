import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO
} from './actionTypes.js';

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId++,
    text: text
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
});
// 这两个方法相同,上面是下面的简写模式。
// export const toggleTodo = (id) => {
//     return {
//         type: TOGGLE_TODO,
//         id: id
//     }
// };

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
});