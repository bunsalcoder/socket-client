import initClient, { type Client, type SocketClientProps as Props } from '../index';

export default function init(): Client {
  const host = 'http://socket-server.loc';
  const conf: Props = {
    appId: 'fc6a7274-b51d-48ef-ba75-637e3ec7aba0',
    appSecretKey: '190a9d3bfbb5ed31a4c72aec6a4a2de519df13e7d26dc73c5be1cd9ac0389daa',
  };

  return initClient(host, conf);
}
