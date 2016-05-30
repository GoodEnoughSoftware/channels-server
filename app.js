// ----------------------------------------------------------------------------
// ---- CONFIGURATION ---------------------------------------------------------
// ----------------------------------------------------------------------------

var express = require('express'),
    mongo   = require('mongodb'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var mongoUri = 'mongodb://heroku_wx2l3rwk:k8qsr29notgbfnqcpkqqtuuvvp@ds019033.mlab.com:19033/heroku_wx2l3rwk';
mongoose.connect(mongoUri);

// Define models of the database
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Channel = new Schema({
    title     : String,
    history   : [{activated : Date}],
    count     : Number,
    created   : {username : String, timestamp : Date}
});

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// ----------------------------------------------------------------------------
// ---- AUTHENTICATION --------------------------------------------------------
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ---- ROUTING ---------------------------------------------------------------
// ----------------------------------------------------------------------------

app.get('/', function(request, response) {
    response.send('Hello world!');
});

// Create a new channel on the database
app.put('/channel', function(req, res) {
    
    // Make sure that each required field is present
    // i.e. title
    if(!req.body.title) {
        res.status(400).send({success: false, err: "A title must be indicated"});
        return;
    }
    
    // Make sure that this title was not used previously
    var channelModel = mongoose.model('Channel', Channel);
    channelModel.find({title: req.body.title}, function (err, docs) {
        if(docs.length > 0) {
            res.status(400).send({success: false, err: "That channel already exists!"});
            return;
        } else {
            
            // If not, add the channel! TODO: Add user and time of creation
            
            var instance = new channelModel();
            instance.title = req.body.title;
            instance.save(function (err) {
                res.send({id: instance._id, success : !err, err: err});
            });
        }
    });
    
});

// Get a channel by the id that was given upon creation
app.get('/channel/:id', function(req, res) {
    
    var channelModel = mongoose.model('Channel', Channel);
    channelModel.findOne({_id: req.params.id}, function(err, channel) {
        res.send({channel: channel, err: err});
    });
    
});

// ----------------------------------------------------------------------------
// ---- START APP -------------------------------------------------------------
// ----------------------------------------------------------------------------

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});