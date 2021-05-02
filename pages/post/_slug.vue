<template>
  <div class="container mx-auto" v-if="post">
    <div>
      <h1 class="font-bold text-xl">{{ post.title }}</h1>
 
  <img class=" h-48 " :src=post.coverImage.url />
  <div v-html="post.content.html" class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"></div>
      
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-request';

export default {
  async asyncData({ $graphcms, params, $content }) {
    const { slug } = params;

    const { post } = await $graphcms.request(
      gql`
        query GetPost($slug: String) {
          post(where: { slug: $slug }) {
            title
            content
            {
              html
            }
             coverImage {
                  url
              }
          }
        }
      `,
      {
        slug,
      }
    );
    return { post};
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.title,
        },
      ],
    };
  },
};
</script>
