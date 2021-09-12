import {
  addNewConvoToStore,
  addOnlineUserToStore,
  addSearchedUsersToStore,
  removeOfflineUserFromStore,
  addMessageToStore,
  clearUnreadFromStore,
  adjustLastReadInStore
} from "./utils/reducerFunctions";

// ACTIONS

const GET_CONVERSATIONS = "GET_CONVERSATIONS";
const SET_MESSAGE = "SET_MESSAGE";
const ADD_ONLINE_USER = "ADD_ONLINE_USER";
const REMOVE_OFFLINE_USER = "REMOVE_OFFLINE_USER";
const SET_SEARCHED_USERS = "SET_SEARCHED_USERS";
const CLEAR_SEARCHED_USERS = "CLEAR_SEARCHED_USERS";
const ADD_CONVERSATION = "ADD_CONVERSATION";
const CLEAR_UNREAD = "CLEAR_UNREAD";
const ADJUST_LAST_READ = "ADJUST_LAST_READ"

// ACTION CREATORS

export const gotConversations = (conversations) => {
  return {
    type: GET_CONVERSATIONS,
    conversations,
  };
};

export const adjustRead = (myId, conversationId) => {
  return {
    type: ADJUST_LAST_READ,
    payload: { myId, conversationId: conversationId},
  };
};

export const setNewMessage = (message, sender, activeChat ) => {
  return {
    type: SET_MESSAGE,
    payload: { message, sender: sender || null, activeChat: activeChat },
  };
};

export const clearUnreadCount = (conversationId) => {
  return {
    type: CLEAR_UNREAD,
    conversationId
  }
}

export const addOnlineUser = (id) => {
  return {
    type: ADD_ONLINE_USER,
    id,
  };
};

export const removeOfflineUser = (id) => {
  return {
    type: REMOVE_OFFLINE_USER,
    id,
  };
};

export const setSearchedUsers = (users) => {
  return {
    type: SET_SEARCHED_USERS,
    users,
  };
};

export const clearSearchedUsers = () => {
  return {
    type: CLEAR_SEARCHED_USERS,
  };
};

// add new conversation when sending a new message
export const addConversation = (recipientId, newMessage) => {
  return {
    type: ADD_CONVERSATION,
    payload: { recipientId, newMessage },
  };
};

// REDUCER

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_CONVERSATIONS:
      return action.conversations;
    case SET_MESSAGE:
      return addMessageToStore(state, action.payload, action.activeChat);
    case ADD_ONLINE_USER: {
      return addOnlineUserToStore(state, action.id);
    }
    case REMOVE_OFFLINE_USER: {
      return removeOfflineUserFromStore(state, action.id);
    }
    case SET_SEARCHED_USERS:
      return addSearchedUsersToStore(state, action.users);
    case CLEAR_SEARCHED_USERS:
      return state.filter((convo) => convo.id);
    case ADD_CONVERSATION:
      return addNewConvoToStore(
        state,
        action.payload.recipientId,
        action.payload.newMessage
      );
    case CLEAR_UNREAD:
      return clearUnreadFromStore(state, action.conversationId);
    case ADJUST_LAST_READ:
      return adjustLastReadInStore(state, action.payload.myId, action.payload.conversationId);
    default:
      return state;
  }
};

export default reducer;
