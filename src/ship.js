class Ship {
    length;   //variables for ship

    orientation;
    sunk = false;
    hitpoints = length;

    constructor(length, location, orientation) {  //constructor for ship
        this.length = length;

        this.orientation = orientation;
    }

    hit() {  //function to hit the ship
        this.hitpoints--;
    }

    isSunk() {  //function to check if the ship is sunk
        return this.hitpoints === 0;
    }
}

export default Ship;