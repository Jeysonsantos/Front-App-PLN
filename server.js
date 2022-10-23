const express = require('express');
const app = express();
const appName = 'front-app';
const outputPath = `${__dirname}/dist/${appName}/app`;

app.use(express.static(outputPath));
app.get('/*',(req,res) => {
    res.sendFile(`${outputPath}/novo-link.component.html`);
})

app.listen(process.env.PORT);