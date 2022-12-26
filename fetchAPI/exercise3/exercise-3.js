import fs from "fs/promises";

const getWallpaper = async () => {
    const result = await fetch("https://w.wallhaven.cc/full/x8/wallhaven-x8ye3z.jpg");

    const imageArrayBuffer = await result.arrayBuffer();
    const buffer = Buffer.from(imageArrayBuffer);
    fs.writeFile("myWallpaper.jpg", buffer);

};

getWallpaper();