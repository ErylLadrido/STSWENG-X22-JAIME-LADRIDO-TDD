# Unit Testing Example with Jest and Sinon

This example is for the STSWENG course to illustrate how to mock the database connection with `mongodb` and `mongoose`. The example was based on [this example from Talha Awan](https://www.techighness.com/post/unit-testing-expressjs-controller-part-1/).

Alternatively, mongoose can also be mocked using [`mockingoose`](https://github.com/alonronin/mockingoose).

## Requirements
* [NodeJS & npm](https://www.npmjs.com/get-npm)
* [MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/) (Must be running in the background)
* [Postman](https://www.postman.com/) - To be able to test the endpoints
* Any text editor for JavaScript, HTML & CSS (VSCode, Atom, SublimeText, etc.)

## Pre-Setup
1. Fork this repository by clicking the Fork button up at the top of this page.
2. Clone **your copy** of the repository `git clone https://github.com/<YOUR_USERNAME>/node-unit-mvc.git`

## Running locally
1. Navigate to the directory: `cd node-unit-mvc`
2. Install the dependencies: `npm install`

*Note: The only script set up for this project is the `npm run test` which will run `jest`.*

## Setting up the test
The `post.test.js` file will be built up during the class.