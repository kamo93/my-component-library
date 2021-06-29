module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    },
    "@storybook/preset-create-react-app",
    "@storybook/addon-contexts/register",
    "@storybook/addon-backgrounds/register",
  ]
}
