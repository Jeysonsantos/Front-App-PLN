const express = require('express');
const app = express();
const appName = 'front-app';
const outputPath = `${__dirname}/dist/${appName}`;

app.use(express.static(outputPath));
app.get('/*',(req,res) => {
    res.sendFile(`${outputPath}/index.html/novo-link`);
})

app.listen(process.env.PORT);