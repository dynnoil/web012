import PropTypes from 'prop-types';

export const Record = PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    active: PropTypes.bool,
});
