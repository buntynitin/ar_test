const express = require('express');
const app = express();
const PORT = 8080 || process.env.PORT;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(index.html);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));