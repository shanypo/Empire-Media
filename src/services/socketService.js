import io from "socket.io-client";
import WebSocket from "ws";

const baseUrl = "wss://wstest.fxempire.com?token=btctothemoon";
export const socketService = createSocketService();

function createSocketService() {
  var socket = null;
  const socketService = {
    setup() {
      socket = io(baseUrl);
    },
    on(eventName, cb) {
      socket.on(eventName, cb);
    },
    off(eventName, cb = null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName);
      else socket.off(eventName, cb);
    },
    emit(eventName, data) {
      socket.emit(eventName, data);
    },
    terminate() {
      socket = null;
    },
  };
  return socketService;
}
