# Project-3
## Helprr

### Idea:
We wanted to make a sort of social networking site that would sort of cut through all the negativity on the internet
by being a place where one can find help with any sort of problem they have.

### Process:
We talked about what this could be. We wanted to have the ability to post video tutorials on different subjects and post
requests for information. We thought it could be similar to Reddit where you can post links to videos and images or even
just text asking for help and people could comment with help. We also wanted the ability to sort through the posts with a
search function and have some private chat functionality. The last thing we really wanted to implement was a live stream
for immediate and direct help and possibly "classes" where many people could watch a live tutorial at the same time.

Through the process of narrowing down the possiblities and weighing our wants against the time we had we came up with a
smaller, less full version of our app. As it currently stands video posts and image posts can be made to either leave a
tutorial or ask for help. Comments can also be left on every post. We have a small incomplete search function that will
filter the currently visible posts. We also have a user registration and login system in place.

### Implementation:
We used a slight variation on the MERN stack for this app - MySQL instead of Mongo. We used sequelize to handle our MySQL
queries. We have a React front end modified from a template from CodeSandbox. We have a back end powered by a Node and
Express server which our API calls run through. We also used Redux for state management. 

When a user logs in their credentials are stored in their cookies so they can stay logged in. These credentials are then also
stored in the state to make it easy to grab their info when they post or comment. If the user visits the site while already
logged in, the site grabs their credentials from their cookies immediately. The username is added to posts and comments and a
user can see an _X_ next to comments they made which allows them to delete a comment. Registration and posting go through API
routes to add the appropriate info to the database. When the page loads an API call is made to get post info from the database.
When a user clicks on a post, an API call finds the comments in order to display them under the post.

### Next Steps:
The next version of this app needs to improve upon the login system - as it stands sometimes when a user hasn't logged in
previously an error is thrown and the page won't load at all. The search system needs to be updated to look through the
databse instead of just looking through the posts saved in the state. There is an automated "Chat Bubble" that doesn't really
do a lot that either needs to be deleted entirely or reworked into a functional user to user chat. Direct messaging needs to be
added if the chat bubble isn't reworked. Comments could be changed to allow commenting on comments and currently all comments
are displayed whenever you look at a post, but we would like to change it so it only shows a few and more can be loaded - the
posts have a similar issue where only ten posts will be displayed and we don't have any way to load more. Finally, the initial
idea was to have help available in real time, so to actually bring this idea full circle we need to add live streaming capa-
bilities so people can get personalized help in a one on one setting.
