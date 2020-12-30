# Tie It All Together

## Steps of the Process

STEP 1. Ideation
  a. What problem needs to be solved and what solution can you imagine for it?
STEP 2. MVP/v0.0.1
  a. What’s the bare bones version of this solution?
STEP 3. Identify Data Needs
  a. Render - What’s the view for the human-user look like?
  b. Move - What routes will your server need?
  c. Storage - What tables and properties do you need to make it happen?
STEP 4. Design & Plan
  a. View Layout and Needs
  b. Server Functionality Needs
  c. Database entities and relationships
STEP 5. Implement & Schedule the Build
  a. Google Cloud Account, Instance, Database, Connection
  b. Connect and build tables with MySQL Workbench
  c. Create Repo, Clone, Build Server, Test, Push Code
  d. Host CI/CD *(optional step now/required step later)*
STEP 6. Build and Deploy the Front-End
  a. Build the app
  b. Deploy the app
  c. Add custom Domain (optional)

## STEP 1 & 2: Ideation & MVP

* Student Presentations *(end of 101, beginning of 211, 311, 411)*
* Blogs
* ER Diagrams *(311-11)*

## STEP 3: Identify Data Needs

The Three Jobs of a Software Developer
  a. Render - What’s the view of the data look like for the human-user?
  b. Move - How does the data get to the view from the database and vice-versa? Server Routes.
  c. Storage - What tables will you need to organize and store your data? What properties does each entity need?

## STEP 4: Design & Plan

