var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Glitchy | Glitch your f***ing world!', hashtag: '#glitchyapp',
  link_playstore:"https://play.google.com/apps/testing/me.bemind.glitchlibrary",
  image_playstore:"/images/playstore.svg",link_appstore:"/",image_appstore:"/images/appstore.svg",
  img_smartphone:"/images/phone_glitchy.png",
  fb_page_link:"https://www.facebook.com/glitchyapp",fb_page_label:"facebook.com/glitchyapp", 
  ig_page_link:"https://www.instagram.com/glitchyapp/", ig_page_label:"instagram.com/glitchyapp",
	fb_group_link:"https://www.facebook.com/groups/glitchyapp/",
	fb_group_label:"facebook.com/groups/glitchyapp",
	bemind_link:"http://www.bemind.me/",bemind_logo:"/images/bemind_logo.svg"});
});

module.exports = router;
