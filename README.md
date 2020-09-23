# ExpenseTracker by Ryan Salas
Record and track expenses.

This web page allows a user to keep track of their expenses and gives them the ability to: add, delete, search, and list out their expenses.

This web page was created using Node.js as well as Express.js and Handlebars.js for formatting. Styling was done using Bootstrap as well as some manual CSS.

----------------------How to Use----------------------------------------

Firstly, I believe you might need Node.js as well as Nodemon from npm in order to host this website through localhost.

Once you download the zip and unzipped it in your preferred location or pulled the project off github, enter the "ExpenseTracker" folder using command line. 

Assuming you have Node and Nodemon, you are able to simply enter the command "nodemon index" and the application will get hosted on localhost. If it is running, it will tell you which port it is running on in the command line.

Once you have entered the "localhost:xxxx" url in your browser, the webpage will load and the following features will be shown:

1- Search bar

    Description: Use this feature to search for a specific expense from your list. 

    NOTE: The search bar is case sensitive is the search is based on the expense name.

2- "Search" button

    Description: Press in order to use the search bar function. Leave search bar empty if you would like to refresh the list to its original state

3- "Add Expense" button

    Description: Use this button to show the form where you can enter a new expense with the following criteria:

        a. Expense Name
        b. Expense Cost
        c. Expence Category

    Once done, press the "Submit" button to enter the new expense or press the "Add Expense" button again to hide the form.

4- Expense list

    Description: This is a table that shows all existing expenses added. It takes data submitted from the form onto the browser's local storage and displays it to you.

    NOTE: Each row will have a designated "Delete" button that you can use to remove that specific row from your web page and localstorage.

