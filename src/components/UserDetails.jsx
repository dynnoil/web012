import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import UserDetail from './UserDetail.jsx';

export class UserDetails extends React.PureComponent {

    static propTypes = {
        details: PropTypes.array
    }

    static defaultProps = {
        details: []
    }

    render() {
        return (
            <div>
                {this.props.details
                    .filter(detail => {
                        const userId = this.props.match.params.id;
                        return userId ? detail.id == userId : true;
                    })
                    .map(userDetail =>
                        <UserDetail key={userDetail.id} {...userDetail} />
                    )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    details: state.details
});

export default connect(mapStateToProps)(UserDetails);
