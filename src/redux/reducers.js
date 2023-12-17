const initialState = {
    user: null,
    chatHistory: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'ADD_MESSAGE':
            return { ...state, chatHistory: [...state.chatHistory, action.payload] };
        case 'DELETE_MESSAGE':
            // Implement logic to delete a message
            return {
                ...state,
                chatHistory: state.chatHistory.filter((message) => message.id !== action.payload),
            };
        case 'LIKE_MESSAGE':
            // Implement logic to like a message
            const likedMessageId = action.payload;
            const updatedChatHistory = state.chatHistory.map((message) => {
                if (message.id === likedMessageId) {
                    // Toggle the 'liked' status of the message
                    return { ...message, liked: !message.liked };
                }
                return message;
            });
            return { ...state, chatHistory: updatedChatHistory };
        default:
            return state;
    }
};

export default rootReducer;