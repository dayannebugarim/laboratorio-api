const express = require('express');
const app = express();
const accessMiddleware = require('./middleware/accessMiddleware');
const laboratorioRoutes = require('./routes/lab.routes');

app.use(express.json());
app.use(accessMiddleware); // Aplica o middleware globalmente
app.use('/laboratorio', laboratorioRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`listening on port ${port}`));