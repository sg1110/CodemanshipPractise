class Rover {
  constructor(position, facing) {
    this.position = position;
    this.facing = facing;
  }

  move(commands) {
    commands.forEach(command => {
      if (command === "f") {
        this.position[1]++;
      }
      if (command === "b") {
        this.position[1]--;
      }
      if (command === "l") {
        this.position[0]--;
      }
      if (command === "r") {
        this.position[0]++;
      }
    });
  }
}

module.exports = {
  Rover
};
