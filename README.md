
[![before-leaving-me](http://i.imgur.com/I1s2FwF.png)](http://ionicabizau.github.io/before-leaving-me.js/)

# before-leaving-me [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/before-leaving-me.svg)](https://www.npmjs.com/package/before-leaving-me) [![Downloads](https://img.shields.io/npm/dt/before-leaving-me.svg)](https://www.npmjs.com/package/before-leaving-me) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

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
- **Number** `speed`: The minimum mouse vertical speed (default: `-200`).
- **Number** `delay`: The number of miliseconds between two moments when we're trying to catch the mouse leave.
- **Array** `handlers`: An array of booleans in this order: `[ignoreLeave, ignoreMove, ignoreBlur]` (e.g. `[true, true, false]`, `[1, 1, 0]`).

#### Return
- **Object** The `blm` object.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
