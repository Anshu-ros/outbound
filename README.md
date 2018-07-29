# Outbound

Create and manage outbound links without hassle.

**Use cases**
* Log clicks to outbound links from your site.
* Host your own **URL shortener**.

---

Table of Contents

* [What are outbound links?](#what-are-outbound-links)
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)

## Features
* Bare minimum dependencies.
* Simple to setup and use.
* Analytics on your count - you have your data.
* Redirects your way - **client-side** or **server-side**.
* Use **shortened URLs** or **complete** - up to you.


## Installation
Requires:
* NodeJS (latest LTS release)
* MongoDB
* A star on this repo.

```bash
npm install
```

## Usage

```bash
npm start
```

### Configuration required
* Rename the file `config.example.json` to `config.json`.
* Read the comments and modify the file accordingly.

**Where to store the config file?**
1. The root of this project (where the example file is), or
2. Anywhere you want and set the `OUTBOUND_CONFIG_JSON` environment variable to the path.

## What are outbound links?
They are links to websites other than your own.

### What's so special about them?
Well. A lot of websites seem to log every click to outbound links for the purpose of analytics.

Example, Google, Slack, Twitter, Facebook.

Try clicking a Google Search Result, link posted in a Slack/Facebook message or on Twitter. 

They don't just directly open up. They first go to some middleman (like https://slack-redir.net, or https://lm.facebook.com, or https://t.co), which redirects you to the expected link.


### So that's just a 301 redirect on server side?
Nope. There are two ways of redirecting.

1. **Server-side**: Do a HTTP 301 to the other side. The specification can be found here: https://www.w3.org/TR/WCAG20-TECHS/SVR1.html. 

2. **Client-side**: Send HTML to the browser. The browser does the rest. No JavaScript. HTML meta tags are enough. Find the specification here: https://www.w3.org/TR/WCAG20-TECHS/H76.html.

The client-side way is the preferred one and reliable . Many times there are devices and browsers which limit the number of redirects, making server-side redirects fail.


### Why the URL shortening?
Ther are use-cases like Twitter, where you don't want long URL, or you need to provide links to be shared on by the users. There you go.