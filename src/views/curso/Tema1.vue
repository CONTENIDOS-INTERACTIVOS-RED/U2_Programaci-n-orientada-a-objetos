<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos de programación orientada a objetos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 <b>La programación orientada a objetos (POO)</b> es un paradigma de programación que organiza el diseño de software en torno a datos u objetos, en lugar de funciones y lógica. Se basa en el concepto de <b>"objetos"</b> que contienen <b>datos y código:</b> datos en forma de atributos (a menudo conocidos como propiedades o características) y código, en forma de procedimientos (a menudo conocidos como métodos). Esta unidad introductoria se enfoca en establecer las bases conceptuales necesarias para comprender y aplicar efectivamente los principios de la POO en la construcción de sistemas robustos y mantenibles.
        .d-flex.bg-verde.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-3.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 La idea central de la POO es que los objetos son instancias de clases. <b>Una clase define las propiedades y comportamientos comunes de un grupo de objetos similares.</b> Por ejemplo, una clase "Vehículo" podría representar las propiedades (marca, modelo, color) y comportamientos (acelerar, frenar) que son comunes a todos los vehículos. Cada vehículo individual sería una instancia de esta clase con sus propios valores específicos para esas propiedades.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-5
    
        .row.mb-4
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8
            p.mb-4 A lo largo de esta unidad, se explorará la noción de <b>clases y objetos</b> como los componentes esenciales de la POO. Se examinará cómo estos conceptos permiten modelar y organizar el código de manera modular y reutilizable, facilitando así el desarrollo de aplicaciones complejas. Además, se abordarán los principios de encapsulación y abstracción, los cuales promueven un diseño sólido y seguro.
            .bg-azul.p-4(data-aos='fade-up')
              span La POO promueve una mayor flexibilidad y mantenibilidad en la programación, dado que los objetos pueden ser fácilmente reutilizados y sus propiedades modificadas heredando de otras clases. Esto puede ahorrar una cantidad significativa de tiempo de desarrollo. La POO también hace que el código sea más intuitivo al modelar objetos del mundo real. A lo largo de esta unidad, se explorarán en profundidad los conceptos centrales de la POO, incluyendo clases, objetos, encapsulación, abstracción y la interacción entre objetos.

    .row.mt-n4
      .col-12.col-xl-8.mx-auto
        .tarjeta.shadow.bg-white.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img(src='@/assets/componentes/youtube-icon-circle.svg')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Programación Orientada a Objetos. Conceptos básicos I 
                  p.text-small Para reforzar los conceptos generales sobre introducción a la programación orientada a objetos, le invitamos a ver el siguiente vídeo en YouTube.
                .col-sm-auto
                  a.download-btn.boton.text-white.bg-morado-oscuro.text-white(href="https://youtu.be/nuwcn0SzpLs " target='_blank')
                    span.text-small Ver video
                    i.fas.fa-arrow-right 
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Conceptos de clases y objetos

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-12.col-xl-8
            .bg-morado.p-4.mb-4(data-aos='fade-up')
              span La programación orientada a objetos (POO) se basa en el concepto fundamental de clases y objetos. Una clase es una plantilla que define las propiedades y comportamientos comunes de un conjunto de objetos relacionados. Puede considerarse como un plano que describe cómo deben ser los objetos de ese tipo. Por otro lado, un objeto es una instancia específica de una clase, que tiene sus propios valores para los atributos definidos en la clase y puede realizar las acciones o métodos especificados en ella.
            span Las clases y los objetos son los bloques de construcción esenciales de la POO. Permiten modelar y representar entidades del mundo real o conceptos abstractos en un programa de <i>software</i>. Al definir clases, se establece una estructura clara y reutilizable para crear objetos con características y funcionalidades similares. Esto promueve la modularidad, la encapsulación y la reutilización de código, lo que facilita el desarrollo y mantenimiento de sistemas de <i>software</i> complejos.
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')

    .row.mt-n4
      .col-12.col-xl-8.mx-auto
        .tarjeta.shadow.bg-white.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img(src='@/assets/componentes/youtube-icon-circle.svg')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Uso IA UML
                  p.text-small Para reforzar los conceptos generales sobre clases y objetos, le invitamos a ver el siguiente vídeo en YouTube. 
                .col-sm-auto
                  a.download-btn.boton.text-white.bg-morado-oscuro.text-white(href="https://www.youtube.com/watch?v=AsFevN7MEzw" target='_blank')
                    span.text-small Ver video
                    i.fas.fa-arrow-right 

    h2 Definición y propósito de clases y objetos

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 En programación orientada a objetos, <b>una clase</b> es una plantilla o plano que define las variables y los métodos comunes a todos los objetos de un cierto tipo. Una clase es una categoría o grupo de cosas que tienen atributos y acciones similares. Sirve como plano para crear, o instanciar, objetos específicos. Por ejemplo, una clase "Persona" puede tener atributos como nombre, edad, dirección y acciones como caminar, hablar, respirar (Ceballos Sierra, 2018).
        .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-8.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 Según López Goytia (2015), las clases son plantillas de tipos de datos definidos por el usuario, que encapsulan el estado y el comportamiento. Las clases proporcionan un medio para crear tipos de datos definidos por el usuario que son específicos del problema que se está resolviendo. Al encapsular datos y funciones relacionados en una clase, se crea un nuevo nivel de abstracción de tipos de datos. 
        span En el contexto de la ingeniería de software, las clases se utilizan para representar entidades o conceptos del mundo real que son relevantes para el sistema que se está desarrollando. Por ejemplo, en un sistema de gestión bibliotecaria, se podrían tener clases como "Libro", "Usuario" y "Préstamo". Cada una encapsularía los datos y comportamientos relevantes para esa entidad en particular.
    
    p.mb-4 <b>Figura 1.</b> Ejemplo de definición de clase en Java

    .bg-azul-claro.p-4(data-aos='fade-up').mb-4
      .row
        .col-12.col-xl-6.mx-auto
          img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')

    h2 Instanciación de objetos y uso de constructores
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 La instanciación es el proceso de crear un objeto a partir de una clase. Cuando se instancia un objeto, se reserva memoria para él y su estado inicial se establece llamando a un método especial llamado constructor. El constructor tiene el mismo nombre que la clase y se utiliza para inicializar los atributos del objeto a sus valores iniciales (Moreno Pérez, 2015).
        .bg-verde.p-4.mb-4(data-aos='fade-up')
          span De acuerdo con Ruiz Rodríguez (2009), un objeto es una instancia de una clase y para crear objetos de una clase, se emplea la instrucción new. Al crear un objeto, se invoca automáticamente el constructor de la clase, que inicializa los atributos del objeto. Es posible definir múltiples constructores para una clase, lo que permite diferentes formas de inicializar un objeto.
        span En el desarrollo de <i>software</i>, la instanciación de objetos es una tarea común. Por ejemplo, en un sistema de gestión de empleados, cada vez que se agrega un nuevo empleado al sistema, se crea una nueva instancia de la clase "Empleado" con los detalles de ese empleado específico. El constructor se utiliza para garantizar que el objeto del empleado se crea en un estado válido.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
    
    p.mb-4 <b>Figura 2.</b> Ejemplo de instanciación de objeto en Java

    .bg-azul-claro.p-4(data-aos='fade-up').mb-4
      .row
        .col-12.col-xl-10.mx-auto
          img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')

    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-12.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.p-4.p-xl-0.mb-0.text-white En este ejemplo, “miLibro” es una variable que contiene una referencia a un objeto “Libro”. El operador “new” crea una nueva instancia de la clase “Libro” y llama al constructor con los argumentos proporcionados para inicializar el estado del objeto.

    h2 Atributos y métodos: definición y uso

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Los atributos y métodos son los elementos fundamentales que componen una clase. <b>Los atributos </b>representan las características o propiedades de una clase, mientras que<b> los métodos </b>definen las acciones o comportamientos que los objetos de esa clase pueden realizar.
        .bg-amarillo.p-4.mb-4(data-aos='fade-up')
          span Según Vélez Serrano (2011), los atributos son variables propias de una clase que almacenan información relevante sobre los objetos. Cada objeto tiene sus propios valores para estos atributos, que representan su estado. Por otro lado, los métodos son subrutinas o funciones asociadas a los objetos, que manipulan los valores de los atributos (Vélez Serrano, 2011).
        span En el contexto del desarrollo de software, los atributos suelen representar los datos que necesitan ser almacenados y manipulados por un objeto, mientras que los métodos definen las operaciones o cálculos que se realizan en esos datos. Por ejemplo, en una clase "Cuenta Bancaria", los atributos podrían incluir el número de cuenta y el saldo, mientras que los métodos podrían ser depositar, retirar y obtener el saldo.

    p.mb-4 <b>Figura 3.</b> Ejemplo de definición de atributos y métodos en Java:

    .bg-azul-claro.p-4(data-aos='fade-up').mb-4
      .row
        .col-12.col-xl-6.mx-auto
          img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-15.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.p-4.p-xl-0.mb-0.text-white En este ejemplo, “numeroCuenta” y “saldo” son atributos, mientras que “depositar”, “retirar” y “obtenerSaldo” son métodos que operan en esos atributos.


    h2 Diagramas de clases UML básicos

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Los diagramas de clases son una parte esencial del Lenguaje Unificado de Modelado (UML). Muestran las clases del sistema, sus atributos, operaciones (o métodos) y las relaciones entre los objetos. Los diagramas de clase son utilizados para una variedad de propósitos, incluyendo el modelado conceptual/de dominio y el diseño detallado.
        .bg-verde.p-4.mb-4(data-aos='fade-up')
          span De acuerdo con Oviedo Regino (2015), el diagrama de clases captura la estructura lógica del sistema. Su objetivo es presentar los detalles estáticos del sistema, es decir, descripciones de cada clase perteneciente al sistema y cómo se relacionan entre sí. Las relaciones entre clases pueden incluir asociación, agregación, composición y herencia.
 
        span En el desarrollo de <i>software</i>, los diagramas de clases UML se utilizan en las fases de análisis y diseño para capturar y comunicar la estructura del sistema. Son esenciales para entender cómo se organizan y relacionan las diferentes partes del sistema. Por ejemplo, en un sistema de gestión universitaria, un diagrama de clases podría mostrar clases como "Estudiante", "Curso", "Profesor", y las relaciones entre ellas.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 4.</b> Ejemplo de un diagrama de clases UML básico:

    .bg-azul-claro.p-4(data-aos='fade-up').mb-4
      .row
        .col-12.col-xl-6.mx-auto
          img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 5.</b> UML

    .bg-azul-claro.p-4(data-aos='fade-up').mb-4
      .row
        .col-12.col-xl-10.mx-auto
          img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')

    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-19.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.p-4.p-xl-0.mb-0.text-white En este diagrama, las clases “Estudiante”, “Curso” y “Profesor" se muestran con sus atributos y métodos. Las relaciones entre las clases también se indican: un Estudiante puede matricularse en muchos Cursos, mientras que un Curso es enseñado por un Profesor. 

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8.bg-morado.p-4
            p.mb-4.text-bold Puede crear diagramas UML utilizando IA, copie el siguiente código:
            img.mb-4(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
            span Utilice la página <span> <a href="https://www.mymap.ai/"> <b>https://www.mymap.ai/</b></a> </span>, regístrese, seleccione el plan gratuito, posteriormente en el promt del chat indique que debe generar el diagrama UML para el código dado y observe como la IA genera el diagrama para usted.

    .row.mt-n4
      .col-12.col-xl-8.mx-auto
        .tarjeta.shadow.bg-white.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img(src='@/assets/componentes/youtube-icon-circle.svg')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Uso IA UML
                  p.text-small Lo invitamos a ver el vídeo con el resultado obtenido por la IA. 
                .col-sm-auto
                  a.download-btn.boton.text-white.bg-morado-oscuro.text-white(:href="obtenerLink('/downloads/Anexo_video_Uso_IA_UML.mov')" target='_blank')
                    span.text-small Ver video
                    i.fas.fa-arrow-right

    h2 Comparación entre clases concretas y abstractas

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 En programación orientada a objetos, las clases pueden ser concretas o abstractas. 
        .bg-verde.p-4.mb-4(data-aos='fade-up')
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Una clase concreta</b> es una clase que puede ser instanciada, es decir, se pueden crear objetos a partir de ella.  
          div.d-flex.mb-4
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Una clase abstracta </b>es una clase que no puede ser instanciada y está diseñada para ser subclasificada.
          span Según Ceballos Sierra (2018), las clases abstractas proporcionan una base común para las subclases, pero no pueden ser instanciadas directamente. Las clases abstractas a menudo contienen métodos abstractos, que son declarados, pero no implementados en la clase abstracta. Se espera que las subclases concretas proporcionen implementaciones para estos métodos.
        span En el desarrollo de <i>software</i>, las clases abstractas se utilizan a menudo para representar conceptos generales o abstractos, mientras que las clases concretas representan implementaciones específicas de esos conceptos. Por ejemplo, en una aplicación de formas geométricas, se podría tener una clase abstracta "Forma" con métodos abstractos como "calcularArea" y "calcularPerimetro". Las clases concretas como "Rectangulo" y "Circulo" heredarían de "Forma" y proporcionarían implementaciones específicas para esos métodos.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')


    p.mb-4 <b>Figura 6.</b> Ejemplo en Java

    .bg-azul-claro.p-4(data-aos='fade-up').mb-4
      .row
        .col-12.col-xl-4.mx-auto
          img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Encapsulación y abstracción

    p.mb-4 La encapsulación y la abstracción son dos principios fundamentales de la programación orientada a objetos que están estrechamente relacionados.

    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-23.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='20.5%' y='23%' numero='+')
        .h5.mb-2 Encapsulación
        p Práctica de ocultar los detalles internos de una clase y exponer solo una interfaz pública para interactuar con ella. Se logra mediante modificadores de acceso como <i>private, public y protected</i>, los cuales controlan la visibilidad y accesibilidad de los miembros de una clase (atributos y métodos). Esto protege la integridad de los datos y evita accesos no autorizados o modificaciones inadecuadas desde fuera de la clase.
      .tarjeta.bg-white.p-4(x='78.8%' y='48%' numero='+')
        .h5.mb-2 Abstracción
        p Proceso de identificar los aspectos esenciales de un sistema y representarlos en un modelo simplificado, ignorando los detalles no relevantes. En la POO, se logra mediante el uso de clases abstractas e interfaces.

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8
            p.mb-4 Las <b>clases abstractas</b> no pueden ser instanciadas directamente y están diseñadas para servir como base para otras clases. A menudo contienen <b>métodos abstractos</b>, es decir, declarados pero no implementados, cuya implementación se deja a las subclases concretas.
            .bg-morado.p-4(data-aos='fade-up')
              span Por su parte, las <b>interfaces</b> definen un conjunto de métodos que una clase debe implementar, sin especificar cómo deben ser implementados. La abstracción permite centrarse en <b>lo que hace un objeto</b>, <i>rather than how it does it</i>, facilitando así un diseño modular y flexible del software.
        .row
          .col-12.col-xl-8.mx-auto
            .tarjeta.shadow.bg-white.p-3.mb-4
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-lg-4
                  img(src='@/assets/componentes/youtube-icon-circle.svg')
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.text-bold.mb-3 Java Orientado a Objetos
                      p.text-small Para reforzar los conceptos generales sobre encapsulamiento y abstracción, le invitamos a ver el siguiente vídeo en YouTube. 
                    .col-sm-auto
                      a.download-btn.boton.text-white.bg-morado-oscuro.text-white(href="https://youtu.be/At-b3_xH9kY" target='_blank')
                        span.text-small Ver video
                        i.fas.fa-arrow-right
    .mt-n4
      .row
        .col-12.col-xl-8.mx-auto
          .tarjeta.shadow.bg-white.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2.px-lg-4
                img(src='@/assets/componentes/youtube-icon-circle.svg')
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-bold.mb-3 Encapsulamiento en POO
                    p.text-small Para reforzar los conceptos generales sobre encapsulamiento, le invitamos a ver el siguiente vídeo en YouTube. 
                  .col-sm-auto
                    a.download-btn.boton.text-white.bg-morado-oscuro.text-white(href="https://youtu.be/KprJmqkd80o " target='_blank')
                      span.text-small Ver video
                      i.fas.fa-arrow-right

    h2 Control de acceso: modificadores <i>private, public, protected</i>

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 El control de acceso es un concepto fundamental en la programación orientada a objetos que permite a los programadores restringir el acceso a los miembros de una clase (atributos y métodos). Los modificadores de acceso en Java son <b><i>public, private y protected.</i> </b>Determinan la visibilidad y la accesibilidad de los miembros de la clase.
        .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-25.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 Según Moreno Pérez (2015), los modificadores <b><i>private y protected</i></b> se utilizan para implementar el encapsulamiento, uno de los principios fundamentales de la POO. Los miembros <b><i>private</i></b> sólo son accesibles dentro de la clase en la que se declaran. Los miembros <b><i>protected</i></b> son accesibles dentro del mismo paquete y por las subclases en otros paquetes. Los miembros <b><i>public</i></b> son accesibles desde cualquier lugar.
        span En la ingeniería de <i>software</i>, el uso del control de acceso es esencial para crear sistemas <b>robustos y mantenibles</b>. Ayuda a lograr el encapsulamiento, ocultando los detalles internos de una clase y exponiendo sólo la interfaz necesaria. Por ejemplo, en una clase "CuentaBancaria", los atributos como "saldo" serían normalmente private para evitar el acceso directo, y los métodos públicos como "depositar" y "retirar" proporcionarían la interfaz para interactuar con esos atributos de forma controlada.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 7.</b> Ejemplo en Java

    .bg-azul-claro.p-4.mb-4(data-aos='fade-up')
      .row
        .col-12.col-xl-8.mx-auto
          img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')

    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-28.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.pe-xl-3.mb-0.text-white En este ejemplo, el atributo “saldo” es “private”, por lo que sólo puede ser accedido y modificado dentro de la clase “CuentaBancaria”. El método “depositar” es “public”, permitiendo a los clientes de la clase depositar dinero. El método “tieneFondosSuficientes” es “private”, dado que es un detalle de implementación interno que no necesita ser expuesto a los clientes de la clase.

    h2 Métodos <i>get y set:</i> propiedades y acceso controlado

    .row.mb-4 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 En la programación orientada a objetos, los métodos <b>get y set, </b>también conocidos como métodos de <b>acceso y mutadores, </b>se utilizan para definir cómo se accede y modifica el estado de un objeto. Son una parte fundamental del encapsulamiento, ya que proporcionan una forma controlada de interactuar con los atributos de una clase.
        .bg-verde.p-4.mb-4(data-aos='fade-up')
          p.mb-4 De acuerdo con López Goytia (2015):
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Los métodos <i>get</i></b>, también llamados métodos de acceso se utilizan para obtener el valor de un atributo, 
          div.d-flex.mb-4
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Los métodos <i>set</i></b>, también llamados métodos mutadores, se utilizan para modificar el valor de un atributo.
          span Al usar métodos <i>get y set</i>, los atributos pueden mantenerse <i>private</i>, ocultando los detalles internos de la clase y exponiendo sólo la interfaz necesaria.
        span En el desarrollo de <i>software</i>, el uso de métodos <i>get y set</i> ofrece varias ventajas. Permiten validar la entrada antes de modificar un atributo, mantener la integridad de los datos, y proporcionar un punto centralizado para añadir lógica adicional cuando se accede o modifica un atributo. Por ejemplo, en una clase "Persona", un método setter para la edad podría asegurar que la edad no sea negativa.

    p.mb-4 <b>Figura 8.</b> Ejemplo en Java

    .bg-azul-claro.p-4.mb-4(data-aos='fade-up')
      .row
        .col-12.col-xl-8.mx-auto
          img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')

    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-31.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.pe-xl-3.mb-0.text-white En este ejemplo, los atributos “nombre” y “edad” son “private”. Los métodos “getNombre” y “getEdad” permiten leer estos atributos, mientras que “setNombre” y “setEdad” permiten modificarlos de forma controlada. El método “setEdad” incluye una validación para asegurar que la edad no sea negativa.

    h2 Abstracción como herramienta de modelado

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 La abstracción es uno de los conceptos fundamentales de la programación orientada a objetos. Implica la identificación de las características esenciales de un objeto, ignorando los detalles no esenciales. En la POO, la abstracción se utiliza como una herramienta de modelado para crear representaciones simplificadas de sistemas complejos.
        .bg-azul.p-4.mb-4(data-aos='fade-up')
          span Según Ruiz Rodríguez (2009), <b>la abstracción es el proceso de identificar los aspectos relevantes de un problema o sistema, e ignorar los detalles irrelevantes.</b> Al centrarse en las características esenciales, la abstracción permite a los desarrolladores crear modelos que son más fáciles de entender, implementar y mantener. Oculta la complejidad subyacente y proporciona una vista de alto nivel del sistema, lo que facilita el razonamiento sobre su estructura y comportamiento (Moreno Pérez, 2015). 
        span En la ingeniería de <i>software</i>, la abstracción se utiliza ampliamente en el modelado de sistemas. Por ejemplo, al diseñar un sistema de gestión de biblioteca, se podría utilizar la abstracción para identificar las entidades clave como "Libro", "Usuario" y "Préstamo", y las interacciones esenciales entre ellas, sin preocuparse por detalles de implementación de bajo nivel en esta etapa.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 9.</b> Ejemplo de abstracción en Java

    .bg-azul-claro.p-4.mb-4(data-aos='fade-up')
      .row
        .col-12.col-xl-5.mx-auto
          img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-34.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.pe-xl-3.mb-0.text-white En este ejemplo, la clase abstracta “Figura” define la interfaz común para todas las figuras, con métodos abstractos “calcularArea()” y “calcularPerimetro()”. Las clases concretas “Rectángulo” y “Circulo” extienden “Figura” y proporcionan implementaciones específicas para estos métodos. Esta abstracción permite tratar diferentes figuras de manera uniforme, sin preocuparse por los detalles específicos de cada una.

    h2 Diseño de interfaces como mecanismos de abstracción

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 En la programación orientada a objetos, <b>una interfaz</b> es un contrato que especifica un conjunto de métodos que una clase debe implementar. Las interfaces proporcionan un mecanismo de abstracción al separar la definición de un comportamiento de su implementación. Definen lo que una clase puede hacer, pero no cómo lo hace.
        .bg-amarillo.p-4.mb-4(data-aos='fade-up')
          span Según Vélez Serrano (2011), una interfaz es una colección de métodos abstractos y propiedades constantes que pueden ser implementados por clases no relacionadas. Al definir un contrato común, las interfaces permiten el polimorfismo, donde diferentes clases pueden ser tratadas como el mismo tipo si implementan la misma interfaz.
        span En la ingeniería de <i>software</i>, las interfaces se utilizan a menudo para definir los puntos de interacción entre diferentes componentes o subsistemas. Proporcionan una capa de abstracción que permite que las implementaciones cambien sin afectar a los clientes, siempre que se adhieran al contrato de la interfaz. Por ejemplo, una interfaz "Imprimible" podría definir un método "imprimir", que podría ser implementado de diferentes maneras por clases como "Documento" o "Imagen".

    p.mb-4 <b>Figura 10.</b> Ejemplo en Java

    .bg-azul-claro.p-4.mb-4(data-aos='fade-up')
      .row
        .col-12.col-xl-5.mx-auto
          img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')

    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-37.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.pe-xl-3.mb-0.text-white En este ejemplo, la interfaz “Imprimible” define un único método “imprimir”. Tanto “Documento” como “Imagen” implementan esta interfaz, proporcionando su propia implementación de “imprimir”. Esto permite que las instancias de “Documento” e “Imagen” sean tratadas como “Imprimible”, abstrayéndose de los detalles específicos de cada clase.

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5

        h2 Ventajas de ocultar la información

        .row.mb-4
          .col-12.col-xl-8
            .bg-morado.p-4.mb-4(data-aos='fade-up')
              span Ocultar la información, también conocido como encapsulamiento, es uno de los principios fundamentales de la programación orientada a objetos. Consiste en ocultar los detalles internos de una clase y exponer únicamente una interfaz pública. Esta práctica ofrece múltiples ventajas en términos de diseño, seguridad y mantenibilidad del <i>software</i>.
            span Según Ceballos Sierra (2018), el encapsulamiento implica ocultar todos los detalles de un objeto que no contribuyen a sus características esenciales. Esta ocultación protege la integridad de los datos y previene accesos o modificaciones no autorizadas, lo que mejora la seguridad del sistema.
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')

        .row
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Protección de datos
                p.text-small.px-4.text-center.pb-2 Impide accesos no autorizados o inadecuados a los atributos.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Reducción de dependencias
                p.text-small.px-4.text-center.pb-2 Disminuye el acoplamiento entre componentes, facilitando su comprensión y mantenimiento.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Flexibilidad de implementación
                p.text-small.px-4.text-center.pb-2 Permite cambiar la lógica interna sin afectar a los clientes, siempre que la interfaz pública se mantenga.

    p.mb-4 <b>Ejemplo</b>: En una clase <b>"BaseDeDatos"</b>, el mecanismo de almacenamiento puede cambiar de archivos locales a una base de datos SQL, sin necesidad de modificar el código cliente, siempre que se conserve la misma interfaz pública.
    p.mb-4 <b>Figura 11.</b> Ejemplo en Java

    .bg-azul-claro.p-4.mb-4(data-aos='fade-up')
      .row
        .col-12.col-xl-4.mx-auto
          img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')

    p.mb-4 En este ejemplo, la clase “CuentaBancaria” oculta sus detalles internos (“saldo” y “titular”) haciendo que sean “private”. Los clientes de la clase sólo pueden interactuar con ella a través de los métodos públicos “depositar”, “retirar” y “getSaldo”. Esto protege la integridad de los datos de la cuenta, previniendo modificaciones no controladas del saldo, a la vez que proporciona una interfaz clara y segura para interactuar con la cuenta.
    .row.bg-azul-oscuro.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto.text-white Interacción entre objetos
          p.mb-5(data-aos="fade-up").text-white Se invita a leer el documento Interacción entre objetos, donde se aborda cómo los objetos en un sistema orientado a objetos se comunican y colaboran mediante asociaciones, mensajes, y otros mecanismos esenciales para el diseño de <i>software</i>.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Interacción entre objetos
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario='cuestionario'/>
    
    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/nuwcn0SzpLs") [Vídeo] Introducción a POO
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/AsFevN7MEzw") [Vídeo] Programación Orientada a Objetos. Conceptos básicos I
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://uapa.cuaed.unam.mx/node/1093") Clases y objetos
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.fdi.ucm.es/profesor/jpavon/poo/") Programación orientada a objetos
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/At-b3_xH9kY") [Vídeo] Java Orientado a Objetos: 44 Componentes Principales Ocultamiento Datos -Encapsulación y Abstracción
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/KprJmqkd80o") [Vídeo] Encapsulamiento en POO
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://uapa.cuaed.unam.mx/node/1091") Abstracción y encapsulamiento
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://openaccess.uoc.edu/handle/10609/149901") Diseño y programación orientada al objeto
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/FLjwjxYZ9Ro") [Vídeo] Clase 22: Clases y Objetos: Interacción entre objetos
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

    p


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    cuestionario: {
      tema: 'Programación Orientada a Objetos',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es una clase en programación orientada a objetos?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un conjunto de archivos de texto',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una instancia concreta de un objeto',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una plantilla para crear objetos',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un tipo de función especial',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes opciones representa correctamente la creación de un objeto en Java?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'int objeto = new Clase();', esCorrecta: false },
            { id: 'b', texto: 'Clase objeto = Clase();', esCorrecta: false },
            { id: 'c', texto: 'Clase objeto = new Clase();', esCorrecta: true },
            { id: 'd', texto: 'new Clase = objeto();', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué permite lograr la encapsulación en un programa?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Repetir código varias veces',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteger los datos internos de una clase',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Evitar el uso de objetos', esCorrecta: false },
            {
              id: 'd',
              texto: 'Aumentar el número de clases',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es el propósito de la abstracción en programación?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ejecutar código más rápido', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Ocultar los detalles internos y mostrar solo lo necesario',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Crear variables públicas', esCorrecta: false },
            {
              id: 'd',
              texto: 'Generar errores intencionalmente',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cómo se comunican normalmente dos objetos en un programa?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'A través de etiquetas HTML', esCorrecta: false },
            { id: 'b', texto: 'Mediante llamadas a métodos', esCorrecta: true },
            { id: 'c', texto: 'Por medio de constantes', esCorrecta: false },
            { id: 'd', texto: 'Con operadores lógicos', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
