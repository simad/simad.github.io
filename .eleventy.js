import {DateTime} from "luxon";

export default function (config) {
  config.addFilter('htmlDateString', dateObj => {
    const dt = DateTime.fromJSDate(dateObj);
    const day = dt.day;
    const suffix = day === 1 || day === 21 || day === 31 ? 'st'
        : day === 2 || day === 22 ? 'nd'
            : day === 3 || day === 23 ? 'rd'
                : 'th';
    return dt.toFormat(`MMMM d'${suffix}', yyyy`);
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
