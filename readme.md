# Introduction

This MVP web application will showcase the possibility of having webapp to standardise MSISDNs (Telephone numbers) to E164 format (e.g. +447912345678) which is compatible with other corporate systems. This will ensure matching entites is done consistently with the highest chance of success.

# Table of Contents
- [`Installation`](#Installation)
- [`Usage`](#Usage)
- [`Contributing`](#Contributing)
- [`License`](#License)

# Installation
This application consists of HTML and Javascript with static unit tests completed in a jest framework.

# Usage
The code can be run using github pages or cloning the repository in vscode and using live server extenstion to run the page.

# Design
The wire frame for the webapp was designed and prototyped in Figma. This allowed for the app to be designed and shown to customers, allowing for instant feedback around design and the flow of the app. Initially I had designed an app with separate input and results pages. Customer feedback from the design stage said this was unnecessary as they wanted to see the RAW and standardised together, but didnt want to export the RAW at the end. This allowed for a more streamlined codebase and less HTML pages. As the app becomes more complex, extra pages may be required.

[Figma wireframe URL] (https://www.figma.com/file/Z6HpTQU05zg2OTryS5L4AR/SA1?type=design&node-id=0%3A1&mode=design&t=X9lGazhlGBTKNXYi-1)

Below are screenshots of the prototype:
![home page](.resources/page1.png)
The home page which the user first goes to allowing them to record their username and the task they are using the app for. This is for both audit and performance statistics collection purposes/
![index page](.resources/page1.png)
This si the page where the user can type in a list of new line separated MSISDNs or ingest a single column .csv or .txt file
![output](.resources/page1.png)
This is the output for the app, a list of standardised numbers copied to clipboard.


# Contributing
The code is held in the [repo] (https://github.com/aa2112a/aa2112a-_-SE-SumAsses1-Jan22-Cohort.git)
All updates should be made to a branch and be peer checked, tested and documentation updated prior to merging the update branch with the main branch. Diret main merges are forbidden due to unforseen onward issues and merge conflict resolution. 

# License
No Licesnse file. Inform the Data Management Office if this code needs to be exported from the platform. 

# Evaluation
This webapp works well but is very much an MVP for what is possible. 
The final app would need the home page to be linked to an audit system to record the user and task number.
The standardising algorith would need to be changed to use the google phonenumbers library, which is used to standardise our communication entities elsewhere, but ws out of scope for this project.  

more file types
allow column selection for standardisation
return data as a table