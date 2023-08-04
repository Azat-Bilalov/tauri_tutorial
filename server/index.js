const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());

const todosRouter = require('./todos/app');
app.use('/todos', todosRouter);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
