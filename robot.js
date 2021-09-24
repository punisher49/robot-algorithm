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
    this.robotData.set(`Robot${this.robotsNum}`, {
      coordinates: this.coordinates,
      facing: this.facing,
      robotId: this.robotsNum,
    });
  }

  MOVE_FORWARD() {
    if (!this.coordinates || !this.facing)
      throw new WrongInput(`Please create Robot First`);

    if (this.facing === "NORTH") {
      if (this.coordinates[1] + 1 > UNIT - 1) return;
      return (this.coordinates = [
        this.coordinates[0],
        this.coordinates[1] + 1,
      ]);
    } else if (this.facing === "EAST") {
      if (this.coordinates[0] + 1 > UNIT - 1) return;
      return (this.coordinates = [
        this.coordinates[0] + 1,
        this.coordinates[1],
      ]);
    } else if (this.facing === "SOUTH") {
      if (this.coordinates[1] - 1 < 0) return;
      return (this.coordinates = [
        this.coordinates[0],
        this.coordinates[1] - 1,
      ]);
    } else if (this.facing === "WEST") {
      if (this.coordinates[0] - 1 < 0) return;
      return (this.coordinates = [
        this.coordinates[0] - 1,
        this.coordinates[1],
      ]);
    }
    console.log(this.coordinates);
  }

  ROTATE_LEFT() {
    if (!this.coordinates || !this.facing)
      throw new WrongInput(`Please create Robot First`);
    // rotate 90 degrees leave the same position
    // (i.e.) if current position is north, then change it to south
    return (this.facing =
      DIRECTIONS[
        (DIRECTIONS.indexOf(this.facing) - 1 + DIRECTIONS.length) %
          DIRECTIONS.length
      ]);
  }

  ROTATE_RIGHT() {
    if (!this.coordinates || !this.facing)
      throw new WrongInput(`Please create Robot First`);
    // rotate 90 degrees leave фе the same position
    // i.e. if facing NORTH then change it to EAST
    return (this.facing =
      DIRECTIONS[(DIRECTIONS.indexOf(this.facing) + 1) % DIRECTIONS.length]);
  }

  REPORT_LOCATION() {
    if (!this.coordinates || !this.facing)
      throw new WrongInput(`Please create Robot First`);
    // report coordinates and where robot is facing at the moment
    console.log(
      `Robot${this.robotsNum}'s coordinates are [${this.coordinates}] and facing ${this.facing}`
    );
    console.log(`There are ${this.robotsList.length} robot/s in the system`);
  }

  CHANGE_ROBOT(id) {
    console.log("----------------CHANGING ROBOT ON TABLE----------------");
    if (id > this.robotsList.length) {
      throw new WrongInput(
        `There are only ${this.robotsList.length} robot/s in database`
      );
    }
    this.#CLEAR_ALL();
    const { coordinates, facing, robotId } = this.robotData.get(`Robot${id}`);
    this.coordinates = coordinates;
    this.facing = facing;
    this.robotsNum = robotId;
    console.log(this.coordinates, this.facing, this.robotsNum);
  }

  #CLEAR_ALL() {
    this.x = null;
    this.x = null;
    this.facing = null;
    this.robotsNum = null;
  }
}

module.exports = Robot;

const robot = new Robot();

robot.PLACE_ROBOT(0, 0, "WEST");
robot.MOVE_FORWARD();
robot.MOVE_FORWARD();

robot.MOVE_FORWARD();
robot.MOVE_FORWARD();
robot.MOVE_FORWARD();
robot.REPORT_LOCATION();

robot.ROTATE_LEFT();
robot.MOVE_FORWARD();
robot.REPORT_LOCATION();

robot.ROTATE_LEFT();
robot.MOVE_FORWARD();
robot.MOVE_FORWARD();
robot.MOVE_FORWARD();
robot.MOVE_FORWARD();

robot.REPORT_LOCATION();

robot.PLACE_ROBOT(3, 3, "WEST");
robot.REPORT_LOCATION();

robot.PLACE_ROBOT(2, 2, "WEST");
robot.REPORT_LOCATION();

robot.PLACE_ROBOT(1, 1, "WEST");
robot.REPORT_LOCATION();

// robot.PLACE_ROBOT(3, 3,'NORTH');
// robot.REPORT_LOCATION()

// robot.PLACE_ROBOT(1, 2, 'EAST');
// robot.REPORT_LOCATION()

// robot.PLACE_ROBOT(3, 4, 'WEST');
// robot.REPORT_LOCATION()

// robot.PLACE_ROBOT(2, 1, 'NORTH');
// robot.REPORT_LOCATION()

// robot.PLACE_ROBOT(3, 0, 'SOUTH');
// robot.REPORT_LOCATION()

// robot.ROBOT(2)
// robot.REPORT_LOCATION()

// robot.ROBOT(3)
// robot.REPORT_LOCATION()

// robot.ROBOT(2)
// robot.REPORT_LOCATION()

// robot.ROBOT(4)
// robot.REPORT_LOCATION()

// robot.ROBOT(5)
// robot.REPORT_LOCATION()
