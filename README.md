# backend-test

# Getting Started

1) Run:
``` npm i ```
Should install all required packages locally

2) Install Docker if you haven't already
3) Run ```docker compose up ``` from terminal in the root directory
    
   **NOTE**: You can `CTRL+C` out of docker compose and it will spin down the pg instance, but it will keep any data that you have added to it. If you need to reset your database, you can just trash your docker container/image/volume and run `docker compose up` to have a clean environment.
4) In a new terminal run: 
    ```
    npm run create:db
    npm run seed:db
    npm run test:db
    ```
    Note you will have to press CTRL+C after `Done` appears in terminal
5) In root directory create `.env` and declare `PORT=${port you want server to run on}`
6) Run `npm run start:dev` and open up a browser to `https://localhost:${port}` you should see some test text

# Learning
The point of this is to get you more comfortable using Zod and typescript.

This server has `strict` enabled so the usage of `any` in your code will be flagged as error prone

Begin by studying the files in the database file, read through the comments and understand how types are being parsed

For more zod documentation please go to https://zod.dev/?id=introduction and read through some examples
(you don't need to read it all)

It may also be useful to look at the documentation for node pg to get some of the basic ideas down on how to 
interact with the db using it

# Assignment
Your goal is going to be to write out a **REST API** for a backend service that is used to track 
music data for users

You do not need to have a huge seeded list of albums/artists/songs but you should be able support
people adding that data into your database

People should be able to also add their own reviews to albums/artists/songs along with a rating score (up to you to decide the rating scale)


# The Point
The goal in this isn't for you to build out something crazy but more for you to flex some backend design thinking and also do a little learnign as well

Zod and Typescript are important tools that are pretty fantastic at making your dev life easier.

