# HeadUpLabsTest

## This app is built for HeadUpLab Company Code Test developed by Carl Lu. 

### This is an app to fetch news from newsapi and display image and simple content, with clicking title to open news with full content in default web browser.

## To run this app:
### run `yarn` or `npm install` in project folder
### run `npx react-native run-ios(android)` in project folder

## Functions:

### View news in Home Page
### Click arrow button to view description, and click '^' to hide description for each news item.
### Pull to refresh Home Page.
### Click title or image in Home Page to view details for a specific news.
### View news details in Detail Page.
### Click title or url in Detail Page to open news in default browser.


## Note:
### This app is built referring to iOS iPhone 11 simulator, so it might have styling issue with Android emulator or other type of iOS iPhone simulator.
### If you have trouble installing the app, please referring to dependencies following info or let me know if you have any other issue:

## Install Third-Party Dependencies manually:
### newsapi  ---  fetch news
`npm install newsapi`
### querystring  --- support newsapi to work in current react-native-cli version
`npm install querystring`
### moment --- format news publishedAt date
`npm install moment`
### react-navigation --- help navigate between Home Page and Detail Page
`npm install @react-navigation/native`(run `npm install @react-navigation/stack` if you cannot install successfully)
`npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`

 
