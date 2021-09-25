const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];
const UNIT = 5;

class WrongInput extends Error {
  constructor(message) {
    super(message);
  }
}

class Robot {
  robotsList = [];
  robotsNum = 0;
  robotData = new Map();

  constructor(coordinates, facing) {
    this.coordinates = coordinates;
    this.facing = facing;
  }

  PLACE_ROBOT(x, y, direction) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new WrongInput(`Please enter valid Units from 0 to ${UNIT - 1}`);
    }
    if (x > UNIT - 1 || y > UNIT - 1) {
      throw new WrongInput(`coordinates can't more than ${UNIT - 1}`);
    }
    if (!direction || !DIRECTIONS.includes(direction.toUpperCase())) {
      throw new WrongInput(
        `Please enter one of the valid directions ---> [${DIRECTIONS}]`
      );
    }
    // check to lowercase
    this.coordinates = [x, y];
    this.facing = direction;
    this.robotsNum += 1;
    this.robotsList.push(this.robotsNum);
    this.#SET_ROBOTS_LOCATION();
  }

  MOVE_FORWARD() {
    if (!this.coordinates || !this.facing)
      throw new WrongInput(`Please create Robot First`);
    if (this.facing === "NORTH") {
      if (this.coordinates[1] + 1 > UNIT - 1) return;
      this.coordinates = [this.coordinates[0], this.coordinates[1] + 1];
      this.#SET_ROBOTS_LOCATION();
    } else if (this.facing === "EAST") {
      if (this.coordinates[0] + 1 > UNIT - 1) return;
      this.coordinates = [this.coordinates[0] + 1, this.coordinates[1]];
      this.#SET_ROBOTS_LOCATION();
    } else if (this.facing === "SOUTH") {
      if (this.coordinates[1] - 1 < 0) return;
      this.coordinates = [this.coordinates[0], this.coordinates[1] - 1];
      this.#SET_ROBOTS_LOCATION();
    } else if (this.facing === "WEST") {
      if (this.coordinates[0] - 1 < 0) return;
      this.coordinates = [this.coordinates[0] - 1, this.coordinates[1]];
      this.#SET_ROBOTS_LOCATION();
    }
  }

  ROTATE_LEFT() {
    if (!this.coordinates || !this.facing)
      throw new WrongInput(`Please create Robot First`);
    // rotate 90 degrees leave the same position
    // (i.e.) if current position is north, then change it to south
    this.facing =
      DIRECTIONS[
        (DIRECTIONS.indexOf(this.facing) - 1 + DIRECTIONS.length) %
          DIRECTIONS.length
      ];
    this.#SET_ROBOTS_LOCATION();
  }

  ROTATE_RIGHT() {
    if (!this.coordinates || !this.facing)
      throw new WrongInput(`Please create Robot First`);
    // rotate 90 degrees leave фе the same position
    // i.e. if facing NORTH then change it to EAST
    this.facing =
      DIRECTIONS[(DIRECTIONS.indexOf(this.facing) + 1) % DIRECTIONS.length];
    this.#SET_ROBOTS_LOCATION();
  }

  REPORT_LOCATION() {
    if (!this.coordinates || !this.facing)
      throw new WrongInput(`Please create Robot First`);
    // report coordinates and where robot is facing at the moment
    const report = `Robot${this.robotsNum}'s coordinates are [${this.coordinates}], facing ${this.facing} and There are ${this.robotsList.length} robot/s in the system`;
    return report;
  }

  CHANGE_ROBOT(id) {
    if (!id || id > this.robotsList.length) {
      throw new WrongInput(
        `There are only ${this.robotsList.length} robot/s in database`
      );
    }
    this.#CLEAR_ALL();
    console.log("----------------CHANGING ROBOT ON TABLE----------------");
    const { coordinates, facing, robotId } = this.robotData.get(`Robot${id}`);
    this.coordinates = coordinates;
    this.facing = facing;
    this.robotsNum = robotId;
  }

  #CLEAR_ALL() {
    this.x = null;
    this.x = null;
    this.facing = null;
    this.robotsNum = null;
  }

  #SET_ROBOTS_LOCATION() {
    this.robotData.set(`Robot${this.robotsNum}`, {
      coordinates: this.coordinates,
      facing: this.facing,
      robotId: this.robotsNum,
    });
  }
}

module.exports = Robot;
