[TOC]
# ESTOOLS-server
## Usage in dev mode
##### 1. Install mongodb in your local machine and create a data base named `estools_db`
1. Download and install mongo shell and mongo compas from [mongo tools](https://www.mongodb.com/try/download/shell "mongo tools").  
In mongosh run  
1. `/> use estools_db` to create estools_db  
Now you can access this database via the connection string `mongodb://localhost:27017/estools_db` and manipulate it in mongodb compas locally.
 ##### 2. Clone this repo and add proper configuration
1. Clone this repo.  
1. Run `npm i` to install packages
1. Create a folder named `config` in the root project directory and add the config files as follows:

    	config/
            api.config.js
			auth.config.js
			db.config.js
			email.config.js
1. Add the files content:
```html
// config/api.config.js
module.exports = {
  HOST: "localhost",
  PORT: 8085,
};
```

```html
// config/auth.config.js
module.exports = {
  auth_secret: "estools_penguins",
  verification_secret: "estools_penguins",
};
```

```html
// config/db.config.js
module.exports = {
  HOST: "localhost",
  PORT: 27017,
  DB: "estools_db",
};
```


```html
// config/email.config.js

module.exports = {
  email: "estools.contact@gmail.com",
  password: "will be shared privately if needed",
  client_secret: "will be shared privately if needed",
  client_id:
    "will be shared privately if needed",
  refresh_token:
    "will be shared privately if needed",
  token_uri: "https://oauth2.googleapis.com/token",
};
```
##### 3. Run API in debugging mode or `/>npm start`
##### 4. Test the API in postman using this [Shared Team Workspace](https://app.getpostman.com/join-team?invite_code=964fb15a1973b4c8c36818ee804740cb&target_code=625723a586b71f7ac99d3c311d363903 "link")

