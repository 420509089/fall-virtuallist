const isDEV = process.env.NODE_ENV === 'development' // 是否是开发模式
module.exports = { 
    "plugins": [
        isDEV && require.resolve('react-refresh/babel'), // 如果是开发模式,就启动react热更新插件
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ].filter(Boolean) // 过滤空值
}
  