import React from 'react';

const CheckBox = ({className, value, checked, onChange, id}) => {
    return (
        <div className="main-checkbox">
            <input type="checkbox" className="d-none" id={"check-" + id}/>
            <label htmlFor={"check-" + id} />
        </div>
    );
};

export default CheckBox;