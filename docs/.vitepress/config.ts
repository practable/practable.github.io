import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Practable",
  description: "Introduction to Practable remote labs ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
		{ text: 'Experiments', link: '/experiment-examples' },
		{ text: 'Infrastructure', link: '/cloud-infrastructure' },
		
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Experiment Examples', link: '/experiment-examples' },
          { text: 'Cloud Infrastructure', link: '/cloud-infrastructure' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/practable' }
    ]
  }
})
