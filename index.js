const express = require("express");
const app = express();
let shortUrl = require("node-url-shortener");
app.use(express.json());
const link = require('./db');


// post route
app.post('/short', function (req, res) {
    const originalLink = req.body.originalLink;

    shortUrl.short(`${originalLink}`, function (err, url) {
        const newLink = url;
        if (err) {
            console.error(err)
        } else {
            res.json({
                short: newLink
            })
        }
        link.create({
            originalLink: originalLink,
            shortUrl: newLink
        })
    });
})


// get route
app.get('/view-links', async function (req, res) {
    const response = await link.find({});
    res.json({
        response
    })
})

app.listen(3000, () => {
    console.log("server is running.....")
});