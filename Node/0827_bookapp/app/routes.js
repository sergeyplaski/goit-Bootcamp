const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db, err) {
    app.get('/', (req, res) => res.send('Hello from Sandbox Book App'));

    // read - all users
    app.get('/users', (req, res) => {
        db.collection('users').find().toArray(function(err, docs) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(docs);
        });
    });

    // read - single user by index in the array
/*
    app.get('/users/:index', (req, res) => {
        try {
            const u = { $arrayElemAt: [ db.collection('users').find().toArray(), +req.params.index] }
        }
        catch (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log('found user', u);

        res.send(u);
    });
*/

    // read- single user by ID
    app.get('/users/:id', (req, res) => {
        db.collection('users').findOne({_id: ObjectID(req.params.id)}, function(err, data) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(data);
        })
    });

    // create new user by name
    app.post('/users', (req, res) => {
        const newuser = {name: req.body.name, books: []};
        db.collection('users').insertOne(newuser, function(err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(`User ${newuser.name} has been successfully added.`);
        });
    });

    // delete user by ID
    app.delete('/users/:id', (req, res) => {
        db.collection('users').deleteOne({_id: ObjectID(req.params.id)}, function(err, data) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            try {
                if (data.result.ok && data.result.n) {
                     res.send(`Successfully deleted user account with id = ${req.params.id}.`);
                }
            }
            catch (err) {
                console.log(err);
                return res.sendStatus(500);
            }
        })
    });

    // update user by ID
    app.put('/users/:id', (req, res) => {
        db.collection('users').updateOne({_id: ObjectID(req.params.id)},  {$set: {name: `${req.body.name}`}}, {upsert: true},function(err, data) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            try {
                if (data.result.ok && data.result.n) {
                    res.send(`Successfully updated user account with id = ${req.params.id}.`);
                }
            }
            catch (err) {
                console.log(err);
                return res.sendStatus(500);
            }
        })
    });

};