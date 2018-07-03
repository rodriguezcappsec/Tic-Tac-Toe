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
4-Jquery Ajax
5-SCSS
```

### User Stories
```m
1-As a player I want to create an account to play.
2-As a player I want to be able to login.
3-As a player I want to logout whenever I want.
4-As a player I want to create as many games as I want and see a list of the games I created.
5-As a player I want to see the list of games that are over and be able to see how that game was over.
6-As a player I want to see who won the game, if the X won or the O won the game.
```

### Wireframes

```m
User LogIn page --> https://i.imgur.com/UqaUFNg.png
User Loged page --> https://i.imgur.com/aObjhfO.png
```

### Problem Solving Strategy

```m
I tried to write my code as modular as possible creating js files that I knew I was going to re-use to avoid code repetition. The board where you can play the game is rendered dynamically with javascript. I tried to not let the browser load too much HTMl code so the  loading is faster, that's why the board is rendering dynamically. The counting of won games, is generated right away when the user wins or lose.
```
