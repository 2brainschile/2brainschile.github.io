---
layout: post
title:  "Cómo crear una práctica Paleta de Colores con Sass"
date:   2015-08-15 18:06:10
author: alexplaza
category: css
categories: css
tags: scss, css, palette, design, colors, sass maps
mainimg: /public/img/post-alex/postits.jpg
---

Cuando hablamos de colores en la web, hablamos de códigos Hexadecimales. Y si bien es posible adivinar <del>con cierta presición</del> el color que nos dará un código Hexadecimal a través de la teoría, en la práctica es ridículo que tratemos de memorizar todos los códigos de un proyecto dado. Para hacernos la tarea más fácil, a los desarrolladores Front-end, Sass y otros preprocesadores nos han dado el poder de las variables. Y podemos guardar colores en ellas de la siguiente forma:

{% highlight scss %}

$primary-color: #FF6008;
$secondary-color: #00A553;

$light-grey: #E3E3E3;
$grey: #C7C7C7;
$dark-grey: #7A7B7D;

{% endhighlight %}

Genial! las variables son increíbles!
Pero en un proyecto grande o mediano donde trabajamos con un equipo de diseño que busca explotar al máximo los recursos visuales para una mejor experiencia de usuario, terminamos con un número de colores mayor que el ideal para nuestra memoria. E incluso las ``$variables``, comienzan a volverse difíciles de recordar.

{% highlight scss %}

$primary-color: #FF6008;
$primary-color-light: #FE8441;
$primary-color-dark: #C74700;
$secondary-color: #00A553;
$secondary-color-light: #78ACFB;
$secondary-color-dark: #105BCC;

$grey: #C7C7C7;
$light-grey: #E3E3E3;
$dark-grey: #7A7B7D;
$very-light-grey: #E3E3E3;
$the-lightest-grey: #EEEEEE;
$ultra-light-grey: #FAFAFA;
$very-dark-grey: #515255;

{% endhighlight %}

What? Y eso que olvidamos algunas variaciones del gris oscuro, y pasamos por alto la posibilidad de que la web tenga más colores centrales, cada cuál con sus respectivas variaciones. Pero estamos de suerte porque con Sass podemos hacer uso de los Sass maps, una especie de objeto de Sass, para ayudarnos a crear una paleta de colores mucho más práctica y más fácil de mantener y utilizar.

Primero debemos crear nuestro mapa y dentro pondremos nuestros colores principales.

{% highlight scss %}

$my-palette: (
  primary: (),
  grey: (),
  layout-grey: ()
);



{% endhighlight %}

Luego podemos agregar las variaciones de nuestros colores dentro de los identificadores claves que creamos.

{% highlight scss %}

$my-palette: (
  primary: (
    xxx-light : #FEF3ED,
    light     : lighten(#FF6008, 10%),
    base      : #FF6008
  ),
  grey: (
    xx-light  : #FAFAFA,
    x-light   : #EEEEEE,
    light     : #E3E3E3,
    base:     : #C7C7C7,
    dark      : #7A7B7D,
    x-dark    : #515255
  ),
  layout-grey: (
    light     : #3E3E3E,
    base      : #333333,
    dark      : #252525
  )
);

{% endhighlight %}



Check out the [Jekyll docs][jekyll]

[jekyll]:      http://jekyllrb.com
