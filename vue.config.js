module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "NodBank";
      return args;
    });
  },
  // publicPath: process.env.NODE_ENV === "production" ? "/webpieces/" : "/"
  publicPath: process.env.NODE_ENV === "production" ? "/nodebank-ui" : "/"
  // publicPath: '',
  // baseUrl: '/projects/vue/webpieces/dist/',
};