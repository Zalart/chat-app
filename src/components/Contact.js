import PropTypes from 'prop-types';
import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline: this.props.online,
        }
    }
    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name} />
                <div>
                    <div className="name">{this.props.name}</div>
                    <div className="status" onClick={event => {
                        const newStatus = !this.state.isOnline;
                        this.setState({ isOnline: newStatus });
                    }}>
                        <span className={this.state.isOnline ? 'status-online' : 'status-offline'}></span>
                        <span className="status-text">{this.state.isOnline ? 'Online' : 'Offline'}</span>
                    </div>
                </div>


            </div>
        );
    }

}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};
export default Contact;