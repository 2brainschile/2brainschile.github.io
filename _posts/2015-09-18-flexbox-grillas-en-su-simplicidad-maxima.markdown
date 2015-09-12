---
layout: post
title:  "Flexbox: Grillas en su simplicidad máxima"
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

WAT? Y eso que olvidamos algunas variaciones del gris oscuro, y pasamos por alto la posibilidad de que la web tenga más colores de corporativos, cada cuál con sus respectivas variaciones.
Pero no hay de qué preocuparse, de hecho, estamos de suerte porque con Sass podemos hacer uso de los Sass Maps(una especie de objeto de Sass), para ayudarnos a crear una paleta de colores mucho más práctica, más fácil de mantener y usar.

Primero debemos crear nuestro mapa y dentro pondremos nuestros colores principales.

{% highlight scss %}

$my-palette: (
  primary: (),
  grey: (),
  layout-grey: ()
);

{% endhighlight %}

Luego podemos agregar las variaciones de colores dentro de los identificadores clave que creamos.

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

Genial! ya tenemos nuestro mapa de colores en Sass! Si se fijan partimos de la base desde el identificador ``base`` y vamos alterando los colores con identificadores ordenados por grados. En este caso estoy usando variaciones más claras y/o más oscuras de mis colores base, pero podrían ser otro tipo de variaciones como hue, mix, etc.
También estoy usando el ``xxx`` como mi identificador de grados pero perfectamente podría ser ``iii`` y continuar con el ``iv`` si hubiese una quinta variación. En la práctica suelen no aparecer más de 4 que bastan con el ``xxx-clave``.

Bueno, aún no podemos dar por terminada nuestra paleta de colores sin poder llamarla dentro de una propiedad ``background`` o ``color`` en nuestros estilos scss.

Para llamar a un mapa de Sass en una propiedad css podemos hacer uso de la función nativa ``map-get`` algo así.

{% highlight scss %}

.brand-light-bg {
  background-color: map-get(map-get($my-palette, primary), xxx-light);
}

{% endhighlight %}

WAT?
Lo sé es horrible y poco práctico, por esto necesitamos escribir nuestra propia función que nos ayude a simplificar nuestro llamado en el css.

{% highlight scss %}

@function pal($pal-key, $variation: 'base') {
  @return map-get(map-get($my-palette, $pal-key), $variation);
}

{% endhighlight %}

Lo que hicimos fue setear nuestra propia función para llamar a nuestra paleta de colores. Le llamé ``pal`` ya que necesitamos un nombre corto si vamos a estar llamándola repetidas veces en nuestros estilos. Y le setee la variación de color como base cosa que si llamamos a nuestro colo base no tengamos que pasarle nada más que la primera clave. Ejemplos.

{% highlight scss %}

.brand-light-bg {
  background-color: pal(primary, xxx-light);
}

.brand-bg {
  background-color: pal(primary);
}

{% endhighlight %}

Hemos terminado con nuestra paleta y está lista para ser llamada de forma simple en el css, podemos agregar los colores que queramos y siempre tener un orden fácil de recordar y mantener. Incluso en el desemparo de un equipo de diseño podemos mantener nuestra paleta de colores viva simplemente recordando que ``xx-dark`` es más oscuro que ``x-dark`` y colgarnos de algunas variables de Sass como ``lighten`` o ``darken`` para degradar nuestros colores en la espera del código Hexadecimal exacto.

Check out the [Jekyll docs][jekyll]

[jekyll]:      http://jekyllrb.com
