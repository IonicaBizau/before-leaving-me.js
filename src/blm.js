/*!
 * before-leaving-me.js
 * ====================
 * Do thing before the user leaves your web page.
 *
 * Developed with JavaScript and <3 by Ionică Bizău.
 * */
(function (root) {

    // Production steps of ECMA-262, Edition 5, 15.4.4.18
    // Reference: http://es5.github.io/#x15.4.4.18
    if (!Array.prototype.forEach) {

      Array.prototype.forEach = function(callback, thisArg) {

	var T, k;

	if (this == null) {
	  throw new TypeError(' this is null or not defined');
	}

	// 1. Let O be the result of calling ToObject passing the |this| value as the argument.
	var O = Object(this);

	// 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
	// 3. Let len be ToUint32(lenValue).
	var len = O.length >>> 0;

	// 4. If IsCallable(callback) is false, throw a TypeError exception.
	// See: http://es5.github.com/#x9.11
	if (typeof callback !== "function") {
	  throw new TypeError(callback + ' is not a function');
	}

	// 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
	if (arguments.length > 1) {
	  T = thisArg;
	}

	// 6. Let k be 0
	k = 0;

	// 7. Repeat, while k < len
	while (k < len) {

	  var kValue;

	  // a. Let Pk be ToString(k).
	  //   This is implicit for LHS operands of the in operator
	  // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
	  //   This step can be combined with c
	  // c. If kPresent is true, then
	  if (k in O) {

	    // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
	    kValue = O[k];

	    // ii. Call the Call internal method of callback with T as the this value and
	    // argument list containing kValue, k, and O.
	    callback.call(T, kValue, k, O);
	  }
	  // d. Increase k by 1.
	  k++;
	}
	// 8. return undefined
      };
    }

    var _prepares = []
      , _leaves = []
      ;

    function addEvent(obj, type, fn) {
	if (obj.attachEvent) {
	    obj['e'+type+fn] = fn;
	    obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
	    obj.attachEvent( 'on'+type, obj[type+fn] );
	} else {
	    obj.addEventListener( type, fn, false );
	}
    }

    function PrepareElm(func, minSpeed, minY, delay, handlers) {
        handlers = handlers || [];
        this.func = func;
        this.min_speed = minSpeed === undefined ? -170 : minSpeed;
        this.min_y = minY === undefined ? 200 : minY;
        this.ignore_timeout = delay === undefined ? 1000 : delay;
        this.ignore = false;
        this.ignore_leave = handlers[0];
        this.ignore_move = handlers[1];
        this.ignore_blur = handlers[2];
    }

    function LeaveElm(input) {
        var self = this;
        switch(typeof input) {
            case "string":
                self.message = input;
                break;
            case "function":
                self.func = input;
                break;
            default:
                throw new Error("The input should be a string or a function.");
                break;
        }
    }

    LeaveElm.prototype.run = function (e) {
        return this.message || this.func.call(this, e) || "";
    };

    function Cursor(x, y, speedX, speedY, dX, dY) {
        this.x = x;
        this.y = y;
        this.speed_x = speedX;
        this.speed_y = speedY;
        this.delta_x = dX;
        this.delta_y = dY;
    }

    var timestamp = null
      , lastMouseX = null
      , lastMouseY = null
      ;

    function handlerPrepares(evName) {
        return function (e) {

            switch (evName) {
                case "mouseleave":
                    if (e.relatedTarget || e.toElement) {
                        return;
                    }

                    if (e.clientY <= 0) {
                        lastMouseY = 0;
                        lastMouseX = e.clientX;
                    }
                    break;
                case "mousemove":
                    if (timestamp === null) {
                        timestamp = Date.now();
                        lastMouseX = e.screenX;
                        lastMouseY = e.screenY;
                        return;
                    }

                    var now = Date.now()
                      , dt =  now - timestamp
                      , dx = e.screenX - lastMouseX
                      , dy = e.screenY - lastMouseY
                      , speedX = Math.round(dx / dt * 100)
                      , speedY = Math.round(dy / dt * 100)
                      ;

                    if (dt === 0) {
                        speedX = Infinity;
                        speedY = Infinity;
                    }

                    timestamp = now;
                    lastMouseX = e.screenX;
                    lastMouseY = e.screenY;
                    break;
            }

            // Check the prepares
            _prepares.forEach(function (c) {
                if (c.ignore
                || (evName === "mouseleave" && c.ignore_leave)
                || (evName === "blur" && c.ignore_leave)
                || (evName === "mousemove" && (c.ignore_move
                    || lastMouseY > c.min_y
                    || speedY >= 0
                    || c.min_speed < speedY)
                    )
                ) { return; }

                c.func.call(c, new Cursor(
                    lastMouseX, lastMouseY
                  , speedX, speedY
                  , dx, dy
                ));

                c.ignore = true;
                c.setTimeout = setTimeout(function () {
                    c.ignore = false;
                    timestamp = null;
                }, c.ignore_timeout);
            });
        };
    }

    // Catch the mouseleave
    addEvent(document, "mouseout", handlerPrepares("mouseleave"));

    // On blur
    addEvent(root, "blur", handlerPrepares("blur"));

    // Mousemove
    addEvent(document, "mousemove", handlerPrepares("mousemove"));

    // Listen for the beforeunload event
    root.onbeforeunload =function (e) {
        var res = []
          , str = ""
          , i = 0
          , c = null
          ;

        for (; i < _leaves.length; ++i) {
            c = _leaves[i];
            res.push(c.run(e).trim());
        }

        str = res.filter(Boolean).join("\n");

        if (str.trim().length === 0) { return undefined; }
        return str;
    };

    /**
     * blm
     * Do something *before leaving me*.
     *
     * @name blm
     * @function
     * @param {String|Function} input A string representing the message to show before the window is closed or a function returning that value.
     * @return {Object} The `blm` object.
     */
    function blm(input) {
        _leaves.push(new LeaveElm(input));
        return blm;
    }

    /**
     * prepare
     * ...or before *preparing* to leave me. Catch the moment when the user
     * moves the mouse in the top side of the page (and most probably wants
     * to close the window).
     *
     * @name prepare
     * @function
     * @param {Function} func A function to be called when the user moves the mouse to the top of the page.
     * @param {Number} speed The minimum mouse vertical speed (default: `-170`).
     * @param {Number} delay The number of miliseconds between two moments when we're trying to catch the mouse leave.
     * @param {Array} handlers An array of booleans in this order: `[ignoreLeave, ignoreMove, ignoreBlur]` (e.g. `[true, true, false]`, `[1, 1, 0]`).
     * @return {Object} The `blm` object.
     */
    blm.prepare = function (func, speed, delay, handlers) {
        _prepares.push(new PrepareElm(func, speed, delay, handlers));
        return blm;
    };

    blm._prepares = _prepares;
    blm._leaves = _leaves;

    root.blm = blm;
})(this);
