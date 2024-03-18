# EXPRESS SERVER with Authentication

## Overview

This auth-express-login project uses `httpOnly cookies` to securely store `JWTs`, protecting them from being accessed by client-side scripts and thus mitigating `XSS` risks. `CSRF` protection is implemented using the csurf middleware, which requires a valid `CSRF token` for state-changing requests, preventing `CSRF attacks`. Using `httpOnly cookies` is a step towards securing your application against such vulnerabilities. There are videos listed below that speak to each technology.

This app includes authroutes for Register, Login, Logout, and checking Authentication all handled in the `controllers/authController.js` file.

This will allow you to setup Protected routes on the front end, based on a user being Logged In on the Client Side

## Getting Started

You can use this backend along with the [react-login frontend](https://github.com/10-3-pursuit/auth-react-login) repo as starters for a full stack project that will include login and register.

- Create a parent folder
- `fork` both repos
  - [frontend](https://github.com/10-3-pursuit/auth-react-login)
  - [backend](https://github.com/10-3-pursuit/auth-express-login)
- `clone` both forked repos into the parent folder
- Use the `env.example` in the backend to set up your postgresql database
- Postgresql tables have been included in `db/schema.sql` to define the user.
- If you want the user to have extra fields you must update the schema and update the `db/seed.sql` files properly.
- There are commented areas in the code where you must replace things such as the database name etc.

## Seeding Users

You may seed more than one user.

**Instructions:**

- Go to the `generateHashForSeeding.js` file and fill in the `const password = ` variable with the password you would like to hash
- In the terminal you will see the hash, `copy` it.
- Go to the `seed.sql` and fill in the the row in `VALUES` adding the `username` you choose, `password_hash` (paste the hash you copied for this values), `email` you choose, and then use NOW() for both created_at and updated_at variables.

e.g.

```sql
INSERT INTO users (userame, password_hash, email, created_at, updated_at)
VALUES('jd', '$2b$10$feEQlH1icpSsQo8v2E.ql.ILgoQzXtNEWqqBEgcBDB4P/FzB2Ws16', 'jd@me.com', NOW(), NOW())
```

- run db:init again
- run db:seed again
- test by logging in on the frontend

### Security Explanations

Here are definitions and videos to understand some of the technology used in this auth backend to prevent certain security risks. It is not comprehensive but it is a start to understanding some of what goes into securing a website

#### Use Bcrypt for Password Hashing

The `bcrypt` Node.js package provides a secure way to handle passwords by ensuring that the actual passwords are never stored in the database in plain text, enhancing the security of your application against password theft.

_Hashing Passwords:_ When a new user registers, their password is hashed before being stored in the database. This ensures that even if the database is compromised, the actual passwords are not exposed.

_Comparing Passwords:_ During login, bcrypt compares the submitted password with the hashed password stored in the database. This comparison is done securely to prevent timing attacks.

_What Are Saltrounds?_

`SaltRounds` is a term used in the context of hashing passwords with bcrypt, a password-hashing function. It refers to the cost factor that controls how much time is needed to calculate a single bcrypt hash. The higher the saltRounds, the longer it takes to generate the hash, making the hashing process more resistant to brute-force attacks. `_The recommended default is 10_`

_Purpose_

To introduce a significant work factor in the hashing process. As computing power increases over time, increasing the saltRounds can help maintain the security of hashed passwords by making them more difficult and time-consuming to crack.

_How it Works_

`saltRounds` determines how many times the hashing algorithm is executed. Essentially, the output of one round becomes the input of the next, and this process repeats for as many times as specified by saltRounds. This repeated hashing helps protect against rainbow table attacks and brute-force attacks.

#### Cookie

A small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. Cookies are designed to be a reliable mechanism for websites to remember stateful information (such as items added in the shopping cart in an online store) or to record the user's browsing activity (including clicking particular buttons, logging in, or recording which pages were visited in the past). They can also be used to remember pieces of information that the user previously entered into form fields, such as names, addresses, passwords, and credit card numbers.

[Cookie Explanation Video](https://www.youtube.com/watch?v=s04Vjlcgwco)

#### httpOnly Cookie

A flag added to cookies that instructs the browser to prevent client-side scripts from accessing the data in the cookie. This helps mitigate cross-site scripting (XSS) attacks by ensuring that the cookie can only be sent to the server with HTTP requests.

[HTTPOnlyCookie Video](https://www.youtube.com/watch?v=ROg1p0UZL0M) - The first 5 minutes give you a good understanding.

#### XSS (Cross-Site Scripting)

A security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. These scripts can steal user data, impersonate the user, or perform actions on behalf of the user without their consent.

[XSS - Cross Site Scripting Video](https://www.youtube.com/watch?v=EoaDgUgS6QA)

#### CSRF (Cross-Site Request Forgery)

A type of attack that tricks the victim into submitting a malicious request. It exploits the trust that a site has in a user's browser, and it can be mitigated by using anti-CSRF tokens which validate that the requests made to a server are intentional and originate from the authenticated user.

[CSRF - Cross Site Resource Forgery Video](https://www.youtube.com/watch?v=eWEgUcHPle0)

#### JWT (JSON Web Token)

A compact, URL-safe means of representing claims to be transferred between two parties. It is often used for storing user session information in a secure way, and it can be signed to ensure the integrity and authenticity of the data it contains.

[JWT - JSON Web Token Video](https://www.youtube.com/watch?v=P2CPd9ynFLg)

### Go to Frontend

Also consult [Auth-Express-Frontend Readme](https://github.com/10-3-pursuit/auth-react-login) to see what security precautions have been put into place using a `ProtectedRoute` as well as sending `XSRF Tokens` to the server.
