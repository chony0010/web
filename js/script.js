$(document).ready(function () {
  // Create the chart
  Highcharts.chart("container", {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      borderWidth: 0,
    },
    title: {
      text: " ",
      align: "left",
    },
    subtitle: {
      text: " ",
      align: "left",
    },

    accessibility: {
      enabled: false, // 접근성 기능을 비활성화
    },

    plotOptions: {
      series: {
        borderRadius: 5,
        dataLabels: [
          {
            enabled: true,
            distance: 15,
            format: "{point.name}",
            style: {
              textOutline: "none",
              fontSize: "20px",
            },
          },
          {
            enabled: true,
            distance: "-30%",
            filter: {
              property: "percentage",
              operator: ">",
              value: 5,
            },
            format: "{point.y:.1f}%",
            style: {
              fontSize: "20px",
              textOutline: "none",
            },
          },
        ],
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: ' +
        "<b>{point.y:.2f}%</b> of total<br/>",
    },
    series: [
      {
        name: "Browsers",
        colorByPoint: true,
        data: [
          {
            name: " ",
            y: 62,
            drilldown: "Chrome",
          },
          {
            name: "Endangered Species",
            y: 28,
            drilldown: null,
          },
        ],
      },
    ],
    drilldown: {
      series: [],
    },
    exporting: {
      enabled: false, // 내보내기(햄버거 메뉴) 비활성화
    },
  });

  console.log("정상작동 됩니다!");
});
