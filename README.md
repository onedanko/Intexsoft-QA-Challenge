## Intexsoft qa challenge

This solution is using Cypress as automation framework

Quick start commands:
## Installing
```
$ npm run install
```

The project structure is:

   ├── BUG_Reports                              # Bug report as pdf
   ├── cypress
        ├── e2e                                 # Tests 
        └── support                                  
      ├── .gitignore
      ├── cypress.json
      ├── package-lock.json
      ├── package.json  
      └── README.md

## Running of tests

For execution of tests use:
```
$ npm run tests
```
Tests can also will run from cypress dashboard. 

To do this use: 
1. Run this command
```
$ npx cypress open
```
2. Select E2E testing
3. Choose browser
4. Run apiRestCountries.cy.js spec

P.S. I created a bug report for one bug. It stored in /BUGS folder
