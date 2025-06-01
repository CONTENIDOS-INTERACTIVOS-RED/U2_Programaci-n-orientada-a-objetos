export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Herencia y polimorfismo',
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
        titulo: 'Herencia y polimorfismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Jerarquías de herencia',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sobrecarga y sobrescritura de métodos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseño basado en polimorfismo',
        desarrolloContenidos: true,
        subMenu: [],
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
      termino: 'Clase abstracta',
      significado:
        'Clase que no puede ser instanciada directamente, ha sido diseñada para ser heredada por otras clases. Puede contener métodos abstractos y concretos.',
    },
    {
      termino: 'Clase base',
      significado:
        'Clase de la cual se derivan otras clases. También conocida como superclase o clase padre.',
    },
    {
      termino: 'Clase derivada',
      significado:
        'Clase que hereda atributos y métodos de otra clase. También conocida como subclase o clase hija.',
    },
    {
      termino: 'Constructor',
      significado:
        'Método específico que se aplica para inicializar los objetos de una clase. En la herencia, los constructores de la clase base pueden ser invocados desde los constructores de las clases derivadas.',
    },
    {
      termino: 'Contrato',
      significado:
        'Conjunto de métodos que deben ser implementados por cualquier clase que quiera cumplir con un determinado comportamiento o interfaz.',
    },
    {
      termino: 'Herencia',
      significado:
        'Mecanismo por el cual una clase hereda los atributos y métodos de otra clase.',
    },
    {
      termino: 'Herencia múltiple',
      significado:
        'Capacidad de una clase de heredar atributos y métodos de varias clases base simultáneamente.',
    },
    {
      termino: 'Herencia simple',
      significado:
        'Capacidad de una clase de heredar atributos y métodos de una sola clase base.',
    },
    {
      termino: 'Interfaz',
      significado:
        'Tipo abstracto que define un conjunto de métodos que deben ser implementados por cualquier clase que quiera cumplir con su contrato.',
    },
    {
      termino: 'LSP - Principio de sustitución de Liskov',
      significado:
        'Es un principio del diseño donde se promueve que los objetos de un programa deben ser reemplazables por instancias de sus subtipos, sin alterar la corrección del programa.',
    },
    {
      termino: 'Método',
      significado:
        'Función miembro de una clase que define un comportamiento específico.',
    },
    {
      termino: 'Método abstracto',
      significado:
        'Método declarado en una clase abstracta o interfaz, pero sin implementación concreta. Las clases derivadas deben proporcionar una implementación para estos métodos.',
    },
    {
      termino: 'MVC',
      significado:
        'Modelo-vista-controlador, un patrón de diseño que separa la lógica de una aplicación en tres componentes interconectados. El polimorfismo es a menudo utilizado en la implementación de los controladores.',
    },
    {
      termino: 'Override',
      significado:
        'Modificador utilizado para indicar que un método está sobrescribiendo un método de la clase base.',
    },
    {
      termino: 'POO',
      significado:
        'Programación orientada a objetos, un referente de programación basado en el concepto de objetos que encapsulan estado y comportamiento.',
    },
    {
      termino: 'Polimorfismo',
      significado:
        'Capacidad de un objeto para adoptar múltiples formas o comportarse de diferentes maneras según el contexto. Puede ser estático (sobrecarga) o dinámico (sobrescritura).',
    },
    {
      termino: 'Sobrecarga de métodos',
      significado:
        'Capacidad de una clase para contener múltiples métodos con el mismo nombre, pero diferentes firmas.',
    },
    {
      termino: 'Sobrescritura de métodos',
      significado:
        'Capacidad de una subclase de proporcionar su propia implementación para un método heredado de su superclase.',
    },
    {
      termino: 'Superclase',
      significado:
        'Clase de la cual se derivan otras clases. También conocida como clase base o clase padre.',
    },
    {
      termino: 'UML - Lenguaje unificado de modelado',
      significado:
        'Lenguaje de modelado visual utilizado para especificar, visualizar, construir y documentar sistemas de software.',
    },
  ],
}
