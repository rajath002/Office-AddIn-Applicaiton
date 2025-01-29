import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// The @vitest-environment jsdom directive is used to specify that the test environment should use jsdom, 
// which simulates a browser environment for testing purposes. This is necessary for testing components 
// that interact with the DOM, as it provides the necessary APIs and global objects like `window` and `document`.
/**
 * @vitest-environment jsdom
 */

afterEach(() => {
  cleanup();
});
