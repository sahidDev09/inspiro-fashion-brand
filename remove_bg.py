from PIL import Image
import sys

def remove_white_bg(filename):
    img = Image.open(filename)
    img = img.convert("RGBA")
    datas = img.getdata()
    newData = []
    for item in datas:
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
    img.putdata(newData)
    img.save(filename, "PNG")

remove_white_bg('/Users/sahid/Projects/inspiro-fashion/public/assets/floating_tshirt.png')
remove_white_bg('/Users/sahid/Projects/inspiro-fashion/public/assets/floating_jacket.png')
remove_white_bg('/Users/sahid/Projects/inspiro-fashion/public/assets/floating_sneaker.png')
remove_white_bg('/Users/sahid/Projects/inspiro-fashion/public/assets/floating_cap.png')
