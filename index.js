const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./utils/path');

const port = 4000;
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRouters = require('./routes/shop');

app.use(bodyParser.urlencoded())

// Routing
app.use('/admin', adminData.routes);
app.use(shopRouters);

// Accesing External file system
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
