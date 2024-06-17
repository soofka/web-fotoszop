# Web Fotoszop

## About

<!---description_start-->

Web Fotoszop is an application created by 3rd grade students at Academic High School of Polish-Japanese Academy of Information Technology during 2022/23 school year. It is a showcase of web browser capabilities and some image processing algorithms.

<!---description_end-->

## Basic usage

1. Start local server using `npm start` command
2. Go to `localhost:3000` in your web browser
3. Enable camera access
4. Use checkboxes to apply filters

## Development

1. Duplicate `app/filters/myFilter.js`
2. Rename new file and function accordingly
3. Implement your transformation
4. Import your transformation in `app/index.js`
5. Add your transformation to `app.filters` object

Your transformation should accept three arguments:

1. 3d array with image data:

```
[ // whole image
  [ // first row of the image
    [255, 0, 0, 0], // first pixel of first row of the image
    [0, 255, 0, 0], // second pixel of first row of the image
    // subsequent pixels of the first row of the image
  ],
  [ // second row of the image
    [0, 255, 0, 0], // first pixel of second row of the image
    [0, 0, 255, 0], // second pixel of second row of the image
    // subsequent pixels of the first row of the image
  ],
  // subsequent rows of the image
]
```

2. image width in pixels
3. image height in pixels
