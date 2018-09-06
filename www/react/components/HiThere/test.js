import React from "react";
import Enzyme, { configure, shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import Component from "./index.js";

Enzyme.configure({ adapter: new Adapter() });

/**
 * ENZYME DOCS: http://airbnb.io/enzyme/docs/guides/jest.html
 * JEST EXPECT DOCS: https://jestjs.io/docs/en/expect.html
 *
 *
 * https://github.com/facebook/jest/tree/master/examples
 * https://www.youtube.com/watch?v=8Ww2QBVIw0I&feature=youtu.be
 * https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f
 *
 */

// Test the component
describe("HiThere  (Snapshot)", () => {
  it("HiThere  renders without crashing", () => {
    const component = renderer.create(<Component />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

// Test the logic
describe("Addition", () => {
  it("knows that 2 and 2 make 4", () => {
    const actual = 2 + 2;
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});
