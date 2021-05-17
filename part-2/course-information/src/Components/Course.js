import React from 'react';
import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

function Course(props) {
    const { name, parts } = props.course;
    return (
        <div>
            <Header course={name} />
            <Content parts={parts} />
            <Total
                parts={parts} />
        </div>
    )
}

export default Course;