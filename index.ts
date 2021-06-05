import { Wechaty } from 'wechaty';
import QRCodeTerminal from 'qrcode-terminal';

const bot = new Wechaty({ name: 'my-bot' });
bot
  .on('login', user => console.log(`Login: ${user}`))
  .on('scan', qrcode => QRCodeTerminal.generate(qrcode, { small: true }))
  .on('message', message => console.log(`Received message: ${message}`))
  .start();