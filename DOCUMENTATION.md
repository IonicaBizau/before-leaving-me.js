## Documentation

You can see below the API reference of this module.

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

