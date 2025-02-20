import getClient from './init';

const client = getClient();
const timer = setTimeout(() => {
  client.emit('message', {
    event: 'to-client',
    message: {
      at: new Date(),
      msg: 'Testing',
    },
  });
  clearTimeout(timer);
}, 1500);
