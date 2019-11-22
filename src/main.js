import { fbFeed, getFbFeedUrl } from './sharers/fbFeed';
import { fbShare, getFbShareUrl } from './sharers/fbShare';
import { fbButton, getFbButtonUrl } from './sharers/fbButton';
import mail from './sharers/mail';
import { email, getEmailUrl } from './sharers/email';
import { ok, getOkUrl } from './sharers/ok';
import { telegram, getTelegramUrl } from './sharers/telegram';
import { tw, getTwUrl } from './sharers/tw';
import reddit from './sharers/reddit';
import pinterest from './sharers/pinterest';
import tumblr from './sharers/tumblr';
import { viber, getViberUrl } from './sharers/viber';
import { vk, getVkUrl } from './sharers/vk';
import { whatsapp, getWhatsappUrl } from './sharers/whatsapp';
import linkedin from './sharers/linkedin';
import messenger from './sharers/messenger';
import line from './sharers/line';

export {
  fbFeed, getFbFeedUrl,
  fbShare, getFbShareUrl,
  fbButton, getFbButtonUrl,
  messenger,

  tw, getTwUrl,
  reddit,
  pinterest,
  tumblr,
  vk, getVkUrl,
  ok, getOkUrl,
  mail,
  email, getEmailUrl,
  linkedin,

  whatsapp, getWhatsappUrl,
  viber, getViberUrl,
  telegram, getTelegramUrl,
  line,
};
