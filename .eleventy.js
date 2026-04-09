import {DateTime} from "luxon";

export default function (config) {
  config.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('MMMM d, yyyy')
  })
  config.addPassthroughCopy({ 'public': './' })
  config.addPassthroughCopy("CNAME");
  config.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
  });
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
}
