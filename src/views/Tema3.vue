<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Apalancamiento operativo y financiero
      p.mb-5 El apalancamiento analiza cómo los costos fijos y la deuda amplifican el efecto de los cambios en ventas sobre los resultados. Incluye el apalancamiento operativo, financiero y total, y permite evaluar la sensibilidad de la utilidad, el riesgo empresarial y decisiones sobre costos, endeudamiento, crecimiento y metas de ventas. (Buenaventura Vera, 2002).
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Concepto de apalancamiento en la empresa
      p.mb-5 El apalancamiento operativo y financiero mide cómo los costos fijos y la deuda amplifican las utilidades cuando las ventas crecen, pero también aumentan el riesgo cuando disminuyen. Los tipos de apalancamiento empresarial son:
      .row.justify-content-center.mb-0
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img1.png', alt="" ).m-auto
              h4.text-center Apalancamiento operativo
              .box___card_sinbordes_p
                p.mb-0.text-center Indica que la empresa supera el nivel mínimo de operación. La decisión posible es mantener el seguimiento y evaluar la utilidad esperada.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img2.png', alt="" ).m-auto
              h4.text-center Apalancamiento financiero
              .box___card_sinbordes_p
                p.mb-0.text-center Se genera por los gastos financieros e intereses, y afecta la utilidad antes de impuestos o la utilidad neta. Su uso principal es medir el efecto de la deuda sobre los resultados de la empresa.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img3.png', alt="" ).m-auto
              h4.text-center Apalancamiento total
              .box___card_sinbordes_p
                p.mb-0.text-center Se genera por la combinación de costos fijos operacionales y gastos financieros, y afecta el resultado final de la empresa. Su uso principal es evaluar el efecto conjunto del riesgo operativo y financiero.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Estructura de costos y riesgo operativo
      p.mb-5 La estructura de costos relaciona costos fijos y variables; si los costos fijos son altos, aumenta el riesgo operativo. Por ello, el apalancamiento se analiza desde los costos y el punto de equilibrio. (Buenaventura Vera, 2002). La estructura de costos y riesgo operativo es la siguiente:
      .bg___carrusel
        .px-5
          .row.align-items-center
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img5.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Costos fijos altos
                    p.mb-0.text-center La empresa debe cubrir costos aunque venda poco, lo que aumenta el punto de equilibrio y el riesgo operativo.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img6.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Costos variables altos
                    p.mb-0.text-center El costo aumenta proporcionalmente con las ventas, reduciendo el margen de contribución.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img7.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Margen de contribución alto
                    p.mb-0.text-center Cada unidad aporta más para cubrir costos fijos, lo que disminuye el punto de equilibrio.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img8.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Ventas inestables
                    p.mb-0.text-center El volumen cambia con frecuencia, aumentando la incertidumbre sobre la utilidad operacional.
          Separador
          #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.3 Apalancamiento operativo
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_7.fit___box_5(data-aos="fade-right")
            p El apalancamiento operativo mide cómo los costos fijos afectan la utilidad operacional y cómo los cambios en ventas pueden amplificar sus variaciones. Se calcula relacionando margen de contribución y utilidad operacional. (ESIC, 2023). La fórmula es:
            .box___style_2.fit___style_2
              h5.mb-0 Grado de apalancamiento operativo = margen de contribución / utilidad operacional
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img9.png', alt='').m-auto
      p.mb-5 Para mayor comprensión del tema, se realizará el siguiente ejemplo:
      .color___box_4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 14.
                span Cálculo del apalancamiento operativo
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla presenta el ejemplo de los datos requeridos para calcular el grado de apalancamiento operativo.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.ajuste-border-tabla.texto-left Cálculo
                      th.texto-left Valor
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas
                      td.ajuste-border-tabla.texto-left Dato suministrado
                      td.texto-left $120.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos variables
                      td.ajuste-border-tabla.texto-left Dato suministrado
                      td.texto-left $72.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución
                      td.ajuste-border-tabla.texto-left $120.000.000 - $72.000.000
                      td.texto-left $48.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos
                      td.ajuste-border-tabla.texto-left Dato suministrado
                      td.texto-left $28.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                      td.ajuste-border-tabla.texto-left $48.000.000 - $28.000.000
                      td.texto-left $20.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento operativo
                      td.ajuste-border-tabla.texto-left $48.000.000 / $20.000.000
                      td.texto-left 2,4
          .box___style_3.mb-0(data-aos="zoom-in")
            .row.align-items-center
              .col-xl.order-2.order-lg-1.fit___box_container
                p La interpretación el ejemplo es la siguiente:
                p #[b Interpretación del ejemplo:] un grado de apalancamiento operativo de 2,4 significa que, dentro de las condiciones analizadas, un cambio porcentual en las ventas puede generar un cambio aproximado 2,4 veces mayor en la utilidad operacional. Si las ventas aumentan 10 %, la utilidad operacional podría aumentar cerca de 24 %. Si las ventas disminuyen 10 %, la utilidad operacional podría caer cerca de 24 %.
                p.mb-0 La empresa presenta sensibilidad operativa: el apalancamiento favorece los resultados cuando las ventas crecen, pero puede afectarlos si disminuyen. Por ello, debe analizarse junto con el punto de equilibrio y la estabilidad de las ventas.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t3/img10.png', alt='').m-auto
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Grado de apalancamiento operativo
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img11.jpg', alt='').m-auto
        .col-xl
          .box___style_7.color-2.fit___box_1(data-aos="fade-left")
            p El grado de apalancamiento operativo también puede calcularse comparando la variación porcentual de la utilidad operacional con la variación porcentual de las ventas, lo que permite analizar el efecto real entre dos escenarios o periodos. (Fernández, 2023). La fórmula es:
            .box___style_8.color-3
              h5.mb-0 Grado de apalancamiento operativo = variación porcentual de la utilidad operacional / variación porcentual de las ventas
      p.mb-5 Para aplicación práctica de la fórmula, se realiza ejercicio en la siguiente tabla:
      .color___box_4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 15.
                span Apalancamiento operativo por variación porcentual
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla indica cómo calcular el grado de apalancamiento operativo comparando dos escenarios.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.ajuste-border-tabla.texto-left Escenario actual
                      th.ajuste-border-tabla.texto-left Escenario proyectado
                      th.texto-left Variación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas
                      td.ajuste-border-tabla.texto-left $120.000.000
                      td.ajuste-border-tabla.texto-left $132.000.000
                      td.texto-left 10,0 %
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos variables
                      td.ajuste-border-tabla.texto-left $72.000.000
                      td.ajuste-border-tabla.texto-left $79.200.000
                      td.texto-left 10,0 %
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución
                      td.ajuste-border-tabla.texto-left $48.000.000
                      td.ajuste-border-tabla.texto-left $52.800.000
                      td.texto-left 10,0 %
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos
                      td.ajuste-border-tabla.texto-left $28.000.000
                      td.ajuste-border-tabla.texto-left $28.000.000
                      td.texto-left 0,0 %
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                      td.ajuste-border-tabla.texto-left $20.000.000
                      td.ajuste-border-tabla.texto-left $24.800.000
                      td.texto-left 24,0 %
          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img12.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p En este caso, las ventas aumentan 10 % y la utilidad operacional aumenta 24 %; por tanto:
              br
              br
              p Grado de apalancamiento operativo = 24 % / 10 % = 2,4
              br
              br
              p El resultado coincide con el cálculo anterior, porque ambos métodos reflejan la misma relación entre margen de contribución, costos fijos y utilidad operacional.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Estructura de financiación y riesgo financiero
      p.mb-5 La estructura de financiación muestra cómo la empresa combina recursos propios y deuda para operar o crecer. El riesgo financiero aumenta cuando los gastos financieros son altos frente a la utilidad operacional, ya que los intereses pueden reducir el resultado antes de impuestos y la utilidad neta. A continuación, se presentan decisiones de financiación con posibles efectos sobre los resultados.
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img13.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Uso moderado de deuda").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede apoyar el crecimiento o la inversión de la empresa, siempre que exista control sobre la capacidad de pago.
            .row(titulo="Gastos financieros altos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reducen la utilidad antes de impuestos y aumentan la presión sobre los resultados financieros.
            .row(titulo="Baja utilidad operacional").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Disminuye la capacidad para cubrir intereses y puede generar pérdida antes de impuestos.
            .row(titulo="Mayor patrimonio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reduce la dependencia de terceros, aunque puede limitar el crecimiento si no se cuenta con financiación suficiente.
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 Apalancamiento financiero
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_7.color-4.fit___box_5(data-aos="fade-right")
            p El apalancamiento financiero mide cómo los gastos financieros derivados de la deuda afectan los resultados de la empresa. Permite evaluar si la utilidad operacional cubre los intereses y se calcula dividiendo la utilidad operacional entre la utilidad antes de impuestos. (gc.Scalahed.com, s.f.). La fórmula es:
            .box___style_2.fit___style_2.color-2
              h5.mb-0 Grado de apalancamiento financiero = utilidad operacional / utilidad antes de impuestos
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img14.png', alt='').m-auto
      .color___box_4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 16.
                span Cálculo del apalancamiento financiero
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla que presenta los cálculos para determinar el apalancamiento financiero.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.ajuste-border-tabla.texto-left Cálculo
                      th.texto-left Valor
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                      td.ajuste-border-tabla.texto-left Dato suministrado
                      td.texto-left $20.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos financieros
                      td.ajuste-border-tabla.texto-left Dato suministrado
                      td.texto-left $5.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad antes de impuestos
                      td.ajuste-border-tabla.texto-left $20.000.000 - $5.000.000
                      td.texto-left $15.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento financiero
                      td.ajuste-border-tabla.texto-left $20.000.000 / $15.000.000
                      td.texto-left 1,33
          .row.justify-content-center.align-items-center
            .col-xl.mb-4.mb-lg-0
              .box___style_4.fit___box_1(data-aos="fade-right")
                p La interpretación es la siguiente:
                p.mb-0 #[b Interpretación del ejemplo:] Un grado de apalancamiento financiero de 1,33 indica que los gastos financieros amplifican el efecto de la utilidad operacional sobre el resultado antes de impuestos. Si la utilidad operacional aumenta, el resultado después de intereses puede mejorar; pero si la utilidad operacional disminuye, los intereses pueden reducir significativamente la utilidad antes de impuestos.
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t3/img15.jpg', alt='').m-auto
            .col-xl-3
              .box___style_5.fit___box_1(data-aos="fade-left")
                p.mb-0 Esto no significa que la deuda sea negativa, sino que debe vigilarse la capacidad de generar utilidad operacional suficiente para cubrir intereses y mantener resultados positivos.
      Separador
      #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.7 Grado de apalancamiento financiero
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img16.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El grado de apalancamiento financiero también puede analizarse comparando la variación porcentual de la utilidad antes de impuestos frente a la variación porcentual de la utilidad operacional. Esta forma es útil para evaluar escenarios cuando la empresa proyecta cambios en ventas, costos o gastos financieros. Su fórmula es:
          br
          br
          .box___style_2.fit___style_2.color-1
            h5.mb-0 Grado de apalancamiento financiero = variación porcentual de utilidad antes de impuestos / variación porcentual de utilidad operacional
      p.mb-5 Enseguida, se muestra un ejemplo práctico.
      .color___box_4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 17.
                span Apalancamiento financiero por variación porcentual
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla señala el efecto de un cambio en la utilidad operacional sobre la utilidad antes de impuestos.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.ajuste-border-tabla.texto-left Escenario actual
                      th.ajuste-border-tabla.texto-left Escenario proyectado
                      th.texto-left Variación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                      td.ajuste-border-tabla.texto-left $20.000.000
                      td.ajuste-border-tabla.texto-left $24.800.000
                      td.texto-left 24,0 %
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos financieros
                      td.ajuste-border-tabla.texto-left $5.000.000
                      td.ajuste-border-tabla.texto-left $5.000.000
                      td.texto-left 0,0 %
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad antes de impuestos
                      td.ajuste-border-tabla.texto-left $15.000.000
                      td.ajuste-border-tabla.texto-left $19.800.000
                      td.texto-left 32,0 %
          .box___style_3.mb-0(data-aos="zoom-in")
            .row.align-items-center
              .col-xl.order-2.order-lg-1.fit___box_container
                p En este caso, la utilidad operacional aumenta 24 % y la utilidad antes de impuestos aumenta 32 %. Por tanto:
                .box___style_2.fit___style_2.mb-3
                  h5.mb-0 Grado de apalancamiento financiero = 32 % / 24 % = 1,33
                p.mb-0 El resultado confirma que los gastos financieros amplifican el cambio del resultado antes de impuestos frente al cambio en la utilidad operacional.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t3/img17.png', alt='').m-auto
      Separador
      #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.8 Apalancamiento total
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_7.color-4.fit___box_5(data-aos="fade-right")
            p El apalancamiento total integra el efecto del apalancamiento operativo y financiero, permitiendo estimar cómo los cambios en ventas afectan el resultado de la empresa al considerar tanto los costos fijos operativos como los gastos financieros. Para calcularlo, existe la siguiente fórmula:
            .box___style_2.fit___style_2.color-1
              h5.mb-0 Grado de apalancamiento total = grado de apalancamiento operativo × grado de apalancamiento financiero
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img18.png', alt='').m-auto
      p.mb-5 Para evidenciar la aplicación del cálculo, se desarrolla el siguiente caso.
      .color___box_4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 18.
                span Cálculo del apalancamiento total
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla integra los resultados de apalancamiento operativo y financiero.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.texto-left Resultado
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento operativo
                      td.texto-left 2,4
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento financiero
                      td.texto-left 1,33
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento total
                      td.texto-left 3,19
          .row.justify-content-center.align-items-center.mb-0
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img19.jpg', alt='').m-auto
            .col-xl
              .box___style_7.color-2.mb-3(data-aos="fade-left")
                p La interpretación es la siguiente:
                p.mb-0 #[b Interpretación del ejemplo:] un grado de apalancamiento total de 3,19 indica que un cambio porcentual en las ventas puede generar un cambio aproximado 3,19 veces mayor en el resultado antes de impuestos. Si las ventas aumentan 10 %, el resultado antes de impuestos podría aumentar cerca de 31,9 %. Si las ventas disminuyen 10 %, el resultado podría caer en una proporción similar.
              .box___style_9(data-aos="fade-left")
                p.mb-0 Este indicador debe manejarse con prudencia. Un apalancamiento total alto puede ser favorable en escenarios de crecimiento, pero riesgoso en escenarios de disminución de ventas.
      Separador
      #t_3_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.9 Interpretación de resultados y decisiones asociadas
      p.mb-5 El apalancamiento debe interpretarse según la estabilidad de las ventas, la estructura de costos, el nivel de deuda y la capacidad de pago. Su gestión implica revisar costos fijos, gastos financieros, deuda, ventas y margen de contribución, para administrarlo de acuerdo con la capacidad real de la empresa. A continuación, se expone orienta de lectura de resultados de apalancamiento y posibles acciones de mejora.
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Apalancamiento operativo alto
                  p.mb-0 La utilidad operacional es muy sensible a los cambios en ventas. Por ello, se deben revisar los costos fijos y fortalecer las metas comerciales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Apalancamiento operativo bajo
                  p.mb-0 La utilidad cambia menos frente a variaciones en ventas. En este caso, conviene evaluar si existe capacidad para crecer con mayor eficiencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Apalancamiento financiero alto
                  p.mb-0 Los intereses tienen un peso importante en el resultado. Se recomienda revisar la deuda, las tasas, los plazos y la capacidad de pago.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Apalancamiento total alto
                  p.mb-0 La empresa combina un riesgo operativo y financiero elevado. Por tanto, debe controlar costos fijos, gastos financieros y escenarios de ventas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Apalancamiento moderado
                  p.mb-0 Existe una sensibilidad controlada frente a los cambios. Se recomienda mantener seguimiento y comparar con los resultados proyectados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img24.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img25.png', alt='').m-auto
        .col-xl
          .box___style_7.color-1.fit___box_6(data-aos="fade-left")
            p.mb-0 Como apoyo a la explicación, se presenta un caso aplicado.
            h5.mb-0 Ejemplo aplicado
            p.mb-0 La empresa Comercial Delta S.A.S. presenta la siguiente información mensual:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-dollar-sign
                | Precio de venta unitario: $80.000
              li.mb-0
                span.fa-li
                  i.fas.fa-dollar-sign
                | Costo variable unitario: $50.000
              li.mb-0
                span.fa-li
                  i.fas.fa-dollar-sign
                | Unidades vendidas: 1.000
              li.mb-0
                span.fa-li
                  i.fas.fa-dollar-sign
                | Costos fijos: $18.000.000
              li.mb-0
                span.fa-li
                  i.fas.fa-dollar-sign
                | Gastos financieros: $2.000.000
      p.mb-5 Para realizar los cálculos, la información se organiza así:
      .color___box_4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 19.
                span Datos para calcular apalancamiento
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla organiza la información necesaria para calcular apalancamiento operativo, financiero y total.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.ajuste-border-tabla.texto-left Cálculo
                      th.texto-left Valor
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas
                      td.ajuste-border-tabla.texto-left 1.000 × $80.000
                      td.texto-left $80.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos variables
                      td.ajuste-border-tabla.texto-left 1.000 × $50.000
                      td.texto-left $50.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución
                      td.ajuste-border-tabla.texto-left $80.000.000 - $50.000.000
                      td.texto-left $30.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos
                      td.ajuste-border-tabla.texto-left Dato suministrado
                      td.texto-left $18.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                      td.ajuste-border-tabla.texto-left $30.000.000 - $18.000.000
                      td.texto-left $12.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos financieros
                      td.ajuste-border-tabla.texto-left Dato suministrado
                      td.texto-left $2.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad antes de impuestos
                      td.ajuste-border-tabla.texto-left $12.000.000 - $2.000.000
                      td.texto-left $10.000.000
      p.mb-5 Seguidamente, se realizará el cálculo de los apalancamientos:
      .color___box_4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 20.
                span Cálculo de apalancamiento operativo, financiero y total
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla muestra el cálculo de los grados de apalancamiento de la empresa.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Indicador
                      th.ajuste-border-tabla.texto-left Fórmula
                      th.texto-left Resultado
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento operativo
                      td.ajuste-border-tabla.texto-left $30.000.000 / $12.000.000
                      td.texto-left 2,50
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento financiero
                      td.ajuste-border-tabla.texto-left $12.000.000 / $10.000.000
                      td.texto-left 1,20
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento total
                      td.ajuste-border-tabla.texto-left 2,50 × 1,20
                      td.texto-left 3,00
          .row.justify-content-center.align-items-center.mb-3
            .col-xl.mb-4.mb-lg-0
              p A partir de los cálculos realizados, se interpreta el ejercicio de la siguiente manera:
              .box___style_4.color-6(data-aos="fade-right")
                p.mb-0 #[b Interpretación del caso:] el grado de apalancamiento operativo de 2,50 indica que la utilidad operacional es sensible a los cambios en ventas. Si las ventas aumentan 10 %, la utilidad operacional podría aumentar aproximadamente 25 %. Si las ventas disminuyen 10 %, la utilidad operacional podría caer en una proporción similar.
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t3/img26.jpg', alt='').m-auto
            .col-xl-4
              .box___style_5.color-5.fit___box_4(data-aos="fade-left")
                p.mb-0 El grado de apalancamiento financiero de 1,20 muestra que los gastos financieros tienen un efecto moderado sobre la utilidad antes de impuestos. El grado de apalancamiento total de 3,00 indica que un cambio del 10 % en ventas podría generar un cambio aproximado del 30 % en la utilidad antes de impuestos.
          p.mb-0 El ejercicio evidencia que el apalancamiento puede mejorar los resultados cuando las ventas crecen, pero aumenta el riesgo si disminuyen. Por ello, antes de asumir más costos fijos o deuda, se deben revisar ventas, margen de contribución y capacidad de pago.

</template>

<script>
export default {
  name: 'Tema3',
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
