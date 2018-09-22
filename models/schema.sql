DROP DATABASE IF EXISTS keepInTouch;
CREATE DATABASE keepInTouch;

INSERT INTO Users (firstName, lastName, phoneNumber, email, password, confirmPassword, facebook, instagram, twitter, snapchat)
VALUES ('Sam', 'tester', '5555555555', 'email@test.com', 'password', 'password', 'facebook.com', 'instagram.com', 'twitter.com', 'snapchat.com');
