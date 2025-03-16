class GameBoard {
    grid = []; //array of the board
    ships = [
        new Array(5), // Aircraft Carrier (size 5)
        new Array(4), // Battleship (size 4)
        new Array(3), // Cruiser (size 3)
        new Array(3), // Submarine (size 3)
        new Array(2)  // Destroyer (size 2)
    ]; //array of ships

    mapOfShips = {  // map of ships to their index, to place on the board
        'Aircraft': 0,
        'Battleship': 1,
        'Cruiser': 2,
        'Submarine': 3,
        'Destroyer': 4
    }

    missedShots = []; //array of missed shots

    constructor() {
        this.grid = Array.from({ length: 10 }, () => Array(10).fill(null)); //creates a 10x10 grid with null values

    }

    placeShip(index, point, ship, orientation) { // its going to recieve a point, check what orientation, iterate for length, and place the ship on the board
        if (orientation === 'horizontal') {  // if the orientation is horizontal, the ship will be placed horizontally on the board

            ships[index][0][0] = point[0]; // sets first point of ship x value
            ships[index][0][1] = point[1]; // sets first point of ship y value 
            grid[point[0]][point[1]] = 'S'; // sets the first point of the ship on the board
            for (let i = 1; i < ship.length; i++) {
                ships[index][i][0] = point[0] + i; // sets the next point of the ship x value
                ships[index][i][1] = point[1]; // sets the next point of the ship y value
                grid[point[0] + i][point[1]] = 'S'; // sets the next point of the ship on the board
            }
        } else if (orientation === 'vertical') {  // if the orientation is vertical, the ship will be placed vertically on the board

            ships[index][0][0] = point[0]; // sets first point of ship x value
            ships[index][0][1] = point[1]; // sets first point of ship y value
            for (let i = 1; i < ship.length; i++) {

                ships[index][i][0] = point[0]; // sets the next point of the ship x value
                ships[index][i][1] = point[1] + i; // sets the next point of the ship y value
                grid[point[0]][point[1] + i] = 'S'; // sets the next point of the ship on the board
            }
        }
    }

    receiveAttack(point) {
    }