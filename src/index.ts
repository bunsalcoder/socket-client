import { io, type Socket } from 'socket.io-client';

export type Client = Socket & {
  joinRoom?: CallableFunction;
  onJoinRoom?: CallableFunction;
};

let socket: Client;

export type SocketClientProps = {
  appId: string;
  appSecretKey: string;
  path?: string;
};

const getAuth = (props: SocketClientProps) => {
  const { appId, appSecretKey } = props;
  return { appId, appSecretKey };
};

const getQuery = (props: SocketClientProps) => {
  const { appId } = props;
  return { appId };
};

const onConnectError = (error: any) => {
  const { message, context = {} } = error;
  const { responseText = false, statusText = false } = context;
  const errorMessage = statusText || responseText || message;
  console.log('[ERROR] Socket Client - %s', errorMessage.toString());
};

const isActive = (pSocket: Client) => {
  if (!(pSocket || false)) return false;
  return true;
};

export default function socketClient(host: string, props: SocketClientProps): Client {
  const isConnected = isActive(socket);

  if (isConnected) return socket;

  const { path = '/socket.io' } = props;
  const auth = getAuth(props);
  const query = getQuery(props);
  const { appId } = props;
  socket = io(`${host}/${appId}`, { auth, query, path });
  socket.on('connect_error', onConnectError);
  socket.on('disconnect', onConnectError);

  console.log('[INFO] Socket client connected - %s ', new Date());

  socket.joinRoom = (room: string) => console.log('fdafdas'); //socket.emit('join-room', room);
  socket.onJoinRoom = () => { socket.on('room-joint', console.table); };
  return socket;
}
