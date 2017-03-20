
[![before-leaving-me](http://i.imgur.com/I1s2FwF.png)](http://ionicabizau.github.io/before-leaving-me.js/)

# before-leaving-me

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/before-leaving-me.svg)](https://www.npmjs.com/package/before-leaving-me) [![Downloads](https://img.shields.io/npm/dt/before-leaving-me.svg)](https://www.npmjs.com/package/before-leaving-me)

> Do things before the user leaves your web page.

## :cloud: Installation

```sh
$ npm i --save before-leaving-me
```


## Usage
```html
<script src="path/to/blm.js"></script>
<script>
blm("Do you really want to leave?");
blm(function () {
  if (changesAreSaved) {
    return undefined;
  }
  return "You have unsaved changes! Do you want to close the window?";
});
blm.prepare(function () {
  /* do something when the user is preparing to leave the page */
});
</script>
```

## :memo: Documentation


### `blm(input)`
Do something *before leaving me*.

#### Params
- **String|Function** `input`: A string representing the message to show before the window is closed or a function returning that value.

#### Return
- **Object** The `blm` object.

### `prepare(func, speed, delay, handlers)`
...or before *preparing* to leave me. Catch the moment when the user
moves the mouse in the top side of the page (and most probably wants
to close the window).

#### Params
- **Function** `func`: A function to be called when the user moves the mouse to the top of the page.
- **Number** `speed`: The minimum mouse vertical speed (default: `-170`).
- **Number** `delay`: The number of miliseconds between two moments when we're trying to catch the mouse leave.
- **Array** `handlers`: An array of booleans in this order: `[ignoreLeave, ignoreMove, ignoreBlur]` (e.g. `[true, true, false]`, `[1, 1, 0]`).

#### Return
- **Object** The `blm` object.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
