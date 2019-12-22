let socket: WebSocket;
let prevReadyState;

export const getSocket = () => socket;

export const createSocket = (url: string, options: {
  reconnect?: number;
  keepAlive?: number;
  onOpen?: (socket: WebSocket) => void;
  onClose?: () => void;
  onReconnect?: (socket: WebSocket) => void;
  onFail?: () => void;
  onMessage?: (event: MessageEvent) => void;
}) => {
  socket = new WebSocket(url);
  let keepAliveInterval: NodeJS.Timeout;
  let reconnectInterval: NodeJS.Timeout;

  socket.onopen = () => {
    if (!prevReadyState) {
      if (options.onOpen) {
        options.onOpen(socket);
      }
    } else {
      if (options.onReconnect) {
        options.onReconnect(socket);
      }
    }

    if (options.keepAlive) {
      const delay = options.keepAlive * 1000;

      keepAliveInterval = setInterval(() => {
        socket.send('.');
      }, delay);
    }

    prevReadyState = socket.readyState;
  };

  socket.onmessage = event => {
    if (options.onMessage) {
      options.onMessage(event);
    }
  };

  socket.onclose = () => {
    clearInterval(keepAliveInterval);

    if (!prevReadyState) {
      if (options.onFail) {
        options.onFail();
      }
    } else if (prevReadyState === 1 || prevReadyState === 2) {
      prevReadyState = 3;

      if (options.onClose) {
        options.onClose();
      }

      if (options.reconnect) {
        const delay = options.reconnect * 1000;

        reconnectInterval = setInterval(() => {
          (socket?.readyState === 3) ?
            createSocket(url, options) :
              clearInterval(reconnectInterval);
        }, delay);
      }
    }
  };
  return socket;
};
