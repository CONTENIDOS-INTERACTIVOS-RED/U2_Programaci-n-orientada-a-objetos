<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos de programación orientada a objetos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    

    .row.bg-fondo-1.bg-full-width.pt-4.mb-4
      div.px-5

        .row.mb-4
          .col-12.col-xl-8
            p.mb-4 La herencia y el polimorfismo son dos conceptos fundamentales en la programación orientada a objetos (POO) que permiten crear estructuras de código más flexibles, reutilizables y mantenibles. Estos conceptos se basan en la idea de que los objetos pueden heredar atributos o comportamientos de otros objetos, que pueden ser tratados como instancias de su clase base o superclase.
            .d-flex.bg-verde.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
              img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-3.svg', alt='Texto descriptivo de la imagen')
              .my-auto.p-4.p-xl-0
                p.pe-xl-3.mb-0 En esta unidad, se explorará en detalle cómo funcionan la herencia y el polimorfismo en la POO. Se comenzará con una introducción a las jerarquías de herencia, que permiten definir relaciones entre clases y crear estructuras de código más organizadas y coherentes. Luego, se abordará el tema de la sobrecarga y sobrescritura de métodos, que son técnicas utilizadas para modificar el comportamiento de los métodos heredados y adaptarlos a las necesidades específicas de cada clase.
            span Finalmente, se discutirá cómo el polimorfismo puede ser utilizado para diseñar sistemas de <i>software</i> más flexibles y adaptables. Se explorarán conceptos como interfaces, clases abstractas y el principio de sustitución de Liskov, y se mostrarán ejemplos prácticos de cómo estos conceptos pueden ser aplicados en el desarrollo de <i>software</i>.
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
        
        .row
          .col-12.col-xl-8.mx-auto
            .tarjeta.shadow.bg-white.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.px-4
                  img(src='@/assets/componentes/youtube-icon-circle.svg')
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.text-bold.mb-3 Herencia POO
                      p.text-small Para conocer un ejemplo práctico de aplicación de herencia le invitamos a ver el siguiente vídeo. 
                    .col-sm-auto
                      a.download-btn.boton.bg-morado-oscuro.text-white(href="" target='_blank')
                        span.text-small Ver video
                        i.fas.fa-arrow-right
    .row.mt-n3
      .col-12.col-xl-8.mx-auto
        .tarjeta.shadow.bg-white.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.px-4
              img(src='@/assets/componentes/link-icon-circle.svg')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Atributos en los métodos
                  p.text-small A través del siguiente enlace podrá interactuar con el código, crear sus propias clases o modificar los atributos en los métodos para obtener nuevos resultados.
                .col-sm-auto
                  a.download-btn.boton.bg-morado-oscuro.text-white(href="https://www.programiz.com/online-compiler/8BTq9q4gPFT0p" target='_blank')
                    span.text-small Ir al sitio
                    i.fas.fa-arrow-right

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Jerarquías de herencia

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Las jerarquías de herencia son una forma de organizar las clases en una estructura de árbol, donde cada clase puede tener una o más subclases que heredan sus atributos y métodos. Esta estructura permite crear relaciones de generalización-especialización entre las clases, lo que facilita la reutilización de código y la creación de abstracciones más poderosas.
        .bg-azul.p-4(data-aos='fade-up')
          span En esta sección, se explorarán los conceptos básicos de las jerarquías de herencia, incluyendo la herencia simple y múltiple, el uso de la palabra clave "extends" o equivalente, la herencia de atributos y métodos, y los constructores en la herencia. También se discutirán algunos problemas comunes que pueden surgir al utilizar la herencia de manera excesiva o incorrecta.

    h2 Concepto de herencia simple y múltiple (según el lenguaje).
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 La herencia simple se refiere a la capacidad de una clase de heredar atributos y métodos de una sola clase base o superclase. En cambio, a herencia múltiple permite que una clase herede de varias clases base simultáneamente. Aunque la herencia múltiple puede ser útil en algunos casos, también puede introducir complejidad y ambigüedad en el diseño de las clases (Ceballos Sierra, 2018).
        .bg-morado.p-4.mb-4(data-aos='fade-up')
          span Por ejemplo, en un sistema de gestión de biblioteca, se podría definir una clase base llamada "Publicacion" con atributos como título, autor y año de publicación. Luego, se podrían crear subclases como "Libro", "Revista" y "Periodico" que hereden de "Publicacion" y añadan atributos y métodos específicos de cada tipo de publicación.
        span Supongamos que la clase "Publicacion" tiene el siguiente aspecto:
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 1.</b> Clase base Publicacion.

    .row.bg-azul.py-4.mb-4
      div.px-5.pb-md-3
        
        .row
          .col-10.col-lg-6.col-xl-5.mx-auto
            img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Ahora, podemos crear una subclase "Libro" que herede de "Publicacion" y añada un atributo específico, como el número de páginas: 
        .bg-amarillo.p-4(data-aos='fade-up').mb-4
          span La clase "Libro" hereda los atributos y métodos de "Publicacion", y añade su propio atributo "numPaginas" y sobrescribe el método "mostrarDetalles" para incluir este nuevo atributo.
        h2 Ejercicios resueltos:
        span <b>1.</b> Crear una instancia de "Publicacion" y mostrar sus detalles: Crear una instancia de "Publicacion" y mostrar sus detalles: 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 2.</b> Instancia de Publicacion. 

    .row.bg-azul.py-4.mb-4
      div.px-5.pb-md-3
        
        .row
          .col-10.col-lg-7.col-xl-6.mx-auto
            img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')

    p.mb-4 <b>2.</b> Crear una instancia de "Libro" y mostrar sus detalles:
    p.mb-4 <b>Figura 3.</b> Instancia de Libro.

    .row.bg-azul.py-4.mb-4
      div.px-5.pb-md-3
        
        .row
          .col-10.col-lg-7.col-xl-6.mx-auto
            img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    p.mb-4 <b>3.</b> Crear una instancia de "Libro" usando una referencia de tipo "Publicacion" y mostrar sus detalles:
    p.mb-4 <b>Figura 4.</b> Instancia de Libro con referencia tipo Publicacion.

    .row.bg-azul.py-4.mb-4
      div.px-5.pb-md-3
        
        .row
          .col-10.col-lg-7.col-xl-6.mx-auto
            img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row
          .col-12.col-xl-10
            span Aunque "pub2" es de tipo "Publicacion", en tiempo de ejecución se llama al método "mostrarDetalles" de la clase "Libro", dado que el objeto referenciado es realmente una instancia de "Libro". Esto es un ejemplo de polimorfismo dinámico.
          .col-2.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')

    .row.mt-n4
      .col-12.col-xl-8.mx-auto
        .tarjeta.shadow.bg-white.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.px-4
              img(src='@/assets/componentes/youtube-icon-circle.svg')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Ejemplo de Herencia con jerarquía de animales
                  p.text-small Para conocer un ejemplo práctico de herencia con jerarquía le invitamos a ver el siguiente vídeo. 
                .col-sm-auto
                  a.download-btn.boton.bg-morado-oscuro.text-white(href="https://youtu.be/TGCJjEkTKl8 " target='_blank')
                    span.text-small Ver video
                    i.fas.fa-arrow-right 

    h2 Uso de la palabra clave extends o equivalente.

    .row.mb-4
      .col-12.col-xl-8
        .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-13.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 La palabra clave "extends" se utiliza en lenguajes como Java para indicar que una clase hereda de otra. En otros lenguajes, se pueden utilizar palabras clave equivalentes, como ":" en C++ o "inherits" en Pascal (López Goytia, 2015).
        span Por ejemplo, en C++, la herencia se expresa utilizando el operador ":" seguido del tipo de herencia (public, protected o private) y el nombre de la clase base:
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 5.</b>Ejemplo de herencia en C++
    
    .row.bg-azul.py-4.mb-4
      div.px-5.pb-md-3
        
        .row
          .col-10.col-lg-7.col-xl-6.mx-auto
            img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-16.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.px-4.mb-0.text-white En este ejemplo, la clase "Libro" hereda de la clase "Publicacion" utilizando herencia pública, lo que significa que los miembros públicos y protegidos de "Publicacion" serán accesibles desde "Libro".
    
    h2 Herencia de atributos y métodos.

    .row.mb-4
      .col-12.col-xl-8
        .bg-verde.p-4.mb-4(data-aos='fade-up')
          span Cuando una clase hereda de otra, hereda todos sus atributos y métodos públicos y protegidos. Esto significa que la clase derivada o subclase tendrá acceso a estos miembros y podrá utilizarlos como si fueran propios (Moreno Pérez, 2015).
        span Por ejemplo, en el caso de la clase "Libro" que hereda de "Publicacion", "Libro" heredará los atributos "titulo", "autor" y "anioPublicacion", así como cualquier método público o protegido definido en "Publicacion".
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 6.</b> Ejemplo de Clase Libro con su herencia. 

    .row.bg-azul.py-4.mb-4
      div.px-5.pb-md-3
        
        .row
          .col-10.col-lg-9.col-xl-8.mx-auto
            img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')

    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-19.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.px-4.mb-0.text-white En este ejemplo, se crea una instancia de "Libro" y se accede a los atributos heredados de "Publicacion" utilizando los métodos "get" correspondientes.

    .row.bg-fondo-1.bg-full-width.py-5.mb-4
      div.px-5.pb-md-3
            
    .row.mt-n4
      .col-12.col-xl-8.mx-auto
        .tarjeta.shadow.bg-white.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.px-4
              img(src='@/assets/componentes/youtube-icon-circle.svg')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Herencia en la POO
                  p.text-small Para ampliar el concepto de herencia en programación orientada a objetos le invitamos a ver el siguiente vídeo. 
                .col-sm-auto
                  a.download-btn.boton.bg-morado-oscuro.text-white(href="https://youtu.be/k3OZ0NUsVpE" target='_blank')
                    span.text-small Ver video
                    i.fas.fa-arrow-right 

    h2 Constructores en la herencia.
    .row.mb-4
      .col-12.col-xl-8
        .bg-azul.p-4.mb-4(data-aos='fade-up')
          span Cuando se crea una instancia de una clase derivada, primero se llama al constructor de la clase base y luego al constructor de la clase derivada. Esto garantiza que los atributos heredados se inicialicen correctamente antes de que se ejecute el código específico de la subclase (Oviedo Regino, 2015).
        span En Java, se puede llamar explícitamente al constructor de la clase base utilizando la palabra clave "super":
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 7.</b> Ejemplo de llamada al constructor de clase.

    .row.bg-azul.py-4.mb-4
      div.px-5.pb-md-3
        
        .row
          .col-10.col-lg-9.col-xl-8.mx-auto
            img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')  

    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-22.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.px-4.mb-0.text-white En este ejemplo, el constructor de "Libro" llama al constructor de "Publicacion" utilizando "super" y luego inicializa el atributo específico "numPaginas".

    h2 Problemas comunes: herencia excesiva o mal utilizada.
    p.mb-4 Aunque la herencia es una herramienta poderosa, su uso excesivo o incorrecto puede llevar a diseños de clases confusos y difíciles de mantener. Algunos problemas comunes incluyen (Ruiz Rodríguez, 2009, p. 74):

    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-23.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='14.4%' y='21%' numero='+')
        .h5.mb-2 Herencia excesiva
        p Crear jerarquías demasiado profundas o complejas puede dificultar la comprensión del sistema y aumentar el esfuerzo de mantenimiento del código.
      .tarjeta.bg-white.p-4(x='87.7%' y='22.6%' numero='+')
        .h5.mb-2 Herencia inapropiada
        p Ocurre cuando se hereda de una clase solo para reutilizar parte de su funcionalidad, sin que exista una relación real del tipo "es un".
      .tarjeta.bg-white.p-4(x='88.2%' y='59.4%' numero='+')
        .h5.mb-2 Acoplamiento estrecho
        p Las clases derivadas pueden depender en exceso de los detalles internos de las clases base, lo que complica la evolución y modificación del sistema.

    .row.mb-5
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .bg-amarillo.p-4(data-aos='fade-up')
          p.mb-4 Por ejemplo, considere una clase "Rectangulo" que hereda de una clase "Cuadrado". Aunque un cuadrado es un tipo especial de rectángulo, esta herencia puede ser problemática, ya que un cuadrado tiene la restricción adicional de que todos sus lados deben tener la misma longitud. Si "Rectangulo" tiene un método para establecer la longitud y el ancho de forma independiente, este método no tendría sentido en "Cuadrado" y podría llevar a inconsistencias.
          span Para evitar estos problemas, es importante aplicar los principios de diseño orientado a objetos, como el principio de responsabilidad única y el principio de sustitución de Liskov, y favorecer la composición sobre la herencia cuando sea apropiado.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/106519?page=1") Programación orientada a objetos con C++
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/39461?page=1") Programación orientada a objetos C++ y Java: un acercamiento interdisciplinario
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/106461?page=1") Programación orientada a objetos
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/70431?page=1") Lógica de programación orientada a objetos
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/34869?page=9") Fundamentos de la programación orientada a objetos: una aplicación a las estructuras de datos en Java
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/TGCJjEkTKl8") Ejemplo de Herencia con jerarquía de animales [Vídeo]
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/k3OZ0NUsVpE") Herencia en la POO [Vídeo]
          
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


    p


</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
