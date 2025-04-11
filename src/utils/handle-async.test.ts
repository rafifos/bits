import { describe, expect, it } from "@jest/globals";
import handleAsync from "./handle-async";

describe("handleAsync", () => {
  it("should return `ok: true` and the resolved value when the promise resolves", async () => {
    const resolvedValue = "success";
    const promise = Promise.resolve(resolvedValue);

    const result = await handleAsync(promise);

    expect(result).toEqual({
      ok: true,
      value: resolvedValue,
      error: null,
    });
  });

  it("should return `ok: false` and the error when the promise rejects with an Error", async () => {
    const error = new Error("failure");
    const promise = Promise.reject(error);

    const result = await handleAsync(promise);

    expect(result).toEqual({
      ok: false,
      value: null,
      error: error,
    });
  });

  it("should return `ok: false` and wrap non-Error rejections in an Error object", async () => {
    const rejectionValue = "failure";
    const promise = Promise.reject(rejectionValue);

    const result = await handleAsync(promise);

    expect(result.ok).toBe(false);
    expect(result.value).toBeNull();
    expect(result.error).toBeInstanceOf(Error);
    expect(result.error?.message).toBe(rejectionValue);
  });
});
