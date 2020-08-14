<template>
  <Layout>
    <h1>Welcome Cafeto Jobs :)</h1>
    <ul class="post-list">
        <li v-for="{ node } in $page.allJobPost.edges" :key="node.id">
            <div>
                <h2 v-html="node.title" />
                <p>{{ node.fields.country }}</p>
                <g-link :to="node.path">
                Read More
                </g-link>
            </div>
        </li>
    </ul>
  </Layout>
</template>

<page-query>
query jobs {
  allJobPost {
    totalCount
    pageInfo {
      totalPages
    }
    edges {
  		node {
        id
        title
        path
        fields {
          link
          country
          app
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Jobs Cafeto'
  }
}
</script>