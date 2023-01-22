Firstly fill the values in the .env file.
Here are some example values for the file:
  YOUTUBE_API_KEY = sj292u94u99292
  DB_USER_NAME = aursj
  DB_PASSWORD = awwee3
  DB_PORT = 5034 
  DB_NAME = postgres
Run the application by using the command: npm run start:dev
There are 2 graphql querries:
  1.  getAllVideos
  2.  searchByTitleAndDescription (for this querry you would need to provide a filter object with 2 fields title and description)
You can test these querries on the graphql playground on this link when the application is running:http://localhost:3000/graphql