# vanilla-sharing

Small (1.1 KB) simple tool for sharing url, title, description and image to VK, Facebook (Feed, Dialog, Button, Messenger), Twitter, G+, VK, OK, Mail.ru, LinkedIn, Whatsapp, Viber, Telegram, Line.

[DEMO](https://avdeev.github.io/vanilla-sharing/demo)

[![Build Status](https://travis-ci.org/avdeev/vanilla-sharing.svg?branch=master)](https://travis-ci.org/avdeev/vanilla-sharing)
[![Coverage Status](https://coveralls.io/repos/github/avdeev/vanilla-sharing/badge.svg?branch=master)](https://coveralls.io/github/avdeev/vanilla-sharing?branch=master)
[![npm](https://img.shields.io/npm/v/vanilla-sharing.svg)](https://www.npmjs.com/package/vanilla-sharing)
[![npm](https://img.shields.io/npm/dm/vanilla-sharing.svg)](https://www.npmjs.com/package/vanilla-sharing)
[![David](https://david-dm.org/avdeev/vanilla-sharing.svg)](https://david-dm.org/avdeev/vanilla-sharing)
[![David](https://david-dm.org/avdeev/vanilla-sharing/dev-status.svg)](https://david-dm.org/avdeev/vanilla-sharing?type=dev)

# Motivation

TODO

# Installation

## From NPM

```sh
npm install --save vanilla-sharing
```

## From unpkg CDN (you can use other)

```html
<script src="https://unpkg.com/vanilla-sharing"></script>
```

# Usage

## From NPM

```js
import { fbButton } from 'vanilla-sharing';

fbButton({
  url: 'https://alexey-avdeev.com/vanilla-sharing/',
});
```

## From CDN

```js
VanillaSharing.fbButton({
  url: 'https://alexey-avdeev.com/vanilla-sharing/',
});
```

# API

### `fbFeed(options)`

Share on facebook.com via the Feed dialog

Documentation: https://developers.facebook.com/docs/sharing/reference/feed-dialog

```js
fbFeed({
  url: string,
  redirectUri: string,
  fbAppId: string,
})
```

### `fbShare(options)`

Share on facebook.com via the Share dialog

Documentation: https://developers.facebook.com/docs/sharing/reference/share-dialog

```js
fbShare({
  url: string,
  redirectUri: string,
  hashtag: string,
  fbAppId: string,
})
```

### `fbButton(options)`

Share on facebook.com using facebook share button

```js
fbButton({
  url: string,
})
```

### `messenger(options)`

Share via Facebook Messenger

Share method from [Sharing for Messenger](https://developers.facebook.com/docs/sharing/messenger).

```js
messenger({
  url: string,
  fbAppId: string,
})
```

### `tw(options)`

Share on Twitter

```js
tw({
  url: string,
  title: string,
})
```

### `gp(options)`

Share on Google+

```js
gp({
  url: string,
})
```

### `vk(options)`

Share on vk.com

```js
vk({
  url: string,
  title: string,
  description: string,
  image: string,
  isVkParse: boolean,
})
```

### `ok(options)`

Share on ok.ru

```js
ok({
  url: string,
  title: string,
})
```

### `mail(options)`

Share on Mail.ru

```js
mail({
  url: string,
  title: string,
  description: string,
  image: string,
})
```

### `linkedin(options)`

Share on LinkedIn

Share method from [Share on LinkedIn](https://developer.linkedin.com/docs/share-on-linkedin#).

```js
linkedin({
  url: string,
  title: string,
  description: string,
})
```

### `whatsapp(options)`

Share via Whatsapp

[WhatsApp FAQ - Using Click to Chat](https://faq.whatsapp.com/en/android/26000030/).

```js
whatsapp({
  url: string,
  title: string,
  phone: string,
})
```

### `viber(options)`

Share via Viber

[Viber Share Button docs](https://developers.viber.com/docs/tools/share-button/).

```js
viber({
  url: string,
  title: string,
})
```

### `telegram(options)`

Share via Telegram

```js
telegram({
  url: string,
  title: string,
})
```

### `line(options)`

Share via Line

```js
line({
  url: string,
  title: string,
})
```
