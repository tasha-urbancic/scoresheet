## Appearances
* Landing page ('/') 
    * Needs to be done up
* NavBar
    * Needs to be re-styled (low priority)
    * Search bar should be removed unless we have decided to include that functionality (or if it's just pretending it works for the demo)
* Templates page ('/templates') could use some pep
    * 'Games' -> 'List of Available Games'?
    * Other than that looks good
* Game page ('/games/:id') 
    * Needs a proper url (currently templates/:templateid/games/:id)
    * 'Enter name' landing page:
        * Form is too high, hiding behind navbar -> deal with when styling
        * Could use some general styling
    * Game page with table:
        * Table is also sitting too high, hiding behind navbar a bit
        * Other than that it looks fine
* Create template page ('/templates/new') needs some styling
    * Spacing around inputs and buttons might help clarify what it's doing




## Missing Functionality
* Landing page ('/')
    * 'Start Playing' button goes to /templates/new, should it go to /templates?
* Navbar
    * Search bar accomplishes nothing at this point
* Templates page
    * Start Game buttons suuuper slow sometimes
* Game page
    * Set up actual game id's to put in url
    * Use those id's for the socket session
    * Make it so socket sessions are stored in state so that any user in that socket 'room' can see what people have inputted
        * This is super important for calculating scores
    * Table should auto-calculate scores on every onBlur event where the user input has changed
* Create template page
    * Currently does not save to database for later use at all?
    * Templates should be added to /templates list on creation so that users can immediately play their board game


## Small Bugs
* Game page
    * Needs a proper url (currently templates/:templateid/games/:id)

