import React from 'react';
import Statistic from './Statistic.js';

function Statistics(props) {
    return (
        <table>
            <tbody>
                <Statistic text="good" value={props.good} />
                <Statistic text="neutral" value={props.neutral} />
                <Statistic text="bad" value={props.bad} />
            </tbody>

            {props.good + props.neutral + props.bad > 0 &&
                <tbody>
                    <Statistic text="all" value={props.all} />
                    <Statistic text="average" value={props.average} />
                    <Statistic text="positive" value={props.positive} />
                </tbody>}
        </table>
    )
}

export default Statistics;