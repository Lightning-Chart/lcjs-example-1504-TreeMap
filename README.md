# JavaScript TreeMapChart

![JavaScript TreeMapChart](TreeMap-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

Simple overview of a TreeMap chart.

This type of chart is particularly useful for presenting hierarchical data in a way that's easy to understand at a glance. It can be used for financial analysis, showing market trends, or comparing the size and performance of companies within and across sectors, for example.

This chart is interactive, enabling users to click on node to drill down for more detailed information.

Below is a sample snippet for generating a TreeMap Chart using predefined data with LightningChart JS:

```js
const treeMapChart = lightningChart().TreeMapChart()
treeMapChart.setData(data)
```


## API Links

* [Treemap Chart]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact sales@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2022. All rights reserved.


[Treemap Chart]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/classes/TreeMapChart.html

