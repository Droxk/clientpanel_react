import { NOTIFY_USER } from "./types";

// Lo de abajo podria ir también así
// export const notifyUser = (message, messageType) => {
//   type: NOTIFY_USER, message, messageType;
// };

export const notifyUser = (message, messageType) => {
  return {
    type: NOTIFY_USER,
    message,
    messageType
  };
};
