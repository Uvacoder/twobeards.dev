<template>
    <footer class="flex w-full justify-between items-end text-gray-400 h-12 flex-shrink-0">
        <Logo class="h-6" />
    </footer>
</template>

<script>
import Logo from './Logo.vue'

export default {
    name: 'SiteFooter',
    components: {
      Logo,
    },
}
</script>
