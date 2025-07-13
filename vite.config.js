export default {
  server: {
    sourcemapIgnoreList: (source) => {
      // Ignore source maps from monaco-editor
      return !source.includes('monaco-editor');
    }
  }
}