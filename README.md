# Simple React Typescript Drone Challenge Application

## Setting up the project

Fork or download this project or git clone, then:

## Frontend

```sh
# install dependencies
yarn install

# Run the app
yarn start
```

Description:

Bigdatr's aerial drone takes photographs of billboards based on simple movement instructions. The drone can move North (^), South (v), East (>), or West (<), and take a photograph (x) at each location.

The system processes a string of instructions, moves the drone accordingly, and tracks all unique billboards photographed. If the drone revisits a location, it may take multiple photos of the same billboard.

Key Features:
Movement: Drone moves 1 km in specified directions.
Photo Capture: Drone takes a photo (x) at each position.
Unique Billboards: Tracks all unique locations visited and photographed.
Edge Cases: Handles repeated visits and multiple photos at the same location.


## Backend

```sh
# install dependencies
yarn install

# Run the api
yarn watch:api
```

The api will start running at `http://localhost:4001`.

It consists of 2 GET endpoints

1. `/instruct-drone` - accepts a list of instructions for the drone, and returns all bilboards found with their details. Example usage: `http://localhost:4001/instruct-drone?instructions=x^xv`

2. `/get-billboard` - accepts an ID of a billboard and returns details of a single billboard. Example usage: `localhost:4001/get-billboard?id=5aba7bffddc4ecbbb81e7fad`

## Improvements & Future Enhancements:

* Error Handling: Improve error handling for edge cases such as invalid instructions or API failures.
* Loading State: Add a more comprehensive loading state across the app.
* Testing: Write unit tests and integration tests for components and services.
* Styling: Implement a more polished UI using CSS frameworks like Material UI or Bootstrap.
