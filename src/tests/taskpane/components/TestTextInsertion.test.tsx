import { OfficeMockObject } from "office-addin-mock";
import { describe, it, expect } from "vitest";

describe("TestTextInsertion Component", () => {
  // Create the seed mock object.
  const mockData = {
    workbook: {
      range: {
        address: "C2:G3",
      },
      // Mock the Workbook.getSelectedRange method.
      getSelectedRange: function () {
        return this.range;
      },
    },
  };

  // Create the final mock object from the seed object.
  const contextMock = new OfficeMockObject(mockData);

  const myExcelAddinFeature = {
    getSelectedRangeAddress: async (context) => {
      const range = context.workbook.getSelectedRange();
      range.load("address");

      await context.sync();

      return range.address;
    },
  };

  /* Code that calls the test framework goes below this line. */

  it("Text of selection in message should be set to 'Hello World'", async function () {
    expect(await myExcelAddinFeature.getSelectedRangeAddress(contextMock)).toBe("C2:G3");
  });
});
