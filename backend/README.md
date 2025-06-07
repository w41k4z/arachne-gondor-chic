# 🚀 Project Setup

To run the project locally, follow these steps:

1. **Install dependencies** by running: `npm install`

2. **Create a `.env` file** in the root directory of your project. 📝

3. Add the following configuration in the `.env` check the template `.env.example`

4. Save the `.env` file. 💾

5. do `npm run db:migrate` to Migrate table in database,
   `npm run db:seed` to Insert default data. , `npm run db:cleardata` to clear all data

6. Start the project by running the appropriate command `npm run dev`. ▶️

7. Endpoint: http://localhost:5000/api/products/daily-products  
    You can test it on Postman.
   Note: For now, this API returns an array of products for the current day.  
   This is because Mme may request, at any time, to display all products of the day — not just a single one.
