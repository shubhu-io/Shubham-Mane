export const siteConfig = {
  name: 'Shubham Mane',
  title: 'AWS Cloud Engineer | DevOps Engineer',
  description: 'AWS Cloud Engineer & DevOps Engineer portfolio - cloud infrastructure, IaC, and automation',
  url: 'https://shubhu.io',
  basePath: '/',
  author: {
    name: 'Shubham Mane',
    email: 'shubhamane10@gmail.com',
    username: 'shubhu-io',
    avatar: 'https://avatars.githubusercontent.com/u/54975871?v=4',
    bio: 'Entry-level AWS Cloud/DevOps Engineer with hands-on experience designing, provisioning, and automating cloud infrastructure on AWS',
    location: 'Chhatrapati Sambhaji Nagar, Maharashtra',
    available: true,
  },
  social: {
    github: 'https://github.com/shubhu-io',
    linkedin: 'https://linkedin.com/in/shubham-mane-dev',
    twitter: 'https://twitter.com/shubhu-io',
    pinterest: 'https://in.pinterest.com/shubhvibessss/',
    email: 'shubhamane10@gmail.com',
  },
  github: {
    username: 'shubhu-io',
    token: import.meta.env.VITE_GITHUB_TOKEN || '',
  },
  theme: {
    defaultDark: true,
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ],
}
