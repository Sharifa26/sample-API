# SAMPLE-API
This is a RESTful API for User, built using Node.js, Express, and Mysql. The API allows users to create, read, update, and delete people from Database.

## Installation
1. Clone the repository:

   HTTPS: git clone https://github.com/Sharifa26/sample-API.git
   
   SSH: git clone git@github.com:Sharifa26/sample-API.git

2. Install dependencies: 
 
   npm install


3. Add Your Database and connect your Database with the following variables:

  const db = mysql.createConnection({
    host: 'YOUR LOCALHOST',
    user: 'YOUR USER NAME',
    password: 'YOUR pASSWORD',
    database: 'YOUR DATABASE'
});

4. Start the server:

   npm start
