var express = require('express');
var router = express.Router();

const formatDate = () => {
  return {
    month: new Date().getMonth(),
    day: new Date().getDay(),
    hour: new Date().getHours(),
    minutes: new Date().getMinutes()
  }
}

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: formatDate()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formatDate()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.post('/new', (req, res, next) => {
  var messageText = req.body.message
  var messageUser = req.body.name
  messages.push({ text: messageText, user: messageUser, added: formatDate() });
  res.redirect('/')
})

module.exports = router;
