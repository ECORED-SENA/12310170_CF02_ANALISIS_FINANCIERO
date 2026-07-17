<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-3 Las decisiones financieras no dependen únicamente de conocer cuánto vende o cuánto gana una empresa, sino de comprender si la operación cubre sus costos, si el nivel de deuda es sostenible y si los recursos invertidos realmente generan valor. En la práctica, una empresa puede presentar utilidades y, aun así, no estar creando valor económico; también puede aumentar sus ventas, pero quedar expuesta a mayores riesgos por el peso de sus costos fijos o de sus obligaciones financieras.
      .row.justify-content-center.align-items-center           
        .col-xl-8.mb-4.mb-lg-0
          .box___style_1.mb-3(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 Las herramientas financieras para la generación de valor orientan el uso de la información financiera actual para calcular e interpretar el punto de equilibrio, el apalancamiento operativo y financiero, y el Valor Económico Agregado, EVA. Estos instrumentos permiten analizar la relación entre ventas, costos, gastos, utilidad, deuda, capital invertido y costo de capital, con el fin de evaluar el desempeño operativo y financiero de la empresa.
          p.mb-0 Su aplicación facilita la toma de decisiones relacionadas con precios, volumen de ventas, control de costos, estructura de financiación, rentabilidad y generación de valor. A partir de los resultados obtenidos, es posible formular recomendaciones de mejora, acciones correctivas y acciones preventivas que contribuyan a fortalecer la operación, reducir riesgos y orientar la sostenibilidad financiera del negocio.
        .col-xl-4.col-md-9(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/intro/img2.png", alt="").m-auto
        
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
