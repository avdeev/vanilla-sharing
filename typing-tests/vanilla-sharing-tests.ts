/// <reference path="../vanilla-sharing.d.ts" />
import VanillaSharing = require('../vanilla-sharing');

const META: any = {
  URL: 'https://alexey-avdeev.com/vanilla-sharing/',
  TITLE: 'vanilla-sharing demo',
  DESCRIPTION: 'Small (1.4 KB) simple tool for sharing url, title, description and image to VK, Facebook (Dialog, Feed, Messenger, Button), OK, G+, Twitter, Mail, LinkedIn, Line.',
  IMAGE: 'https://dummyimage.com/1200x630/000/fff.jpg&text=vanilla-sharing',
  FB_APP_ID: '150778729046724',
};

let window: any;

window = VanillaSharing.email();

window = VanillaSharing.fbButton();

window = VanillaSharing.fbFeed({
  url: META.URL,
  redirectUri: META.URL,
  fbAppId: META.FB_APP_ID,
});

window = VanillaSharing.fbShare();

window = VanillaSharing.gp();

window = VanillaSharing.line();

window = VanillaSharing.linkedin();

window = VanillaSharing.mail();

window = VanillaSharing.messenger();

window = VanillaSharing.ok();

window = VanillaSharing.pinterest();

window = VanillaSharing.reddit();

window = VanillaSharing.telegram();

window = VanillaSharing.tumblr();

window = VanillaSharing.tw();

window = VanillaSharing.viber();

window = VanillaSharing.vk();

window = VanillaSharing.whatsapp();
