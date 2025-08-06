const lcjs = require('@lightningchart/lcjs')

const { lightningChart, Themes } = lcjs

const chart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        }).TreeMapChart({
    legend: { visible: false },
    theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
})
chart.setTitle('Sector Distribution of Leading Global Companies')
chart.setData([
    {
        name: 'TECHNOLOGY',
        children: [
            { name: 'MSFT', value: 60.34 },
            { name: 'AAPL', value: 52.75 },
            { name: 'ORCL', value: 31.25 },
            { name: 'ADBE', value: 81.71 },
            { name: 'NVDA', value: 252.82 },
            { name: 'AVGO', value: 104.86 },
            { name: 'CRM', value: 104.83 },
            { name: 'INTU', value: 66.01 },
        ],
    },
    {
        name: 'COMMUNICATION SERVICES',
        children: [
            { name: 'GOOG', value: 63.0 },
            { name: 'META', value: 206.14 },
            { name: 'NFLX', value: 75.84 },
            { name: 'DIS', value: 7.27 },
        ],
    },
    {
        name: 'CONSUMER CYCLICAL',
        children: [
            { name: 'AMZN', value: 85.7 },
            { name: 'TSLA', value: 120.46 },
            { name: 'MCD', value: 11.84 },
            { name: 'HD', value: 9.76 },
        ],
    },
    {
        name: 'FINANCIAL',
        children: [
            { name: 'V', value: 27.01 },
            { name: 'JPM', value: 28.42 },
            { name: 'BAC', value: 12.75 },
            { name: 'BRK-B', value: 17.54 },
        ],
    },
])
