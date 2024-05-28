export const routes = {
  // Core
  base: '/',
  home: '/',
  // Site Admin Panel
  admin: '/admin',
  // Session and Account
  login: '/login', // /access
  loginRequested: '/login/requested', // /magic-link/requested
  loginOtp: '/login/otp', // /magic-link
  logout: '/logout',
  profile: '/profile',
  account: '/account',
  preferences: '/preferences',
  // Public profiles
  users: '/u/:username',
  // Auth
  authRequest: '/auth/:provider',
  authCallback: '/auth/:provider/callback',
  // Pages
  about: '/about',
  changelog: '/changelog',
  faq: '/faq',
  donate: '/donate',
  policies: '/policies',
}
