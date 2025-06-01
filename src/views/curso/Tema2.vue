<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Sobrecarga y sobrescritura de métodos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4
            .col-4.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
            .col-12.col-xl-8
              .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-26.svg', alt='Texto descriptivo de la imagen')
                .my-auto.p-4.p-xl-0
                  p.pe-xl-3.mb-0 La sobrecarga y la sobrescritura de métodos son dos conceptos relacionados pero diferentes en la programación orientada a objetos. La sobrecarga permite definir múltiples métodos con el mismo nombre, pero diferentes parámetros en una clase, mientras que la sobrescritura permite que una subclase proporcione su propia implementación para un método heredado de su superclase.
              span En esta sección, se explorarán las diferencias entre la sobrecarga y la sobrescritura, el uso del modificador "override", los conceptos de polimorfismo dinámico y estático, las reglas de visibilidad y tipo en la sobrescritura, y la resolución de métodos y el orden de ejecución en presencia de herencia y polimorfismo.
          
      .row.mt-n4
        .col-12.col-xl-8.mx-auto
          .tarjeta.shadow.bg-white.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.px-4
                img(src='@/assets/componentes/youtube-icon-circle.svg')
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-bold.mb-3 7-11 Sobrecarga de métodos
                    p.text-small Para ampliar el concepto de sobrecarga de métodos le invitamos a ver el siguiente vídeo. 
                  .col-sm-auto
                    a.download-btn.boton.bg-morado-oscuro.text-white(href="https://youtu.be/tM7_fwlTmiI" target='_blank')
                      span.text-small Ver video
                      i.fas.fa-arrow-right 

      h2 Diferencias entre sobrecarga y sobrescritura.
      
      .row.mb-4
        .col-12.col-xl-8
          .bg-azul.p-4(data-aos='fade-up')
            span La sobrecarga de métodos se refiere a la capacidad de una clase de tener múltiples métodos con el mismo nombre, pero diferentes firmas (número, tipo y orden de los parámetros). La sobrecarga permite proporcionar diferentes implementaciones de un método según los argumentos proporcionados (Vélez Serrano, 2011).
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
      
      p.mb-4 Por ejemplo, una clase "Calculadora" podría tener varios métodos "suma" sobrecargados:

      p.mb-4 <b>Figura 8.</b> Clase Calculadora con métodos suma.

      .row.bg-azul.py-4.mb-4
          
          .row
            .col-8.col-lg-5.col-xl-4.mx-auto
              img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')  

      .row.mb-4
        .col-12.col-xl-8
          .bg-morado.p-4.mb-4(data-aos='fade-up')
            span En cambio, la sobrescritura de métodos ocurre cuando una subclase define un método con la misma firma que un método heredado de su superclase. La sobrescritura permite que la subclase proporcione su propia implementación para el método, reemplazando el comportamiento heredado (Ceballos Sierra, 2018).
          span Por ejemplo, considere una clase "Figura" con un método "calcularArea" y una subclase "Circulo" que sobrescribe este método:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

      p.mb-4 <b>Figura 9.</b>Clase Figura con método calcularArea.

      .row.bg-azul.py-4.mb-4
          
          .row
            .col-8.col-lg-5.col-xl-4.mx-auto
              img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')

      p.mb-4 En este caso, cuando se llama a "calcularArea" en una instancia de "Circulo", se ejecutará la implementación específica de la subclase en lugar de la implementación heredada de "Figura".
      h2 Uso del modificador override.

      .row.mb-4
        .col-12.col-xl-8
          .bg-amarillo.p-4.mb-4(data-aos='fade-up')
            span En algunos lenguajes, como Java, existe un modificador especial llamado "override" que se utiliza para indicar explícitamente que un método está sobrescribiendo un método de la superclase. Aunque no es obligatorio, se considera una buena práctica utilizar este modificador para mejorar la legibilidad y evitar errores sutiles (López Goytia, 2015).
          span Por ejemplo, en la clase "Circulo" del ejemplo anterior, se utiliza el modificador "@Override" para indicar que el método "calcularArea" está sobrescribiendo el método de la clase "Figura":
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

      p.mb-4 <b>Figura 10.</b>Ejemplo sobrescritura de método.

      .row.bg-azul.py-4.mb-4
          
          .row
            .col-8.col-lg-6.col-xl-5.mx-auto
              img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

      p.mb-4 Si se intenta utilizar "@Override" en un método que no está sobrescribiendo realmente un método de la superclase, el compilador generará un error, lo que ayuda a detectar posibles errores de programación.
      h2 Polimorfismo dinámico vs. estático.

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 El polimorfismo es la capacidad de un objeto de tomar múltiples formas o comportarse de diferentes maneras según el contexto. Existen dos tipos principales de polimorfismo: estático (en tiempo de compilación) y dinámico (en tiempo de ejecución) (Moreno Pérez, 2015).
          .bg-morado.p-4.mb-4(data-aos='fade-up')
            span El polimorfismo estático, también conocido como sobrecarga de métodos, se resuelve en tiempo de compilación según los tipos de los argumentos proporcionados. El compilador determina qué versión sobrecargada de un método se debe llamar basándose en la firma del método.
          p.mb-4 Por otro lado, el polimorfismo dinámico, también conocido como enlace dinámico o enlace tardío, se resuelve en tiempo de ejecución según el tipo real del objeto. Cuando se llama a un método sobreescrito en una referencia a una clase base, el método que se ejecuta se determina en función del tipo real del objeto referenciado.
          span Por ejemplo, considere el siguiente código:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

      p.mb-4 <b>Figura 11.</b>Ejemplo de polimorfismo dinámico. 

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          .row.bg-azul.py-4.mb-4
            div.px-5.pb-md-3
              
              .row
                .col-8.col-lg-6.col-xl-5.mx-auto
                  img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
              span Aunque la variable "figura" es de tipo "Figura", en tiempo de ejecución se llama al método "calcularArea" de la clase "Circulo", ya que el objeto referenciado es realmente una instancia de "Circulo". Esto es un ejemplo de polimorfismo dinámico.
      .row.mt-n4
        .col-12.col-xl-8.mx-auto
          .tarjeta.shadow.bg-white.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.px-4
                img(src='@/assets/componentes/youtube-icon-circle.svg')
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-bold.mb-3 Polimorfismo en la POO
                    p.text-small Para ampliar el concepto de sobre polimorfismo le invitamos a ver el siguiente vídeo. 
                  .col-sm-auto
                    a.download-btn.boton.bg-morado-oscuro.text-white(href="https://youtu.be/YuvIRhvjd1s " target='_blank')
                      span.text-small Ver video
                      i.fas.fa-arrow-right

      h2 Reglas de visibilidad y tipo en la sobrescritura.

      .row.mb-4
        .col-12.col-xl-8
          .bg-verde.p-4.mb-4(data-aos='fade-up')
            p.mb-4 Al sobrescribir un método, se deben seguir ciertas reglas con respecto a la visibilidad y el tipo de retorno del método (Oviedo Regino, 2015, p. 93):
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p La visibilidad del método sobrescrito debe ser igual o más accesible que la del método original. Por ejemplo, si el método original es "protected", el método sobrescrito puede ser "protected" o "public", pero no "private".
            div.d-flex.mb-4
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p El tipo de retorno del método sobrescrito debe ser el mismo o un subtipo del tipo de retorno del método original (regla de covarianza del tipo de retorno).
            div.d-flex.mb-4
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Las excepciones lanzadas por el método sobrescrito deben ser las mismas o subtipos de las excepciones lanzadas por el método original.
            span 
          span Por ejemplo, considere la siguiente jerarquía de clases:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

      p.mb-4 <b>Figura 12.</b>Ejemplo 1. Jerarquía de Clases. 

      .row.bg-azul.py-4.mb-4
          
          .row
            .col-8.col-lg-7.col-xl-6.mx-auto
              img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')

      .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-37.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.px-4.mb-0.text-white En este caso, la clase "Gato" sobrescribe el método "hacerSonido" de la clase "Animal". La visibilidad del método se ha cambiado de "protected" a "public", lo cual es válido dado que "public" es más accesible que "protected". Además, el tipo de retorno y las excepciones lanzadas son las mismas que en el método original.

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          h2 Resolución de métodos y orden de ejecución.
          p.mb-4 Cuando se llama a un método en una jerarquía de clases con herencia y polimorfismo, la resolución del método y el orden de ejecución siguen reglas específicas (Ruiz Rodríguez, 2009):

          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-38.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Búsqueda en la clase actual
                p.px-1.text-small.mb-0.text-center Se verifica si la clase define el método. Si es así, se ejecuta esa implementación.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-39.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Búsqueda en la superclase inmediata
                p.px-1.text-small.mb-0.text-center Si la clase actual no lo define, se revisa en la superclase directa. Si se encuentra allí, se ejecuta esa versión.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-40.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Búsqueda en la jerarquía de clases
                p.px-1.text-small.mb-0.text-center Si no se halla en la superclase, se continúa buscando en las clases superiores hasta llegar a la clase base.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-41.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Error en tiempo de compilación
                p.px-1.text-small.mb-0.text-center Si no se encuentra ninguna implementación del método en toda la jerarquía, se genera un error durante la compilación del programa.

      p.mb-4 Por ejemplo, considere la siguiente jerarquía de clases:

      p.mb-4 <b>Figura 13.</b>Ejemplo 2. Jerarquía de Clases.

      .row.bg-azul.py-4.mb-4
          
          .row
            .col-8.col-lg-7.col-xl-6.mx-auto
              img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')

      p.mb-4 Si se crea una instancia de "GatoPersa" y se llama al método "hacerSonido", se ejecutará la implementación de la clase "GatoPersa", dado que es la más específica en la jerarquía.

      p.mb-4 <b>Figura 14.</b> Ejemplo de instancia para implementación de clase.

      .row.bg-azul.py-4.mb-4
          
          .row
            .col-10.col-lg-9.col-xl-8.mx-auto
              img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')

      .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-5(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-44.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.px-4.mb-0.text-white Si se comenta la implementación de "hacerSonido" en la clase "GatoPersa", se ejecutará la implementación de la clase "Gato", al igual que si se comenta esa implementación, se ejecutará la implementación de la clase "Animal".

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
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/63076?page=1") Diseñar y programar, todo es empezar: una introducción a la Programación Orientada a Objetos usando UML y Java
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/tM7_fwlTmiI") 7-11 Sobrecarga de métodos [Vídeo]
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/YuvIRhvjd1s") Polimorfismo en la POO [Vídeo]
            
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
