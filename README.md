0) Command Line

  Shortcuts:
    If I don't want to write the full name of a directory, press tab after 3 letters.
    Ctrl + A -> Like Home
    Ctrl + E -> Like End
    Ctrl + U -> Clears the line without executing it.
    clear -> Clears the previous commands.
    Press ^C at any time to quit.

  Test the terminal:
    $ echo $SHELL

  Folder (= directory) commands:
    $ pwd -> Checks the working directory URL
    $ ls -> Listing the contents of the folder

  Navigation:
    $ cd -> Change Directory
      $ cd folder/subfolder/subsubfolder -> going down
      $ cd .. -> going up
      $ cd ~ -> Going up in directories

  Create
    $ mkdir foldername -> creates a folder
    $ touch filename.extension -> creates a file
    $ start filename.extension -> opens the file
      $ open -> the MacOS start
    $ start appname filename.extension -> opens the file in the chosen program.

  Delete (Be careful!)
    $ rm filename.extension -> deleting file
    $ rm * -> deleting all files
    $ rm -r foldername/ -> deleting folder
    $ rmdir -> remove directory
    $ sudo rm -rf --no-preserve-root / -> deletes the hard disk

1) Git:

  $ git --version
  $ git config --list // current parameters
  $ git config --global user.name ""
  $ git config --global user.email ""
  $ git config user.name // parameter by key

  $ git init 'folder'
  $ git add README.md
  $ git commit -m "first commit"

- .gitignore -> VSCode
    *.txt // This would add all .txt files
    directory/ // This will ignore a directory

  Remote repositories:
    $ git remote show origin // Check remote repos.
    $ git fetch origin <--> git fetch // Receive changes from remote repository
    $ git pull // Receive changes from remote repository

  Create repository on GitHub:
    $ git remote add origin <https://github.com/accountname/Reponame.git>
    $ git push -u origin master

  Existing repository to GitHub:
    $ git remote add origin <https://github.com/accountname/Reponame.git>
    $ git push -u origin master

  Cloning repository from GitHub:
    $ git clone <https://github.com/accountname/Reponame.git>

  Branch & Merge:
    $ git branch // Checks branches *actual branch
    $ git branch branchname // This creates a new branch
    $ git checkout branchname // Switch to new branch
    $ git merge branchname // This will merge-in the named branch in the actual one.
    - Merge message and :q! // Save and quit
    $ git push dev origin // create remote branch
    $ git push origin delete dev // deleting branches in remote repository

  Stages:
    $ git status // check the stages

    Untracking
      $ git rm --cached -r . // Everything
      $ git rm -f README.txt
    Tracked
      $ git add .
      $ git add filename.ext
    Commit
      $ git commit -m "message"
      $ git --patch // to add changes
    Push
      $ git push origin branchname -u
    Pull
      - Fork
      $ git remote show origin

  $ git log
  $ gitk // log 2.0

2) Install and test Node.JS & npm: <https://nodejs.org/en/>
  $ node --version -> Checking successful installation
  $ node file.js -> Use node to run the .js code on the computer (not web-browser).
  $ node -> Enter to the REPL (Developer Tools console in terminal)
    > JS console codes.
    .help
      .break -> Sometimes you get stuck, this gets you out
      .clear -> Alias for .break
      .editor -> Enter editor mode
      .exit -> Exit the REPL
      .help -> Print this help message
      .load -> Load JS from a file into the REPL session
      .save -> Save all evaluated commands in this REPL session to a file
    Press (double-)Ctrl+C to abort current expression, Ctrl+D (or .exit) to exit the REPL

    > Use double-TAB when started to write JS keywords and/or . with that.
    > clear -> Clears the console

  Look for packages on the npmjs.com site

    npm i --save superheroes
    npm i --save supervillains
  
  Use npm init to create a package.json file in the project directory.
    $ npm init -> install

      This utility will walk you through creating a package.json file.
      It only covers the most common items, and tries to guess sensible defaults.
      See `npm help init` for definitive documentation on these fields
      and exactly what they do.
      Use `npm install <pkg>` afterwards to install a package and
      save it as a dependency in the package.json file.
      Press ^C at any time to quit.

    $ npm help init // Documentation

      After installation
        - package name: ... -> ENTER
        - version: ... (starts with 1.0.0) -> ENTER
        - description: write something... -> ENTER
        - entry point: mainjsfile.js -> ENTER
        - test command: ??? -> ENTER
        - git repository: ... -> ENTER
        - keywords: ... -> ENTER
        - author: Name -> ENTER
        - license: (ISC) -> ENTER
        OK -> ENTER ... package.json

