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

**Cookie:**

A small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. Cookies are designed to be a reliable mechanism for websites to remember stateful information (such as items added in the shopping cart in an online store) or to record the user's browsing activity (including clicking particular buttons, logging in, or recording which pages were visited in the past). They can also be used to remember pieces of information that the user previously entered into form fields, such as names, addresses, passwords, and credit card numbers.

[Cookie Explanation Video](https://www.youtube.com/watch?v=s04Vjlcgwco)

**httpOnly Cookie:**

A flag added to cookies that instructs the browser to prevent client-side scripts from accessing the data in the cookie. This helps mitigate cross-site scripting (XSS) attacks by ensuring that the cookie can only be sent to the server with HTTP requests.

[HTTPOnlyCookie Video](https://www.youtube.com/watch?v=ROg1p0UZL0M) - The first 5 minutes give you a good understanding.

**XSS (Cross-Site Scripting):**

A security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. These scripts can steal user data, impersonate the user, or perform actions on behalf of the user without their consent.

[XSS - Cross Site Scripting Video](https://www.youtube.com/watch?v=EoaDgUgS6QA)

**CSRF (Cross-Site Request Forgery):**

A type of attack that tricks the victim into submitting a malicious request. It exploits the trust that a site has in a user's browser, and it can be mitigated by using anti-CSRF tokens which validate that the requests made to a server are intentional and originate from the authenticated user.

[CSRF - Cross Site Resource Forgery Video](https://www.youtube.com/watch?v=eWEgUcHPle0)

**JWT (JSON Web Token):**
A compact, URL-safe means of representing claims to be transferred between two parties. It is often used for storing user session information in a secure way, and it can be signed to ensure the integrity and authenticity of the data it contains.

[JWT - JSON Web Token Video](https://www.youtube.com/watch?v=P2CPd9ynFLg)
