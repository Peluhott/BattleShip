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
        'A': 0, //aircraft carrier
        'B': 1, //battleship
        'C': 2, // cruiser
        'S': 3, // submarine
        'D': 4 // destroyer
    }

    missedShots = []; //array of missed shots

    constructor() {
        this.grid = Array.from({ length: 10 }, () => Array(10).fill(null)); //creates a 10x10 grid with null values

    }

    placeShip(letter, point, ship, orientation) { // its going to recieve a point, check what orientation, iterate for length, and place the ship on the board
        const index = this.mapOfShips[letter]; // gets the index of the ship
        if (orientation === 'horizontal') {  // if the orientation is horizontal, the ship will be placed horizontally on the board

            ships[index][0][0] = point[0]; // sets first point of ship x value
            ships[index][0][1] = point[1]; // sets first point of ship y value 
            grid[point[0]][point[1]] = letter; // sets the first point of the ship on the board
            for (let i = 1; i < ship.length; i++) {
                ships[index][i][0] = point[0] + i; // sets the next point of the ship x value
                ships[index][i][1] = point[1]; // sets the next point of the ship y value
                grid[point[0] + i][point[1]] = letter; // sets the next point of the ship on the board
            }
        } else if (orientation === 'vertical') {  // if the orientation is vertical, the ship will be placed vertically on the board

            ships[index][0][0] = point[0]; // sets first point of ship x value
            ships[index][0][1] = point[1]; // sets first point of ship y value
            for (let i = 1; i < ship.length; i++) {

                ships[index][i][0] = point[0]; // sets the next point of the ship x value
                ships[index][i][1] = point[1] + i; // sets the next point of the ship y value
                grid[point[0]][point[1] + i] = letter; // sets the next point of the ship on the board
            }
        }
    }

    receiveAttack(point) {
        if (grid[point[0]][point[1]] === 'X') { // checks to see if point is already hit
            return 'Already hit'; // change this later to something else, placeholder for now
        }
        else if (grid[point[0]][point[1]] === null) { // checks to see if point is empty
            grid[point[0]][point[1]] = 'X'; // if it is, it will be a miss
            missedShots.push(point); // adds the point to the missed shots array
        }
        else {

        }
    }
}