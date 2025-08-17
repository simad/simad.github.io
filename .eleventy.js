import twig from '@factorial/eleventy-plugin-twig'
import {DateTime} from "luxon";


const twigOptions = {
  twig: {
    namespaces: {},
  },
  images: {},
  dir: {
    input: "src",
    output: "dist",
    watch: "src/**/*.{css,js,twig,png,jpg,jpeg,gif,svg,webp}",
  },
};

export default function (config) {
  config.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('MMMM d, yyyy')
  })
  config.addPassthroughCopy("dist/assets");
  config.addPassthroughCopy({ 'public': './' })
  config.addPassthroughCopy("CNAME");
  config.addPlugin(twig, twigOptions)
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'twig',
  }
}
