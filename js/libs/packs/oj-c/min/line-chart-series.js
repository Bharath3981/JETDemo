define("oj-c/line-chart-series/line-chart-series",["require","exports","@oracle/oraclejet-preact/translationBundle","ojs/ojvcomponent"],(function(require,e,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LineChartSeries=e.LineChartSeriesDefaults=void 0,e.LineChartSeriesDefaults={drilling:"inherit"},e.LineChartSeries=(0,i.registerCustomElement)("oj-c-line-chart-series",(({drilling:r=e.LineChartSeriesDefaults.drilling,...i})=>null),"LineChartSeries",{properties:{categories:{type:"Array<string>"},color:{type:"string"},drilling:{type:"string",enumValues:["inherit","off","on"]},lineStyle:{type:"string",enumValues:["dashed","solid","dotted"]},lineType:{type:"string",enumValues:["curved","straight"]},lineWidth:{type:"number"},markerShape:{type:"string",enumValues:["auto","square","circle","diamond","human","plus","star","triangleDown","triangleUp"]},markerColor:{type:"string"},markerDisplayed:{type:"string"},markerSize:{type:"number"},name:{type:"string"},shortDesc:{type:"string"}}},{drilling:"inherit"},{"@oracle/oraclejet-preact":r.default})})),define("oj-c/line-chart-series",["require","exports","oj-c/line-chart-series/line-chart-series"],(function(require,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LineChartSeries=void 0,Object.defineProperty(e,"LineChartSeries",{enumerable:!0,get:function(){return r.LineChartSeries}})}));
//# sourceMappingURL=line-chart-series.js.map