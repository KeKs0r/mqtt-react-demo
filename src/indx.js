import React, { createContext, useEffect, useState } from 'react';
import Connection from './Connection';
import Publisher from './Publisher';
import Subscriber from './Subscriber';
import Receiver from './Receiver';
import mqtt from 'mqtt';
import Dropdown  from './Search';

import {Auth} from "aws-amplify";


export const QosOption = createContext([])
const qosOption = [
  {
    label: '0',
    value: 0,
  }, {
    label: '1',
    value: 1,
  }, {
    label: '2',
    value: 2,
  },
];

const HookMqtt = () => {
  // const [client, setClient] = useState(null);
  // const [isSubed, setIsSub] = useState(false);
  // const [payload, setPayload] = useState({});
   const [user, setUser] = useState({});
  // const [connectStatus, setConnectStatus] = useState('Connect');

  var url ="https://m1qr4x8s6b.execute-api.us-east-1.amazonaws.com/get_test/single_ppk?email=";

  // const mqttConnect = (host, mqttOption) => {
  //   setConnectStatus('Connecting');
  //   setClient(mqtt.connect(host, mqttOption));
  // };

  useEffect(() => {

    function getUser(){
      return Auth.currentAuthenticatedUser({bypassCache: true});
    }

    async function load(){
      const user = await getUser();
      setUser(user.attributes);
    }

    load();
    
    // if (client) {
    //   client.on('connect', () => {
    //     setConnectStatus('Connected');
    //   });
    //   client.on('error', (err) => {
    //     console.error('Connection error: ', err);
    //     client.end();
    //   });
    //   client.on('reconnect', () => {
    //     setConnectStatus('Reconnecting');
    //   });
    //   client.on('message', (topic, message) => {
    //     const payload = { topic, message: message.toString() };
    //     setPayload(payload);
    //   });
    // }
  }, []);

  // const mqttDisconnect = () => {
  //   if (client) {
  //     client.end(() => {
  //       setConnectStatus('Connect');
  //     });
  //   }
  // }

  // const mqttPublish = (context) => {
  //   if (client) {
  //     const { topic, qos, payload } = context;
  //     client.publish(topic, payload, { qos }, error => {
  //       if (error) {
  //         console.log('Publish error: ', error);
  //       }
  //     });
  //   }
  // }

  // const mqttSub = (subscription) => {
  //   if (client) {
  //     const { topic, qos } = subscription;
  //     client.subscribe(topic, { qos }, (error) => {
  //       if (error) {
  //         console.log('Subscribe to topics error', error)
  //         return
  //       }
  //       setIsSub(true)
  //     });
  //   }
  // };

  // const mqttUnSub = (subscription) => {
  //   if (client) {
  //     const { topic } = subscription;
  //     client.unsubscribe(topic, error => {
  //       if (error) {
  //         console.log('Unsubscribe error', error)
  //         return
  //       }
  //       setIsSub(false);
  //     });
  //   }
  // };


  url = url + user.email;

  return (
    <div>
    <Dropdown email={url}/>
      {/* <Connection connect={mqttConnect} disconnect={mqttDisconnect} connectBtn={connectStatus} /> */}
      <QosOption.Provider value={qosOption}>
        {/* <Subscriber sub={mqttSub} unSub={mqttUnSub} showUnsub={isSubed} />
        <Publisher publish={mqttPublish} /> */}
      </QosOption.Provider>
      {/* <Receiver payload={payload}/> */}
    </div>
  );
}

export default HookMqtt;
