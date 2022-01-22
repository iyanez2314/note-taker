const router = require('express').Router()
const path = require('path');
const data = require('../../Develop/db/db.json')
const { createNewNote } = require('../../lib/notesFunctions')
const fs = require('fs');

router.get('/', (req, res) =>{
    return res.json(data)
})

router.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} note has been received`);
  
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
    console.log(req.body);
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
      };
  
      // Obtain existing reviews
      fs.readFile('develop/db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          // Convert string into JSON object
          const parsedReviews = JSON.parse(data);
  
          // Add a new review
          parsedReviews.push(newNote);
  
          // Write updated reviews back to the file
          fs.writeFile(
            'develop/db/db.json',
            JSON.stringify(parsedReviews, null, 4),
            (writeErr) =>
              writeErr
                ? console.error(writeErr)
                : console.info('Successfully updated notes!')
          );
        }
      });
    }
})

module.exports = router;
