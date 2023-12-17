
import React from 'react';
import { Link } from 'react-router-dom';
import socket from '../socket';
import "./homepage.css";

function HomePage() {
    const contacts = [{ nm: 'Vickram', profilePic: "https://cdnb.artstation.com/p/assets/images/images/060/532/263/large/mayank-freduced.jpg" },
    { nm: 'Nobu', profilePic: "https://miro.medium.com/v2/resize:fit:1024/0*wATbQ49jziZTyhZH.jpg" },
    { nm: 'Shura', profilePic: "https://cdn4.whatculture.com/images/2023/01/0e4540a9593b031a-600x338.jpg" },
    { nm: 'Kumar', profilePic: "https://w0.peakpx.com/wallpaper/865/348/HD-wallpaper-zoro-wano-anime-one-piece-manga.jpg" }];

    const handleLinkClick = (contactId) => {
        // Emit a 'joinRoom' event to the server
        socket.emit('joinRoom', contactId);
    };

    return (
        <div className='container'>
            <h1>Chat List</h1>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <img
                            src={contact.profilePic}
                            alt={`${contact.name}'s profile`}
                            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                        />
                        <Link to={`/chat/${index}`} onClick={() => handleLinkClick(index)}>
                            {contact.nm}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
