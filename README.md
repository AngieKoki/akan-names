# AKAN NAMES PROJECT

## Project description
This is a web application that takes a user's birthday and calculates the day of the week they were born and then depending on their gender outputs their Akan Name. 

Akan names are derived from Ghanian culture. Frequently in Ghana, children are given their first name as a 'day name' which corresponds to the day in the week they were born. 

## Author
Angela Koki

## Setup instructions
Assuming you are already on github:

1. On the top right corner of your screen, you should see a button with the text 'Fork'
2. Click on this button to start the process of copying the project/repository to your own account.
3. You will be prompted to choose the account to which you want to fork.
4. Select your account name which should take you to the repo you forked in your account.
5. To know that the forking process is complete, check the top left corner of your repo.
6. You should be in your account in a repo with the same name as the original repository.This shows that the forking process is complete.
7. You can then proceed to clone it to make a copy in a location in your device
8. Open the terminal application. 
9. Navigate to your desired location from the terminal.
10. Run the command: git clone [remote url]
    *(remember to replace 'your-username' in the url with your GitHub username to prevent cloning the wrong repository)
11. Navigate to inside the cloned repository by using the change directory (cd) command. 
12. Open your editor by using the command atom . for Atom users or code . for Visual Studio    Code users.
    You are now ready to make modifications to the project you forked

## Known Bugs
No Known Bugs

## BDD
### Feature: Akan Name Generator
### Description
As a user
I want to input my name, birthday and select my gender
So that I can get an Akan Name

### Scenarios
1. Name and birthday inputted and gender selected:

    Given the name is inputted
        and birthday is inputted
        and gender is selected
    When the user clicks on Submit
    Then the application generates a valid Akan name

2. Name and Birthday inputted and gender NOT selected:

    Given the name is inputted
        and birthday is inputted
        and gender is  NOT selected
    When the user clicks on Submit
    Then the application generates an error message to fill in the necessary field

3. Name inputted and gender selected but birthday not inputted:

    Given the name is inputted
        and gender is selected
        and birthday is NOT inputted
    When the user clicks on Submit
    Then the application generates an error message to fill in the necessary field

4. Name inputted but gender NOT selected and birthday NOT inputted:

     Given the name is inputted
        and gender is NOT selected
        and birthday is NOT inputted
    When the user clicks on Submit
    Then the application generates an error message to fill in the necessary fields

5. No input in any field:

    *Given no input in any field
    *When the user clicks on Submit
    *Then the application generates an error message to fill in the necessary fields

## Technologies used
I used: HTML CSS and  JAVASCRIPT to create this application

## Contact information

Incase of any questions related to this project you can contact me at angie.dar66@gmail.com

## License and Copyright information 
MIT