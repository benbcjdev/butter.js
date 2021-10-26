# Butter.js
"Smooth like Buttah"

Momentum Scrolling Javascript Library

Written by: BCJ Development

## Demo
https://bcjdevelopment.github.io/butter.js/

## About
This javascript library is largely based on the "Luxy.js" library written by Mineo Okuda: https://github.com/min30327/luxy.js

This library is meant to be a lightweight momentum scrolling library. Because of this, it does not currently support individual parallax elements (support for this may be included in a similar library soon). 

## How to Use It
Include a script link to butter.js:
```HTML
<script src="butter.js"></script>
```

Create a content wrapper with an id of "butter" (keep fixed html elements outside of content wrapper):

```HTML
<div id="butter">
  Put web page content here...
</div>
```

Initialize butter.js and enjoy:
```HTML
<script>
  // smooth like buttah...
  butter.init();
</script>
```

Call butter.cancel() to restore page to default settings:
```HTML
<script>
  // cancel momentum scrolling
  butter.cancel()
</script>
```

## Options
| Option        | default    | description                                            |
|---------------|------------|--------------------------------------------------------|
| wrapperId     | 'butter'   | The id of the content wrapper                          |
| wrapperDamper | 0.07       | Changes speed of scroll (increase to speed scroll up)  |
| cancelOnTouch | false      | If true, calls butter.cancel() when touch event occurs |

#### NOTE: It is recommended to set cancelOnTouch to true to avoid scrolljacking on mobile devices since they intrinsically support momentum scrolling.

```HTML
<script>
  // set options when initializing butter.js
  var options = {
    wrapperId: 'customDefaultId',
    wrapperDamper: 0.10,
    cancelOnTouch: true
  };
  butter.init(options);
</script>
```

## License
Free and Open Source under the MIT License.
