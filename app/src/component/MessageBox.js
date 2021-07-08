import React from 'react';
import "../css/MessageBox.css"

function MessageBox(props) {

    return (
        <div className="messageBoxContainer">
       <div className={`alert alert-${props.variant || 'info'}`}>
           {props.children}
       </div>
        </div>
    );
}

export default MessageBox;