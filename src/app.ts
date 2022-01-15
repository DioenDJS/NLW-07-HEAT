import "dotenv/config";
import express from "express";

const app = express();

app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

app.listen(4000, () => console.log(`:rocket Server is running on PORT 4000`));