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

5. Start the project by running the appropriate command `npm run dev`. ▶️

This will launch the project on `localhost` with the specified configurations. 🌐
