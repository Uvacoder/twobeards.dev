// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
    head.link.push({
        rel: "preload",
        href: "/albra/Albra-Regular-subset.woff2",
        as: "font",
        crossorigin: "anonymous"
    })

    head.link.push({
        rel: "preload",
        href: "/albra/Albra-Semi-subset.woff2",
        as: "font",
        crossorigin: "anonymous"
    })

    head.link.push({
        rel: "preload",
        href: "/albra/Albra-Bold-subset.woff2",
        as: "font",
        crossorigin: "anonymous"
    })

    head.link.push({
        rel: "preload",
        href: "/albra/Albra-Black-subset.woff2",
        as: "font",
        crossorigin: "anonymous"
    })

    head.link.push({
        rel: "preload",
        href: "/albra/Albra-Grotesk-Regular-subset.woff2",
        as: "font",
        crossorigin: "anonymous"
    })

    head.link.push({
        rel: "preload",
        href: "/albra/Albra-Grotesk-Semi-subset.woff2",
        as: "font",
        crossorigin: "anonymous"
    })

    head.link.push({
        rel: "preload",
        href: "/albra/Albra-Grotesk-Black-subset.woff2",
        as: "font",
        crossorigin: "anonymous"
    })

    head.link.push({
        rel: "stylesheet",
        href: "/albra/albra.css",
    })

    head.link.push({
        rel: "stylesheet",
        href: "/albra/albra-grotesk.css",
    })
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
}
