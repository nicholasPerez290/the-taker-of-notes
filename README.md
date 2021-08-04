# The Taker of Notes

## What it does

* Allows the user to save, delete and view notes from anywhere

* Saves notes to database for safe keeping

## Features 

* Express.js is used to host the site on its own server

* Data is stored and read on a json file using nodes 'fs'

## How it works

* When the express server is started the homepage can be displayed

* When the start button is clicked you are redirected to the notes page and a get request is made and the items from the database are retrieved and appended to the page

* When the plus button is clicked the user is able to enter a new note

* When the save button is activated a post request is made and the database is updated

* The new note is new on the left side of screen

* When the red trashcan is selected a delete request is made

* the item is removed from the database and the items are written back to the file with new ids.

## Images
[home](Capture.PNG)
[mainpage](Capture2.PNG)