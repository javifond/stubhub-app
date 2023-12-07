# Frontend test challenge
- :uk: [README in English](README.md)

Antes de comenzar, queremos agradecerte :heart: por adelantado cualquier esfuerzo y tiempo que dediques a realizar la prueba de código de StubHub International.
Por eso mismo queremos darte algunas breves pautas y aclaraciones para que aproveches el tiempo al máximo.

- Por defecto damos una semana para realizar la prueba, pero realmente :hourglass: **no hay límite de tiempo**, ni mínimo ni máximo. Si en cualquier momento necesitas ampliar el plazo de una semana, avísanos sin ningún compromiso :innocent:. Realmente lo único que necesitamos es saber **cuanto tiempo has dedicado** para completarla.
- Si tienes cualquier duda o pregunta puedes ponerte en contacto con nosotros en todo momento, estaremos encantados de resolverlas :wink:.
- Valoramos mucho la independencia y capacidad resolutiva. Si crees que debes tomar un camino, :muscle: hazlo y sorpréndenos. 
- No hay una solución buena ni mala, queremos entender tu forma de pensar y conocer el proceso que te ha llevado a la solución.
- Si algún requisito te parece repetitivo y sientes que te quedas sin tiempo, ahórrate la repetición y cuéntanos tu opinión al entregar la solución.
- Prueba a jugar un poco con la API que te proporcionamos para entender bien tus opciones.
- Usa este repositorio Git :octocat: para subir tu solución al challenge :pray:. No es necesario que crees otro diferente.
- Al finalizar la prueba te agradeceríamos que completases las preguntas presentes en [FEEDBACK.md](FEEDBACK.md) :pray:.

## Introducción al challenge
StubHub es una plataforma para la compra y venta de entradas entre particulares.
Nuestros usuarios se dirigen a nuestra página **Home** (`home.html`) desde donde se puede buscar la categoría para la que estás buscando comprar una entrada.

![ba2fpBl.png](https://i.imgur.com/ba2fpBl.png)

Al navegar a la página de **categoría** (`category.html`) se nos muestran todos los eventos relacionados con esa categoría.

![ttH2Jya.png](https://i.imgur.com/ttH2Jya.png)

Cuando navegas a una página de **evento** (`event.html`) puedes ver todas las entradas que se están listando para ese evento.

![rvMJe6Y.png](https://i.imgur.com/rvMJe6Y.png)

Por último, nuestros usuarios tienen una sección para gestionar su **cuenta** (`account.html`) desde donde pueden ver las entradas que tienen a la venta, aunque los maquetadores no han incluido el enlace a dicha sección.

![lsxx6xl.png](http://i.imgur.com/lsxx6xl.png)


Nuestros desarrolladores nos han proporcionado una API desde la cual podemos consultar toda la información de StubHub.
https://fake-tb-api.onrender.com/

## Requerimientos :open_book:

- Nuestros maquetadores nos han entregado las maquetas con todo el CSS embebido en el HTML, pero hay muchos estilos repetidos y esta forma hace que la modificación de los estilos de un elemento sea una tarea muy complicada. Una de las necesidades es organizar todos estos estilos en hojas de estilo.

- El buscador de StubHub :mag:, presente en la página Home y en la página de categoría, **busca en las categorías** disponibles en el API de StubHub (`/categories`). 
    > Completa la funcionalidad para que el buscador ofrezca una funcionalidad _typeahead_ con las distintas categorías de StubHub.

- Desde la página de categoría (`category.html`) se han de **mostrar los eventos relacionados con esa categoría** (`/categories/1/events`). 
    > Completa la funcionalidad para que los eventos cargados sean los correspondientes a esa categoría.

- Desde la página de evento (`event.html`) se han de **mostrar las entradas disponibles** (`&status=true`) para ese evento (`/tickets?eventId=71&status=true`). 
    > Completa la funcionalidad para que las entradas cargadas sean las correspondientes a ese evento.

##### En la sección de usuario :bust_in_silhouette: (`account.html`):

- Se **muestran todos las entradas que el usuario ha publicado** en StubHub (`/tickets?sellerId=1`).

- Las entradas se encuentran activas o inactivas (dependiendo del `status` que tengan, ver la respuesta del API :information_source:) y esto se debe reflejar de alguna forma para que el usuario sea consciente del estado de cada entrada.

- Nuestros usuarios podrán **activar o desactivar sus entradas** y aunque esto no se almacene en backend, las acciones si que deberían reflejarse visualmente en el listado de entradas que el usuario está viendo.

- Nuestros usuarios podrán **duplicar y borrar sus entradas** a la venta, una vez más esto no se almacena en backend, pero si que se debe ver reflejado visualmente en el listado de entradas que el usuario está viendo.

## Necesitamos :eyes:
- Necesitamos que adaptes el código que nos han entregado nuestros maquetadores.
- Puedes distribuir el código en tantos ficheros HTML, CSS o JS como necesites y consideres necesarios para el desarrollo de la prueba.
- Debes completar la maquetación con la funcionalidad solicitada en los requerimientos.
- Puedes ayudarte de frameworks tanto de CSS como de JS, simplemente recuerda utilizar la herramienta adecuada para cada problema.
- Todos los eventos y entradas mostradas en el HTML que te proporcionamos son estáticos, por eso te proporcionamos una API para hacer que todos esos datos sean dinámicos.

## Bola extra :trophy:
- Los tests son siempre bienvenidos :white_check_mark:.
- Cualquier mejora sobre el enunciado entregado será bienvenida. 
- Te damos el css básico, mira a ver si puedes actualizarlo aplicándole tecnologías de vanguardia
- Nos fijamos en el buen uso de Git :octocat:, es una herramienta que usamos diariamente para trabajar en equipo.
- Haz algo que nos sorprenda. Tip: _No tiene por qué ser algo complejo de implementar, pero sí algo que te destaque sobre los demás._
- En StubHub cuidamos mucho el detalle :eyes:. Buena arquitectura, uso de patrones, tecnologías adecuadas. Tenlo presente. Nos fijamos mucho en el cómo.
- Recuerda que la solución que nos proporciones no solo debe funcionar, queremos ver tus puntos fuertes y descubrir lo que puedes aportar :D