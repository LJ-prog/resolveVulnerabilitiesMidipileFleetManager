<template>
  <div id="chart"/>
</template>

<script>
import { ref, defineComponent, h, onMounted } from 'vue'
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
    props: {
            type: { type: String},
            width: { default: '100%' },
            options: { type: Object},
            series: { type: Array, required: true, default: () => []},
            height: { default: 'auto' }
        },
    setup(props) {
        const el = ref(null);
        const chart = ref(null);
        const init = () => {
            const newOptions = {
                chart: {
                    type: props.type || props.options.chart.type || 'line',
                    height: props.height,
                    width: props.width,
                    events: {}
                },
                series: props.series
                }
        const config = extend(props.options, newOptions);
        chart.value = new VueApexCharts(el.value, config)
        return chart.value.render()
        };
    const refresh = () => {
        destroy();
        return init();
        };
    const destroy = () => {
        chart.value.destroy()
        };
    onMounted(() => {
        init();
        });
    return () =>
        h("div", {
            ref: el
        });
    },
})
</script>


<style scoped>
</style>
