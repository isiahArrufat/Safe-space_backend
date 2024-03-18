# EXPRESS SERVER with Authentication

## Overview

This auth-express-login project uses httpOnly cookies to securely store JWTs, protecting them from being accessed by client-side scripts and thus mitigating XSS risks. CSRF protection is implemented using the csurf middleware, which requires a valid CSRF token for state-changing requests, preventing CSRF attacks. Using httpOnly cookies is a step towards securing your application against such vulnerabilities. There are videos listed below that speak to each technology.

This app includes authroutes for Register, Login, Logout, and checking Authentication all handled in an `authController`

This will allow you to setup Protected routes on the front end, based on a user being Logged In on the Client Side

## Getting Started

You can use this backend along with the [react-login frontend](https://github.com/10-3-pursuit/auth-react-login) repo as starters for a full stack project that will include login and register.

- Create a parent folder
- `fork` both repos
- `clone` both forked repos into the parent folder
- Use the `env.example` to set up your postgresql database
- Tables have been included for the user.
- If you want the user to have other fields you must update the schema and seed files properly
- There are commented areas in the code where you must replace things such as the database name etc.

### Security Videos

Here are videos to understand some of the technology used in this auth backend to prevent certain security risks. It is not comprehensive but it is a start to understanding some of what goes into securing a website

- [Cookies](https://www.youtube.com/watch?v=s04Vjlcgwco)

- [HTTPOnlyCookie](https://www.youtube.com/watch?v=ROg1p0UZL0M) - the first 5 minutes give you a good understanding.

- [JWT - JSON Web Tokens](https://www.youtube.com/watch?v=P2CPd9ynFLg)

- [CSRF - Cross Site Resource Forgery](https://www.youtube.com/watch?v=eWEgUcHPle0)

- [XSS - Cross Site Scripting](https://www.youtube.com/watch?v=EoaDgUgS6QA)
