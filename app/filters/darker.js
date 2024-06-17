export function darker(imageData) {
  for (let y = 0; y < imageData.length; y++) {
    for (let x = 0; x < imageData[y].length; x++) {
      imageData[y][x][0] = Math.round(imageData[y][x][0] / 2);
      imageData[y][x][1] = Math.round(imageData[y][x][1] / 2);
      imageData[y][x][2] = Math.round(imageData[y][x][2] / 2);
    }
  }
  return imageData;
}
