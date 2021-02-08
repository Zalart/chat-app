import './Contact.css';

const source = 'https://randomuser.me/api/portraits/women/81.jpg';
const name = 'Emily Murphy';
const isOnline = true;
function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src={source} alt="Avatar" />
            <div>
                <div className="name">{name}</div>
                <div className="status">
                    <span className={isOnline ? 'status-online' : 'status-offline'}></span>
                    <span className="status-text">{isOnline ? 'Online' : 'Offline'}</span>
                </div>
            </div>


        </div>
    );
}
export default Contact;