export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});

export const addMessage = (message, contactId) => ({
    type: 'ADD_MESSAGE',
    payload: { ...message, contactId },
});

export const deleteMessage = (messageId) => ({
    type: 'DELETE_MESSAGE',
    payload: messageId,
});

export const likeMessage = (messageLike) => ({
    type: 'LIKE_MESSAGE',
    payload: messageLike,
});