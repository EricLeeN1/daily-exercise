import React from 'react';
import {view as Todos } from "./todos/";
import {view as Filter } from "./filter/";

function TodoApp() {
    return (
        <div>
        <Todos></Todos>
        <Filter></Filter>
        </div>
    );
}
export default TodoApp;