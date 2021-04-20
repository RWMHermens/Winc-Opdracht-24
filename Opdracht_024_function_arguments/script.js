const paintingWalls = function (walls, colors) {
    console.log('The ' + walls, 'wall has been painted ' + colors);
}

const wall_one = 'north';
const wall_two = 'south-east';

const color_one = 'orange';
const color_two = 'grey';


paintingWalls(wall_one, color_one);
paintingWalls(wall_two, color_two);
paintingWalls();