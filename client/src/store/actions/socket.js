export const SAVE_SOCKET_INSTANCE = 'SAVE_SOCKET_INSTANCE';

export const saveSocketInstance = (socket) => {
  return { type: SAVE_SOCKET_INSTANCE, socket };
};
