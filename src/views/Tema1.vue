<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Información financiera para decisiones de equilibrio, riesgo y valor
      p.mb-5 La información financiera permite identificar datos clave sobre ventas, costos, gastos y utilidad para calcular punto de equilibrio, apalancamientos y EVA. Además, facilita organizar fórmulas, comparar escenarios y apoyar decisiones de mejora, corrección y prevención orientadas a generar valor empresarial.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Información financiera como base para la toma de decisiones
      p.mb-5 La información financiera permite evaluar ventas, costos, gastos, financiación y generación de valor mediante datos organizados y verificables, necesarios para calcular punto de equilibrio, apalancamiento y EVA. (Buenaventura Vera, 2002). Los datos financieros necesarios para decisiones de equilibrio, riesgo y valor son:
      .bg___carrusel
        .px-5
          .row.align-items-center
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img1.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img2.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Ventas 
                    p.mb-0.text-center Se toman del estado de resultados y se utilizan para calcular el margen de contribución, el punto de equilibrio y las variaciones financieras.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img3.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Costos variables
                    p.mb-0.text-center Se obtienen de los registros de costos o del estado de resultados, y permiten determinar el margen de contribución.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img4.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Costos fijos
                    p.mb-0.text-center Se identifican a partir del presupuesto, la contabilidad o el estado de resultados, y sirven para calcular el punto de equilibrio y el apalancamiento operativo.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img5.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Gastos financieros
                    p.mb-0.text-center Se toman del estado de resultados y se utilizan para evaluar el apalancamiento financiero.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img6.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Utilidad operacional
                    p.mb-0.text-center Se obtiene del estado de resultados y permite analizar la capacidad operativa de la empresa, además de servir como base para calcular el EVA.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img7.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Impuestos
                    p.mb-0.text-center Se identifican en el estado de resultados y permiten determinar la utilidad operacional después de impuestos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img8.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Capital invertido
                    p.mb-0.text-center Se obtiene del estado de situación financiera y se utiliza para calcular el EVA.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img9.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Costo de capital
                    p.mb-0.text-center Proviene de información financiera interna o de estimaciones de financiación, y permite evaluar la generación de valor.
          Separador
          #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.2 Relación entre ventas, costos, gastos y utilidad
      .color___box_1
        .px-5
          p.mb-5 Las ventas son ingresos de la actividad principal, pero deben analizarse junto con costos y gastos para determinar su efecto real sobre la utilidad y el punto de equilibrio. En la siguiente tabla se presenta cómo cada elemento afecta el resultado financiero de la empresa.
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Relación entre ventas, costos, gastos y utilidad
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para identificar la información que debe organizarse antes de calcular punto de equilibrio, apalancamiento y EVA.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento
                      th.ajuste-border-tabla.texto-left Qué representa
                      th.texto-left Efecto sobre la utilidad
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas
                      td.ajuste-border-tabla.texto-left Ingresos generados por la actividad principal
                      td.texto-left Aumentan el resultado
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos variables
                      td.ajuste-border-tabla.texto-left Costos que cambian según el nivel de producción o venta
                      td.texto-left Disminuyen el resultado en proporción al volumen
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos
                      td.ajuste-border-tabla.texto-left Costos que permanecen constantes dentro de un rango de actividad
                      td.texto-left Deben cubrirse aunque las ventas sean bajas
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos operacionales
                      td.ajuste-border-tabla.texto-left Gastos de administración y ventas
                      td.texto-left Reducen la utilidad operacional
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos financieros
                      td.ajuste-border-tabla.texto-left Intereses y costos asociados con deuda
                      td.texto-left Reducen la utilidad antes de impuestos
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad
                      td.ajuste-border-tabla.texto-left Resultado después de cubrir costos y gastos
                      td.texto-left Mide el beneficio generado por la operación
          Separador
          #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.3 Costos fijos, costos variables y costos mixtos
          p.mb-5 Los costos fijos se mantienen estables, los variables cambian según la actividad y los mixtos combinan ambos comportamientos; por ello, deben clasificarse correctamente para calcular el punto de equilibrio, así:
      .row.justify-content-center.mb-0
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img10.png', alt="" ).m-auto
              h4.text-center Costos fijos
              .box___card_sinbordes_p
                p.mb-0 Permanecen relativamente constantes dentro de un rango de actividad, aunque cambie el volumen de ventas o producción. Ejemplos de estos costos son el arriendo, los salarios administrativos, los seguros, la vigilancia y la depreciación.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img11.png', alt="" ).m-auto
              h4.text-center Costos variables
              .box___card_sinbordes_p
                p.mb-0 Cambian de acuerdo con el nivel de producción o venta. En una empresa comercial pueden corresponder al costo de la mercancía vendida, mientras que en una empresa industrial pueden incluir materias primas, empaques o comisiones por unidad.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img12.png', alt="" ).m-auto
              h4.text-center Costos mixtos
              .box___card_sinbordes_p
                p.mb-0 Combinan una parte fija y una parte variable. Un ejemplo puede ser un servicio público que incluye un cargo fijo mensual y un consumo que aumenta según la actividad de la empresa.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Margen de contribución como base del análisis operativo
      p.mb-5 El margen de contribución indica cuánto queda de las ventas después de cubrir los costos variables y sirve para cubrir costos fijos y generar utilidad. Puede calcularse de forma unitaria o porcentual, y es clave para analizar precios, volumen de ventas, punto de equilibrio y utilidad esperada. (Suaza, 2024). Existe margen de contribución unitario, total y porcentual; estos se calculan así:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img13.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Margen de contribución unitario ").ajuste-cajaAcordion.ajuste-vineta
              p La fórmula es:
              .row.align-items-center.mb-3
                .col-xl-12
                  .box___style_2
                    h5.mb-0 Margen de contribución unitario = Precio de venta unitario - Costo variable unitario 
              p.mb-3 Se interpreta como el valor que aporta cada unidad para cubrir costos fijos y generar utilidad.
            .row(titulo="Margen de contribución total").ajuste-cajaAcordion.ajuste-vineta
              p La fórmula es:
              .row.align-items-center.mb-3
                .col-xl-12
                  .box___style_2
                    h5.mb-0 Margen de contribución total = Ventas totales - Costos variables totales  
              p.mb-3 Se interpreta como el valor total disponible para cubrir costos fijos.
            .row(titulo="Margen de contribución porcentual").ajuste-cajaAcordion.ajuste-vineta
              p La fórmula es:
              .row.align-items-center.mb-3
                .col-xl-12
                  .box___style_2
                    h5.mb-0 Margen de contribución porcentual = Margen de contribución total / Ventas × 100   
              p.mb-3 Se interpreta como el porcentaje de cada peso vendido que contribuye a cubrir costos fijos y utilidad.
      p.mb-5 A continuación, se presenta el siguiente ejemplo:
      .box___style_3.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            h5 Ejemplo:
            p.mb-0 Una empresa vende un producto a $50.000 por unidad y su costo variable unitario es de $30.000.
            p Margen de contribución unitario = $50.000 - $30.000 = $20.000
            p.mb-0 Esto significa que cada unidad vendida aporta $20.000 para cubrir costos fijos y generar utilidad.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img14.png', alt='').m-auto
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Utilidad operacional y utilidad neta en la evaluación financiera
      .color___box_1
        .px-5
          p.mb-5 La utilidad operacional muestra el resultado de la actividad principal antes de gastos financieros e impuestos, y permite evaluar si la operación genera ganancias suficientes. La utilidad neta, en cambio, refleja el resultado final después de descontar financiación, impuestos y otros conceptos, por lo que puede estar influenciada por deuda o cargas tributarias. Las fórmulas básicas son:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Utilidades utilizadas en la evaluación financiera
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla diferencia los tipos de utilidad que se utilizan en el análisis de equilibrio, apalancamiento y generación de valor.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Resultado
                      th.ajuste-border-tabla.texto-left Fórmula básica
                      th.texto-left Uso financiero
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad bruta
                      td.ajuste-border-tabla.texto-left Ventas - costo de ventas
                      td.texto-left Mide el resultado después de cubrir el costo directo de lo vendido
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                      td.ajuste-border-tabla.texto-left Utilidad bruta - gastos operacionales
                      td.texto-left Evalúa el resultado de la actividad principal de la empresa
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad antes de impuestos
                      td.ajuste-border-tabla.texto-left Utilidad operacional - gastos financieros
                      td.texto-left Muestra el resultado después del efecto de la financiación
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad neta
                      td.ajuste-border-tabla.texto-left Utilidad antes de impuestos - impuestos
                      td.texto-left Presenta la ganancia final del periodo
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold UODI
                      td.ajuste-border-tabla.texto-left Utilidad operacional × (1 - tasa de impuesto)
                      td.texto-left Sirve como base para calcular el EVA
          p.mb-5 La UODI muestra el resultado operativo después de impuestos, sin incluir el efecto de la deuda. En el cálculo del EVA, se compara con el costo del capital invertido para determinar si la empresa crea o destruye valor. (UNIR, 2024). A continuación, se presenta un ejemplo práctico.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img15.jpg')})` }")
            .bloque-texto-g__texto.p-4
              h5 Ejemplo aplicado:
              br
              p Una empresa comercial presenta la siguiente información mensual:
              ul.fa-ul.mb-0
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-dollar-sign
                  | 
                  p.mb-0 Ventas: $120.000.000
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-dollar-sign
                  | 
                  p.mb-0 Costo de ventas: $72.000.000
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-dollar-sign
                  | 
                  p.mb-0 Gastos de administración y ventas: $28.000.000
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-dollar-sign
                  | 
                  p.mb-0 Gastos financieros: $5.000.000
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-dollar-sign
                  | 
                  p.mb-0 Tasa de impuesto: 35 %
      .color___box_1
        .px-5
          p.mb-5 Para el desarrollo del ejemplo, se realizan estos cálculos:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Cálculo de utilidades para evaluación financiera
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla muestra cómo se calculan la utilidad operacional, la utilidad neta y la UODI a partir del estado de resultados.
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
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo de ventas
                      td.ajuste-border-tabla.texto-left Dato suministrado
                      td.texto-left $72.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad bruta
                      td.ajuste-border-tabla.texto-left $120.000.000 - $72.000.000
                      td.texto-left $48.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos operacionales
                      td.ajuste-border-tabla.texto-left Dato suministrado
                      td.texto-left $28.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                      td.ajuste-border-tabla.texto-left $48.000.000 - $28.000.000
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
                      td.ajuste-border-tabla.texto-left.text-weight-bold Impuesto
                      td.ajuste-border-tabla.texto-left $15.000.000 × 35 %
                      td.texto-left $5.250.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad neta
                      td.ajuste-border-tabla.texto-left $15.000.000 - $5.250.000
                      td.texto-left $9.750.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold UODI
                      td.ajuste-border-tabla.texto-left $20.000.000 × (1 - 35 %)
                      td.texto-left $13.000.000
          .row.justify-content-center.align-items-center
            .col-xl.mb-4.mb-lg-0
              .box___style_4.fit___box_1(data-aos="fade-right")
                p.mb-0 #[b Interpretación del ejemplo:] La empresa genera una utilidad operacional de $20.000.000, lo que evidencia un resultado positivo antes de deuda e impuestos. Sin embargo, la utilidad neta baja a $9.750.000 después de gastos financieros e impuestos, mostrando el efecto de la financiación sobre el resultado final.
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img16.jpg', alt='').m-auto
            .col-xl
              .box___style_5.fit___box_2(data-aos="fade-left")
                p.mb-0 La UODI es de $13.000.000 y permite evaluar la generación de valor, porque refleja el resultado operativo después de impuestos sin incluir el efecto de la deuda. Si el costo del capital invertido supera esta UODI, la empresa no estaría generando valor económico.
      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.6 Datos necesarios para calcular punto de equilibrio, apalancamiento y EVA
      p.mb-5 Antes de calcular el punto de equilibrio, el apalancamiento y el EVA, es necesario organizar la información financiera que servirá de base para cada fórmula. Aunque estas herramientas tienen propósitos diferentes, todas requieren datos confiables, clasificados y correspondientes al mismo periodo de análisis.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Punto de equilibrio en unidades")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Punto de equilibrio en unidades
              p Requiere costos fijos, precio de venta unitario y costo variable unitario. Permite determinar las unidades mínimas que se deben vender para no perder ni ganar.
              h5 Fórmula:
              .box___style_2.fit___style_2
                h5.mb-0 Punto de equilibrio en unidades = Costos fijos / Margen de contribución unitario 
        .py-3.py-md-4(titulo="Punto de equilibrio en ventas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Punto de equilibrio en ventas
              p Requiere costos fijos y margen de contribución porcentual. Permite identificar el valor mínimo de ventas necesario para cubrir los costos totales.
              h5 Fórmula:
              .box___style_2.fit___style_2
                h5.mb-0 Punto de equilibrio en ventas = Costos fijos / Margen de contribución porcentual
        .py-3.py-md-4(titulo="Apalancamiento operativo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Apalancamiento operativo
              p Requiere ventas, costos variables, costos fijos y utilidad operacional. Permite medir la sensibilidad de la utilidad operacional frente a cambios en las ventas.
              h5 Fórmula: 
              .box___style_2.fit___style_2
                h5.mb-0 Grado de apalancamiento operativo = Margen de contribución / Utilidad operacional 
        .py-3.py-md-4(titulo="Apalancamiento financiero")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Apalancamiento financiero
              p Requiere utilidad operacional, gastos financieros y utilidad antes de impuestos. Permite analizar el efecto de los gastos financieros sobre el resultado de la empresa.
              h5 Fórmula: 
              .box___style_2.fit___style_2
                h5.mb-0 Grado de apalancamiento financiero = Utilidad operacional / Utilidad antes de impuestos 
        .py-3.py-md-4(titulo="Valor Económico Agregado, EVA")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Valor Económico Agregado, EVA
              p Requiere UODI, capital invertido y costo de capital. Permite determinar si la empresa crea o destruye valor económico.
              h5 Fórmula:
              .box___style_2.fit___style_2
                h5.mb-0 EVA = UODI - (Capital invertido × Costo de capital) 
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img22.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Con el fin de facilitar la comprensión, se expone el siguiente ejemplo:
          br 
          br
          h5 Ejemplo aplicado
          br
          br
          p La empresa Comercial Horizonte S.A.S. desea preparar la información necesaria para calcular sus herramientas financieras. Durante el mes vendió 1.200 unidades a $60.000 cada una. El costo variable unitario fue de $36.000, los costos fijos fueron de $18.000.000, los gastos financieros de $3.000.000, la tasa de impuesto del 35 %, el capital invertido de $110.000.000 y el costo de capital estimado del 12 % anual.
      .color___box_1
        .px-5
          p.mb-5 Para desarrollar el ejercicio se organiza la información así:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Organización de datos para calcular herramientas financieras
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para presentar cómo organizar los datos antes de aplicar fórmulas financieras.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Dato
                      th.ajuste-border-tabla.texto-left Valor
                      th.texto-left Uso en el análisis
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Precio de venta unitario
                      td.ajuste-border-tabla.texto-left $60.000
                      td.texto-left Margen de contribución y punto de equilibrio
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Unidades vendidas
                      td.ajuste-border-tabla.texto-left 1.200
                      td.texto-left Ventas totales y utilidad operacional
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo variable unitario
                      td.ajuste-border-tabla.texto-left $36.000
                      td.texto-left Margen de contribución y costo variable total
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos
                      td.ajuste-border-tabla.texto-left $18.000.000
                      td.texto-left Punto de equilibrio y apalancamiento operativo
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos financieros
                      td.ajuste-border-tabla.texto-left $3.000.000
                      td.texto-left Apalancamiento financiero
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tasa de impuesto
                      td.ajuste-border-tabla.texto-left 35 %
                      td.texto-left Cálculo de UODI
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Capital invertido
                      td.ajuste-border-tabla.texto-left $110.000.000
                      td.texto-left Cálculo de EVA
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo de capital anual
                      td.ajuste-border-tabla.texto-left 12 %
                      td.texto-left Cálculo del cargo por capital
      p.mb-5 Con los datos anteriores se obtienen resultados preliminares para los capítulos siguientes: ventas totales por $72.000.000, costo variable total por $43.200.000 y margen de contribución total por $28.800.000, calculado al restar los costos variables de las ventas. Los resultados preliminares se presentan el siguiente tabla:
      .color___box_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Resultados preliminares para el análisis financiero
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla muestra cálculos iniciales que sirven como base para punto de equilibrio, apalancamiento y EVA.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.ajuste-border-tabla.texto-left Cálculo
                      th.texto-left Resultado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas totales
                      td.ajuste-border-tabla.texto-left 1.200 × $60.000
                      td.texto-left $72.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo variable total
                      td.ajuste-border-tabla.texto-left 1.200 × $36.000
                      td.texto-left $43.200.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución total
                      td.ajuste-border-tabla.texto-left $72.000.000 - $43.200.000
                      td.texto-left $28.800.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución unitario
                      td.ajuste-border-tabla.texto-left $60.000 - $36.000
                      td.texto-left $24.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                      td.ajuste-border-tabla.texto-left $28.800.000 - $18.000.000
                      td.texto-left $10.800.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad antes de impuestos
                      td.ajuste-border-tabla.texto-left $10.800.000 - $3.000.000
                      td.texto-left $7.800.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold UODI
                      td.ajuste-border-tabla.texto-left $10.800.000 × (1 - 35 %)
                      td.texto-left $7.020.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cargo por capital anual
                      td.ajuste-border-tabla.texto-left $110.000.000 × 12 %
                      td.texto-left $13.200.000
          .row.justify-content-center.align-items-center           
            .col-xl-8.mb-4.mb-lg-0
              p #[b Interpretación del ejemplo:] la empresa obtiene un margen de contribución total de $28.800.000, disponible para cubrir costos fijos y generar utilidad operacional. Al descontar los costos fijos, la utilidad operacional es de $10.800.000, lo que evidencia un resultado operativo mensual positivo antes de gastos financieros e impuestos.
              .box___style_1.mb-3(data-aos="zoom-in")
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t1/img23.jpg', alt='').m-auto
                  .col-xl.fit___box_container
                    p.mb-0 Los gastos financieros reducen la utilidad antes de impuestos a $7.800.000, mostrando el efecto de la deuda sobre el resultado del periodo. La UODI de $7.020.000 servirá como base para calcular el EVA, al reflejar el resultado operativo después de impuestos sin incluir la forma de financiación.
              p.mb-0 El cargo por capital anual es de $13.200.000; por tanto, para compararlo con la UODI mensual será necesario trabajar con periodos equivalentes y evitar mezclar datos mensuales con tasas o costos anuales.
            .col-xl-4.col-md-9(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/t1/img24.png", alt="").m-auto
      Separador
      #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.7 Uso de hoja electrónica para organizar fórmulas y resultados financieros
      p.mb-5 La hoja electrónica permite organizar datos financieros, construir fórmulas y presentar resultados de forma ordenada. En el análisis de punto de equilibrio, apalancamiento y EVA, facilita separar datos de entrada, cálculos e interpretación, además de comparar escenarios para anticipar el efecto de decisiones sobre precios, costos, ventas, financiación y generación de valor.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img25.svg" style="max-width: 60px").m-auto
        .col
          h3 Organización recomendada de la hoja de trabajo
      p.mb-5 La hoja debe organizarse en tres zonas: #[b datos de entrada, fórmulas y resultados]. Esta separación permite digitar la información, procesarla mediante cálculos y presentar valores que puedan interpretarse financieramente. La estructura básica de una hoja electrónica por secciones es:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Datos de entrada
                  p  En esta sección se registran los valores suministrados por la empresa.
                  p.mb-0 #[b Ejemplo:] precio de venta, costo variable, costos fijos, ventas, gastos financieros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cálculos intermedios
                  p  En esta sección se registran las operaciones necesarias para llegar al resultado.
                  p.mb-0 #[b Ejemplo:] margen de contribución, utilidad operacional, UODI, cargo por capital
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Resultados financieros
                  p  Aquí se escriben los valores finales obtenidos con las fórmulas.
                  p.mb-0 #[b Ejemplo:] punto de equilibrio, grado de apalancamiento, EVA.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Interpretación
                  p En esta sección se consigna la lectura del resultado calculado.
                  p.mb-0 #[b Ejemplo:] riesgo operativo alto, equilibrio alcanzable, generación o destrucción de valor.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Escenarios
                  p En esta sección se documentan los cambios simulados en variables.
                  p.mb-0 #[b Ejemplo:] aumento de ventas, reducción de costos, cambio en tasa de financiación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img30.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Esta separación facilita la revisión del archivo y disminuye errores de cálculo.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img25.svg" style="max-width: 60px").m-auto
        .col
          h3 Fórmulas básicas que pueden construirse
      p.mb-5 Las fórmulas deben ser claras, verificables y vinculadas a los datos de entrada, de modo que los resultados se actualicen automáticamente ante cambios en precios, costos o unidades, facilitando el análisis de escenarios sin rehacer los cálculos. Las fórmulas que pueden apoyar los cálculos son:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img31.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Ventas totales").ajuste-cajaAcordion.ajuste-vineta
              p La fórmula es:
              .row.align-items-center.mb-3
                .col-xl-12
                  .box___style_2
                    h5.mb-0 Ventas totales = Precio de venta unitario × unidades vendidas  
              p.mb-3 Se usa para determinar ingresos por ventas.
            .row(titulo="Costo variable total").ajuste-cajaAcordion.ajuste-vineta
              p La fórmula es:
              .row.align-items-center.mb-3
                .col-xl-12
                  .box___style_2
                    h5.mb-0 Costo variable total = Costo variable unitario × unidades vendidas  
              p.mb-3 Se utiliza para calcular el costo asociado al volumen.
            .row(titulo="Margen de contribución unitario").ajuste-cajaAcordion.ajuste-vineta
              p La fórmula es:
              .row.align-items-center.mb-3
                .col-xl-12
                  .box___style_2
                    h5.mb-0 Margen de contribución unitario = Precio de venta unitario - costo variable unitario 
              p.mb-3 Se utiliza para determinar el aporte de cada unidad.
            .row(titulo="Margen de contribución total").ajuste-cajaAcordion.ajuste-vineta
              p La fórmula es:
              .row.align-items-center.mb-3
                .col-xl-12
                  .box___style_2
                    h5.mb-0 Margen de contribución total = Ventas totales - costo variable total  
              p.mb-3 Se usa para cubrir costos fijos y generar utilidad.
            .row(titulo="Utilidad operacional").ajuste-cajaAcordion.ajuste-vineta
              p La fórmula es:
              .row.align-items-center.mb-3
                .col-xl-12
                  .box___style_2
                    h5.mb-0 Utilidad operacional = Margen de contribución total - costos fijos  
              p.mb-3 Evalúa el resultado operativo.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Utilidad antes de impuestos").ajuste-cajaAcordion.ajuste-vineta
              p La fórmula es:
              .row.align-items-center.mb-3
                .col-xl-12
                  .box___style_2
                    h5.mb-0 Utilidad antes de impuestos = Utilidad operacional - gastos financieros   
              p.mb-3 Analiza el efecto de la financiación.
            .row(titulo="UODI").ajuste-cajaAcordion.ajuste-vineta
              p La fórmula es:
              .row.align-items-center.mb-3
                .col-xl-12
                  .box___style_2
                    h5.mb-0 UODI = Utilidad operacional × (1 - tasa de impuesto)  
              p.mb-3 Es la base para calcular EVA.
            .row(titulo="Cargo por capital").ajuste-cajaAcordion.ajuste-vineta
              p La fórmula es:
              .row.align-items-center.mb-3
                .col-xl-12
                  .box___style_2
                    h5.mb-0 Cargo por capital = Capital invertido × costo de capital  
              p.mb-3 Es el costo de los recursos utilizados.
            .row(titulo="EVA").ajuste-cajaAcordion.ajuste-vineta
              p La fórmula es:
              .row.align-items-center.mb-3
                .col-xl-12
                  .box___style_2
                    h5.mb-0 EVA = UODI - cargo por capital  
              p.mb-3 Determina la generación o destrucción de valor.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img32.png", alt="" ).m-auto
      .box___style_3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p Para aplicar las fórmulas anteriores, se plantea un ejemplo.
            h5 Ejemplo aplicado
            p.mb-0 La empresa Comercial Horizonte S.A.S. organiza en una hoja electrónica los datos del ejercicio anterior. La finalidad es construir una plantilla que permita modificar las unidades vendidas y observar el efecto sobre ventas, margen de contribución, utilidad operacional y EVA preliminar.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img33.png', alt='').m-auto
      .color___box_2
        .px-5
          p.mb-5 Para su desarrollo, se plantea el siguiente ejemplo de hoja electrónica que organiza los cálculos financieros:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 6.
                span Ejemplo de hoja electrónica para organizar cálculos financieros
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla presenta una estructura básica de datos, fórmulas y resultados para el análisis financiero.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.ajuste-border-tabla.texto-left Dato o fórmula
                      th.texto-left Resultado
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Precio de venta unitario
                      td.ajuste-border-tabla.texto-left Dato de entrada
                      td.texto-left $60.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo variable unitario
                      td.ajuste-border-tabla.texto-left Dato de entrada
                      td.texto-left $36.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Unidades vendidas
                      td.ajuste-border-tabla.texto-left Dato de entrada
                      td.texto-left 1.200
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos
                      td.ajuste-border-tabla.texto-left Dato de entrada
                      td.texto-left $18.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos financieros
                      td.ajuste-border-tabla.texto-left Dato de entrada
                      td.texto-left $3.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tasa de impuesto
                      td.ajuste-border-tabla.texto-left Dato de entrada
                      td.texto-left 35 %
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Capital invertido
                      td.ajuste-border-tabla.texto-left Dato de entrada
                      td.texto-left $110.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo de capital mensual estimado
                      td.ajuste-border-tabla.texto-left Dato de entrada
                      td.texto-left 1 %
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas totales
                      td.ajuste-border-tabla.texto-left $60.000 × 1.200
                      td.texto-left $72.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo variable total
                      td.ajuste-border-tabla.texto-left $36.000 × 1.200
                      td.texto-left $43.200.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución total
                      td.ajuste-border-tabla.texto-left $72.000.000 - $43.200.000
                      td.texto-left $28.800.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                      td.ajuste-border-tabla.texto-left $28.800.000 - $18.000.000
                      td.texto-left $10.800.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold UODI
                      td.ajuste-border-tabla.texto-left $10.800.000 × (1 - 35 %)
                      td.texto-left $7.020.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cargo por capital mensual
                      td.ajuste-border-tabla.texto-left $110.000.000 × 1 %
                      td.texto-left $1.100.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold EVA preliminar mensual
                      td.ajuste-border-tabla.texto-left $7.020.000 - $1.100.000
                      td.texto-left $5.920.000
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img34.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p #[b Interpretación del ejemplo:] La hoja permite evidenciar que, con 1.200 unidades vendidas, la empresa genera ventas por $72.000.000, utilidad operacional de $10.800.000 y un EVA preliminar positivo de $5.920.000, lo que indica que la operación supera el costo estimado de los recursos utilizados.
              br
              br
              p Además, al modificar las unidades vendidas, los resultados deben actualizarse automáticamente, permitiendo comparar escenarios antes de tomar decisiones sobre precios, costos, financiación o metas de venta.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img25.svg" style="max-width: 60px").m-auto
            .col
              h3 Recomendaciones para el uso de la hoja electrónica
          p.mb-5 La hoja electrónica debe proteger las celdas con fórmulas, diferenciar datos de entrada y resultados, usar nombres claros y verificar que los cálculos correspondan al mismo periodo. Antes de interpretar, es necesario revisar fórmulas, rangos, unidades de medida y consistencia de datos para evitar errores que afecten las decisiones financieras. A continuación, se presenta la lista de verificación:
      .color___box_3
        .px-5
          p.mb-5 
          .row.justify-content-center.mb-0
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Lista de verificación para fórmulas financieras
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla sirve como guía para revisar la calidad de los cálculos antes de interpretar resultados.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto por revisar
                      th.ajuste-border-tabla.texto-left Pregunta de control
                      th.texto-left Cumple
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Periodo de análisis
                      td.ajuste-border-tabla.texto-left ¿Todos los datos corresponden al mismo periodo?
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Datos de entrada
                      td.ajuste-border-tabla.texto-left ¿Los valores fueron tomados de fuentes confiables?
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fórmulas
                      td.ajuste-border-tabla.texto-left ¿Las operaciones están correctamente construidas?
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Celdas vinculadas
                      td.ajuste-border-tabla.texto-left ¿Los resultados cambian al modificar los datos de entrada?
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tasas
                      td.ajuste-border-tabla.texto-left ¿Las tasas anuales, mensuales o diarias están convertidas correctamente?
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos
                      td.ajuste-border-tabla.texto-left ¿Los costos fijos y variables están separados?
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultados
                      td.ajuste-border-tabla.texto-left ¿Los valores obtenidos tienen interpretación financiera?
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Escenarios
                      td.ajuste-border-tabla.texto-left ¿La hoja permite comparar alternativas de decisión?
                      td.texto-left Sí / No

</template>

<script>
export default {
  name: 'Tema1',
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
