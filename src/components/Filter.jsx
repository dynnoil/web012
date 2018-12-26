import React from 'react';
import PropTypes from 'prop-types';

export const Filter = React.forwardRef((props, ref) => (
    <input
        ref={ref}
        type="text"
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.onFilterChange} />
));

Filter.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onFilterChange: PropTypes.func
}

Filter.defaultProps = {
    className: '',
    placeholder: 'Filter by ...',
    onFilterChange: () => { }
}
