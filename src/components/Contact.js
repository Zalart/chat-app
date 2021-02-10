import PropTypes from 'prop-types';
import './Contact.css';

/* const source = 'https://randomuser.me/api/portraits/women/81.jpg';
const name = 'Emily Murphy';
const isOnline = true; */
function Contact(props) {
    const { avatar, name, online } = props;
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} alt={name} />
            <div>
                <div className="name">{name}</div>
                <div className="status">
                    <span className={online ? 'status-online' : 'status-offline'}></span>
                    <span className="status-text">{online ? 'Online' : 'Offline'}</span>
                </div>
            </div>


        </div>
    );
}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};
export default Contact;