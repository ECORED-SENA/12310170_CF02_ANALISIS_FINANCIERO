<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Punto de equilibrio para decisiones operativas
      p.mb-5 El punto de equilibrio determina el nivel de ventas necesario para cubrir los costos sin generar utilidad ni pérdida. A partir de precio, costos variables, costos fijos y margen de contribución, permite planear ventas, definir precios, evaluar costos y establecer metas mínimas para apoyar la sostenibilidad operativa.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Concepto e importancia del punto de equilibrio
      p.mb-5 El punto de equilibrio indica el nivel de ventas en el que los ingresos cubren los costos totales, sin utilidad ni pérdida. Su cálculo permite definir metas mínimas de operación y apoyar decisiones sobre precios, costos, ventas, lanzamientos y rentabilidad. A continuación, se resumen sus principales usos empresariales.
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Precio de venta")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Precio de venta
              p.mb-0 Permite responder si el precio cubre los costos y genera utilidad, relacionando precio, costo variable y margen de contribución.
        .py-3.py-md-4(titulo="Volumen de ventas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Volumen de ventas
              p.mb-0 Ayuda a determinar cuántas unidades deben venderse como mínimo, definiendo la meta mínima de ventas.
        .py-3.py-md-4(titulo="Control de costos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Control de costos
              p.mb-0 Permite evaluar qué ocurre si aumentan los costos fijos o variables, midiendo su impacto sobre el equilibrio.
        .py-3.py-md-4(titulo="Lanzamiento de producto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Lanzamiento de producto
              p.mb-0 Ayuda a establecer si el producto puede cubrir sus costos, evaluando su viabilidad operativa inicial.
        .py-3.py-md-4(titulo="Planeación de utilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Planeación de utilidad
              p.mb-0 Permite calcular cuánto se debe vender para alcanzar una ganancia esperada, proyectando las ventas requeridas.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Margen de contribución unitario
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img6.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El margen de contribución unitario es la diferencia entre el precio de venta unitario y el costo variable unitario. Indica cuánto aporta cada unidad vendida para cubrir costos fijos y generar utilidad, y sirve como base para calcular el punto de equilibrio en unidades. (Contreras, 2021). La fórmula es:
          br
          br
          .box___style_2.fit___style_2
            h5.mb-0 Margen de contribución unitario = precio de venta unitario - costo variable unitario
      p.mb-5 El margen de contribución por unidad vendida, se calcula así:
      .color___box_4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 8.
                span Cálculo del margen de contribución unitario
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para identificar el aporte de cada unidad vendida a la cobertura de costos fijos.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.texto-left Valor
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Precio de venta unitario
                      td.texto-left $80.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Menos costo variable unitario
                      td.texto-left $50.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución unitario
                      td.texto-left $30.000
          p.mb-0 Cada unidad vendida aporta $30.000 para cubrir costos fijos y, una vez cubiertos, generar utilidad operacional. Un mayor margen de contribución reduce las unidades necesarias para alcanzar el punto de equilibrio.
          Separador
          #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.3 Margen de contribución porcentual
      .box___style_3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p El margen de contribución porcentual muestra qué parte de cada peso vendido queda disponible para cubrir costos fijos y generar utilidad. Se calcula dividiendo el margen de contribución total entre las ventas totales, o el margen de contribución unitario entre el precio de venta unitario. Esta medida permite calcular el punto de equilibrio en valor de ventas. Las fórmulas son:
            .box___style_6.mb-3
              h5.mb-0 Margen de contribución porcentual = margen de contribución unitario / precio de venta unitario × 100
            .box___style_2.fit___style_2
              h5.mb-0 Margen de contribución porcentual = margen de contribución total / ventas totales × 100
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img7.png', alt='').m-auto
      p.mb-5 El cálculo del margen de contribución porcentual se realiza así:
      .color___box_4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 9.
                span Cálculo del margen de contribución porcentual
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla muestra cómo se calcula el margen de contribución porcentual a partir de datos unitarios.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.texto-left Valor
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Precio de venta unitario
                      td.texto-left $80.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo variable unitario
                      td.texto-left $50.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución unitario
                      td.texto-left $30.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución porcentual
                      td.texto-left 37,5 %
          p.mb-0 El resultado indica que por cada $100 vendidos, la empresa conserva $37,5 para cubrir costos fijos y generar utilidad. Este porcentaje será utilizado para calcular el punto de equilibrio en ventas.
          Separador
          #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.4 Punto de equilibrio en unidades
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img8.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El punto de equilibrio en unidades indica la cantidad mínima que debe venderse para cubrir costos fijos y variables, sin generar utilidad ni pérdida. Se calcula dividiendo los costos fijos entre el margen de contribución unitario. (Contreras, 2021). Su fórmula es:
          br
          br
          .box___style_6
            h5.mb-0 Punto de equilibrio en unidades = costos fijos / margen de contribución unitario
      p.mb-5 El cálculo de unidades mínimas requeridas para cubrir los costos, se realiza así:
      .color___box_4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 10.
                span Cálculo del punto de equilibrio en unidades
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla presenta el cálculo de unidades mínimas requeridas para cubrir costos.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.texto-left Valor
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos mensuales
                      td.texto-left $18.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución unitario
                      td.texto-left $30.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Punto de equilibrio en unidades
                      td.texto-left 600 unidades
          p.mb-0 La empresa debe vender 600 unidades al mes para cubrir sus costos. Por debajo de ese nivel tendrá pérdida; en 600 unidades no gana ni pierde, y por encima empieza a generar utilidad operacional.
          Separador
          #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.5 Punto de equilibrio en ventas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img9.jpg', alt='').m-auto
        .col-xl
          .box___style_7.fit___box_3(data-aos="fade-left")
            p El punto de equilibrio en ventas señala el valor mínimo de ingresos necesario para cubrir los costos totales. Se calcula dividiendo los costos fijos entre el margen de contribución porcentual y es útil cuando el análisis se expresa en valores de venta. La fórmula es:
            .box___style_8
              h5.mb-0 Punto de equilibrio en ventas = costos fijos / margen de contribución porcentual
      p.mb-5 La tabla siguiente presenta cómo calcular el valor mínimo de ventas necesario para alcanzar el equilibrio.
      .color___box_4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 11.
                span Cálculo del punto de equilibrio en ventas
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para calcular el punto de equilibrio expresado en valor de ventas.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.texto-left Valor
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos mensuales
                      td.texto-left $18.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución porcentual
                      td.texto-left 37,5 %
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Punto de equilibrio en ventas
                      td.texto-left $48.000.000
          p.mb-0 La empresa necesita vender $48.000.000 mensuales para cubrir sus costos totales. Este resultado coincide con el punto de equilibrio en unidades, porque 600 unidades multiplicadas por $80.000 equivalen a $48.000.000.
          Separador
          #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.6 Punto de equilibrio con utilidad esperada
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_7.color-1.fit___box_4(data-aos="fade-right")
            p El punto de equilibrio puede ajustarse para incluir una utilidad esperada. En este caso, la utilidad deseada se suma a los costos fijos y se divide entre el margen de contribución, según se requiera el resultado en unidades o en ventas. Las fórmulas son las siguientes:
            .box___style_6.mb-2
              h5.mb-0 Unidades requeridas con utilidad esperada = costos fijos + utilidad esperada / margen de contribución unitario
            .box___style_2.fit___style_2
              h5.mb-0 Ventas requeridas con utilidad esperada = costos fijos + utilidad esperada / margen de contribución porcentual 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img10.png', alt='').m-auto
      p.mb-5 Los cálculos se realizan de la siguiente manera:
      .color___box_4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 12.
                span Cálculo de ventas con utilidad esperada
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla presenta el cálculo de unidades y ventas necesarias para alcanzar una utilidad objetivo.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.texto-left Valor
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos mensuales
                      td.texto-left $18.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad esperada
                      td.texto-left $9.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución unitario
                      td.texto-left $30.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Unidades requeridas
                      td.texto-left 900 unidades
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Precio de venta unitario
                      td.texto-left $80.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas requeridas
                      td.texto-left $72.000.000
          p.mb-0 La empresa debe vender 900 unidades, equivalentes a $72.000.000, para cubrir sus costos y alcanzar una utilidad operacional de $9.000.000, lo que permite definir metas comerciales orientadas no solo a evitar pérdidas, sino a lograr una ganancia esperada.
      Separador
      #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.7 Interpretación del punto de equilibrio
      p.mb-5 La interpretación del punto de equilibrio debe compararse con la capacidad real y las ventas esperadas de la empresa. Un punto de equilibrio bajo facilita la cobertura de costos, mientras que uno alto puede indicar presión por costos fijos, bajo margen de contribución o precios insuficientes. Para facilitar la comprensión del tema, a continuación se presentan posibles resultados del punto de equilibrio y su interpretación.
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5 
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img11.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img12.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Punto de equilibrio menor que las ventas esperadas
                    p.mb-0.text-center Indica que la empresa supera el nivel mínimo de operación. La decisión posible es mantener el seguimiento y evaluar la utilidad esperada.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img13.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Punto de equilibrio igual a las ventas esperadas
                    p.mb-0.text-center Significa que la empresa no pierde, pero tampoco genera utilidad. En este caso, se deben revisar estrategias para aumentar las ventas o mejorar el margen de contribución.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img14.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Punto de equilibrio mayor que las ventas esperadas
                    p.mb-0.text-center Muestra que la empresa no alcanza a cubrir sus costos. La decisión posible es reducir costos, ajustar precios o aumentar el volumen de ventas.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img15.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Margen de contribución bajo
                    p.mb-0.text-center Evidencia que cada unidad vendida aporta poco a la cobertura de costos fijos. Se recomienda revisar el precio de venta o el costo variable.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img16.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Costos fijos altos
                    p.mb-0.text-center Indican que se requieren más ventas para cubrir la estructura de costos. Por ello, es necesario controlar los gastos fijos y evaluar la capacidad instalada.
          p.mb-5 Para fortalecer la comprensión del punto de equilibrio, se invita a reproducir el siguiente video, en el cual se explica de manera sencilla cómo identificar el nivel mínimo de ventas que necesita alcanzar una empresa para cubrir sus costos y empezar a generar utilidad. 
          figure(data-aos="zoom-in").mb-0
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption.fit___figcaption-video Video. “Punto de equilibrio: el nivel mínimo para no perder”
      Separador
      #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.8 Decisiones sobre precios, costos, volumen de ventas y utilidad
      p.mb-5 El punto de equilibrio permite analizar cómo los cambios en precio, costo variable o costos fijos afectan la operación. Si mejora el margen de contribución, se requieren menos ventas para alcanzar el equilibrio; si aumentan los costos, la empresa debe vender más para cubrirlos. Seguidamente, se presentarán cómo ciertas decisiones pueden aumentar o disminuir el punto de equilibrio.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img17.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Aumento del precio de venta").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede disminuir el punto de equilibrio si el costo variable no cambia, porque cada unidad vendida aporta un mayor margen de contribución.
            .row(titulo="Reducción del costo variable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Disminuye el punto de equilibrio, ya que mejora el margen de contribución y permite cubrir los costos con menos ventas.
            .row(titulo="Aumento de costos fijos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aumenta el punto de equilibrio, debido a que la empresa requiere más ventas para cubrir su estructura operativa.
            .row(titulo="Reducción de ventas esperadas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aumenta el riesgo de pérdida, porque puede impedir que la empresa alcance el punto de equilibrio.
            .row(titulo="Incremento de descuentos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede aumentar el punto de equilibrio, ya que disminuye el ingreso recibido por cada unidad vendida.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img18.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p A fin de facilitar la interpretación del contenido, se expone el siguiente ejemplo:
          br 
          br
          h5 Ejemplo aplicado del capítulo
          br
          br
          p La empresa Comercial Delta S.A.S. vende un producto a $80.000 por unidad. Su costo variable unitario es de $50.000 y sus costos fijos mensuales son de $18.000.000. La gerencia desea conocer el punto de equilibrio, las ventas requeridas y la meta necesaria para obtener una utilidad operacional de $9.000.000.
      .color___box_4
        .px-5
          p.mb-5 Para desarrollar del ejemplo, se realizan los siguientes cálculos:
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 13.
                span Desarrollo del punto de equilibrio
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla refleja el cálculo del margen de contribución, punto de equilibrio y ventas con utilidad esperada.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Cálculo
                      th.ajuste-border-tabla.texto-left Fórmula
                      th.texto-left Resultado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución unitario
                      td.ajuste-border-tabla.texto-left $80.000 - $50.000
                      td.texto-left $30.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución porcentual
                      td.ajuste-border-tabla.texto-left $30.000 / $80.000 × 100
                      td.texto-left 37,5 %
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Punto de equilibrio en unidades
                      td.ajuste-border-tabla.texto-left $18.000.000 / $30.000
                      td.texto-left 600 unidades
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Punto de equilibrio en ventas
                      td.ajuste-border-tabla.texto-left $18.000.000 / 37,5 %
                      td.texto-left $48.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Unidades con utilidad esperada
                      td.ajuste-border-tabla.texto-left ($18.000.000 + $9.000.000) / $30.000
                      td.texto-left 900 unidades
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas con utilidad esperada
                      td.ajuste-border-tabla.texto-left 900 × $80.000
                      td.texto-left $72.000.000
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p #[b Interpretación del caso:] Comercial Delta S.A.S. debe vender 600 unidades mensuales, equivalentes a $48.000.000, para cubrir sus costos. Para obtener una utilidad operacional de $9.000.000, necesita vender 900 unidades, equivalentes a $72.000.000.
          .row.justify-content-center.align-items-center.mb-3
            .col-xl-auto.mb-4.mb-lg-0.col-md-9(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img19.jpg', alt='').m-auto
            .col-xl
              .box___style_7.fit___box_1.color-1(data-aos="fade-left")
                p.mb-0 Si proyecta vender 750 unidades, superaría el punto de equilibrio, pero no alcanzaría la utilidad esperada. Por ello, podría aumentar ventas, revisar precios, negociar costos variables o reducir costos fijos, evaluando cuidadosamente el efecto de cada decisión.
          p.mb-0 El punto de equilibrio permite conocer la meta mínima de ventas necesaria para cubrir costos, expresada en unidades o en valor de ventas. Su interpretación debe relacionarse con la capacidad real de ventas, el mercado, los costos y la utilidad esperada. A partir de este análisis, se puede avanzar hacia el estudio del apalancamiento operativo y financiero.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img20.png', alt='').m-auto
      
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
