<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario de verificación sobre herramientas financieras para generar valor',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión y aplicación de herramientas financieras para calcular e interpretar el punto de equilibrio, el margen de contribución, el apalancamiento operativo, el apalancamiento financiero y el Valor Económico Agregado, EVA, mediante el análisis de situaciones empresariales y la formulación de recomendaciones de mejora, acciones correctivas y preventivas.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal del punto de equilibrio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar la utilidad neta después de impuestos calculados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar el nivel de ventas donde no hay utilidad ni pérdida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Calcular el costo del capital invertido por los propietarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Medir el efecto de la deuda sobre la utilidad del ejercicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. <em>Board</em> del <em>software</em> EAGLE.',
        },
        {
          id: 2,
          texto:
            'Una empresa vende un producto a $90.000 y su costo variable unitario es de $54.000. ¿Cuál es el margen de contribución unitario?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$36.000',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '$54.000',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$90.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$144.000',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Si una empresa tiene costos fijos de $24.000.000 y margen de contribución unitario de $30.000, ¿cuántas unidades debe vender para alcanzar el punto de equilibrio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '600 unidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '700 unidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '800 unidades.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '900 unidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una empresa tiene margen de contribución porcentual de 40 % y costos fijos de $20.000.000. ¿Cuál es el punto de equilibrio en ventas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$8.000.000',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$40.000.000',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$50.000.000',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '$60.000.000',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué ocurre si aumenta el costo variable unitario y el precio de venta permanece igual?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta el margen de contribución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El punto de equilibrio desaparece.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La utilidad esperada se mantiene igual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuye el margen de contribución.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Una empresa desea obtener una utilidad de $12.000.000. Tiene costos fijos de $18.000.000 y margen de contribución unitario de $30.000. ¿Cuántas unidades debe vender?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1.000 unidades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '400 unidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '600 unidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '900 unidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál situación aumenta el punto de equilibrio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducción de costos fijos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumento de costos fijos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumento del margen de contribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminución del costo variable unitario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué mide el apalancamiento operativo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El efecto de los costos fijos sobre la utilidad operacional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El efecto de los impuestos sobre el patrimonio económico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El rendimiento mínimo esperado por los propietarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El valor de los activos corrientes de la unidad económica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Una empresa tiene margen de contribución de $60.000.000 y utilidad operacional de $20.000.000. ¿Cuál es el grado de apalancamiento operativo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0,33',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '2,00',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '3,00',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '4,00',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Si el grado de apalancamiento operativo es 2,5 y las ventas aumentan 10 %, ¿qué cambio aproximado se espera en la utilidad operacional?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '10 %',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '15 %',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '35 %',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '25 %',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué mide el apalancamiento financiero?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El efecto de los gastos financieros sobre los resultados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La participación de inventarios en el activo de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El nivel mínimo de ventas para no perder en el ciclo fiscal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La diferencia entre costos fijos y variables de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Una empresa tiene utilidad operacional de $30.000.000 y gastos financieros de $6.000.000. ¿Cuál es la utilidad antes de impuestos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$6.000.000',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$24.000.000',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '$30.000.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$36.000.000',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Con utilidad operacional de $30.000.000 y utilidad antes de impuestos de $24.000.000, ¿cuál es el grado de apalancamiento financiero?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0,80',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '5,00',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '2,40',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '1,25',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué representa el apalancamiento total?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El efecto conjunto del apalancamiento operativo y financiero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La suma de los activos corrientes y los pasivos corrientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El costo total de la mercancía vendida por la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La utilidad de la organización después de los impuestos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Si el apalancamiento operativo es 2,0 y el apalancamiento financiero es 1,5, ¿cuál es el apalancamiento total?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0,50',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '1,50',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '2,00',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '3,00',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Cuál es la fórmula general del EVA?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ventas - costos variables de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Costos fijos / margen de contribución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'UODI - (capital invertido × costo de capital).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Utilidad neta de la empresa / ventas × 100.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Una empresa tiene utilidad operacional de $80.000.000 y tasa de impuesto de 35 %. ¿Cuál es la UODI?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$80.000.000',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$108.000.000',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$28.000.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$52.000.000',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Una empresa tiene capital invertido de $300.000.000 y costo de capital de 12 %. ¿Cuál es el cargo por capital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$36.000.000',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '$300.000.000',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$12.000.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$25.000.000',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Una empresa tiene UODI de $52.000.000 y cargo por capital de $36.000.000. ¿Cuál es el EVA?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '-$16.000.000',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$16.000.000',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '$36.000.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$88.000.000',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál recomendación es más adecuada si una empresa presenta punto de equilibrio alto, apalancamiento operativo elevado y EVA negativo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar costos fijos para ampliar la estructura operativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ignorar el resultado porque la utilidad contable es suficiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Revisar precios, costos, volumen de ventas y capital invertido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar deuda sin revisar la capacidad de pago.',
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
}
</script>
