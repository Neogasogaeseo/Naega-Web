export const resizeImage = async (file: File, maxSquare: number) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) throw 'error';
  const imageBitmap = await createImageBitmap(file);

  const { dWidth, dHeight } = getWidthHeight(imageBitmap, maxSquare);
  canvas.width = dWidth;
  canvas.height = dHeight;
  context.drawImage(imageBitmap, 0, 0, dWidth, dHeight);

  const imageDataURL = canvas.toDataURL();
  const imageBlob = dataURItoBlob(imageDataURL);
  const resizedImageFile = new File([imageBlob], file.name, { type: file.type });

  return { imageBlob, resizedImageFile };
};

const getWidthHeight = (imageBitmap: ImageBitmap, maxSquare: number) => {
  const { width, height } = imageBitmap;
  let dWidth = width,
    dHeight = height;
  if (width > height) {
    dWidth = maxSquare;
    dHeight = (height * maxSquare) / width;
  } else {
    dWidth = (width * maxSquare) / height;
    dHeight = maxSquare;
  }

  return { dWidth, dHeight };
};

const dataURItoBlob = (dataURI: string) => {
  // https://stackoverflow.com/questions/27159179/how-to-convert-blob-to-file-in-javascript
  let byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);
  else byteString = unescape(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
};
