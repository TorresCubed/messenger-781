export const addMessageToStore = (state, payload) => {
  const { message, sender, activeChat } = payload;
  // if sender isn't null, that means the message needs to be put in a brand new convo
  if (sender !== null) {
    const newConvo = {
      id: message.conversationId,
      otherUser: sender,
      messages: [message],
      latestMessageText: message.text,
      unreadCount: (sender.username === activeChat) ? 0 : 1,
    };
    
    return [newConvo, ...state];
  }

  return state.map((convo) => {
    if (convo.id === message.conversationId) {
      const convoCopy = {...convo };
      convoCopy.messages.push(message);
      convoCopy.latestMessageText = message.text;
      if(convo.otherUser.username !== activeChat && message.senderId === convo.otherUser.id) convoCopy.unreadCount = ++convo.unreadCount;
      return convoCopy;
    } else {
      return convo;
    }
  });
};

export const addOnlineUserToStore = (state, id) => {
  return state.map((convo) => {
    if (convo.otherUser.id === id) {
      const convoCopy = { ...convo };
      convoCopy.otherUser.online = true;
      return convoCopy;
    } else {
      return convo;
    }
  });
};

export const removeOfflineUserFromStore = (state, id) => {
  return state.map((convo) => {
    if (convo.otherUser.id === id) {
      const convoCopy = { ...convo };
      convoCopy.otherUser.online = false;
      return convoCopy;
    } else {
      return convo;
    }
  });
};

export const addSearchedUsersToStore = (state, users) => {
  const currentUsers = {};

  // make table of current users so we can lookup faster
  state.forEach((convo) => {
    currentUsers[convo.otherUser.id] = true;
  });

  const newState = [...state];
  users.forEach((user) => {
    // only create a fake convo if we don't already have a convo with this user
    if (!currentUsers[user.id]) {
      let fakeConvo = { otherUser: user, messages: [] };
      newState.push(fakeConvo);
    }
  });

  return newState;
};

export const addNewConvoToStore = (state, recipientId, message) => {
  return state.map((convo) => {
    if (convo.otherUser.id === recipientId) {
      const convoCopy = {...convo };
      convoCopy.id = message.conversationId;
      convoCopy.messages.push(message);
      convoCopy.latestMessageText = message.text;
      return convoCopy;
    } else {
      return convo;
    }
  });
};

export const clearUnreadFromStore = (state, conversationId, myId) => {
  return state.map((convo) => {
    if(convo.id === conversationId) {
      const convoCopy = { ...convo };
      convoCopy.unreadCount = 0;
      convoCopy.messages.forEach((message) => message.read = true);
      if(myId){
        const myMessages =  convoCopy.messages.filter((message) => (message.senderId === myId.id));
        convoCopy.otherUser.lastReadMessageId = myMessages[myMessages.length-1]?.id;
      }
      return convoCopy;
    } else {
      return convo;
    }
  });
};
