# Tic Tac Toe

### How it works?
```m
1-Create an account and log in with it.
2-Click on create game 2 times. 
3-You are going to see a "game 1" in the "Games" list, click on it and you are goin to see the board.
4-Repeat process 1-3 to create new games.
```

### Technologies 

```m
1-Javascript
2-Jquery
3-Bootstrap
```

### User Stories
```m
1-As a player I want to create an account to play.
2-As a player I want to be able to login.
3-As a player I want to logout whenever I want.
4-As a player I want to save the state of my play.
5-As a player I want to create as many games as I want and see a list of the games I created.
```

### Wireframes

```m
user login page wireframe -->https://i.imgur.com/UqaUFNg.png
user loged wireframe --> https://i.imgur.com/aObjhfO.png
```
##Problem Solving Strategy

```m
I tried to write my code as modular as possible creating js files that I knew I was going to re-use to avoid code repetition.
The board where you can play the game is rendered dynamically with javascript. I tried to not let the browser load too much HTMl code so the 
loading is faster, that's why the board is rendering dynamically. The counting of won games, is generated right away when the user wins or lose.
```