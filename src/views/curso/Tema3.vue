<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Diseño basado en polimorfismo'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 El diseño basado en polimorfismo es un enfoque de diseño orientado a objetos que aprovecha la capacidad de las clases de implementar interfaces y de las subclases de sobrescribir métodos de las superclases. Este enfoque permite crear sistemas más flexibles, extensibles y mantenibles, al desacoplar las abstracciones de sus implementaciones concretas.
          .d-flex.bg-verde.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-46.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 En esta sección, se explorarán conceptos clave del diseño basado en polimorfismo, como el uso de interfaces y clases abstractas como contratos, la sustitución de objetos en tiempo de ejecución, la aplicación del principio de sustitución de Liskov y las ventajas del polimorfismo en el mantenimiento del software. También se presentarán ejemplos prácticos, como colecciones polimórficas y controladores.

      h2 Interfaces y clases abstractas como contratos.

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 Las interfaces y las clases abstractas son herramientas poderosas para definir contratos en el diseño orientado a objetos. Estos contratos especifican un conjunto de métodos que deben ser implementados por cualquier clase que quiera cumplir con el contrato, sin especificar cómo deben ser implementados (Vélez Serrano, 2011).
          .bg-azul.p-4.mb-4(data-aos='fade-up')
            span Las interfaces son completamente abstractas y solo contienen declaraciones de métodos, mientras que las clases abstractas pueden contener tanto métodos abstractos como implementaciones concretas. Las clases que implementan una interfaz o heredan de una clase abstracta están obligadas a proporcionar implementaciones para todos los métodos abstractos definidos en el contrato.
          span Por ejemplo, considere una interfaz "Figura" que define un contrato para objetos que representan figuras geométricas:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')

      p.mb-4 <b>Figura 15.</b>Interface figura

      .row.bg-azul.py-4.mb-4
          
          .row
            .col-8.col-lg-5.col-xl-4.mx-auto
              img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')

      p.mb-4 Cualquier clase que implemente la interfaz "Figura" debe proporcionar implementaciones para los métodos "calcularArea" y "calcularPerimetro". Esto permite tratar a todas las figuras de manera polimórfica, sin preocuparse por los detalles específicos de cada tipo de figura.

      p.mb-4 <b>Figura 16.</b> Ejemplo de polimorfismo.

      .row.bg-azul.py-4.mb-4
          
          .row
            .col-8.col-lg-5.col-xl-4.mx-auto
              img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          p.mb-4 Al utilizar interfaces o clases abstractas como contratos, se pueden crear diseños más flexibles y extensibles, ya que nuevos tipos de objetos pueden ser añadidos fácilmente sin afectar al resto del sistema, siempre y cuando cumplan con el contrato establecido.
      
      .row.mt-n4
        .col-12.col-xl-8.mx-auto
          .tarjeta.shadow.bg-white.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.px-4
                img(src='@/assets/componentes/youtube-icon-circle.svg')
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-bold.mb-3 Polimorfismo con Clases Abstractas e Interfaces
                    p.text-small Para ampliar el concepto de polimorfismo con clases abstractas le invitamos a ver el siguiente vídeo.
                  .col-sm-auto
                    a.download-btn.boton.bg-morado-oscuro.text-white(href="https://youtu.be/ulFzH0KtIwc" target='_blank')
                      span.text-small Ver video
                      i.fas.fa-arrow-right 

      h2 Sustitución de objetos en tiempo de ejecución.

      .row.mb-4
        .col-12.col-xl-8
          .bg-verde.p-4.mb-4(data-aos='fade-up')
            span Una de las principales ventajas del polimorfismo es la capacidad de sustituir objetos en tiempo de ejecución. Esto significa que se puede escribir código que trabaje con referencias a clases base o interfaces, y en tiempo de ejecución, esas referencias pueden apuntar a instancias de cualquier clase derivada o que implemente la interfaz (Ceballos Sierra, 2018).
          span Esta sustitución permite escribir código más genérico y reutilizable, ya que no está acoplado a tipos específicos de objetos. Por ejemplo, considere una función que toma una lista de objetos "Figura" y calcula la suma de sus áreas:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')

      p.mb-4 <b>Figura 17.</b>Ejemplo de código genérico. 

      .row.bg-azul.py-4.mb-4
          
          .row
            .col-10.col-lg-7.col-xl-6.mx-auto
              img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')

      p.mb-4 Esta función puede trabajar con cualquier objeto que implemente la interfaz "Figura", sin importar su tipo real. En tiempo de ejecución, la lista podría contener instancias de "Circulo", "Rectangulo" u otras clases que implementen "Figura", y la función seguiría funcionando correctamente.

      p.mb-4 <b>Figura 18.</b>Ejemplo de uso de interfaz sin importar el tipo real.

      .row.bg-azul.py-4.mb-4
          
          .row
            .col-10.col-lg-7.col-xl-6.mx-auto
              img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')

      .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-53.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.px-4.mb-0.text-white En este ejemplo, la función "calcularSumaAreas" se llama con una lista que contiene instancias de "Circulo" y "Rectangulo", pero trata a todos los objetos de manera polimórfica a través de la interfaz "Figura".
      
      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          h2 Aplicación del principio de sustitución de Liskov.
          .row.mb-4
            .col-12.col-xl-10
              span El principio de sustitución de Liskov (LSP, por sus siglas en inglés) es un principio de diseño orientado a objetos que establece que los objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin alterar la corrección del programa (López Goytia, 2015). En otras palabras, si un programa espera un objeto de tipo T, debería poder trabajar correctamente con cualquier objeto de un subtipo de T.
            .col-2.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')
      
      .row.mt-n4
        .col-12.col-xl-8.mx-auto
          .tarjeta.shadow.bg-white.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.px-4
                img(src='@/assets/componentes/youtube-icon-circle.svg')
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-bold.mb-3 Principio de SUSTITUCIÓN de LISKOV  
                    p.text-small Para ampliar el concepto de sustitución de Liskov le invitamos a ver el siguiente vídeo.
                  .col-sm-auto
                    a.download-btn.boton.bg-morado-oscuro.text-white(href="https://youtu.be/6eInyxthvdo" target='_blank')
                      span.text-small Ver video
                      i.fas.fa-arrow-right 

      .row.mb-4
        .col-12.col-xl-8
          .bg-morado-oscuro.p-4.mb-4(data-aos='fade-up')
            span.text-white Para cumplir con el LSP, las subclases deben adherirse a los contratos definidos por sus superclases. Esto significa que las subclases no deben fortalecer las precondiciones ni debilitar las postcondiciones de los métodos heredados. Además, las subclases no deben lanzar excepciones que no sean esperadas por los clientes de la superclase.
          span Por ejemplo, considere una clase "Rectangulo" con un método "establecerLados" que permite modificar la longitud de los lados:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')

      p.mb-4 <b>Figura 19.</b> Ejemplo de método que permite modificar el atributo “longitud” de los lados. 

      .row.bg-azul.py-4.mb-4
          
          .row
            .col-10.col-lg-7.col-xl-6.mx-auto
              img(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')
      
      p.mb-4 Si se crea una subclase "Cuadrado" que hereda de "Rectangulo", se podría violar el LSP si se redefine el método "establecerLados" para asegurar que ambos lados sean iguales:
      p.mb-4 <b>Figura 20.</b> Ejemplo de redefinición de método.

      .row.bg-azul.py-4.mb-4
          
          .row
            .col-10.col-lg-7.col-xl-6.mx-auto
              img(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .bg-amarillo.p-4.mb-4(data-aos='fade-up')
            span En este caso, la subclase "Cuadrado" está fortaleciendo las precondiciones del método "establecerLados" al requerir que ambos lados sean iguales, lo que viola el LSP. Un cliente que espere trabajar con un "Rectangulo" genérico podría pasar valores diferentes para "lado1" y "lado2", lo que provocaría una excepción inesperada al trabajar con un "Cuadrado".
          span Para evitar este problema, se podrían utilizar interfaces o clases abstractas para definir contratos más específicos y evitar la herencia inapropiada.

      h2 Ventajas del polimorfismo en el mantenimiento del <i>software</i>.

      p.mb-4 A continuación, se presentan las principales ventajas que ofrece esta característica en el desarrollo de aplicaciones.

      .row.bg-fondo-3.bg-full-width.py-4
        div.px-5.pb-md-3
          figure
            .video
              <iframe width="1905" height="732" src="https://www.youtube.com/embed/Yd7vDterctQ" title="3 A.M Coding Session - Chillstep Beats to Keep You Going" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-59.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.px-4.mb-0.text-white Por ejemplo, considere un sistema de procesamiento de pagos que utiliza el polimorfismo para admitir diferentes métodos de pago:

      p.mb-4 <b>Figura 21.</b>Ejemplo de polimorfismo para admitir diferentes métodos de pago. 

      .row.bg-azul.py-4
          
          .row
            .col-10.col-lg-7.col-xl-6.mx-auto
              img(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')

      .d-flex.bg-azul-oscuro.bg-full-width.p-4.flex-column.flex-md-row(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-61.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.px-4.mb-0.text-white Al utilizar la interfaz "MetodoPago", el sistema puede trabajar con cualquier método de pago de manera polimórfica. Si en el futuro se desea añadir un nuevo método de pago, como "TransferenciaBancaria", solo se necesitaría crear una nueva clase que implemente la interfaz "MetodoPago", sin necesidad de modificar el código existente que procesa los pagos. Además, se podrían escribir pruebas unitarias que verifiquen el comportamiento de la interfaz "MetodoPago", y esas pruebas seguirían siendo válidas para cualquier nueva implementación que se añada.

      .row.bg-azul-oscuro.bg-full-width.py-4.mb-4.border-top-verde-5
        div.px-5.pb-md-3.py-4.d-flex
          .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto.text-white Ejemplos prácticos: colecciones polimórficas, controladores y síntesis de la unidad
            p.mb-5(data-aos="fade-up").text-white Se invita a leer el documento Ejemplos prácticos: colecciones polimórficas, controladores y síntesis de la unidad, donde se aborda el uso del polimorfismo y la herencia en la programación orientada a objetos mediante aplicaciones prácticas como colecciones genéricas y controladores en el patrón MVC
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Ejemplos prácticos: colecciones polimórficas, controladores y síntesis de la unidad

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
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/63076?page=1") Diseñar y programar, todo es empezar: una introducción a la Programación Orientada a Objetos usando UML y Java
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/ulFzH0KtIwc") Polimorfismo con Clases Abstractas e Interfaces [Vídeo]
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/6eInyxthvdo") Principio de Sustitución de Liskov - Por fin lo entenderás [SOLID] [Vídeo]
            
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p
     
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
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
          texto:
            '¿Qué permite una jerarquía de herencia en programación orientada a objetos?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Crear una sola clase con muchos métodos sin reutilizarlos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Copiar y pegar código entre clases',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compartir atributos y métodos entre clases relacionadas',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Usar solo funciones sin clases',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'En una jerarquía de herencia, la clase que hereda se llama:',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Clase general', esCorrecta: false },
            { id: 'b', texto: 'Clase principal', esCorrecta: false },
            { id: 'c', texto: 'Clase hija (o derivada)', esCorrecta: true },
            { id: 'd', texto: 'Clase contenedora', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué es la sobrescritura de métodos?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Escribir dos funciones con el mismo nombre y distintos parámetros',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Repetir el mismo método en varias clases',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Modificar el comportamiento de un método heredado en una clase hija',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Escribir funciones sin retorno',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué ocurre en la sobrecarga de métodos?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se cambia el nombre de una función existente',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se elimina un método de una clase base',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se crean varios métodos con el mismo nombre pero distintos parámetros',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se copian métodos entre clases',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué representa el polimorfismo en POO?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear múltiples clases sin herencia',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Usar un mismo método con comportamientos diferentes en distintas clases',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Hacer que todas las clases tengan el mismo código',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Repetir funciones para cada objeto',
              esCorrecta: false,
            },
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

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
