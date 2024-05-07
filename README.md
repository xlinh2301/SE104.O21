<h1 align="center">
🌐 Đề tài cây gia phả
</h1>
<p align="center">
MongoDB, Expressjs, React, Nodejs
</p>

<table align="center">
  <tr>
    <th>Tên</th>
    <th>MSSV</th>
  </tr>
  <tr>
    <td>Nguyễn Xuân Linh</td>
    <td>22520775</td>
  </tr>
</table>

## clone or download
```terminal
$ git clone [https://github.com/amazingandyyy/mern.git](https://github.com/xlinh2301/SE104.O21.git)
$ yarn # or npm i
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run dev        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 3001)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

### Project Initialization

```terminal
$ mkdir your-project-name
$ cd your-project-name
$ npm init
```
### Install Dependencies
```terminal
$ cd fontend-ui
$ npm install
$ npm install bootstrap axios react-router-dom

$ cd Backend
$ npm init -y
$ npm install express mongoose cors nodemon
```
### Run the Development Server
```terminal
$ cd Backend
$ npm start
```
### Run fontend
```terminal
$ cd fontend-ui
$ npm start
```
