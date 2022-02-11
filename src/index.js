import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './commentbox';

const App = () =>{
    return (
        <>
    <CommentBox name="Lene" Designation="Human Resources" number={22}/>
    </>
    
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)