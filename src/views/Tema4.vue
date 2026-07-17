<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 4
        h1 Valor económico agregado, EVA
      p.mb-5 El Valor Económico Agregado, EVA, permite evaluar si la empresa crea valor después de cubrir costos operativos, impuestos y costo del capital invertido. A diferencia de la utilidad contable, muestra si la rentabilidad obtenida compensa los recursos utilizados, por lo que orienta decisiones de inversión, financiación, mejora y gestión financiera. (UNIR, 2024).
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Generación de valor en la empresa
      p.mb-5 La generación de valor ocurre cuando la empresa obtiene una rentabilidad superior al costo de los recursos utilizados. Implica usar eficientemente activos, capital, deuda y patrimonio, controlar costos y mejorar la rentabilidad. El EVA mide esta relación al comparar la utilidad operacional después de impuestos con el costo del capital. (Bonilla, 2010).  Lo siguiente, permite diferenciar utilidad contable, UODI y EVA en la generación de valor.
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Utilidad neta")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Utilidad neta
              p.mb-0 Representa el resultado final después de descontar costos, gastos, intereses e impuestos. Sin embargo, no muestra si la empresa cubrió el costo del capital invertido.
        .py-3.py-md-4(titulo="Utilidad operacional")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Utilidad operacional
              p.mb-0 Mide el resultado generado por la actividad principal antes de intereses e impuestos. Permite evaluar el desempeño operativo de la empresa.
        .py-3.py-md-4(titulo="UODI")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 UODI
              p.mb-0 Corresponde a la utilidad operacional después de impuestos. Sirve como base para calcular el EVA y analizar la generación de valor.
        .py-3.py-md-4(titulo="EVA")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 EVA
              p.mb-0 Indica si la empresa crea o destruye valor económico después de cubrir el costo del capital invertido.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Concepto e importancia del EVA
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_7.fit___box_5(data-aos="fade-right")
            p El EVA mide si la empresa crea o destruye valor después de cubrir gastos operativos, impuestos y el costo del capital invertido. Su importancia está en que va más allá de la utilidad contable y permite evaluar decisiones de inversión, financiación, productividad, costos y rentabilidad operativa. (Bonilla, 2010). La fórmula general es:
            .box___style_2.fit___style_2
              h5.mb-0 EVA = UODI - (capital invertido × costo de capital) 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img5.png', alt='').m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
