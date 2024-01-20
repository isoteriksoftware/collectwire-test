import app from "./app";

const port = 3000; // default port to listen
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
