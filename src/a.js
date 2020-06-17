class Rover {
  constructor(position, facing) {
    this.position = position;
    this.facing = facing;
  }

  followCommand(commands) {
    commands.forEach(command => {
      this.move(command);
      this.rotate(command);
    });
  }

  rotate(command) {
    if (command === "l") {
      if (this.facing === "W") {
        this.facing = "S";
      } else {
        this.facing = "W";
      }
    }
    if (command === "r") {
      this.facing = "E";
    }
  }

  move(command) {
    if (command === "f") {
      this.position[1]++;
    }
    if (command === "b") {
      this.position[1]--;
    }
  }
}

module.exports = {
  Rover
};
