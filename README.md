1. Firstly fill the values in the .env file.
2. Here are some example values for the file:
  1. YOUTUBE_API_KEY = sj292u94u99292
  2. DB_USER_NAME = aursj
  3. DB_PASSWORD = awwee3
  4. DB_PORT = 5034 
  5. DB_NAME = postgres
3. Run the application by using the command: npm run start:dev
4. There are 2 graphql querries:
  1.  getAllVideos
  2.  searchByTitleAndDescription (for this querry you would need to provide a filter object with 2 fields title and description)
5. You can test these querries on the graphql playground on this link when the application is running:http://localhost:3000/graphql