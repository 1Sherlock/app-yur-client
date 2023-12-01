import React from 'react';

const ContentWrap = (props) => {
    return (
        <div className="card-wrap">
            {props.children}
        </div>
    );
};

export default ContentWrap;