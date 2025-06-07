# 🚀 Project Setup

To run the project locally, follow these steps:

1. **Install dependencies** by running: `npm install`

2. **Create a `.env` file** in the root directory of your project. 📝

3. Add the following configuration in the `.env` file:

   ```bash
   DB_NAME=db_name
   DB_USER=your_db_user
   DB_PASSWORD=your_mdp
   DB_HOST=localhost
   PORT=your_port
   cors=http://localhost:3000
   ACCESS_TOKEN_SECRET=mon_super_access_jwt
   REFRESH_TOKEN_SECRET=mon_super_refresh_jwt
   API_VERSION=v1
   NODE_ENV="development"(en local) ou "production"(sur serveur https)

   ```

4. Save the `.env` file. 💾

5. do `npm run db:migrate` to Migrate table in database,
   `npm run db:seed` to Insert default data. , `npm run db:cleardata` to clear all data

6. Start the project by running the appropriate command `npm run dev`. ▶️

This will launch the project on `localhost` with the specified configurations. 🌐

7. Endpoint: http://localhost:5000/api/products/daily-products  
    You can test it on Postman.
   Note: For now, this API returns an array of products for the current day.  
   This is because Mme may request, at any time, to display all products of the day — not just a single one.
