# Starter Kit

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

- [x] Full stack ES8+ with [Babel]
- [x] [Node] LTS support (verified working on 16.x, 18.x and 20.x LTS releases)
- [x] [Express] server
- [x] Logging with [Winston] and [Morgan]
- [x] [React] client with [Webpack]
- [x] Client-side routing with [React Router]
- [x] Linting with [ESLint] and [Prettier]
- [x] Dev mode (watch modes for client and server, proxy to avoid CORS issues)
- [x] Production build (single deployment artifact, React loaded via CDN)
- [x] [Render] deployment
- [x] [Cloud Foundry] deployment
- [x] [Docker] build
- [x] [Postgres] database with [node-postgres]

## Setup

> **Note** if you have _any problems_ setting up the starter kit, see the [wiki] and, if still not solved, post to
> [`#cyf-full-stack-starter-kit` in Slack][2].

Pick one member of the team to own the repository and pipeline. That person should do the following:

1.  Click the "Use this template" button above (see [GitHub's docs][1]) to create your team repository and name it something appropriate for your project.
    - Your repo should say _"generated from"_, **not** _"forked from"_, _"CodeYourFuture/cyf-final-project-starter-kit"_ at the top
2.  In your repo, click the "Deploy to Render" button at the top of the README and log in using GitHub when prompted.
3.  Fill in a service group name for your application and then click "Apply".
4.  Once it has deployed successfully, click the "managed resources" link to view the application details.

Whenever you commit to main (or e.g. merge a [pull request]) it will get automatically deployed!

You should now make sure all of the project team are [collaborators] on the repository.

## Scripts

Various scripts are provided in the package file, but many are helpers for other scripts; here are the ones you'll
commonly use:

- `dev`: starts the frontend and backend in dev mode, with file watching (note that the backend runs on port 3100, and
  the frontend is proxied to it).
- `lint`: runs ESLint and Prettier against all the code in the project.
- `serve`: builds and starts the app in production mode locally.

### Debugging

While running the dev mode using `npm run dev`, you can attach the Node debugger to the server process via port 9229.
If you're using VS Code, a debugging configuration is provided for this.

There is also a VS Code debugging configuration for the Chrome debugger, which requires the recommended Chrome
extension, for debugging the client application.

### Security

If the project handles **any kind of** Personally Identifiable Information (PII) then make sure the following
principles are followed:

- Only collect **strictly necessary** PII;
- Access to PII should be as restricted as possible;
- Access to PII should only be possible after authentication. Authentication **must be done** via GitHub. **Ad hoc
  authentication solutions are not allowed**;
- Admins must be able to control who has access to the platform and at which levels using only GitHub groups;
- There must be an audit mechanism in place. It is required by law to know who accessed what and when;
- Code must be reviewed by senior developers before being pushed to production;
- APIs must be secure. Make sure we are not handling security on the frontend.

### Troubleshooting

See the guidance in the [wiki].

[1]: https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template
[2]: https://codeyourfuture.slack.com/archives/C021ATWS9A5
[Babel]: https://babeljs.io/
[Cloud Foundry]: https://www.cloudfoundry.org/
[collaborators]: https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository
[Docker]: https://www.docker.com
[ESLint]: https://eslint.org/
[Express]: https://expressjs.com/
[Morgan]: https://github.com/expressjs/morgan
[Node]: https://nodejs.org/en/
[node-postgres]: https://node-postgres.com/
[Postgres]: https://www.postgresql.org/
[Prettier]: https://prettier.io/
[pull request]: https://help.github.com/en/articles/about-pull-requests
[React]: https://reactjs.org/
[React Router]: https://reactrouter.com/web
[Render]: https://render.com/
[Webpack]: https://webpack.js.org/
[wiki]: https://github.com/textbook/starter-kit/wiki
[Winston]: https://github.com/winstonjs/winston
