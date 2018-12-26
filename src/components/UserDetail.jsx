import React from 'react';
import PropTypes from 'prop-types';

export default class UserDetail extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string,
        about: PropTypes.string,
        hobby: PropTypes.string,
        skills: PropTypes.arrayOf(PropTypes.string)
    }

    static defaultProps = {
        name: 'Unknown',
        about: 'N/A',
        hobby: 'N/A',
        skills: ['None']
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div className="well profile">
                            <div className="col-sm-12">
                                <div className="col-xs-12 col-sm-8">
                                    <h2>{this.props.name}</h2>
                                    <p><strong>About: </strong>{this.props.about}</p>
                                    <p><strong>Hobbies: </strong>{this.props.hobby}</p>
                                    <p><strong>Skills: </strong>
                                        <span>{this.props.skills.join(', ')}</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm-4 text-center">
                                    <figure>
                                        <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg" alt="" className="img-circle img-responsive" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}