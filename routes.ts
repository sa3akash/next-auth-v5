/**
 * An array of routes that are accessible to the public
 * this route do not require any authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that are use to authentication
 * these routes will redirect logged in user to direct
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * this prefix for api authentication
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * Redirect to user settings page if user is logged in
 * @type {string}
 */
export const DEFAULT_Logged_Redirect = "/settings";
