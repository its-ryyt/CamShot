(function(factory) {
  typeof define === 'function' && define.amd ? define(factory) :
      factory();
})((function() {
  'use strict';

  const {
      merge: merge
  } = window._;
  const echartSetOption = (e, t, o, r) => {
      const {
          breakpoints: a,
          resize: n
      } = window.phoenix.utils, s = t => {
          Object.keys(t).forEach((o => {
              window.innerWidth > a[o] && e.setOption(t[o]);
          }));
      }, i = document.body;
      e.setOption(merge(o(), t));
      const c = document.querySelector(".navbar-vertical-toggle");
      c && c.addEventListener("navbar.vertical.toggle", (() => {
          e.resize(), r && s(r);
      })), n((() => {
          e.resize(), r && s(r);
      })), r && s(r), i.addEventListener("clickControl", (({
          detail: {
              control: r
          }
      }) => {
          "Theme" === r && e.setOption(window._.merge(o(), t));
      }));
  };
  const echartTabs = document.querySelectorAll("[data-tab-has-echarts]");
  echartTabs && echartTabs.forEach((e => {
      e.addEventListener("shown.bs.tab", (e => {
          const t = e.target,
              {
                  hash: o
              } = t,
              r = o || t.dataset.bsTarget,
              a = document.getElementById(r.substring(1))?.querySelector("[data-echart-tab]");
          a && window.echarts.init(a).resize();
      }));
  }));
  const tooltipFormatter = (e, t = "MMM DD") => {
      let o = "";
      return e.forEach((e => {
          o += `<div class='ms-1'>\n        <h6 class="text-body-tertiary"><span class="fas fa-circle me-1 fs-10" style="color:${e.borderColor?e.borderColor:e.color}"></span>\n          ${e.seriesName} : ${"object"==typeof e.value?e.value[1]:e.value}\n        </h6>\n      </div>`;
      })), `<div>\n            <p class='mb-2 text-body-tertiary'>\n              ${window.dayjs(e[0].axisValue).isValid()?window.dayjs(e[0].axisValue).format(t):e[0].axisValue}\n            </p>\n            ${o}\n          </div>`
  };
  const handleTooltipPosition = ([e, , t, , o]) => {
      if (window.innerWidth <= 540) {
          const r = t.offsetHeight,
              a = {
                  top: e[1] - r - 20
              };
          return a[e[0] < o.viewSize[0] / 2 ? "left" : "right"] = 5, a
      }
      return null
  };

  const newCustomersChartsInit = () => {
      const {
          getColor: o,
          getData: t,
          getDates: e
      } = window.phoenix.utils, a = document.querySelector(".echarts-new-customers"), i = o => {
          const t = window.dayjs(o[0].axisValue),
              e = window.dayjs(o[0].axisValue).subtract(1, "month"),
              a = o.map(((o, a) => ({
                  value: o.value,
                  date: a > 0 ? e : t,
                  color: o.color
              })));
          let i = "";
          return a.forEach(((o, t) => {
              i += `<h6 class="fs-9 text-body-tertiary ${t>0&&"mb-0"}"><span class="fas fa-circle me-2" style="color:${o.color}"></span>\n      ${o.date.format("MMM DD")} : ${o.value}\n    </h6>`;
          })), `<div class='ms-1'>\n              ${i}\n            </div>`
      };
      if (a) {
          const r = t(a, "echarts"),
              s = window.echarts.init(a);
          echartSetOption(s, r, (() => ({
              tooltip: {
                  trigger: "axis",
                  padding: 10,
                  backgroundColor: o("body-highlight-bg"),
                  borderColor: o("border-color"),
                  textStyle: {
                      color: o("light-text-emphasis")
                  },
                  borderWidth: 1,
                  transitionDuration: 0,
                  axisPointer: {
                      type: "none"
                  },
                  formatter: i
              },
              xAxis: [{
                  type: "category",
                  data: e(new Date("5/1/2022"), new Date("5/7/2022"), 864e5),
                  show: !0,
                  boundaryGap: !1,
                  axisLine: {
                      show: !0,
                      lineStyle: {
                          color: o("secondary-bg")
                      }
                  },
                  axisTick: {
                      show: !1
                  },
                  axisLabel: {
                      formatter: o => window.dayjs(o).format("DD MMM"),
                      showMinLabel: !0,
                      showMaxLabel: !1,
                      color: o("secondary-color"),
                      align: "left",
                      interval: 5,
                      fontFamily: "Nunito Sans",
                      fontWeight: 600,
                      fontSize: 12.8
                  }
              }, {
                  type: "category",
                  position: "bottom",
                  show: !0,
                  data: e(new Date("5/1/2022"), new Date("5/7/2022"), 864e5),
                  axisLabel: {
                      formatter: o => window.dayjs(o).format("DD MMM"),
                      interval: 130,
                      showMaxLabel: !0,
                      showMinLabel: !1,
                      color: o("secondary-color"),
                      align: "right",
                      fontFamily: "Nunito Sans",
                      fontWeight: 600,
                      fontSize: 12.8
                  },
                  axisLine: {
                      show: !1
                  },
                  axisTick: {
                      show: !1
                  },
                  splitLine: {
                      show: !1
                  },
                  boundaryGap: !1
              }],
              yAxis: {
                  show: !1,
                  type: "value",
                  boundaryGap: !1
              },
              series: [{
                  type: "line",
                  data: [150, 100, 300, 200, 250, 180, 250],
                  showSymbol: !1,
                  symbol: "circle",
                  lineStyle: {
                      width: 2,
                      color: o("secondary-bg")
                  },
                  emphasis: {
                      lineStyle: {
                          color: o("secondary-bg")
                      }
                  }
              }, {
                  type: "line",
                  data: [200, 150, 250, 100, 500, 400, 600],
                  lineStyle: {
                      width: 2,
                      color: o("primary")
                  },
                  showSymbol: !1,
                  symbol: "circle"
              }],
              grid: {
                  left: 0,
                  right: 0,
                  top: 5,
                  bottom: 20
              }
          })));
      }
  };

  const {
      echarts: echarts$2
  } = window, payingCustomerChartInit = () => {
      const {
          getData: t,
          getColor: o
      } = window.phoenix.utils, e = document.querySelector(".echarts-paying-customer-chart");
      if (e) {
          const i = t(e, "options"),
              r = echarts$2.init(e);
          echartSetOption(r, i, (() => ({
              tooltip: {
                  trigger: "item",
                  padding: [7, 10],
                  backgroundColor: o("body-highlight-bg"),
                  borderColor: o("border-color"),
                  textStyle: {
                      color: o("light-text-emphasis")
                  },
                  borderWidth: 1,
                  position: (...t) => handleTooltipPosition(t),
                  transitionDuration: 0,
                  formatter: t => `<strong>${t.seriesName}:</strong> ${t.value}%`
              },
              legend: {
                  show: !1
              },
              series: [{
                  type: "gauge",
                  center: ["50%", "60%"],
                  name: "Paying customer",
                  startAngle: 180,
                  endAngle: 0,
                  min: 0,
                  max: 100,
                  splitNumber: 12,
                  itemStyle: {
                      color: o("primary")
                  },
                  progress: {
                      show: !0,
                      roundCap: !0,
                      width: 12,
                      itemStyle: {
                          shadowBlur: 0,
                          shadowColor: "#0000"
                      }
                  },
                  pointer: {
                      show: !1
                  },
                  axisLine: {
                      roundCap: !0,
                      lineStyle: {
                          width: 12,
                          color: [
                              [1, o("primary-bg-subtle")]
                          ]
                      }
                  },
                  axisTick: {
                      show: !1
                  },
                  splitLine: {
                      show: !1
                  },
                  axisLabel: {
                      show: !1
                  },
                  title: {
                      show: !1
                  },
                  detail: {
                      show: !1
                  },
                  data: [{
                      value: 30
                  }]
              }]
          })));
      }
  };

  const projectionVsActualChartInit = () => {
      const {
          getColor: t,
          getData: o,
          getPastDates: e
      } = window.phoenix.utils, i = document.querySelector(".echart-projection-actual"), r = e(10), a = [44485, 20428, 47302, 45180, 31034, 46358, 26581, 36628, 38219, 43256], n = [38911, 29452, 31894, 47876, 31302, 27731, 25490, 30355, 27176, 30393];
      if (i) {
          const e = o(i, "echarts"),
              l = window.echarts.init(i);
          echartSetOption(l, e, (() => ({
              color: [t("primary"), t("tertiary-bg")],
              tooltip: {
                  trigger: "axis",
                  padding: [7, 10],
                  backgroundColor: t("body-highlight-bg"),
                  borderColor: t("border-color"),
                  textStyle: {
                      color: t("light-text-emphasis")
                  },
                  borderWidth: 1,
                  transitionDuration: 0,
                  axisPointer: {
                      type: "none"
                  },
                  position: (...t) => handleTooltipPosition(t),
                  formatter: t => tooltipFormatter(t)
              },
              legend: {
                  data: ["Projected revenue", "Actual revenue"],
                  right: "right",
                  width: "100%",
                  itemWidth: 16,
                  itemHeight: 8,
                  itemGap: 20,
                  top: 3,
                  inactiveColor: t("quaternary-color"),
                  textStyle: {
                      color: t("body-color"),
                      fontWeight: 600,
                      fontFamily: "Nunito Sans"
                  }
              },
              xAxis: {
                  type: "category",
                  axisLabel: {
                      color: t("secondary-color"),
                      formatter: t => window.dayjs(t).format("MMM DD"),
                      interval: 3,
                      fontFamily: "Nunito Sans",
                      fontWeight: 600,
                      fontSize: 12.8
                  },
                  data: r,
                  axisLine: {
                      lineStyle: {
                          color: t("tertiary-bg")
                      }
                  },
                  axisTick: !1
              },
              yAxis: {
                  axisPointer: {
                      type: "none"
                  },
                  axisTick: "none",
                  splitLine: {
                      interval: 5,
                      lineStyle: {
                          color: t("secondary-bg")
                      }
                  },
                  axisLine: {
                      show: !1
                  },
                  axisLabel: {
                      fontFamily: "Nunito Sans",
                      fontWeight: 600,
                      fontSize: 12.8,
                      color: t("secondary-color"),
                      margin: 20,
                      verticalAlign: "bottom",
                      formatter: t => `$${t.toLocaleString()}`
                  }
              },
              series: [{
                  name: "Projected revenue",
                  type: "bar",
                  barWidth: "6px",
                  data: n,
                  barGap: "30%",
                  label: {
                      show: !1
                  },
                  itemStyle: {
                      borderRadius: [2, 2, 0, 0],
                      color: t("primary")
                  }
              }, {
                  name: "Actual revenue",
                  type: "bar",
                  data: a,
                  barWidth: "6px",
                  barGap: "30%",
                  label: {
                      show: !1
                  },
                  z: 10,
                  itemStyle: {
                      borderRadius: [2, 2, 0, 0],
                      color: t("info-bg-subtle")
                  }
              }],
              grid: {
                  right: 0,
                  left: 3,
                  bottom: 0,
                  top: "15%",
                  containLabel: !0
              },
              animation: !1
          })));
      }
  };

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const leaftletPoints = [{
      lat: 53.958332,
      long: -1.080278,
      name: "Diana Meyer",
      street: "Slude Strand 27",
      location: "1130 Kobenhavn"
  }, {
      lat: 52.958332,
      long: -1.080278,
      name: "Diana Meyer",
      street: "Slude Strand 27",
      location: "1130 Kobenhavn"
  }, {
      lat: 51.958332,
      long: -1.080278,
      name: "Diana Meyer",
      street: "Slude Strand 27",
      location: "1130 Kobenhavn"
  }, {
      lat: 53.958332,
      long: -1.080278,
      name: "Diana Meyer",
      street: "Slude Strand 27",
      location: "1130 Kobenhavn"
  }, {
      lat: 54.958332,
      long: -1.080278,
      name: "Diana Meyer",
      street: "Slude Strand 27",
      location: "1130 Kobenhavn"
  }, {
      lat: 55.958332,
      long: -1.080278,
      name: "Diana Meyer",
      street: "Slude Strand 27",
      location: "1130 Kobenhavn"
  }, {
      lat: 53.908332,
      long: -1.080278,
      name: "Diana Meyer",
      street: "Slude Strand 27",
      location: "1130 Kobenhavn"
  }, {
      lat: 53.008332,
      long: -1.080278,
      name: "Diana Meyer",
      street: "Slude Strand 27",
      location: "1130 Kobenhavn"
  }, {
      lat: 53.158332,
      long: -1.080278,
      name: "Diana Meyer",
      street: "Slude Strand 27",
      location: "1130 Kobenhavn"
  }, {
      lat: 53.000032,
      long: -1.080278,
      name: "Diana Meyer",
      street: "Slude Strand 27",
      location: "1130 Kobenhavn"
  }, {
      lat: 52.292001,
      long: -2.22,
      name: "Anke Schroder",
      street: "Industrivej 54",
      location: "4140 Borup"
  }, {
      lat: 52.392001,
      long: -2.22,
      name: "Anke Schroder",
      street: "Industrivej 54",
      location: "4140 Borup"
  }, {
      lat: 51.492001,
      long: -2.22,
      name: "Anke Schroder",
      street: "Industrivej 54",
      location: "4140 Borup"
  }, {
      lat: 51.192001,
      long: -2.22,
      name: "Anke Schroder",
      street: "Industrivej 54",
      location: "4140 Borup"
  }, {
      lat: 52.292001,
      long: -2.22,
      name: "Anke Schroder",
      street: "Industrivej 54",
      location: "4140 Borup"
  }, {
      lat: 54.392001,
      long: -2.22,
      name: "Anke Schroder",
      street: "Industrivej 54",
      location: "4140 Borup"
  }, {
      lat: 51.292001,
      long: -2.22,
      name: "Anke Schroder",
      street: "Industrivej 54",
      location: "4140 Borup"
  }, {
      lat: 52.102001,
      long: -2.22,
      name: "Anke Schroder",
      street: "Industrivej 54",
      location: "4140 Borup"
  }, {
      lat: 52.202001,
      long: -2.22,
      name: "Anke Schroder",
      street: "Industrivej 54",
      location: "4140 Borup"
  }, {
      lat: 51.063202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 51.363202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 51.463202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 51.563202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 51.763202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 51.863202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 51.963202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 51.000202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 51.000202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 51.163202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 52.263202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 53.463202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 55.163202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 56.263202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 56.463202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 56.563202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 56.663202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 56.763202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 56.863202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 56.963202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 57.973202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 57.163202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 51.163202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 51.263202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 51.363202,
      long: -1.308,
      name: "Tobias Vogel",
      street: "Mollebakken 33",
      location: "3650 Olstykke"
  }, {
      lat: 51.409,
      long: -2.647,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.68,
      long: -1.49,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 50.259998,
      long: -5.051,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 54.906101,
      long: -1.38113,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.383331,
      long: -1.466667,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.483002,
      long: -2.2931,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 51.509865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 51.109865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 51.209865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 51.309865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 51.409865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 51.609865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 51.709865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 51.809865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 51.909865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 52.109865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 52.209865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 52.309865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 52.409865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 52.509865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 52.609865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 52.709865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 52.809865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 52.909865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 52.519865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 52.529865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 52.539865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.549865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 52.549865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.109865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.209865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.319865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.329865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.409865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.559865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.619865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.629865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.639865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.649865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.669865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.669865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.719865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.739865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.749865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.759865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.769865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.769865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.819865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.829865,
      long: -.118092,
      name: "Richard Hendricks",
      street: "37 Seafield Place",
      location: "London"
  }, {
      lat: 53.483959,
      long: -2.244644,
      name: "Ethel B. Brooks",
      street: "2576 Sun Valley Road"
  }, {
      lat: 40.737,
      long: -73.923,
      name: "Marshall D. Lewis",
      street: "1489 Michigan Avenue",
      location: "Michigan"
  }, {
      lat: 39.737,
      long: -73.923,
      name: "Marshall D. Lewis",
      street: "1489 Michigan Avenue",
      location: "Michigan"
  }, {
      lat: 38.737,
      long: -73.923,
      name: "Marshall D. Lewis",
      street: "1489 Michigan Avenue",
      location: "Michigan"
  }, {
      lat: 37.737,
      long: -73.923,
      name: "Marshall D. Lewis",
      street: "1489 Michigan Avenue",
      location: "Michigan"
  }, {
      lat: 40.737,
      long: -73.923,
      name: "Marshall D. Lewis",
      street: "1489 Michigan Avenue",
      location: "Michigan"
  }, {
      lat: 41.737,
      long: -73.923,
      name: "Marshall D. Lewis",
      street: "1489 Michigan Avenue",
      location: "Michigan"
  }, {
      lat: 42.737,
      long: -73.923,
      name: "Marshall D. Lewis",
      street: "1489 Michigan Avenue",
      location: "Michigan"
  }, {
      lat: 43.737,
      long: -73.923,
      name: "Marshall D. Lewis",
      street: "1489 Michigan Avenue",
      location: "Michigan"
  }, {
      lat: 44.737,
      long: -73.923,
      name: "Marshall D. Lewis",
      street: "1489 Michigan Avenue",
      location: "Michigan"
  }, {
      lat: 45.737,
      long: -73.923,
      name: "Marshall D. Lewis",
      street: "1489 Michigan Avenue",
      location: "Michigan"
  }, {
      lat: 46.7128,
      long: 74.006,
      name: "Elizabeth C. Lyons",
      street: "4553 Kenwood Place",
      location: "Fort Lauderdale"
  }, {
      lat: 40.7128,
      long: 74.1181,
      name: "Elizabeth C. Lyons",
      street: "4553 Kenwood Place",
      location: "Fort Lauderdale"
  }, {
      lat: 14.235,
      long: 51.9253,
      name: "Ralph D. Wylie",
      street: "3186 Levy Court",
      location: "North Reading"
  }, {
      lat: 15.235,
      long: 51.9253,
      name: "Ralph D. Wylie",
      street: "3186 Levy Court",
      location: "North Reading"
  }, {
      lat: 16.235,
      long: 51.9253,
      name: "Ralph D. Wylie",
      street: "3186 Levy Court",
      location: "North Reading"
  }, {
      lat: 14.235,
      long: 51.9253,
      name: "Ralph D. Wylie",
      street: "3186 Levy Court",
      location: "North Reading"
  }, {
      lat: 15.8267,
      long: 47.9218,
      name: "Hope A. Atkins",
      street: "3715 Hillcrest Drive",
      location: "Seattle"
  }, {
      lat: 15.9267,
      long: 47.9218,
      name: "Hope A. Atkins",
      street: "3715 Hillcrest Drive",
      location: "Seattle"
  }, {
      lat: 23.4425,
      long: 58.4438,
      name: "Samuel R. Bailey",
      street: "2883 Raoul Wallenberg Place",
      location: "Cheshire"
  }, {
      lat: 23.5425,
      long: 58.3438,
      name: "Samuel R. Bailey",
      street: "2883 Raoul Wallenberg Place",
      location: "Cheshire"
  }, {
      lat: -37.8927369333,
      long: 175.4087452333,
      name: "Samuel R. Bailey",
      street: "3228 Glory Road",
      location: "Nashville"
  }, {
      lat: -38.9064188833,
      long: 175.4441556833,
      name: "Samuel R. Bailey",
      street: "3228 Glory Road",
      location: "Nashville"
  }, {
      lat: -12.409874,
      long: -65.596832,
      name: "Ann J. Perdue",
      street: "921 Ella Street",
      location: "Dublin"
  }, {
      lat: -22.090887,
      long: -57.411827,
      name: "Jorge C. Woods",
      street: "4800 North Bend River Road",
      location: "Allen"
  }, {
      lat: -19.019585,
      long: -65.261963,
      name: "Russ E. Panek",
      street: "4068 Hartland Avenue",
      location: "Appleton"
  }, {
      lat: -16.500093,
      long: -68.214684,
      name: "Russ E. Panek",
      street: "4068 Hartland Avenue",
      location: "Appleton"
  }, {
      lat: -17.413977,
      long: -66.165321,
      name: "Russ E. Panek",
      street: "4068 Hartland Avenue",
      location: "Appleton"
  }, {
      lat: -16.489689,
      long: -68.119293,
      name: "Russ E. Panek",
      street: "4068 Hartland Avenue",
      location: "Appleton"
  }, {
      lat: 54.766323,
      long: 3.08603729,
      name: "Russ E. Panek",
      street: "4068 Hartland Avenue",
      location: "Appleton"
  }, {
      lat: 54.866323,
      long: 3.08603729,
      name: "Russ E. Panek",
      street: "4068 Hartland Avenue",
      location: "Appleton"
  }, {
      lat: 49.537685,
      long: 3.08603729,
      name: "Russ E. Panek",
      street: "4068 Hartland Avenue",
      location: "Appleton"
  }, {
      lat: 54.715424,
      long: .509207,
      name: "Russ E. Panek",
      street: "4068 Hartland Avenue",
      location: "Appleton"
  }, {
      lat: 44.891666,
      long: 10.136665,
      name: "Russ E. Panek",
      street: "4068 Hartland Avenue",
      location: "Appleton"
  }, {
      lat: 48.078335,
      long: 14.535004,
      name: "Russ E. Panek",
      street: "4068 Hartland Avenue",
      location: "Appleton"
  }, {
      lat: -26.358055,
      long: 27.398056,
      name: "Russ E. Panek",
      street: "4068 Hartland Avenue",
      location: "Appleton"
  }, {
      lat: -29.1,
      long: 26.2167,
      name: "Wilbur J. Dry",
      street: "2043 Jadewood Drive",
      location: "Northbrook"
  }, {
      lat: -29.883333,
      long: 31.049999,
      name: "Wilbur J. Dry",
      street: "2043 Jadewood Drive",
      location: "Northbrook"
  }, {
      lat: -26.266111,
      long: 27.865833,
      name: "Wilbur J. Dry",
      street: "2043 Jadewood Drive",
      location: "Northbrook"
  }, {
      lat: -29.087217,
      long: 26.154898,
      name: "Wilbur J. Dry",
      street: "2043 Jadewood Drive",
      location: "Northbrook"
  }, {
      lat: -33.958252,
      long: 25.619022,
      name: "Wilbur J. Dry",
      street: "2043 Jadewood Drive",
      location: "Northbrook"
  }, {
      lat: -33.977074,
      long: 22.457581,
      name: "Wilbur J. Dry",
      street: "2043 Jadewood Drive",
      location: "Northbrook"
  }, {
      lat: -26.563404,
      long: 27.844164,
      name: "Wilbur J. Dry",
      street: "2043 Jadewood Drive",
      location: "Northbrook"
  }, {
      lat: 51.21389,
      long: -102.462776,
      name: "Joseph B. Poole",
      street: "3364 Lunetta Street",
      location: "Wichita Falls"
  }, {
      lat: 52.321945,
      long: -106.584167,
      name: "Joseph B. Poole",
      street: "3364 Lunetta Street",
      location: "Wichita Falls"
  }, {
      lat: 50.288055,
      long: -107.793892,
      name: "Joseph B. Poole",
      street: "3364 Lunetta Street",
      location: "Wichita Falls"
  }, {
      lat: 52.7575,
      long: -108.28611,
      name: "Joseph B. Poole",
      street: "3364 Lunetta Street",
      location: "Wichita Falls"
  }, {
      lat: 50.393333,
      long: -105.551941,
      name: "Joseph B. Poole",
      street: "3364 Lunetta Street",
      location: "Wichita Falls"
  }, {
      lat: 50.930557,
      long: -102.807777,
      name: "Joseph B. Poole",
      street: "3364 Lunetta Street",
      location: "Wichita Falls"
  }, {
      lat: 52.856388,
      long: -104.610001,
      name: "Joseph B. Poole",
      street: "3364 Lunetta Street",
      location: "Wichita Falls"
  }, {
      lat: 52.289722,
      long: -106.666664,
      name: "Joseph B. Poole",
      street: "3364 Lunetta Street",
      location: "Wichita Falls"
  }, {
      lat: 52.201942,
      long: -105.123055,
      name: "Joseph B. Poole",
      street: "3364 Lunetta Street",
      location: "Wichita Falls"
  }, {
      lat: 53.278046,
      long: -110.00547,
      name: "Joseph B. Poole",
      street: "3364 Lunetta Street",
      location: "Wichita Falls"
  }, {
      lat: 49.13673,
      long: -102.990959,
      name: "Joseph B. Poole",
      street: "3364 Lunetta Street",
      location: "Wichita Falls"
  }, {
      lat: 45.484531,
      long: -73.597023,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 45.266666,
      long: -71.900002,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 45.349998,
      long: -72.51667,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 47.333332,
      long: -79.433334,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 45.400002,
      long: -74.033333,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 45.683334,
      long: -73.433334,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 48.099998,
      long: -77.783333,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 45.5,
      long: -72.316666,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 46.349998,
      long: -72.550003,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 48.119999,
      long: -69.18,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 45.599998,
      long: -75.25,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 46.099998,
      long: -71.300003,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 45.700001,
      long: -73.633331,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 47.68,
      long: -68.879997,
      name: "Claudette D. Nowakowski",
      street: "3742 Farland Avenue",
      location: "San Antonio"
  }, {
      lat: 46.716667,
      long: -79.099998,
      name: "299"
  }, {
      lat: 45.016666,
      long: -72.099998,
      name: "299"
  }];

  const {
      echarts: echarts$1
  } = window, returningCustomerChartInit = () => {
      const {
          getColor: t,
          getData: o
      } = window.phoenix.utils, e = document.querySelector(".echart-returning-customer");
      if (e) {
          const i = o(e, "echarts"),
              r = echarts$1.init(e);
          echartSetOption(r, i, (() => ({
              color: t("body-highlight-bg"),
              legend: {
                  data: [{
                      name: "Fourth time",
                      icon: "roundRect",
                      itemStyle: {
                          color: t("primary-light"),
                          borderWidth: 0
                      }
                  }, {
                      name: "Third time",
                      icon: "roundRect",
                      itemStyle: {
                          color: t("info-lighter"),
                          borderWidth: 0
                      }
                  }, {
                      name: "Second time",
                      icon: "roundRect",
                      itemStyle: {
                          color: t("primary"),
                          borderWidth: 0
                      }
                  }],
                  right: "right",
                  width: "100%",
                  itemWidth: 16,
                  itemHeight: 8,
                  itemGap: 20,
                  top: 3,
                  inactiveColor: t("quaternary-color"),
                  inactiveBorderWidth: 0,
                  textStyle: {
                      color: t("body-color"),
                      fontWeight: 600,
                      fontFamily: "Nunito Sans"
                  }
              },
              tooltip: {
                  trigger: "axis",
                  axisPointer: {
                      type: "none"
                  },
                  padding: [7, 10],
                  backgroundColor: t("body-highlight-bg"),
                  borderColor: t("border-color"),
                  textStyle: {
                      color: t("light-text-emphasis")
                  },
                  borderWidth: 1,
                  transitionDuration: 0,
                  formatter: tooltipFormatter
              },
              xAxis: {
                  type: "category",
                  data: months,
                  show: !0,
                  boundaryGap: !1,
                  axisLine: {
                      show: !0,
                      lineStyle: {
                          color: t("tertiary-bg")
                      }
                  },
                  axisTick: {
                      show: !1
                  },
                  axisLabel: {
                      showMinLabel: !1,
                      showMaxLabel: !1,
                      color: t("secondary-color"),
                      formatter: t => t.slice(0, 3),
                      fontFamily: "Nunito Sans",
                      fontWeight: 600,
                      fontSize: 12.8
                  },
                  splitLine: {
                      show: !0,
                      lineStyle: {
                          color: t("secondary-bg"),
                          type: "dashed"
                      }
                  }
              },
              yAxis: {
                  type: "value",
                  boundaryGap: !1,
                  axisLabel: {
                      showMinLabel: !0,
                      showMaxLabel: !0,
                      color: t("secondary-color"),
                      formatter: t => `${t}%`,
                      fontFamily: "Nunito Sans",
                      fontWeight: 600,
                      fontSize: 12.8
                  },
                  splitLine: {
                      show: !0,
                      lineStyle: {
                          color: t("secondary-bg")
                      }
                  }
              },
              series: [{
                  name: "Fourth time",
                  type: "line",
                  data: [62, 90, 90, 90, 78, 84, 17, 17, 17, 17, 82, 95],
                  showSymbol: !1,
                  symbol: "circle",
                  symbolSize: 10,
                  emphasis: {
                      lineStyle: {
                          width: 1
                      }
                  },
                  lineStyle: {
                      type: "dashed",
                      width: 1,
                      color: t("primary-light")
                  },
                  itemStyle: {
                      borderColor: t("primary-light"),
                      borderWidth: 3
                  }
              }, {
                  name: "Third time",
                  type: "line",
                  data: [50, 50, 30, 62, 18, 70, 70, 22, 70, 70, 70, 70],
                  showSymbol: !1,
                  symbol: "circle",
                  symbolSize: 10,
                  emphasis: {
                      lineStyle: {
                          width: 1
                      }
                  },
                  lineStyle: {
                      width: 1,
                      color: t("info-lighter")
                  },
                  itemStyle: {
                      borderColor: t("info-lighter"),
                      borderWidth: 3
                  }
              }, {
                  name: "Second time",
                  type: "line",
                  data: [40, 78, 60, 78, 60, 20, 60, 40, 60, 40, 20, 78],
                  showSymbol: !1,
                  symbol: "circle",
                  symbolSize: 10,
                  emphasis: {
                      lineStyle: {
                          width: 3
                      }
                  },
                  lineStyle: {
                      width: 3,
                      color: t("primary")
                  },
                  itemStyle: {
                      borderColor: t("primary"),
                      borderWidth: 3
                  }
              }],
              grid: {
                  left: 0,
                  right: 8,
                  top: "14%",
                  bottom: 0,
                  containLabel: !0
              }
          })));
      }
  };

  const {
      echarts: echarts
  } = window, topCouponsChartInit = () => {
      const {
          getData: t,
          getColor: e
      } = window.phoenix.utils, o = document.querySelector(".echart-top-coupons");
      if (o) {
          const r = t(o, "options"),
              i = echarts.init(o);
          echartSetOption(i, r, (() => ({
              color: [e("primary"), e("primary-lighter"), e("info-dark")],
              tooltip: {
                  trigger: "item",
                  padding: [7, 10],
                  backgroundColor: e("body-highlight-bg"),
                  borderColor: e("border-color"),
                  textStyle: {
                      color: e("light-text-emphasis")
                  },
                  borderWidth: 1,
                  transitionDuration: 0,
                  position(t, e, o, r, i) {
                      const n = {
                          top: t[1] - 35
                      };
                      return window.innerWidth > 540 ? t[0] <= i.viewSize[0] / 2 ? n.left = t[0] + 20 : n.left = t[0] - i.contentSize[0] - 20 : n[t[0] < i.viewSize[0] / 2 ? "left" : "right"] = 0, n
                  },
                  formatter: t => `<strong>${t.data.name}:</strong> ${t.percent}%`
              },
              legend: {
                  show: !1
              },
              series: [{
                  name: "72%",
                  type: "pie",
                  radius: ["100%", "87%"],
                  avoidLabelOverlap: !1,
                  emphasis: {
                      scale: !1,
                      itemStyle: {
                          color: "inherit"
                      }
                  },
                  itemStyle: {
                      borderWidth: 2,
                      borderColor: e("body-bg")
                  },
                  label: {
                      show: !0,
                      position: "center",
                      formatter: "{a}",
                      fontSize: 23,
                      color: e("light-text-emphasis")
                  },
                  data: [{
                      value: 72e5,
                      name: "Percentage discount"
                  }, {
                      value: 18e5,
                      name: "Fixed card discount"
                  }, {
                      value: 1e6,
                      name: "Fixed product discount"
                  }]
              }],
              grid: {
                  containLabel: !0
              }
          })));
      }
  };

  const totalOrdersChartInit = () => {
      const {
          getColor: o,
          getData: t,
          getDates: r
      } = window.phoenix.utils, e = document.querySelector(".echart-total-orders");
      if (e) {
          const a = t(e, "echarts"),
              i = window.echarts.init(e);
          echartSetOption(i, a, (() => ({
              color: o("primary"),
              tooltip: {
                  trigger: "item",
                  padding: [7, 10],
                  backgroundColor: o("body-highlight-bg"),
                  borderColor: o("border-color"),
                  textStyle: {
                      color: o("light-text-emphasis")
                  },
                  position: (...o) => handleTooltipPosition(o),
                  borderWidth: 1,
                  transitionDuration: 0,
                  formatter: o => `<strong>${window.dayjs(o.name).format("DD MMM")}:</strong> ${o.value}`
              },
              xAxis: {
                  type: "category",
                  data: r(new Date("5/1/2022"), new Date("5/7/2022"), 864e5),
                  show: !0,
                  boundaryGap: !1,
                  axisLine: {
                      show: !0,
                      lineStyle: {
                          color: o("secondary-bg")
                      }
                  },
                  axisTick: {
                      show: !1
                  },
                  axisLabel: {
                      formatter: o => window.dayjs(o).format("DD MMM"),
                      interval: 6,
                      showMinLabel: !0,
                      showMaxLabel: !0,
                      color: o("secondary-color")
                  }
              },
              yAxis: {
                  show: !1,
                  type: "value",
                  boundaryGap: !1
              },
              series: [{
                  type: "bar",
                  barWidth: "5px",
                  data: [120, 200, 150, 80, 70, 110, 120],
                  showBackground: !0,
                  symbol: "none",
                  itemStyle: {
                      borderRadius: 10
                  },
                  backgroundStyle: {
                      borderRadius: 10,
                      color: o("primary-bg-subtle")
                  }
              }],
              grid: {
                  right: 10,
                  left: 10,
                  bottom: 0,
                  top: 0
              }
          })));
      }
  };

  const totalSalesChartInit = () => {
      const {
          getColor: o,
          getData: t,
          getDates: e
      } = window.phoenix.utils, a = document.querySelector(".echart-total-sales-chart"), i = e(new Date("5/1/2022"), new Date("5/30/2022"), 864e5), n = [100, 200, 300, 300, 300, 250, 200, 200, 200, 200, 200, 500, 500, 500, 600, 700, 800, 900, 1e3, 1100, 850, 600, 600, 600, 400, 200, 200, 300, 300, 300], r = [200, 200, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 200, 400, 600, 600, 600, 800, 1e3, 700, 400, 450, 500, 600, 700, 650, 600, 550], s = o => {
          const t = window.dayjs(o[0].axisValue),
              e = window.dayjs(o[0].axisValue).subtract(1, "month"),
              a = o.map(((o, a) => ({
                  value: o.value,
                  date: a > 0 ? e : t,
                  color: o.color
              })));
          let i = "";
          return a.forEach(((o, t) => {
              i += `<h6 class="fs-9 text-body-tertiary ${t>0&&"mb-0"}"><span class="fas fa-circle me-2" style="color:${o.color}"></span>\n      ${o.date.format("MMM DD")} : ${o.value}\n    </h6>`;
          })), `<div class='ms-1'>\n              ${i}\n            </div>`
      };
      if (a) {
          const e = t(a, "echarts"),
              l = window.echarts.init(a);
          echartSetOption(l, e, (() => ({
              color: [o("primary"), o("info")],
              tooltip: {
                  trigger: "axis",
                  padding: 10,
                  backgroundColor: o("body-highlight-bg"),
                  borderColor: o("border-color"),
                  textStyle: {
                      color: o("light-text-emphasis")
                  },
                  borderWidth: 1,
                  transitionDuration: 0,
                  axisPointer: {
                      type: "none"
                  },
                  formatter: s
              },
              xAxis: [{
                  type: "category",
                  data: i,
                  axisLabel: {
                      formatter: o => window.dayjs(o).format("DD MMM"),
                      interval: 13,
                      showMinLabel: !0,
                      showMaxLabel: !1,
                      color: o("secondary-color"),
                      align: "left",
                      fontFamily: "Nunito Sans",
                      fontWeight: 600,
                      fontSize: 12.8
                  },
                  axisLine: {
                      show: !0,
                      lineStyle: {
                          color: o("secondary-bg")
                      }
                  },
                  axisTick: {
                      show: !1
                  },
                  splitLine: {
                      show: !0,
                      interval: 0,
                      lineStyle: {
                          color: "dark" === window.config.config.Theme ? o("body-highlight-bg") : o("secondary-bg")
                      }
                  },
                  boundaryGap: !1
              }, {
                  type: "category",
                  position: "bottom",
                  data: i,
                  axisLabel: {
                      formatter: o => window.dayjs(o).format("DD MMM"),
                      interval: 130,
                      showMaxLabel: !0,
                      showMinLabel: !1,
                      color: o("secondary-color"),
                      align: "right",
                      fontFamily: "Nunito Sans",
                      fontWeight: 600,
                      fontSize: 12.8
                  },
                  axisLine: {
                      show: !1
                  },
                  axisTick: {
                      show: !1
                  },
                  splitLine: {
                      show: !1
                  },
                  boundaryGap: !1
              }],
              yAxis: {
                  position: "right",
                  axisPointer: {
                      type: "none"
                  },
                  axisTick: "none",
                  splitLine: {
                      show: !1
                  },
                  axisLine: {
                      show: !1
                  },
                  axisLabel: {
                      show: !1
                  }
              },
              series: [{
                  name: "d",
                  type: "line",
                  data: n,
                  showSymbol: !1,
                  symbol: "circle"
              }, {
                  name: "e",
                  type: "line",
                  data: r,
                  lineStyle: {
                      type: "dashed",
                      width: 1,
                      color: o("info")
                  },
                  showSymbol: !1,
                  symbol: "circle"
              }],
              grid: {
                  right: 2,
                  left: 5,
                  bottom: "20px",
                  top: "2%",
                  containLabel: !1
              },
              animation: !1
          })));
      }
  };

  const {
      L: L
  } = window, leafletTopRegionsInit = () => {
      const e = document.getElementById("map");
      if (L && e) {
          const e = () => "dark" === window.config.config.Theme ? ["invert:98%", "grayscale:69%", "bright:89%", "contrast:111%", "hue:205deg", "saturate:1000%"] : ["bright:101%", "contrast:101%", "hue:23deg", "saturate:225%"],
              t = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
              o = L.tileLayer.colorFilter(t, {
                  attribution: null,
                  transparent: !0,
                  filter: e()
              }),
              a = L.map("map", {
                  center: L.latLng(25.659195, 30.182691),
                  zoom: .6,
                  layers: [o],
                  minZoom: 1.4
              }),
              n = L.markerClusterGroup({
                  chunkedLoading: !1,
                  spiderfyOnMaxZoom: !1
              });
          leaftletPoints.map((e => {
              const {
                  name: t,
                  location: o,
                  street: a
              } = e, r = L.icon({
                  iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAACXBIWXMAAAFgAAABYAEg2RPaAAADpElEQVRYCZ1XS1LbQBBtybIdiMEJKSpUqihgEW/xDdARyAnirOIl3MBH8NK7mBvkBpFv4Gy9IRSpFIQiRPyNfqkeZkY9HwmFt7Lm06+7p/vN2MmyDIrQ6QebALAHAD4AbFuWfQeAAACGs5H/w5jlsJJw4wMA+GhMFuMA99jIDJJOP+ihZwDQFmNuowWO1wS3viDXpdEdZPEc0odruj0EgN5s5H8tJOEEX8R3rbkMtcU34NTqhe5nSQTJ7Tkk80s6/Gk28scGiULguFBffgdufdEwWoQ0uoXo8hdAlooVH0REjISfwZSlyHGh0V5n6aHAtKTxXI5g6nQnMH0P4bEgwtR18Yw8Pj8QZ4ARUAI0Hl+fQZZGisGEBVwHr7XKzox57DXZ/ij8Cdwe2u057z9/wygOxRl4S2vSUHx1oucaMQGAHTrgtdag9mK5aN+Wx/uAAQ9Zenp/SRce4TpaNbQK4+sTcGqeTB/aIXv3XN5oj2VKqii++U0JunpZ8urxee4hvjqVc2hHpBDXuKKT9XMgVYJ1/1fPGSeaikzgmWWkMIi9bVf8UhotXxzORn5gWFchI8QyttlzjS0qpsaIGY2MMsujV/AUSdcY0dDpB6/EiOPYzclR1CI5mOez3ekHvrFLxa7cR5pTscfrXjk0Vhm5V2PqLUWnH3R5GbPGpMVD7E1ckXesKBQ7AS/vmQ1c0+kHuxpBj98lTCm8pbc5QRJRdZ6qHb/wGryXq3Lxszv+5gySuwvxueXySwYvHEjuQ9ofTGKYlrmK1EsCHMd5SoD7mZ1HHFCBHLNbMEshvrugqWLn01hpVVJhFgVGkDvK7hR6n2B+d9C7xsqWsbkqHv4cCsWezEb+o2SR+SFweUBxfA5wH7kShjKt2vWL57Px3GhIFEezkb8pxvUWHYhotAfCk2AtkEcxoOttrxUWDR5svb1emSQKj0WXK1HYIgFREbiBqmoZcB2RkbE+byMZiosorVgAZF1ID7yQhEs38wa7nUqNDezdlavC2HbBGSQkGgZ8uJVBmzeiKCRRpEa9ilWghORVeGB7BxeSKF5xqbFBkxBrFKUk/JHA7ppENQaCnCjthK+3opCEYyANztXmZN858cDYWSUSHk3A311GAZDvo6deNKUk1EsqnJoQlkYBNlmxQZeaMgmxoUokICoHDce351RCCiuKoirJWEgNOYvQplM2VCLhUqF7jf94rW9kHVUjQeheV4riv0i4ZOzzz/2y/+0KAOAfr4EE4HpCFhwAAAAASUVORK5CYII="
              }), i = L.marker([e.lat, e.long], {
                  icon: r
              }), A = `\n        <h6 class="mb-1">${t}</h6>\n        <p class="m-0 text-body-quaternary">${a}, ${o}</p>\n      `, s = L.popup({
                  minWidth: 180
              }).setContent(A);
              return i.bindPopup(s), n.addLayer(i), !0
          })), a.addLayer(n);
          document.body.addEventListener("clickControl", (({
              detail: {
                  control: e,
                  value: t
              }
          }) => {
              "Theme" === e && o.updateFilter("dark" === t ? ["invert:98%", "grayscale:69%", "bright:89%", "contrast:111%", "hue:205deg", "saturate:1000%"] : ["bright:101%", "contrast:101%", "hue:23deg", "saturate:225%"]);
          }));
      }
  };

  const revenueMapInit = () => {
      const e = document.body,
          t = document.querySelectorAll(".revenue-map");
      if (t.length && window.google) {
          const i = {
              SnazzyCustomLight: [{
                  featureType: "administrative",
                  elementType: "all",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "administrative",
                  elementType: "labels",
                  stylers: [{
                      visibility: "on"
                  }]
              }, {
                  featureType: "administrative",
                  elementType: "labels.text.fill",
                  stylers: [{
                      color: "#525b75"
                  }]
              }, {
                  featureType: "administrative",
                  elementType: "labels.text.stroke",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "administrative",
                  elementType: "labels.icon",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "administrative.country",
                  elementType: "geometry.stroke",
                  stylers: [{
                      visibility: "on"
                  }, {
                      color: "#ffffff"
                  }]
              }, {
                  featureType: "administrative.province",
                  elementType: "geometry.stroke",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "landscape",
                  elementType: "geometry",
                  stylers: [{
                      visibility: "on"
                  }, {
                      color: "#E3E6ED"
                  }]
              }, {
                  featureType: "landscape.natural",
                  elementType: "labels",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "poi",
                  elementType: "all",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "road",
                  elementType: "all",
                  stylers: [{
                      color: "#eff2f6"
                  }]
              }, {
                  featureType: "road",
                  elementType: "labels",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "transit",
                  elementType: "labels.icon",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "transit.line",
                  elementType: "geometry",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "transit.line",
                  elementType: "labels.text",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "transit.station.airport",
                  elementType: "geometry",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "transit.station.airport",
                  elementType: "labels",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{
                      color: "#F5F7FA"
                  }]
              }, {
                  featureType: "water",
                  elementType: "labels",
                  stylers: [{
                      visibility: "off"
                  }]
              }],
              SnazzyCustomDark: [{
                  featureType: "administrative",
                  elementType: "all",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "administrative",
                  elementType: "labels",
                  stylers: [{
                      visibility: "on"
                  }]
              }, {
                  featureType: "administrative",
                  elementType: "labels.text.fill",
                  stylers: [{
                      color: "#8a94ad"
                  }]
              }, {
                  featureType: "administrative",
                  elementType: "labels.text.stroke",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "administrative",
                  elementType: "labels.icon",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "administrative.country",
                  elementType: "geometry.stroke",
                  stylers: [{
                      visibility: "on"
                  }, {
                      color: "#000000"
                  }]
              }, {
                  featureType: "administrative.province",
                  elementType: "geometry.stroke",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "landscape",
                  elementType: "geometry",
                  stylers: [{
                      visibility: "on"
                  }, {
                      color: "#222834"
                  }]
              }, {
                  featureType: "landscape.natural",
                  elementType: "labels",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "poi",
                  elementType: "all",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "road",
                  elementType: "all",
                  stylers: [{
                      color: "#141824"
                  }]
              }, {
                  featureType: "road",
                  elementType: "labels",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "transit",
                  elementType: "labels.icon",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "transit.line",
                  elementType: "geometry",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "transit.line",
                  elementType: "labels.text",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "transit.station.airport",
                  elementType: "geometry",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "transit.station.airport",
                  elementType: "labels",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{
                      color: "#0f111a"
                  }]
              }, {
                  featureType: "water",
                  elementType: "labels",
                  stylers: [{
                      visibility: "off"
                  }]
              }]
          };
          t.forEach((t => {
              const l = t,
                  s = {
                      zoom: 1.4,
                      minZoom: 1.4,
                      zoomControl: !1,
                      scrollwheel: !0,
                      disableDefaultUI: !0,
                      center: new window.google.maps.LatLng(25.659195, 30.182691),
                      styles: "dark" === window.config.config.Theme ? i.SnazzyCustomDark : i.SnazzyCustomLight
                  },
                  r = new window.google.maps.Map(l, s),
                  a = new window.google.maps.InfoWindow,
                  o = leaftletPoints.map((e => {
                      const {
                          name: t,
                          location: i,
                          street: l
                      } = e, s = `\n        <h6 class="mb-1">${t}</h6>\n        <p class="m-0 text-body-quaternary">${l}, ${i}</p>\n      `, o = new window.google.maps.Marker({
                          position: {
                              lat: e.lat,
                              lng: e.lng
                          }
                      });
                      return o.addListener("click", (() => {
                          a.setContent(s), a.open(r, o);
                      })), o
                  })),
                  y = {
                      render: ({
                          count: e,
                          position: t
                      }) => {
                          let i = "#3874ff";
                          e > 10 && (i = "#e5780b"), e > 90 && (i = "#25b003");
                          const l = window.btoa(`\n            <svg fill="${i}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">\n              <circle cx="120" cy="120" opacity=".9" r="70" />\n              <circle cx="120" cy="120" opacity=".3" r="90" />\n              <circle cx="120" cy="120" opacity=".2" r="110" />\n            </svg>`);
                          return new window.google.maps.Marker({
                              label: {
                                  text: String(e),
                                  color: "white",
                                  fontSize: "10px"
                              },
                              position: t,
                              icon: {
                                  url: `data:image/svg+xml;base64,${l}`,
                                  scaledSize: new window.google.maps.Size(45, 45)
                              },
                              zIndex: Number(window.google.maps.Marker.MAX_ZINDEX) + e
                          })
                      }
                  };
              return e && e.addEventListener("clickControl", (({
                  detail: {
                      control: e,
                      value: t
                  }
              }) => {
                  "Theme" === e && r.set("styles", "dark" === t ? i.SnazzyCustomDark : i.SnazzyCustomLight);
              })), new window.markerClusterer.MarkerClusterer({
                  markers: o,
                  map: r,
                  renderer: y
              })
          }));
      }
  };

  const {
      docReady: docReady
  } = window.phoenix.utils;
  window.revenueMapInit = revenueMapInit, docReady(totalSalesChartInit), docReady(newCustomersChartsInit), docReady(topCouponsChartInit), docReady(projectionVsActualChartInit), docReady(returningCustomerChartInit), docReady(payingCustomerChartInit), docReady(totalOrdersChartInit), docReady(leafletTopRegionsInit);

}));
//# sourceMappingURL=ecommerce-dashboard.js.map