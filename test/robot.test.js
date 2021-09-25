const expect = require("chai").expect;
const Robot = require("../robot");
const robot = new Robot();

describe("Test all error cases", () => {
  it.only("Expect PLACE_ROBOT to throw an error if no arguments have been passed", () => {
    expect(() => {
      robot.PLACE_ROBOT();
    }).to.throw();
  });

  it.only("Expect MOVE_FORWARD function to throw an error if it has sbeen called before PLACE_ROBOT", () => {
    expect(() => {
      robot.MOVE_FORWARD();
    }).to.throw();
  });

  it.only("Expect ROTATE_LEFT function to throw an error if it has sbeen called before PLACE_ROBOT", () => {
    expect(() => {
      robot.ROTATE_LEFT();
    }).to.throw(Error);
  });

  it.only("Expect ROTATE_RIGHT function to throw an error if it has sbeen called before PLACE_ROBOT", () => {
    expect(() => {
      robot.ROTATE_RIGHT();
    }).to.throw(Error);
  });

  it.only("Expect REPORT_LOCATION function to throw an error if it has sbeen called before PLACE_ROBOT", () => {
    expect(() => {
      robot.REPORT_LOCATION();
    }).to.throw(Error);
  });

  it.only("Expect CHANGE_ROBOT function to throw an error if no valid value has been passed", () => {
    expect(() => {
      robot.CHANGE_ROBOT();
    }).to.throw(Error);
  });
});

describe("Testing robot's functions", () => {
  it.only("creates Robot1 on the table with initial location [0, 0], facing NORTH and moving forward, expecting result: [0,1] NORTH", () => {
    robot.PLACE_ROBOT(0, 0, "NORTH");
    robot.MOVE_FORWARD();
    expect(robot.REPORT_LOCATION()).to.equal(
      `Robot1's coordinates are [0,1], facing NORTH and There are 1 robot/s in the system`
    );
  });

  it.only("creates Robot2 on the table with initial location [0, 0], facing NORTH and rotating LEFT, expecting result: [0,0] WEST", () => {
    robot.PLACE_ROBOT(0, 0, "NORTH");
    robot.ROTATE_LEFT();
    expect(robot.REPORT_LOCATION()).to.equal(
      `Robot2's coordinates are [0,0], facing WEST and There are 2 robot/s in the system`
    );
  });

  it.only(`creates Robot3 on the table with initial location [1, 2] facing EAST, Moving forward twice, moving left once and moving forward once again, expecting result: [0,0] WEST`, () => {
    robot.PLACE_ROBOT(1, 2, "EAST");
    robot.MOVE_FORWARD();
    robot.MOVE_FORWARD();
    robot.ROTATE_LEFT();
    robot.MOVE_FORWARD();
    expect(robot.REPORT_LOCATION()).to.equal(
      `Robot3's coordinates are [3,3], facing NORTH and There are 3 robot/s in the system`
    );
  });
  it.only("creates Robot4 and preventing robot from falling off the table after calling MOVE FORWARD function 5 times", () => {
    robot.PLACE_ROBOT(0, 0, "NORTH");
    robot.MOVE_FORWARD();
    robot.MOVE_FORWARD();
    robot.MOVE_FORWARD();
    robot.MOVE_FORWARD();
    robot.MOVE_FORWARD();
    expect(robot.REPORT_LOCATION()).to.equal(
      `Robot4's coordinates are [0,4], facing NORTH and There are 4 robot/s in the system`
    );
  });
  it.only("creates Robot5 and preventing robot from falling off the table after calling MOVE FORWARD function 5 times", () => {
    robot.PLACE_ROBOT(1, 2, "EAST");
    robot.MOVE_FORWARD();
    robot.MOVE_FORWARD();
    robot.MOVE_FORWARD();
    robot.MOVE_FORWARD();
    robot.MOVE_FORWARD();
    expect(robot.REPORT_LOCATION()).to.equal(
      `Robot5's coordinates are [4,2], facing EAST and There are 5 robot/s in the system`
    );
  });

  it.only("Bringing Robot number 2 to the Table", () => {
    robot.CHANGE_ROBOT(2);
    expect(robot.REPORT_LOCATION()).to.equal(
      `Robot2's coordinates are [0,0], facing WEST and There are 5 robot/s in the system`
    );
  });

  it.only("Bringing Robot number 3 to the Table", () => {
    robot.CHANGE_ROBOT(3);
    expect(robot.REPORT_LOCATION()).to.equal(
      `Robot3's coordinates are [3,3], facing NORTH and There are 5 robot/s in the system`
    );
  });

  it.only("Bringing Robot number 4 to the Table", () => {
    robot.CHANGE_ROBOT(4);
    expect(robot.REPORT_LOCATION()).to.equal(
      `Robot4's coordinates are [0,4], facing NORTH and There are 5 robot/s in the system`
    );
  });

  it.only("Bringing Robot number 5 to the Table", () => {
    robot.CHANGE_ROBOT(5);
    expect(robot.REPORT_LOCATION()).to.equal(
      `Robot5's coordinates are [4,2], facing EAST and There are 5 robot/s in the system`
    );
  });

  it.only("Bringing Robot number 1 to the Table", () => {
    robot.CHANGE_ROBOT(1);
    expect(robot.REPORT_LOCATION()).to.equal(
      `Robot1's coordinates are [0,1], facing NORTH and There are 5 robot/s in the system`
    );
  });
});
