<template>
    <h1 class="font-serif font-black text-mega text-gray-700 lowercase">
        <span>{{ headerText }}<span class="text-gray-400">?</span></span>
    </h1>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
      headerText: {
        type: String,
        required: true
      },
    },
}
</script>
