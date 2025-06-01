<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-azul.p-4.d-flex(data-aos='fade-up')
        span La programación orientada a objetos (POO) se basa en el uso de objetos que integran datos, métodos e identidad, promoviendo el desarrollo de software más organizado y reutilizable. Entre sus pilares destacan la herencia y el polimorfismo, fundamentales para construir jerarquías de clases y diseñar sistemas robustos y flexibles. Esta unidad profundiza en cómo aplicar estos conceptos para mejorar la extensibilidad y el mantenimiento del código.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-amarillo.p-4.d-flex(data-aos='fade-up')
        span Se espera que el estudiante aprenda a definir relaciones de herencia entre clases y a aplicar la sobrecarga y sobrescritura de métodos para implementar comportamientos polimórficos. Estos conocimientos le permitirán desarrollar software adaptable y bien estructurado, cumpliendo con las exigencias de un entorno profesional. La unidad aborda tres ejes clave: jerarquías de herencia, métodos polimórficos y diseño orientado al polimorfismo.

    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-2.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.p-x-4.mb-0.text-white Para un mejor aprovechamiento del contenido, se recomienda que el estudiante ya tenga nociones básicas de POO. Las actividades prácticas incluidas están diseñadas para consolidar las habilidades necesarias en el uso de herencia y polimorfismo, herramientas clave en el desarrollo de sistemas escalables y de alta calidad.

    p
</template>
