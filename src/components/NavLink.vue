<template>
    <g-link
      class="relative inline-block px-1 font-sans font-semi text-xl mr-6 text-gray-900 lowercase"
      :to="to">
      {{ title }}
      <span v-if="active" class="z-10 absolute inset-x-0 bottom-0 mb-1 h-1 bg-rust inline-block" />
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
