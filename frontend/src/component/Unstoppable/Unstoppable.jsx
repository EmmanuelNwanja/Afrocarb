// "use client"
// import React, { useState } from 'react'
// import Image from 'next/image'
// import connectors from '@/utils/Unstoppable'
// import styles from './page.module.css'


// const Unstoppable = () => {

//     const connector = connectors["UAuth"][0];

//   // Get web3-react hooks from UAuthConnector
//   const { useIsActivating, useIsActive } = connectors["UAuth"][1];
//   const isActivating = useIsActivating();
//   const isActive = useIsActive();

//   const [connectionStatus, setConnectionStatus] = useState("Disconnected");
//   const [error, setError] = useState();

//   // Handle connector activation and update connection/error state
//   const handleToggleConnect = () => {
//     setError(undefined); // Clear error state

//     if (isActive) {
//       if (connector?.deactivate) {
//         void connector.deactivate();
//       } else {
//         void connector.resetState();
//       }
//       setConnectionStatus("Disconnected");
//     } else if (!isActivating) {
//       setConnectionStatus("Connecting...");

//       // Activate the connector and update states
//       connector
//         .activate(1)
//         .then(() => {
//           setConnectionStatus("Connected");
//         })
//         .catch((e) => {
//           connector.resetState();
//           setError(e);
//         });
//     }
//   };


//   return (
//     <div>
//         <button className={styles.Unstop} onClick={handleToggleConnect} disabled={false}>
//             <Image className={styles.image} src={Unstop} alt='unstoppable logo' width={25} height={25} />
//             {isActive ? "Disconnect" : "Continue with unstoppable domain"}
//         </button>
//     </div>
//   )
// }

// export default Unstoppable