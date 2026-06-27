# Testing Management Tools: A Practical CI Comparison

This repository accompanies an article comparing GitHub Actions, GitLab CI/CD,
Jenkins, CircleCI, and other tools used to automate software testing.

The example models a small e-commerce shipping rule:

- domestic orders below $100 cost $8 to ship;
- domestic orders of $100 or more receive free shipping;
- international shipping costs $25;
- invalid input is rejected.

## Run locally

Requirements: Node.js 20 or later. No third-party dependencies are needed.

```bash
npm test
```

Run the tests with Node.js coverage:

```bash
npm run test:coverage
```

## Continuous integration

The workflow in `.github/workflows/tests.yml` runs the test suite on Node.js 20
and 22 whenever code is pushed to `main` or a pull request is opened.

This is a deliberately small example, but it demonstrates production-friendly
ideas: tests as a merge gate, a version matrix, minimal permissions, and fast,
repeatable feedback.

## Equivalent pipeline concepts

| Concept | GitHub Actions | GitLab CI/CD | Jenkins |
|---|---|---|---|
| Configuration | `.github/workflows/*.yml` | `.gitlab-ci.yml` | `Jenkinsfile` |
| Execution unit | Job | Job | Stage |
| Shared automation | Actions | Includes/components | Plugins/shared libraries |
| Hosted option | GitHub-hosted runners | SaaS runners | Usually self-managed agents |

## License

MIT
