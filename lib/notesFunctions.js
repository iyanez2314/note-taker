const fs = require('fs');
const path = require('path');
const data = require('../Develop/db/db.json')


// TODO: Write the function that will write to the json file
// TODO: Write a test for this to see if it works, also figure out other ways you can write to this.



function createNewNote(body, data){
    const note = body;

    data.push(note)
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({ data }, null, 2)
    )
    return note;
};




module.export = createNewNote;