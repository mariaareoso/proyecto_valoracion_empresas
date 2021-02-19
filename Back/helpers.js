const sharp = require('sharp');
const path = require('path');

const { ensureDir } = require('fs-extra');
const uuid = require('uuid');

const uploadsDir = path.join(__dirname, process.env.UPLOADS_DIR);

async function uploadPhoto({ photo, destination, width, photoName }) {

    const destinationDirectory = path.join(uploadsDir, destination);

    //asegurarnos de que o directorio existe
    await ensureDir(destinationDirectory)

    //cargar a imaxe no sharp
    const image = sharp(photo.data);

    const imageInfo = await image.metadata();

    //cambiarlle o tamaño se é necesario
    if (imageInfo.width > width) {
        image.resize(width)
    }

    //xenerar un nome de feicherio aleatoario
    const savedPhotoName = photoName ? photoName : `${uuid.v4()}.jpg`;

    //gardar a imaxe no directorio
    await image.toFile(path.join(destinationDirectory, savedPhotoName))


    //defolver o nome de ficherio
    return savedPhotoName;
}

module.exports = { uploadPhoto }