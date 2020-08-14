const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async jobsStore => {
    const { data } = await axios.get('http://cafeto.co/wp-json/cafetoWebsite/jobs');

    const contentTypeJobs = jobsStore.addContentType({
        typeName: 'JobPost',
        route: '/job/:id',
    });

    for (const post of data.jobs) {
        contentTypeJobs.addNode({
            id: post.id,
            title: post.title,
            path: '/job/' + post.id,
            fields: {
                link: post.link,
                country: post.country,
                app: post.app,
            }
        })
    }
  })
}