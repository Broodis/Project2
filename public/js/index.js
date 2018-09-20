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
// socials page references
var $facebook = $(".facebookEntry");
var $instagram = $(".instagramEntry");
var $twitter = $(".twitterEntry");
var $snapchat = $(".snapchatEntry");
var $addSocials = $(".addSocialsBtn");
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
  saveNewUser: function() {

  },
  getSocials: function() {

  },
};


// handleFormSubmit is called when a new user signs up for the app
// Save the new user's info to the db and then refresh
var saveNewUser = function(event) {
    event.preventDefault();

    var user = {
        firstName: $firstName.val().trim(),
        lastName: $lastName.val().trim(),
        email: placeholder.val().trim(),
        password: placeholder.val().trim(),
        confirmPassword: placeholder.val().trim(),
        phoneNumber: placeholder.val().trim(),
        // socials
        facebook: placeholder.val().trim(),
        twitter: placeholder.val().trim(),
        instagram: placeholder.val().trim(),
        snapchat: placeholder.val().trim(),
    };

    if (!(user.firstName && user.lastName && user.email && user.password)) {

    }
};