import { afterEach, beforeEach, describe, expect, it, jest } from "@jest/globals";

import shouldNeverHappen from "./should-never-happen";

jest.mock("./should-never-happen", () => {
  const debugFnSpy = jest.fn();

  const actual = jest.requireActual<{ default: typeof shouldNeverHappen }>(
    "./should-never-happen",
  ).default;

  return {
    __esModule: true,
    default: (...args: Parameters<typeof actual>): ReturnType<typeof actual> => {
      if (process.env.NODE_ENV !== "production") {
        debugFnSpy();
      }

      return actual(...args);
    },
    _debugFnSpy: debugFnSpy,
  };
});

describe("shouldNeverHappen", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    jest.restoreAllMocks();
    process.env = originalEnv;
  });

  it("should throw an error with the provided message", () => {
    const message = "This is a test error";

    expect(() => shouldNeverHappen(message)).toThrow(`This should never happen: ${message}`);
    expect(console.error).toHaveBeenCalledWith(`This should never happen: ${message}`);
  });

  it("should throw an error with a default message if no message is provided", () => {
    expect(() => shouldNeverHappen()).toThrow("An unexpected error occurred");
    expect(console.error).toHaveBeenCalledWith("An unexpected error occurred");
  });

  it("should log additional arguments if provided", () => {
    const message = "Test error with args";
    const arg1 = { key: "value" };
    const arg2 = [1, 2, 3];

    expect(() => shouldNeverHappen(message, arg1, arg2)).toThrow(
      `This should never happen: ${message}`,
    );
    expect(console.error).toHaveBeenCalledWith(`This should never happen: ${message}`, arg1, arg2);
  });

  it("should trigger the debugger in non-production environments", () => {
    process.env.NODE_ENV = "development";

    const mockModule = jest.requireMock("./should-never-happen") as {
      _debugFnSpy: jest.Mock;
    };

    expect(() => shouldNeverHappen("Debug test")).toThrow();
    expect(mockModule._debugFnSpy).toHaveBeenCalled();
  });

  it("should not trigger the debugger in production environments", () => {
    process.env.NODE_ENV = "production";

    const mockModule = jest.requireMock("./should-never-happen") as {
      _debugFnSpy: jest.Mock;
    };

    expect(() => shouldNeverHappen("Production test")).toThrow();
    expect(mockModule._debugFnSpy).not.toHaveBeenCalled();
  });
});
