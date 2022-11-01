const {thought, user} = require('../models');

getThought(req, res){
    thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err))
};