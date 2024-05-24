
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
  <tr>
    <td>Lưu Khánh Vinh</td>
    <td>22521671</td>
  </tr>
  <tr>
    <td>Nguyễn Hữu Đức</td>
    <td>22520270</td>
  </tr>
  <tr>
    <td>Nguyễn Tường Duy</td>
    <td>21520782</td>
  </tr>
</table>

## clone or download
```terminal
$ git clone https://github.com/xlinh2301/SE104.O21.git
$ yarn # or npm i
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) 
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
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
```
### Run
```terminal
$ npm start
```
## Server-side usage(PORT: 3001)
### Project Initialization

```terminal
$ mkdir your-project-name
$ cd your-project-name
$ npm init
```
### Install Dependencies
```terminal
$ cd Backend
$ npm init -y
$ npm install express mongoose cors nodemon
```
### Run the Development Server
```terminal
$ npm start
```
