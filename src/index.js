const lcjs = require('@lightningchart/lcjs')

const { lightningChart, Themes } = lcjs

const chart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        }).TreeMapChart({
    legend: { visible: false },
    theme: (() => {
    const t = Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
    const smallView = window.devicePixelRatio >= 2
    if (!window.__lcjsDebugOverlay) {
        window.__lcjsDebugOverlay = document.createElement('div')
        window.__lcjsDebugOverlay.style.cssText = 'position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);color:#fff;padding:4px 8px;z-index:99999;font:12px monospace;pointer-events:none'
        if (document.body) document.body.appendChild(window.__lcjsDebugOverlay)
        setInterval(() => {
            if (!window.__lcjsDebugOverlay.parentNode && document.body) document.body.appendChild(window.__lcjsDebugOverlay)
            window.__lcjsDebugOverlay.textContent = window.innerWidth + 'x' + window.innerHeight + ' dpr=' + window.devicePixelRatio + ' small=' + (window.devicePixelRatio >= 2)
        }, 500)
    }
    return t && smallView ? lcjs.scaleTheme(t, 0.5) : t
})(),
textRenderer: window.devicePixelRatio >= 2 ? lcjs.htmlTextRenderer : undefined,
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
