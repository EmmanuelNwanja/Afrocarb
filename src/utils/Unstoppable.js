// "use client"

// import { initializeConnector } from "@web3-react/core";
// import UAuth from "@uauth/js";
// import { UAuthConnector } from "@uauth/web3-react";
// import { WalletConnect, Injected } from "./Connector/Connector";

// UAuthConnector.registerUAuth(UAuth);

// const uauth = initializeConnector(
//     new UAuthConnector({
//       options: {
//         // These values can be copied from your dashboard client configuration
//         clientID: process.env.REACT_APP_CLIENT_ID,
//         redirectUri: process.env.REACT_APP_REDIRECT_URI,
//         // Scope must include openid and wallet
//         scope: "openid",

//         // Injected/metamask and walletconnect connectors are required
//         connectors: { injected: Injected[0], walletconnect: WalletConnect[0] },
//       },
//     })
// );

// const connectors = {
//   UAuth: uauth
// };

// export default connectors;