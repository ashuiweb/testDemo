The "web" folder contains front-end code using Vite + React, while the "backend" folder contains back-end code using NestJS.

Local Test Instructions:
Download the front-end and back-end separately and run `pnpm i` respectively.
The back-end listens on port 3002. Before running, please modify the`.sampleEnv` file to`.env` file and fill in the database connection information completely. After installation, run `npm run dev` on both the front-end and back-end 
respectively.

Function Summary:
Login: Log in with the username and password on the login page.
Home page: Paginate through the data and search for data based on specific favorite foods. The search term is displayed in red font.
 