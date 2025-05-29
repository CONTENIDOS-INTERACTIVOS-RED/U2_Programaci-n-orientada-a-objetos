<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-amarillo.p-4.d-flex(data-aos='fade-up')
        span La programación orientada a objetos (POO) es un paradigma esencial en el desarrollo de software moderno. Esta unidad introduce sus fundamentos, <b>como clases, objetos, encapsulación y la interacción</b> entre objetos, los cuales son claves para construir sistemas más organizados, robustos y escalables. Comprender estos elementos permite a los estudiantes de Ingeniería de <i>Software</i> enfrentar retos complejos y diseñar soluciones eficientes.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-morado.p-4.d-flex(data-aos='fade-up')
        span A lo largo de la unidad, se desarrollarán habilidades para analizar problemas, modelar soluciones mediante clases y objetos, y estructurar el código de manera modular. La POO, ampliamente adoptada en la industria, facilita la reutilización del código, la reducción de la complejidad y la ampliación de sistemas, al encapsular datos y comportamientos en unidades independientes, similares a bloques ensamblables.

    .d-flex.bg-azul.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-2.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.pe-xl-3.mb-0 La unidad está compuesta por tres temas: <b>clases y objetos, encapsulación y abstracción, y la comunicación entre objetos.</b> Se incluyen ejemplos prácticos, ejercicios y recursos complementarios. Para aprovechar al máximo el contenido, se recomienda tener conocimientos básicos de programación y participar activamente en las actividades propuestas.

    p
</template>
