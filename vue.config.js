module.exports = {
  pwa: {
    // workboxPluginMode: "GenerateSW"
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js"
    }
  }
}
