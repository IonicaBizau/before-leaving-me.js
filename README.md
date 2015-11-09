[![before-leaving-me](http://i.imgur.com/I1s2FwF.png)](http://ionicabizau.github.io/before-leaving-me.js/)

# before-leaving-me [![Support this project][donate-now]][paypal-donations]

Do things before the user leaves your web page.

## Installation

```sh
$ npm i -g before-leaving-me
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

## Documentation

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

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md