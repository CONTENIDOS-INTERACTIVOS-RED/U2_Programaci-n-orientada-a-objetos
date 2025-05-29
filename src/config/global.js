export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de programación orientada a objetos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de programación orientada a objetos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Historia de los lenguajes de programación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Encapsulación y abstracción	',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ceballos Sierra, F. J. (2018). Programación orientada a objetos con C++: (5 ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/106519?page=1',
    },
    {
      referencia:
        'López Goytia, J. L. (2015). Programación orientada a objetos C++ y Java: un acercamiento interdisciplinario: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39461?page=1',
    },
    {
      referencia:
        'Moreno Pérez, J. C. (2015). Programación orientada a objetos: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/106461?page=1',
    },
    {
      referencia:
        'Oviedo Regino, E. M. (2015). Lógica de programación orientada a objetos: ( ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70431?page=1',
    },
    {
      referencia:
        'Ruiz Rodríguez, R. (2009). Fundamentos de la programación orientada a objetos: una aplicación a las estructuras de datos en Java: ( ed.). El Cid Editor.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/34869?page=9',
    },
    {
      referencia:
        'Vélez Serrano, J. (2011). Diseñar y programar, todo es empezar: una introducción a la Programación Orientada a Objetos usando UML y Java: ( ed.). Dykinson.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/63076?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Abstracción',
      significado:
        'Proceso de identificar los aspectos esenciales de un sistema y representarlos en un modelo simplificado, ignorando los detalles no relevantes.',
    },
    {
      termino: 'Acoplamiento',
      significado:
        'Grado de interdependencia entre las clases o módulos de un sistema.',
    },
    {
      termino: 'Agregación',
      significado:
        'Tipo de asociación en la que un objeto contiene referencias a otros objetos, pero estos pueden existir independientemente.',
    },
    {
      termino: 'Asociación',
      significado:
        'Relación entre clases que describe cómo los objetos de una clase se conectan o interactúan con los objetos de otra clase.',
    },
    {
      termino: 'Atributo',
      significado:
        'Variable que representa una propiedad o característica de una clase.',
    },
    {
      termino: 'Clase',
      significado:
        'Plantilla o blueprint que define las propiedades y comportamientos comunes de un conjunto de objetos.',
    },
    {
      termino: 'Clase abstracta',
      significado:
        'Clase que no puede ser instanciada directamente y sirve como base para otras clases derivadas.',
    },
    {
      termino: 'Clase concreta',
      significado:
        'Clase que puede ser instanciada para crear objetos específicos.',
    },
    {
      termino: 'Cohesión',
      significado:
        'Grado en que los elementos de una clase están relacionados y trabajan juntos para lograr un único propósito.',
    },
    {
      termino: 'Composición',
      significado:
        'Tipo de asociación en la que un objeto contiene otros objetos y es responsable de su ciclo de vida.',
    },
    {
      termino: 'Constructor',
      significado:
        'Método especial utilizado para inicializar los atributos de un objeto al momento de su creación.',
    },
    {
      termino: 'Diagrama de clases UML',
      significado:
        'Representación visual de la estructura de un sistema, mostrando las clases, sus atributos, métodos y las relaciones entre ellas.',
    },
    {
      termino: 'Encapsulación',
      significado:
        'Principio que consiste en ocultar los detalles internos de una clase y exponer solo una interfaz pública para interactuar con ella.',
    },
    {
      termino: 'Herencia',
      significado:
        'Mecanismo que permite a una clase (subclase) heredar las propiedades y comportamientos de otra clase (superclase).',
    },
    {
      termino: 'Instanciación',
      significado: 'Proceso de crear un objeto a partir de una clase.',
    },
    {
      termino: 'Interfaz',
      significado:
        'Contrato que define un conjunto de métodos que una clase debe implementar, sin especificar cómo deben ser implementados.',
    },
    {
      termino: 'Mensaje',
      significado:
        'Solicitud enviada a un objeto para que ejecute uno de sus métodos.',
    },
    {
      termino: 'Método',
      significado:
        'Función o procedimiento que define el comportamiento de una clase.',
    },
    {
      termino: 'Modificador de acceso',
      significado:
        'Palabra clave (public, private, protected) que determina la visibilidad y accesibilidad de los miembros de una clase.',
    },
    {
      termino: 'Objeto',
      significado:
        'Instancia específica de una clase, que tiene sus propios valores para los atributos definidos en la clase.',
    },
    {
      termino: 'Parámetro',
      significado:
        'Variable que recibe un valor al momento de llamar a un método.',
    },
    {
      termino: 'POO (Programación Orientada a Objetos)',
      significado:
        'Paradigma de programación basado en el concepto de objetos, que encapsulan datos y comportamiento.',
    },
    {
      termino: 'Propiedad',
      significado:
        'Atributo de una clase que tiene métodos get y set asociados para acceder y modificar su valor de manera controlada.',
    },
    {
      termino: 'Retorno de método',
      significado: 'Valor que un método devuelve al finalizar su ejecución.',
    },
    {
      termino: 'UML (Lenguaje Unificado de Modelado)',
      significado:
        'Lenguaje estándar para modelar y visualizar el diseño de sistemas de software orientados a objetos.',
    },
  ],
}
