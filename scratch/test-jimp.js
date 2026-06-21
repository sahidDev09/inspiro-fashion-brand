const { Jimp } = require('jimp');

async function test() {
  const user = await Jimp.read(Buffer.from('R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'base64')); // 1x1
  const product = await Jimp.read(Buffer.from('R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'base64')); // 1x1
  
  user.composite(product, 0, 0);
  
  const buf = await user.getBase64('image/jpeg');
  console.log('buf:', buf.substring(0, 30));
}
test().catch(e => console.error(e.message));
