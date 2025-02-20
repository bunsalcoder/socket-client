# Socket Client

This project provides a simple TypeScript client for connecting to a Socket.io server. The client supports authentication and room management functionality.

## Features
- Connects to a Socket.io server with authentication.
- Handles connection errors gracefully.
- Supports joining rooms.

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed, then install the required dependencies:

```sh
npm install socket.io-client
```

## Usage

### Import the Client

```typescript
import socketClient from './socketClient';
```

### Initialize the Client

```typescript
const socket = socketClient('https://your-socket-server.com', {
  appId: 'your-app-id',
  appSecretKey: 'your-secret-key'
});
```

### Join a Room

```typescript
socket.joinRoom && socket.joinRoom('room-name');
```

### Listen for Room Join Event

```typescript
socket.onJoinRoom && socket.onJoinRoom();
```

## API Reference

### `socketClient(host: string, props: SocketClientProps): Client`

#### Parameters:
- `host` (**string**) – The Socket.io server URL.
- `props` (**SocketClientProps**) – An object containing:
  - `appId` (**string**) – Application ID for authentication.
  - `appSecretKey` (**string**) – Secret key for authentication.
  - `path` (**string**, optional) – Custom Socket.io path.

#### Returns:
- A `Socket` client instance with additional methods:
  - `joinRoom(room: string)`: Joins a specified room.
  - `onJoinRoom()`: Listens for room join confirmation.

## Error Handling
The client listens for connection errors and logs them to the console.

```typescript
socket.on('connect_error', (error) => {
  console.log('[ERROR] Socket Client -', error.message);
});
```

## License
MIT License

