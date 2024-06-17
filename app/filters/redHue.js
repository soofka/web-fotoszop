export function redHue(imageData) {
  for (let y = 0; y < imageData.length; y++) {
    for (let x = 0; x < imageData[y].length; x++) {
      const col = imageData[y][x];
      const hsl = rgb2hsl(col[0], col[1], col[2]);
      const rgbPost = hsl2rgb(0, hsl[1], hsl[2]);
      imageData[y][x] = [rgbPost[0], rgbPost[1], rgbPost[2], col[3]];
    }
  }
  return imageData;
}

function rgb2hsl(r, g, b) {
  let v = Math.max(r, g, b),
    c = v - Math.min(r, g, b),
    f = 1 - Math.abs(v + v - c - 1);
  let h =
    c && (v == r ? (g - b) / c : v == g ? 2 + (b - r) / c : 4 + (r - g) / c);
  return [60 * (h < 0 ? h + 6 : h), f ? c / f : 0, (v + v - c) / 2];
}

function hsl2rgb(h, s, l) {
  let a = s * Math.min(l, 1 - l);
  let f = (n, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0), f(8), f(4)];
}
