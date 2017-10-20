# Routes:

## '/' 
    * GET
    * homepage

---

## '/templates/new' 
    * GET, POST
    * create new template

---

## '/templates/:id' 
    * GET, PUT
    * view single template details
    * owner of template can edit from here

---

## '/games/new' 
    * POST
    * creates a new game

---

## '/games/:id'
    * GET
    * this link is shared to game participants
    * join a game from here
    * live updates

---

## '/login'
    * GET, PUT
    * logs user in

---

## '/register'
    * GET, POST
    * create user account, logs them in at the same time

---

## '/users/:id'
    * GET
    * shows user details (templates they've made, game scores)

---

## '/templates/:id/delete'
    * deletes template (but not attached games)
    * games from deleted template show scores, but not template information (error message, "Whoops! This template has been deleted, but we still have your scores :)")