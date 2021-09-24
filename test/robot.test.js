const expect = require("chai").expect;
const Robot = require("../robot");

describe("Testing all Robot class methods", () => {
  it("creates a robot on the table facing NORTH and moving forward", () => {
    const robot = new Robot();
    // robot.PLACE_ROBOT(0, 0, "NORTH");
    // robot.MOVE_FORWARD();
    // expect(robot.REPORT_LOCATION()).to.equal(
    //   `Robot1's coordinates are [0,1] and facing NORTH`
    // );
  });
});
