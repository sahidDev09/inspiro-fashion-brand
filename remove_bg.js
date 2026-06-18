const { Jimp } = require("jimp");

async function removeWhiteBg(filename) {
    const image = await Jimp.read(filename);
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
        const red = this.bitmap.data[idx + 0];
        const green = this.bitmap.data[idx + 1];
        const blue = this.bitmap.data[idx + 2];
        if (red > 230 && green > 230 && blue > 230) {
            this.bitmap.data[idx + 3] = 0; // Alpha 0
        }
    });
    await image.write(filename);
}

async function processAll() {
    await removeWhiteBg('/Users/sahid/Projects/inspiro-fashion/public/assets/floating_tshirt.png');
    await removeWhiteBg('/Users/sahid/Projects/inspiro-fashion/public/assets/floating_jacket.png');
    await removeWhiteBg('/Users/sahid/Projects/inspiro-fashion/public/assets/floating_sneaker.png');
    await removeWhiteBg('/Users/sahid/Projects/inspiro-fashion/public/assets/floating_cap.png');
}

processAll().catch(console.error);
