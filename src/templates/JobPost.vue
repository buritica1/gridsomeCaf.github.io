<template>
    <Layout>
        <h1>{{ $page.jobPost.title }}</h1>
        <p>{{ $page.jobPost.fields.country }}</p>
        <g-link :to="$page.jobPost.fields.link">Aplicar</g-link>
    </Layout>
</template>

<page-query>
query JobPost ( $id: ID! ) {
    jobPost: jobPost ( id: $id ) {
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
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.jobPost.title
        }
    }
}
</script>