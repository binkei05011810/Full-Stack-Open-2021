import React from 'react';
import '../Styles/Notification.css';

function Notification(props) {
    if (!props.message) return null

    return (
        <div className={props.type}>
            {props.message}
        </div>
    )
}

export default Notification;