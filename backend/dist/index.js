import express from 'express';
const app = express();
//middlewares
app.use(express.json());
//connections and listeners
app.listen(5000, () => console.log("Server is Open on Port 5000"));
//# sourceMappingURL=index.js.map