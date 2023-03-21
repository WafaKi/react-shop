import React from 'react';

const Select = ({style, options, defaultValue, value, onChange}) => {
    return (
        <select
            style={style}
            value={value}
            onChange={onChange}
        >
            <option value="" disabled>{defaultValue}</option>

            {options.map(option =>
                <option key={option.value} value={option.value}>{option.text}</option>
            )}
        </select>
    );
};

export default Select;