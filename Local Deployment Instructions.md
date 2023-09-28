readme

About:
We will be using a standalone docker container to deploy a local SQL database. The database will be prepopulated with specific data on each project start up using a seed file which can be modified to insert whatever data we want to test/use. The database will be seeded with new data at each run instance. A few NPM command are avaiable to simplify the process which will automate the deployment of the docker image prior to starting the rest of the project.  

Prerequisites:
  - Docker

Seed file:
  - File Name: "build-rhythms.sql"
  - File Location: Root of project directory

Default database structure:
  - table name: rhythms
  - table column names:
    - id (serial - primary key)
    - title (varchar - with character limit of 255 imposed)
    - url (varchar - with character limit of 512 imposed)
    - location (varchar - with character limit of 255 imposed)

How to start project:
  - npm run devtest

How to stop project:
  - ctrl + c
  - npm run docker:stop (currently ctrl+c sends sigint to project only. This line is required to stop the docker instance)
