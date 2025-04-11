/**
 * A utility function intended for debugging purposes.
 * When invoked, it triggers a breakpoint in the debugger.
 *
 * Use this function to pause execution and inspect the current state
 * of the application during development.
 */
function debugFn(): void {
  debugger;
}

/**
 * A utility function for handling code paths that should never be reached.
 * Improves code readability and developer experience by providing clear error messaging
 * and automatically triggering the debugger in non-production environments.
 *
 * Use this instead of throwing errors directly for handling defects or unexpected conditions
 * that represent programmer errors rather than operational failures.
 *
 * @param msg - Optional message explaining why this code path should never be reached
 * @param args - Additional arguments to be logged with the error message
 * @returns Never returns - always throws an error
 *
 * @see {@link https://x.com/schickling/status/1910011932276379776}
 * @example
 * ```ts
 * function someFunction() {
 *   // Can be useful when safely unwrapping optional values instead of `maybeUser!`
 *   const user = maybeUser ?? shouldNeverHappen("User expected but missing");
 *
 *   // Or when hitting unexpected code-paths
 *   if (!config.allowUpload) {
 *     return shouldNeverHappen("Uploads should always be allowed here");
 *   }
 * }
 */
function shouldNeverHappen(msg?: string, ...args: unknown[]): never {
  const errorMsg = msg ? `This should never happen: ${msg}` : "An unexpected error occurred";

  console.error(errorMsg, ...args);

  if (process.env.NODE_ENV !== "production") {
    debugFn();
  }

  throw new Error(errorMsg);
}

export default shouldNeverHappen;
