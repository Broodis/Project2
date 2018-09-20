DROP DATABASE IF EXISTS keepInTouch;
CREATE DATABASE keepInTouch;

INSERT INTO Users (firstName, lastName, phoneNumber, email, password, confirmPassword, facebook, instagram, twitter, snapchat)
VALUES ('sam', 'tester', '8054533793', 'email6@test.com', 'password', 'password', 'facebook.com', 'instagram.com', 'twitter.com', 'snapchat.com');
