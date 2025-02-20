import getClient from './init';

const client = getClient();
const timer = setTimeout(() => {
  client.on('to-client', (msg: any) => {
    console.log({ msg });
    clearTimeout(timer);
  });
}, 1000);
