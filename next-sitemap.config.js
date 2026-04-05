/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://reinsoft.tech',
    generateRobotsTxt: true,
    exclude: [
        '/admin',
        '/admin/*',
        '/api',
        '/api/*',
        '/lp/*', // exclude unlinked landing page variations from primary sitemap
    ],
}
