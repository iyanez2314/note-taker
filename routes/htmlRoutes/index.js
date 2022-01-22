const path = require('path');
const router = require('express').Router();

// * the '/' path will take them to the landing page
router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "../../Develop/public/index.html"))
});

// * the '/notes' path will take them to the notes path if they type it in or they click the button on the landing page.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../../Develop/public/notes.html"))
})

// * If the user types anything after the "/" that is not "/notes" they will be re-routed to the landing page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../../Develop/public/index.html"))
})

module.exports = router;