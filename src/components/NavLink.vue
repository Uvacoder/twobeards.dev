<template>
    <g-link
      class="relative inline-block px-1 font-sans font-semi text-xl mx-2 md:mx-3 lowercase group"
      :to="to">
      {{ title }}
      <span v-if="active" class="z-10 absolute inset-x-0 bottom-0 mb-1 h-1 bg-rust inline-block" />
      <span v-else class="hidden group-hover:block text-rust absolute right-0 -mr-2 -mt-1 top-0 font-serif font-bold text-3xl">?</span>
    </g-link>
</template>

<script>
export default {
    name: 'NavLink',
    props: {
      active: {
        type: Boolean,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        required: true,
      },
    },
}
</script>
