var spec2 = "js/daily_cost_bar_chart.json";
vegaEmbed('#bar_chart', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);