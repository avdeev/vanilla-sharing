# vanilla-sharing

Small (1.1 KB) simple tool for sharing url, title, description and image to VK, Facebook (Dialog, Feed, Messenger, Button), OK, G+, Twitter, Mail, LinkedIn, Line.

[DEMO](https://avdeev.github.io/vanilla-sharing/demo)

[![Build Status](https://travis-ci.org/avdeev/vanilla-sharing.svg?branch=master)](https://travis-ci.org/avdeev/vanilla-sharing)
[![Coverage Status](https://coveralls.io/repos/github/avdeev/vanilla-sharing/badge.svg?branch=master)](https://coveralls.io/github/avdeev/vanilla-sharing?branch=master)
[![npm](https://img.shields.io/npm/v/vanilla-sharing.svg)](https://www.npmjs.com/package/vanilla-sharing)
[![npm](https://img.shields.io/npm/dm/vanilla-sharing.svg)](https://www.npmjs.com/package/vanilla-sharing)
[![David](https://david-dm.org/avdeev/vanilla-sharing.svg)](https://david-dm.org/avdeev/vanilla-sharing)
[![David](https://david-dm.org/avdeev/vanilla-sharing/dev-status.svg)](https://david-dm.org/avdeev/vanilla-sharing?type=dev)

# Installation

1. From NPM

```sh
npm install --save vanilla-sharing
```

2. From unpkg CDN

```html
<script src="https://unpkg.com/vanilla-sharing"></script>
```

# Usage

1. From NPM

```js
import { vk } from 'vanilla-sharing';

vk(options);
```

2. From unpkg CDN

```js
VanillaSharing.vk(options);
```

# API

### `vk(options)`

Share to vk.com

```js
vk({
  url: string,
  title: string,
  description: string,
  image: string,
  isVkParse: boolean,
})
```

### `fbShare(options)`

Share to facebook.com via the Share dialog

Documentation: https://developers.facebook.com/docs/sharing/reference/share-dialog

```js
fbShare({
  url: string,
  redirectUri: string,
  hashtag: string,
  quote: string,
  fbAppId: string,
})
```
### `fbFeed(options)`

Share to facebook.com via the Feed dialog

Documentation: https://developers.facebook.com/docs/sharing/reference/feed-dialog

```js
fbFeed({
  url: string,
  redirectUri: string,
  fbAppId: string,
})
```

### `fbButton(options)`

Share to facebook.com using facebook share button

```js
fbButton({
  url: string,
})
```

### `tw(options)`

Share to Twitter

```js
tw({
  url: string,
  title: string,
})
```

### `ok(options)`

Share to ok.ru

```js
ok({
  url: string,
  title: string,
})
```

### `mail(options)`

Share to mail.ru

```js
mail({
  url: string,
  title: string,
  description: string,
  image: string,
})
```

### `telegram(options)`

Share to Telegram

```js
telegram({
  url: string,
  title: string,
})
```

### `viber(options)`

Share via a Viber message
[Viber Share Button docs](https://developers.viber.com/docs/tools/share-button/).

```js
viber({
  url: string,
  title: string,
})
```

### `whatsapp(options)`

Share to Whatsapp
[WhatsApp FAQ - Using Click to Chat](https://faq.whatsapp.com/en/android/26000030/).

```js
whatsapp({
  text: string,
  phone: string,
})
```

### `gp(options)`

Share to Google+

```js
gp({
  url: string,
})
```

### `linkedin(options)`

Share to LinkedIn
Share method from [Share on LinkedIn](https://developer.linkedin.com/docs/share-on-linkedin#).

```js
linkedin({
  url: string,
  title: string,
  description: string,
})
```

### `messenger(options)`

Share to Facebook Messenger
Share method from [Sharing for Messenger](https://developers.facebook.com/docs/sharing/messenger).

```js
messenger({
  url: string,
  fbAppId: string,
})
```

### `line(options)`

Share to Line

```js
line({
  url: string,
  title: string,
})
```
