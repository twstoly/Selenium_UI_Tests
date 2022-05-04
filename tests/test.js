const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

// Test Basic Auth
async function test_basic_auth(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://the-internet.herokuapp.com/basic_auth")

}

//Test Chckboxes
async function test_chec_boxes(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://the-internet.herokuapp.com/checkboxes")
    
    var form = driver.findElement(By.id("checkboxes"));

    form.findElement(By.xpath("//input[@type = 'checkbox']")).click();

}

//Test DropDown
async function test_dropdown(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://the-internet.herokuapp.com/dropdown")
    
    var select = driver.findElement(By.id("dropdown"));

    select.click();
    
    select.findElement(By.xpath("//option[@value = '1']")).click();
    
    driver.quit();
    
}

//Test Form Authentication
async function test_login(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://the-internet.herokuapp.com/login")
    
    var username = driver.findElement(By.id("username"));
    
    var password = driver.findElement(By.id("password"));

    var login = driver.findElement(By.className("radius"));

    username.sendKeys("tomsmith ")
    
    password.sendKeys("SuperSecretPassword!")

    login.click();

    driver.quit();
}

//Test Frames
async function test_frames(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://the-internet.herokuapp.com/frames")
    
    await driver.findElement(By.xpath("//a[@href='/nested_frames']")).click();

    await driver.get("https://the-internet.herokuapp.com/frames")

    await driver.findElement(By.xpath("//a[@href='/iframe']")).click();
    
    driver.quit();
}

//call to start executing test basic auth function
test_basic_auth()

//call to execute test_chec_boxes functiion
// test_chec_boxes();

//call to execute test_frames functiion
// test_frames();

//call to execute test login functiion
// test_login();
    
//call to execute test_dropdown functiion
// test_dropdown();