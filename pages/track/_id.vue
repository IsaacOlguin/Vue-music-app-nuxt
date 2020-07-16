<template lang="pug">
    .container(v-if="track && track.id")
        .columns
            .column.is-3.has-text-centered
                figure.media-left
                    p.image
                        img(:src="track.album.images[0].url")
            .column.is-8
                .panel
                    .panel-heading
                        h1.title {{ head.title }}
                    .panel-block
                        article.media
                            .media-content
                                .content
                                    ul(v-for="(v, k) in track")
                                        li
                                            strong {{ k }}:&nbsp;
                                            span {{ v }}
            //.is-5.is-offset-4
            //app-track(v-bind:track="this.track")
</template>

<script>
//import { mapState, mapActions, mapGetters } from 'vuex';
import trackService from "~/plugins/track";

export default {
  data() {
    return {
      track: {}
    };
  },

  computed: {
    head() {
      return {
        title: this.track.name
      };
    }
  },

  asyncData({ params }) {
    const id = params.id;
    console.log(`El ID del URL es: ${id}`);

    return trackService
      .searchById(id)
      .then(res => {
        return {
          track: res
        };
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}

.button-bar {
  margin-top: 20px;
}
</style>
