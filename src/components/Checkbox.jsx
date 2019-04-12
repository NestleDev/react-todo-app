import React from 'react';
import '../scss/blocks/Checkbox.scss';

function Checkbox(props) {
    return (
        <label className="checkbox">
            <input type="checkbox" defaultChecked={props.checked} className="checkbox__input" onChange={props.onChange} />
            <span className="checkbox__box" title="Выполнить">
                <i className="fas fa-check"></i>
            </span>
        </label>
    );
}

export default Checkbox;
