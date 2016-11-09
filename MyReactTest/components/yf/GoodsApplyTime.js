import React, {Component} from 'react';
/**
 * 申请时间
 */
export const ApplyTimeView = (props) => {
    return <div>
        申请时间: {props.time}
    </div>;
}
ApplyTimeView.defaultProps = {
    time: "1910:00:00",
}