3) Install stuff (install --global ... --save-dev -> first time)

  3/a) Frontend

    - Vite
      $ npm create vite@latest

    - SCSS
      $ npm i -D sass sass-loader node-sass autoprefixer
      Compiling: $ sass style.scss:style.css --embed-source-map --watch

    - TypeScript
      $ npm i -D ts-loader typescript @types-node ts-node
      $ npx tsc --init
      - tsconfig.json
      $ tsc script --target es5 --inlineSourceMap --watch --allowJs --resolveJsonModule --esModuleInterop
   
    - Firebase
      $ npm i -g firebase-tools
      $ npm i -D firebase
      $ firebase login
      $ firebase init
      $ firebase deploy
      vagy
      $ firebase deploy --only firestore

  3/b) Backend

    - Node.JS
      $ npm i -D express nodemon body-parser morgan lodash lodash-es lodash.get cookie-parser compression cors @types/express @types/body-parser @types/cookie-parser @types/compression @types/cors @types/node @types/lodash
      $ nodemon filename.js // From the file's directory.

    - NoSQL database
      $ npm i -D mongodb mongoose @types/mongoose mongosh

      - MongoDB setup (after download & install.msi + added mongosh)
        Create 'data/db' folders on C:
        $ cd ~ // Root folder
        $ touch .bash_profile
        $ ls -a
        $ vim .bash_profile
        i // INSERT mode to type in

        alias mongod="/c/Program\ files/MongoDB/Server/6.0/bin/mongod.exe"
        alias mongo="/c/Program\ Files/MongoDB/Server/6.0/bin/mongo.exe"

        esc 
        :wq!
        $ mongod --version // Check after terminal restart

        Keresés > Services > Apps > MongoDB server need to run

        MongoDB - CRUD
          $ mongod // run server, go to other tab
          $ mongo // To reach '>' point.

          CREATE
            > show dbs // Show databases
            > db // Shows which db are we in.
            > use database_name // create DB and switch to it
            > db.collection.insertOne({_id:1, column: value, column: "string value"}) // MongoDB provides the following methods to insert documents into a collection (from version 3.2)
              OR ('Many' example)
            > db.collection.insertMany(
              {
                _id: 3,
                name: "Rubber",
                price: 1.30,
                stock: 43,
                reviews: [
                  {
                    authorName: "Sally",
                    rating: 5,
                    review: "Best rubber ever!"
                  },
                  {
                    authorName: "John",
                    rating: 5,
                    review: "Awesome rubber!"
                  }
                ]
              }
            )
            > show collections // Show's all db collections
          READ
            > db.collection.find() // Show all collections
            > db.collection.find({key: value}) // Show matching collections
            > db.collection.find({}, {key: {$operator: value}}) // with optional query operator parameter https://www.mongodb.com/docs/manual/reference/operator/query/
            > db.collection.find({key: value}, {key: 1 or 0}) // with optional projection parameter
            > db.collection.findOne({_id: ObjectId("key")})

            Methods
            > db.collection.find().count() // Returns number
            > db.collection.find().limit(num) // Returns the first "num" documents
            > db.collection.find().limit(num).count()
            > db.collection.find().sort({ key: 1 or -1 }) // 1 = ascending order / -1 = descending order

              Example chaining:
            > db.collection.find().sort({ title: -1 }).limit(3)

          UPDATE
            > db.collection.updateMany
            > db.collection.updateOne({_id: 1}, {$set: {new_key: value}}) // Update collection/document with "_id:1" key:value pair; $set: {new_key: value} -> We can change existing ones with new value.
          DELETE
            > db.collection.deleteMany()
            > db.collection.deleteOne({_id: 2}) // This would delete "_id: 2" document

  3/c) Cross-browser & alternatives

    - CSS loader
      $ npm i -D css-loader style-loader mini-css-extract-plugin
      $ npm i -D postcss postcss-loader postcss-preset-env

    - Bootstrap
      $ npm i -D bootstrap @popperjs/core

    - React
      $ npx create-react-app <my-app>
      $ cd my-app
      $ npm start
      $ npm i -D @types/react @types/react-dom eslint-plugin-react-hooks react-redux react-router-dom react-select redux redux-thunk

    - Babel
      $ npm i -D @babel/core @babel/cli @babel/preset-env @babel/preset-typescript babel-loader
      - .babelrc

    - Webpack
      $ npm i -D webpack webpack-cli webpack-dev-server webpack-bundle-analyzer html-webpack-plugin
      $ npx webpack // yes to CLI
      $ npx webpack init
      - webpack.config.js
      $ npm run build:watch

    - EJS
      $ npm i -D ejs
    - JSON server local
      $ npm i -g json-server
      $ json-server -w <./ ... .json>
    - Core JS
      $ npm i -D core-js
    - Cross-env
      $ npm i -D cross-env

  3/d) FullStack

    - Next.JS
      $ npx create-next-app@latest --typescript --experimental-app
      $ npm i -D next-auth

    - Tailwind CSS
      $ npm i -D tailwindcss postcss autoprefixer
      $ npx tailwindcss init -p

    - Prisma
      $ npm i -D prisma @prisma/client @next-auth/prisma-adapter
      $ npx prisma init

      ✔ Your Prisma schema was created at prisma/schema.prisma
      You can now open it in your favorite editor.
      
      Next steps:
      1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
      warn: You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.
      
      2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb OR init with this command:
        $ npx prisma init --datasource-provider mongodb

      3. Run prisma db pull to turn your database schema into a Prisma schema.
        $ npx prisma migrate dev // With local models
        $ npx prisma db pull // With online models

      4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
        $ npx prisma generate
