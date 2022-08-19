# Bad Bank front end Application

This app was created as a part of the MIT xPro Professional Certificate in Coding course. The app has an appearance of a banking app but no real money is involved. 

### How to use
You have access to Create Account, Login and All Data pages from the landing page. Once you create an account and log in you will be granted access to Withdrawal, Deposit and Balance pages as well. 
Create Account Login have validations in place to prevent invalid names, emails or password and Withdrawal and Deposit have validations to only allow positive numbers and no letter or special characters. 

The page is deployed through an AWS at the follwing address:
http://ilya-flaks-badbank.s3-website-us-west-1.amazonaws.com/

You can also clone this repo, open the Terminal, cd into the folder, enter "npm install" to install the node modules and then "npm start" to start the app on your machine. 

### Challenges
The biggest challenge was to simulate a user experinece with Context. Every part of the app subscribes to the context that holds 1) the info on all of the accounts and 2) whether or no a user is logged in. The second functionality was achieved by creating another state inside the context called userLoggedIn which is an index for the array of all users. 
A smaller challenge was creating the hover effect for the nav bar to display an explanation for each page. This part needs some work because each onMouseEnter event creates a child in the DOM tree that is not cleaned up with the onMouseLeave event. 

### Changes to the starter code
Some minimal design changes were implemented to have more whitespace on the page and pictures of buildings to go with the professional looking grey theme. The log in functionality was optional so that was no in the starter code. This app is created with "npx create-react-app" as opposed to the standalone version and most of the code had to be written from scratch. 

MIT License
