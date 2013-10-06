SUPER AFTER WORLD
=================
Where do your Marios go when they die? To the Super After World! Oh yeah, it's
[online](http://superafterworld.herokuapp.com/)
, though only tested with Goolge Chrome v29.

When I was a kid I was obsessed with where my fallen Marios went after they died. I imagined them going to an alternate world where they all collected and lived together. This is also the same place that missing socks go. And maybe you.

This hack was part of the exhibition Art Hack Day Berlin in September 2013.

![a photo taken during the exhibition](https://github.com/Kriesse/superafterworld/raw/master/doc/P9282434.JPG)

web.js
------

A node.js script to serve all assets, it also provides websockets which
allow mario's body to transcend after his death.

Use `npm install` to install all dependencies and start the web server with `node web.js`.
Afterwards use a html5 capable Webbrowser and go to
[http://localhost:5000]()

game.html
----------
The game itself, 99% based on Mike "Pomax"
Kamermans' excellent
[tutorial](http://processingjs.nihongoresources.com/test/PjsGameEngine/docs/tutorial/mario.html)
on recreating Super Mario in processing.js

Mario is controlled using W-A-S-D. Additionally
a gamepad can be used to control the game using
[ControllerMate 4.7](http://www.orderedbytes.com/controllermate/) and
the mappings in gamepad_bindings.cmate.

afterlife.html
--------------
The after world, where failed Marios go. Hacked together in HTML5 &
JavaScript using the box2d physics engine and a canvas.

authors
-------
* Lindsay Eyink [http://leyink.com]()
* Sean Fridmann [http://www.seanfridman.com]()
* Kristina Schneider [http://www.kristinaschneider.com]()
* Maximilian Schneider [http://maximilianschneider.net]()

license
-------
Most of the images & sounds are property of Nintendo Co., Ltd. and are used by us under a fair-use policy, as we inted this to be an artistic homage to Super Mario World.

The processing.js source code for the game was written by Mike Kamermans. Everything else was drawn / modified / written by Lindsay Eyink, Sean Fridmann, Kristina Schneider and Maximilian Schneider during Art Hack Day Berlin in 2013.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

