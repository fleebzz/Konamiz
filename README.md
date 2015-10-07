Konamiz
=======

Lightweight Javascript manager for customiZable Konami codes : **<1 Ko** (minified)

How to add to your website ?
============================

Always up to date
-----------------
````html
<script type="text/javascript" src="https://cdn.rawgit.com/FlorianBezagu/Konamiz/master/konamiz.min.js"></script>
````


Locally
-------
Download [konamiz.min.js](https://raw.github.com/FlorianBezagu/Konamiz/master/konamiz.min.js])
<br>
````html
<script type="text/javascript" src="konamiz.min.js"></script>
````

How to use ?
============
When added to your website, create a new `Konamiz` as following :
<br>
````javascript
  var k = new Konamiz()
          .onStart(function(){
            alert('Hello !');
          })
          .onStop(function(){
            alert('Bye !');
          });
````
<br>
Now enter the Konami code :
<br>
`Up, up, down, down, left, right, left, right, b, a, Enter`

How to customize ?
==================
When creating your `Konamiz` you can give the constructor an Array with the Konamiz sequence you want such as :
<br>
````javascript
  var k = new Konamiz([ 'h', 'e', 'l', 'l', 'o', 'Enter' ])
          .onStart(function(){
            alert('Hello !');
          })
          .onStop(function(){
            alert('Bye !');
          });
````
<br>
Now your Konamiz will be activated when typing
<br>
`h, e, l, l, o, Enter`

