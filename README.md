Formify 0.0.1
==================

jQuery plugin that change the background and the opacity of an input field creating a nice effect


## How it works

Include **formify.min.js** or **formify.js** on your html file after you include [jQuery](http://jquery.com/)

Create a form with a class or id, all the inputs of the form should have the same size and class="formify".

```<form class="form4">
<input class="formify" type="text" style="width:200px">
<input class="formify" type="password" style="width:200px">
<input class="formify" type="date" style="width:200px">
<select class="formify" style="width:200px">

  <option value="volvo">Volvo</option>

  <option value="saab">Saab</option>

  <option value="opel">Opel</option>

  <option value="audi">Audi</option>

</select>```

use the plugin like:

`$(".form4").formify({"backgroundImage":10,"backgroundColor":"#FF0F0F"});`


## Parameters

### backgroundImage (optional, default 1)

There are 10 different background on the image folder, you can use the passing the number of the background as parameter to the plugin, or you can use your own by adding an image to the folder, name the image like background11 and pass 11 to the plugin as parameter

### backgroundColor (optional, default black)

The background color that is used for the effect when the field is not focused.

### onfucusOpacity (optional, default 1)

The opacity of the fields when they are focused.

### onblurOpacity (optional, default 0.1)

The opacity of the fields when they are not focused











