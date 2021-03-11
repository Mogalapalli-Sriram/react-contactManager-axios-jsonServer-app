# react-contactManager-jsonServer-axios-app


## About the app
This application is about making CRUD operations on the contact details.

<br>

## Prerequisites
* react js
* node js

<br>

## Setup
1.  Clone the repository.
``` bash
git clone https://github.com/Mogalapalli-Sriram/react-contactManager-axios-jsonServer-app.git --branch master --single-branch contactManager-react
```

2. Change over to the contactManager-react directory.
```bash
cd contactManager-react
```

3. Change over to the contact-app directory and install dependencies.
```bash
cd contact-app
npm install
```
4. Repeat the step 3 by changing over to JSON-server directory.
```bash
cd JSON-server
npm install
```

<br>

## Run the app
1. Start the servers of contact-app  and JSON-server by transiting over to their respective directories in two seperate terminal tabs using
```bash
npm start
```
2. You can have access to the contact-app http://localhost:3000/ which loads automatically on start.


3. You can have access to the JSON-server on
   * Home:- http://localhost:3030
   * Resources:-  http://localhost:3030/contacts
 
 <br>

 ## Things I have learnt while doing this application
*  **react-router-dom**, a special npm package used for providing specific routers to various components in the react application.
* **useEffect**, a type of react hook for persisting the data and retrieving the data inside the local storage.
* **json-server** ,a special npm package that provides a database server to persist the data for all the CRUD operations performed inside the react application.
* **axios** , a special npm package which integrates our react application to the json-server.
  
<br>

 Courtesy and followed the video on [Youtube](https://youtu.be/59z1_3-vTOk)



