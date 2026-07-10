export default {
  global: {
    Name: 'Herramientas financieras para generar valor',
    Description:
      'Desarrolla herramientas financieras para calcular e interpretar el punto de equilibrio, el apalancamiento operativo y financiero, y el EVA. Su aplicación permite analizar ventas, costos, gastos, utilidad, deuda y capital invertido, con el fin de identificar riesgos, valorar la generación de valor empresarial y formular recomendaciones de mejora para apoyar la toma de decisiones.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Información financiera para decisiones de equilibrio, riesgo y valor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Información financiera como base para la toma de decisiones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Relación entre ventas, costos, gastos y utilidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Costos fijos, costos variables y costos mixtos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Margen de contribución como base del análisis operativo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Utilidad operacional y utilidad neta en la evaluación financiera',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Datos necesarios para calcular punto de equilibrio, apalancamiento y EVA',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Uso de hoja electrónica para organizar fórmulas y resultados financieros',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Punto de equilibrio para decisiones operativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto e importancia del punto de equilibrio',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Margen de contribución unitario',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Margen de contribución porcentual',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Punto de equilibrio en unidades',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Punto de equilibrio en ventas',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Punto de equilibrio con utilidad esperada',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Interpretación del punto de equilibrio',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo:
              'Decisiones sobre precios, costos, volumen de ventas y utilidad',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Apalancamiento operativo y financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de apalancamiento en la empresa',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estructura de costos y riesgo operativo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Apalancamiento operativo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Grado de apalancamiento operativo',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Estructura de financiación y riesgo financiero',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Apalancamiento financiero',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Grado de apalancamiento financiero',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Apalancamiento total',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo: 'Interpretación de resultados y decisiones asociadas',
            hash: 't_3_9',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Valor económico agregado, EVA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Generación de valor en la empresa',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Concepto e importancia del EVA',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Apalancamiento financiero',
      significado:
        'efecto de la deuda y los intereses sobre los resultados financieros.',
    },
    {
      termino: 'Apalancamiento operativo',
      significado: 'efecto de los costos fijos sobre la utilidad operacional.',
    },
    {
      termino: 'Apalancamiento total',
      significado:
        'efecto conjunto del apalancamiento operativo y financiero sobre los resultados.',
    },
    {
      termino: 'Capital invertido',
      significado:
        'recursos utilizados por la empresa para desarrollar su operación.',
    },
    {
      termino: 'Costo de capital',
      significado:
        'rentabilidad mínima esperada por quienes financian la empresa.',
    },
    {
      termino: 'Costo fijo',
      significado:
        'costo que permanece estable dentro de un rango de actividad.',
    },
    {
      termino: 'Costo variable',
      significado: 'costo que cambia según el volumen de producción o ventas.',
    },
    {
      termino: 'EVA',
      significado:
        'medida que indica si la empresa crea o destruye valor económico.',
    },
    {
      termino: 'Gastos financieros',
      significado:
        'intereses y costos asociados al uso de financiación externa.',
    },
    {
      termino: 'Margen de contribución',
      significado:
        'valor que queda de las ventas después de cubrir costos variables.',
    },
    {
      termino: 'Punto de equilibrio',
      significado:
        'nivel de ventas donde la empresa no obtiene utilidad ni pérdida.',
    },
    {
      termino: 'Riesgo financiero',
      significado:
        'posibilidad de afectar resultados por obligaciones, intereses o endeudamiento.',
    },
    {
      termino: 'Riesgo operativo',
      significado:
        'posibilidad de afectar la utilidad por cambios en ventas o costos fijos.',
    },
    {
      termino: 'UODI',
      significado:
        'utilidad operacional después de impuestos, usada para calcular el EVA.',
    },
    {
      termino: 'Utilidad esperada',
      significado:
        'ganancia que la empresa desea alcanzar en un periodo determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bonilla, F. L. (2010). El Valor Económico Agregado, EVA, en el valor del negocio. Revista Nacional de Administración, Universidad Estatal a Distancia.',
      link: '',
    },
    {
      referencia:
        'Buenaventura Vera, G. (2002). El estudio de apalancamientos como metodología de análisis de la gestión en la empresa. Estudios Gerenciales.',
      link: '',
    },
    {
      referencia:
        'Contreras, J. A. (7 de Diciembre de 2021). Punto de equilibrio: qué es y cómo calcularlo. Obtenido de Salesforce.com ',
      link: 'https://www.salesforce.com/mx/blog/punto-de-equilibrio/?utm_source',
    },
    {
      referencia: 'ESIC. (Mayo de 2023). Esic.Edu. Obtenido de ',
      link: 'https://www.esic.edu/rethink/marketing-y-comunicacion/grado-de-apalancamiento-operativo-como-se-calcula-c?utm',
    },
    {
      referencia: 'Fernández, J. R. (12 de Julio de 2023). Sage. Obtenido de ',
      link: 'https://www.sage.com/es-es/blog/grado-apalancamiento-operativo-definicion-calculo-ejemplos/?utm',
    },
    {
      referencia:
        'García Serna, O. L. (2009). Administración financiera: fundamentos y aplicaciones (4.ª ed.). Prensa Moderna Impresores.',
      link: '',
    },
    {
      referencia: 'gc.Scalahed.com. (s.f.). gc.Scalahed.com. Obtenido de ',
      link: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://gc.scalahed.com/recursos/files/r157r/w13330w/IngContaycostosU05.pdf?utm',
    },
    {
      referencia:
        'Gómez, J. C. (2009). Valor económico agregado. Revista Visión Contable.',
      link: '',
    },
    {
      referencia:
        'Ortiz Anaya, H. (2011). Análisis financiero aplicado y principios de administración financiera (14.ª ed.). Universidad Externado de Colombia.',
      link: '',
    },
    {
      referencia:
        'Rosillón, M. A. (Diciembre de 2009). Análisis financiero: una herramienta clave para una gestión financiera eficiente. Revista Venezolana de Gerencia, Revista Venezolana de Gerencia v.14 n.48.',
      link: '',
    },
    {
      referencia:
        'Suaza, J. (2024). Análisis de Margen de Contribución y Punto de Equilibrio. Bogotá: Corporación Universitaria de Asturias.',
      link: '',
    },
    {
      referencia: 'UNIR. (18 de Diciembre de 2024).',
      link: '',
    },
    {
      referencia:
        'UNIR. (18 de Diciembre de 2024). Unir la Universidad en Internet. Obtenido de',
      link: 'https://colombia.unir.net/actualidad-unir/valor-economico-agregado/?utm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema Virtual de Recursos Educativos Digitales ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
