<template lang="pug">
  section.hero.is-success
    .hero-head
        header.nav
            .container
                .nav-left
                    .nav-item
                        strong Music App &nbsp;
                .nav-right.nav-menu
                    //router-link.nav-item(v-bind:to=" {name: 'app-search' } ") Suchen &nbsp;
                    router-link.nav-item(to="about") Wir &nbsp;
    .hero-body
        .container.has-text-centered
            h1.title App Music
            h2.subtitle Lists of songs  
</template>
