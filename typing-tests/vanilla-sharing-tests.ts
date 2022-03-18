/// <reference path="../vanilla-sharing.d.ts" />

import {
  fbFeed, getFbFeedUrl,
  fbShare, getFbShareUrl,
  fbButton, getFbButtonUrl,
  mail,
  email, getEmailUrl,
  ok, getOkUrl,
  telegram, getTelegramUrl,
  tw, getTwUrl,
  reddit,
  pinterest,
  tumblr,
  viber, getViberUrl,
  vk, getVkUrl,
  whatsapp, getWhatsappUrl,
  linkedin,
  messenger,
  line,
} from '../vanilla-sharing';

const META = {
  URL: 'https://alexey-avdeev.com/vanilla-sharing/',
  TITLE: 'vanilla-sharing demo',
  DESCRIPTION: 'Small (1.5 KB) simple tool for sharing url, title, description and image to VK, Facebook (Dialog, Feed, Messenger, Button), OK, G+, Twitter, Mail, LinkedIn, Line.',
  IMAGE: 'https://dummyimage.com/1200x630/000/fff.jpg&text=vanilla-sharing',
  FB_APP_ID: '150778729046724',
};

let window: Window;
let url: string;

window = fbFeed({
  url: META.URL,
  redirectUri: META.URL,
  fbAppId: META.FB_APP_ID,
});

url = getFbFeedUrl({
  url: META.URL,
  redirectUri: META.URL,
  fbAppId: META.FB_APP_ID,
});

window = fbShare();
url = getFbShareUrl();

window = fbButton();
url = getFbButtonUrl();

window = messenger();

window = tw();
url = getTwUrl();

window = reddit();
window = pinterest();
window = tumblr();

window = vk();
url = getVkUrl();

window = ok();
url = getOkUrl();

window = mail();

window = email();
url = getEmailUrl();

window = linkedin();

window = whatsapp();
url = getWhatsappUrl();

window = viber();
url = getViberUrl();

window = telegram();
url = getTelegramUrl();

window = line();
