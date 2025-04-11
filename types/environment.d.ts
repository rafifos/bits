declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * The environment in which the application is running.
     * Here, we only consider `production`, setting `NODE_ENV` to anything but `production` is considered an _antipattern_.
     *
     * @see {@link https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production|Node.js, the difference between development and production}
     */
    NODE_ENV: "production" | string;
  }
}
