import PlenaConnect from '@plenaconnect/client';
import QRCodeModal from '@plenaconnect/qrcode-modal';

// Create a connector
export const Plena = new PlenaConnect({
  bridge: 'https://bridge.plenaconnect.org', // Required
  qrcodeModal: QRCodeModal,
});

// Check if connection is already established
// if (!Plena.connected) {
//   // create new session
//   Plena.createSession();
// }

// // Subscribe to connection events
// Plena.on('connect', (error, payload) => {
//   if (error) {
//     throw error;
//   }

//   // Get provided accounts and chainId
//   const { accounts, chainId } = payload.params[0];
// });

// Plena.on('session_update', (error, payload) => {
//   if (error) {
//     throw error;
//   }

//   // Get updated accounts and chainId
//   const { accounts, chainId } = payload.params[0];
// });

// Plena.on('disconnect', (error, payload) => {
//   if (error) {
//     throw error;
//   }

//   // Delete connector
// });