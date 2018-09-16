// home page (search bar) references
var $searchInput = $("#searchInput");
var $searchSubmit = $("#searchSubmit");
// sign-up page references
var $firstName = $("#firstName");
var $lastName = $("#lastName");
var $cellPhoneNumber = $("#cellPhoneNumber");
var $emailAddress = $("#emailAddress");
var $password = $("#password");
var $confirmPassword = $("#confirmPassword");
var $signUpButton = $("#signUpButton");
// login/sign-in page references
var $signInNum = $("#signInNum");
var $signInPass = $("#signInPass");
// socials page references
// *TO DO*
// settings page references
// *TO DO*
// 404 error page references ?

// API Object
var API = {
  saveNewUser: function()
}


// handleFormSubmit is called when a new user signs up for the app
// Save the new user's info to the db and then refresh
var handleFormSubmit = function(event) {
    event.preventDefault();

    var user = {
        firstName: ,
    };
};