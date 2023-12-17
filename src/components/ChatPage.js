// ChatPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../socket';
import { addMessage, deleteMessage, likeMessage } from '../redux/actions';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTrashAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons
import "./chatpage.css"



function ChatPage() {
    const { contactId } = useParams();
    const dispatch = useDispatch();
    const chatHistory = useSelector((state) => state.chatHistory);
    const [messageText, setMessageText] = useState('');
    const contacts = ['Vickram', 'Nobu', 'shura', 'kumar'];  // Define the contacts array
    const filteredChatHistory = chatHistory.filter((message) => {
        console.log('Contact ID:', contactId);
        console.log('Message:', message.contactId);
        console.log(message.contactId === contactId)
        return message.contactId === contactId;

    });

    useEffect(() => {
        const handleReceiveMessage = (message) => {
            console.log('Received message:', message);
            dispatch(addMessage(message, contactId)); // Pass both message and contactId

        };

        socket.on('receiveMessage', handleReceiveMessage);

        socket.emit('joinRoom', contactId);

        return () => {
            socket.off('receiveMessage', handleReceiveMessage);
            socket.emit('leaveRoom', contactId);
        };
    }, [dispatch, contactId]);

    const handleSendMessage = () => {
        if (messageText.trim() !== '') {
            console.log('Sending message with contactId:', contactId);
            socket.emit('sendMessage', { hello: "helllo", text: messageText, user: { username: 'sibi' }, contactId: Number(contactId), });
            setMessageText('');
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h1>Chat with {contacts[contactId]}</h1>
                {filteredChatHistory.map((message) => (
                    <div key={message.id}>
                        <p>{message.user.username}: {message.text}
                            {message.liked && <i className="fas fa-thumbs-up" style={{ color: 'blue' }}></i>}
                        </p>
                        <div className="message-buttons">
                            <button className="button" onClick={() => dispatch(deleteMessage(message.id))}>
                                <FontAwesomeIcon icon={faTrashAlt} /> {/* Trash bin icon for delete */}
                            </button>
                            <button className="button" onClick={() => dispatch(likeMessage(message.id))}>
                                <FontAwesomeIcon icon={faThumbsUp} /> {/* Thumbs up icon for like */}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    className='input-box'
                    type="text"
                    placeholder="Type your message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                />
                <button className="send-button" onClick={handleSendMessage}>
                    <FontAwesomeIcon icon={faPaperPlane} /> {/* Paper plane icon for sending */}
                </button>
            </div>
        </div>
    );
}

export default ChatPage;
