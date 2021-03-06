//Declaration 
var express = require('express');
var mongoose = require(mongoose);
var router = express.Router();

//Connect to DB
mongoose.connect('mongodb://localhost:27017/test');

// Display all videos
router.get('/', function(req, res){
    var collection = db.get('videos');
        collection.find({},
            function(err, videos){
                if (err) throw err;
                res.json(vidoes);
            });
    });

// Search for a particular video
router.get('/:id', function(req, res){
    var collection = db.get('videos');
        collection.findOne({ _id: req.params.id},
            function(err, video){
                if (err) throw err;
                res.json(video);
            });
    });

// Delete a video
router.delete('/:id', function(err, res){
    var collection = db.get('videos');
    collection.remove({ _id: req.params.id},
        function(err, video){
            if(err) throw err;
            res.json(video);
        });
});

// Add a new video
router.post('/', function (req, res){
    var collection = db.get('videos');
        collection.insert({title: req.body.title, description: req.body.description},
            function(err, video) {
                if (err) throw err;
                res.json(video);
            });
    });

// Edit a video
router.put('/:id', function(req, res){
    var collection = db.get('videos');
        collection.update({ _id: req.params.id},
            {title: req.body.title, description: req.body.description},
            function(err, video){
                if (err) throw err;
                res.json(video);
            });
    });

module.exports = router;