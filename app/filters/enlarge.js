export function enlarge(imageData) {
  let imageDataOutput = [];
  for (let y = 0; y < imageData.length / 2; y++) {
    let yrow = [];
    for (let x = 0; x < imageData[y].length / 2; x++) {
      yrow.push(imageData[y][x]);
      yrow.push(imageData[y][x]);
    }
    imageDataOutput.push(yrow);
    imageDataOutput.push(yrow);
  }
  return imageDataOutput;
}
