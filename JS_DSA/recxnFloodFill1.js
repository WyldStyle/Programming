var im = ["..########################...........".split(""),
"..#......................#...#####...".split(""),
"..#..........########....#####...#...".split(""),
"..#..........#......#............#...".split(""),
"..#..........########.........####...".split(""),
"..######......................#......".split(""),
".......#..#####.....###########......".split(""),
".......####...#######................".split("")];

let height = im.length;
let width = im[0].length;

const floodFill = (image, x, y, oldStr = image[x][y], newStr) => {
  if (image[x][y] != oldStr) return
  else {
    image[x][y] = newStr;
    floodFill(image, x - 1, y, oldStr, newStr)
    floodFill(image, x + 1, y, oldStr, newStr)
    floodFill(image, x, y - 1, oldStr, newStr)
    floodFill(image, x, y + 1, oldStr, newStr)
    // return image;
  }
}
console.log(floodFill(im, 3, 5,im[3][5],'xoxo'));
console.log(im);