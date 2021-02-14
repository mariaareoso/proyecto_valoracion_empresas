require("dotenv").config();
const { empleadoRepository } = require('./repositories/userEmpleado');

const crypto = require("crypto");
const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");
const uuid = require("uuid");

const imageUploadPath = path.join(__dirname, process.env.UPLOADS_DIR);

async function processAndSavePhoto(uploadedImage) {
  const savedFileName = `${uuid.v1()}.jpg`;
  await fs.ensureDir(imageUploadPath);
  const finalImage = sharp(uploadedImage.data);
  const imageInfo = await finalImage.metadata();

  if (imageInfo.width > 500) {
    finalImage.resize(500);
  }

  await finalImage.toFile(path.join(imageUploadPath, savedFileName));
  return `${process.env.PUBLIC_HOST}/uploads/${savedFileName}`;
}

module.exports = {
  processAndSavePhoto
};

