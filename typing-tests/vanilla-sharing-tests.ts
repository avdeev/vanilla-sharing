/// <reference path="../vanilla-sharing.d.ts" />
import VanillaSharing = require('../vanilla-sharing');

const META: any = {
  URL: 'https://alexey-avdeev.com/vanilla-sharing/',
  TITLE: 'vanilla-sharing demo',
  DESCRIPTION: 'Small (1.5 KB) simple tool for sharing url, title, description and image to VK, Facebook (Dialog, Feed, Messenger, Button), OK, G+, Twitter, Mail, LinkedIn, Line.',
  IMAGE: 'https://dummyimage.com/1200x630/000/fff.jpg&text=vanilla-sharing',
  FB_APP_ID: '150778729046724',
};

let window: any;
let url: string;

window = VanillaSharing.fbFeed({
  url: META.URL,
  redirectUri: META.URL,
  fbAppId: META.FB_APP_ID,
});

url = VanillaSharing.getFbFeedUrl({
  url: META.URL,
  redirectUri: META.URL,
  fbAppId: META.FB_APP_ID,
});

window = VanillaSharing.fbShare();
url = VanillaSharing.getFbShareUrl();

window = VanillaSharing.fbButton();
url = VanillaSharing.getFbButtonUrl();

window = VanillaSharing.messenger();

window = VanillaSharing.tw();
url = VanillaSharing.getTwUrl();

window = VanillaSharing.reddit();
window = VanillaSharing.pinterest();
window = VanillaSharing.tumblr();

window = VanillaSharing.vk();
url = VanillaSharing.getVkUrl();

window = VanillaSharing.ok();
url = VanillaSharing.getOkUrl();

window = VanillaSharing.mail();
window = VanillaSharing.email();
window = VanillaSharing.linkedin();

window = VanillaSharing.whatsapp();
window = VanillaSharing.whatsapp();

window = VanillaSharing.viber();
url = VanillaSharing.getViberUrl();

window = VanillaSharing.telegram();
url = VanillaSharing.getTelegramUrl();

window = VanillaSharing.line();
