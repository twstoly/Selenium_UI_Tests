### UI Tests - Selenium

###### Author:
##### twstoly

### Project Description
Its test Implementation using javascript and selenium

### Technologies Used
* Javascript
* Selenium

###### SetUp link:
* Clone repository
* Install a Selenium library -
  Open CMD and paste
  ###### npm install selenium-webdriver
* Install browser drivers - 
  Setting up your system to allow a browser to be automated. here is some hard corded location
  ###### const {Builder} = require('selenium-webdriver');
  ###### const chrome = require('selenium-webdriver/chrome');
  ###### const service = new chrome.ServiceBuilder('/path/to/chromedriver');
  ###### const driver = new Builder().forBrowser('chrome').setChromeService(service).build();
* Open the CMD and move to the location of the cloned folder navigating to the tests folder
* To test if the test function as expected Run
  ###### node test.js
* To run the test one by one execute the commented function calls

###### Usage
To test the UI functionalities if they work as expected.

###### BDD
* Open the Browser 
* Check if the link to basic auth can be opened 
* Load the prompt 
* Open Check Boxes link
* Check if the first checkbox is checked
* If not check then check the checkbox
* Open dropdown link
* Test is Clicking on the select Option opens a dropdown list
* If Yes then Select Option 1
* Close Browser
* Open the Form Authentication Link
* Check if username tomsmith is Automatically added. 
* Check if password SuperSecretPassword! is Automatically added to the password input 
* Click login button to submit the inputs
* Close the browser.
* Open Frames link
* Check if the link to nested_frames is opened
* Check if the link to frames is opened
* Close the browser

###### Known Bugs
none

###### Contributing
Reach out for any addition to the project.

###### Copyright
twst@2022
