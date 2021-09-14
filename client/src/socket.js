import io from "socket.io-client";
import store from "./store";
import {
  removeOfflineUser,
  addOnlineUser,
  clearUnread
} from "./store/conversations";
import { handleIncomingMessage } from "./store/index";

const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("connected to server");

  socket.on("add-online-user", (id) => {
    store.dispatch(addOnlineUser(id));
  });

  socket.on("remove-offline-user", (id) => {
    store.dispatch(removeOfflineUser(id));
  });
  socket.on("new-message", (data) => { 
    store.dispatch(handleIncomingMessage(data.message, data.sender, data.recipientId));
  });
  socket.on("update-reads", (data) => {
    store.dispatch(clearUnread(data.conversationId, data.myId));
  });
});

export default socket;
