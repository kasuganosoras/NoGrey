plugin.onAllPluginsLoaded(async function (plugins) {
    await plugins.StylesheetLoader.loadStylesheet(plugin, `${this.pluginPath}/theme.css`, "NoGrey", {});
});
