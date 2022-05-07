const Boat = (length) => {
    const getLength = () => length;
    const boatSpots = [];
    for (i = 0; i < length; i++) {
        boatSpots.push("Not Hit");
    }
    const hit = (number) => {
        boatSpots[number] = "hit"
    }
    const isSunk = () => {
        if (boatSpots.every(spot => spot == "Hit")) {
            return true;
        } else return false;
    }

    return { getLength, boatSpots, hit, isSunk };
}
  
const Gameboard = () => {
    const boardSpots = [[" ", " ", " ", " ", " ",],
    [" ", " ", " ", " ", " ",],
    [" ", " ", " ", " ", " ",],
    [" ", " ", " ", " ", " ",],
    [" ", " ", " ", " ", " ",]]
    const placeBoat (spot1, length) => {
        const newBoat = Boat(length);
        boardSpots[spot1] = newBoat;
    }

    const receiveAttack (Xcoord, Ycoord) => {
        if (boardSpots[Xcoord, Ycoord] == "boat") {
            boardSpots[Xcoord, Ycoord] = "hit";
        } else boardSpots[Xcoord, Ycoord] = "miss";
    }
}

const battleboat = Boat(5);
battleboat.hit(2);
console.log(battleboat.boatSpots);
console.log(battleboat.isSunk());