View Layout and Needs
  a. What does the User's Journey look like? Create a road map.

    * Where do they start?
    * What does sign-up vs sign-in look like?
    * What does the next step look like?
    * What can they do in the app?

  b. Draw it out. Visualize!

    * Build a paper prototype
    * [Use software to help](https://medium.theuxblog.com/11-best-prototyping-tools-for-ui-ux-designers-how-to-choose-the-right-one-c5dc69720c47?gi=a052754cdb05)
  
  c. Material-UI

    * What components do you need?
    * List them out.
    * Write them on index cards so you don't get lost. 

  d. DON'T WORRY ABOUT COLOR!!!!

b. Server Functionality

  a. Component Needs

    * Look at each component and the data they'll need. Are there any special routes needed outside of the CRUD-L or Authentication routes?

c. The Database, Entities, Relationships & Properties

  a. What bits of data will you need?

    * What tables do you need to organize your entities?
    * What properties do they have?
    * What relationships do they have? 

*SUGGESTION: Use sticky notes and index cards to write and draw all of this out so you can visualize and stay on task.*

d. Plan with Trello

  a. Build your lanes

    * ToDo
    * Doing
    * Review
    * Merged/Done

  b. Build three cards

    * Build Database: Store Data
    * Build Server: Move & Manipulate Data
    * Build Front-End: Render Data

  c. Break those cards into smaller Todo cards

    * Create Google Cloud Account
    * Create Instance
    * Save Database connection info
    * Create Schema
    * Plan tables ...build CREATE Sql statements, connect, build tables, seed with fake data, etc.
    * Move to breakdown Server steps...
    * Move on to breakdown Front-end steps....
    * Take breaks and breathe!!

  *SUGGESTION: Use Step 5 below to create the smaller Todo cards on Trello!*

## STEP 5: Create Database, Server on an Instance(Virtual Computer) on GoogleCloud

1. *(STEP 5.a)* Create a Database on GoogleCloud *(311-5 Databases)* - [How to GoogleCloud](https://youtu.be/ypQaSyICc3A)
    a. Copy/paste & store the DB name, password, connection name, and IP somewhere you can find easily
    b. Go to Connections > Add Network > 0.0.0.0/0 > Save
        *NOTE: Make a note/Trello card to change this after you’ve moved from development mode to productions. Security reasons!*
    c. Create a Database Schema
        * Databases >> Create Database

2. *(STEP 5.b)* Connect & Seed using MySQL Workbench
    a. Create a new connection
    b. Name the connection: “My-CapstoneApp-DB” (or whatever)
    c. Hostname = ip *(see 1a, above)*
    d. Password = Password *(see 1a, above)*
    e. test connection >> Success!
    f. Select Schema
      * Side Bar > Schema > Refresh Button > Select Database/Schema *(see 1c, above)*
    g. Insert data with initialization commands…CREATE TABLE…etc.
    h. Run SELECT statements to test the database is up and responding from GoogleCloud

3. *(STEP 5.c)* Create GitHub Repo for the Source Code of Your Server
    a. Create blank repo(no README), clone it and run `npm init` (101)
    b. Install dependencies you'll need. Run `npm i express body-parser nodemon mysql dotenv cors path` *(311-3)* [AustinCodingAcademy/311_wk2_day1_express](https://github.com/AustinCodingAcademy/311_wk2_day1_express/blob/master/package.json)
    c. Set `package.json` up with starting scripts:
      * `"scripts": { "start": "nodemon ./index.js" }`
      * use `npm start` to TEST your app.
    d. run `touch index.js` *(311-3)*
      * `import` and `use()` `express()`, `body-parser.json()` & `cors()`
      * `const port = process.env.PORT || 4000`
      * `app.get('/', (req, res) => {res.send("Backend Says Hello!")})`
      * *app.listen(port, () => console.log(`Server is listening on port: ${port}`))*
    f. Run `mkdir server` then `cd server` then build folders:
      1. `mkdir routes` folder *(311-4)*
          * `/api/users` etc...
          * build a router file for each table of data you have
          * build a CRUD-L route for each
    *NOTE: CRUD-L = "Create, Read(get), Update, Delete & List"*
          * Import the routes into `index.js` and `use()` them

      2. `mkdir controllers` folder *(311-4)*
          * Build a controller file for each table of data
          * build a CRUD-L controller for each route
          * Test your routes and controllers with dummy responses
      3. Create a `mkdir sql` folder with:
          * a `connection.js` file that uses mysql *(311- 8)*
          * an `error.js` file
          * test by running the server - “npm start”
    f. Import the connection pool into the controller files *(311-8)*
    g. Go to MySQL Workbench and build the queries you need to get the appropriate data. *(311-7)*
    h. Copy/Paste that query into your controller & TEST *(311-8)*
    i. TEST
    j. Create `.env` file *(311-8)*
        * put `require(‘dotenv’).config()` at top of `index.js` & `connection.js` files
        * Move sensitive data to `.env` file
        * Add `.env` to `.gitignore` file
        * TEST
    k. `git status`, `add`, `commit`, `push` your code to the repo

4. CI/CD with App Engine, CodeShip & GitHub *(311-14)*
  a. Get your app ready for GoogleCloud -  [GitHub - AustinCodingAcademy/311_wk7_day1_deployment](https://github.com/AustinCodingAcademy/311_wk7_day1_deployment)
    1. Add:
      * Add the following code to your `connection.js` file below the `config` object

            ```js
                if (process.env.NODE_ENV === ‘production’ && process.env.CLOUD_INSTANCE) {
                  console.log(`connect socket: ${process.env.CLOUD_INSTANCE}`)
                  config.socketPath = `/cloudsql/${process.env.CLOUD_INSTANCE}`  
                }
            ```
      * TEST

    2. Change the scripts in `package.json` file. *(See 3c, above)*

            ```json
            "scripts": {
              "dev": "NODE_ENV=development nodemon ./index.js",
              "start": "NODE_ENV=production node index.js",
            }
            ```
    3. TEST with `npm run dev`
    4. Create `app.yaml` file with

            ```yaml
              runtime: nodejs10
              
              env_variables: 
                CLOUD_INSTANCE: YOUR-SQL-Database-Connection-Name-Here
            ```

    5. Add `app.yaml` to your `.gitignore` file
    6. `git status`, `add`, `commit`, `push` your code to the repo

  b. Setting Up App Engine in GoogleCloud
    1. In GoogleCloud App Engine instance >> Create Application >> us-central >> Node.js
    2. Go to your terminal and run `gcloud init` >> choose account >> sign in >> choose project and configuration.
        *(Use the same instance as your your database instance project. See 4b.3, below)*.
    3.  Make sure you `gcloud init` your app in the same instance as your database so that your connection configurations are smoother. This will allow you to not create a new `.env` file for GoogleCloud App Engine or deal with IAM.
        *REMEMBER, an instance is a virtual computer. Therefore you have a database running on a virtual computer and now you want your server to run on the same virtual computer.*
    4. Run  `gcloud app deploy` in your terminal
    5. TEST - copy/paste the URL from the terminal feedback into Postman and run a few GET requests.

      *  *NOTE: For debugging, go to App Engine >> Instances >> Choose Instance >> Dashboard >> see log at bottom-right*

      * *SUGGESTION* [Blog on GCD](https://medium.com/google-cloud/hosting-your-personal-website-on-google-cloud-platform-for-beginners-278543eaaa67)
      
      * *SUGGESTION* [GCD Tutorial Repo](https://github.com/GoogleCloudPlatform/nodejs-docs-samples)  

  c. *(STEP 5.d)* Setup CodeShip for CI/CD or keep running `cloud app deploy` again and again. And again. *(311-15)*

## STEP 6: Build and Host the Front-End/Client!

<!-- ! These steps are for running two separate apps the front-end in a bucket and the backend on App Engine. For server-side rendering see `index.js` -->

1. Create a new folder and run `npx create-react-app nameOfYourApp`.
2. CD and begin building.
    a. BrowserRouter, Router, Switch, Routes *(411-7)*
    b. Component Pages
    c. Individual/Micro Components
    d. Protected Routes *(411-8)*
    e. Does your api require Authentication? Store cookies when login in.
    f. If needed, Redux *(411-9)*
3. Make sure you're using the URL to your hosted server app
4. Host the React App in a Bucket - *(311-14)*
5. Optionally, create a custom domain name for it.
