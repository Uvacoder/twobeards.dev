<template>
    <div class="ml-4 md:ml-24 xl:ml-56 px-4">
        <PageHeader :header-text="headerText" />
        <slot></slot>
    </div>
</template>

<script>
import PageHeader from './PageHeader.vue'

export default {
    name: 'FiveDoubleYewLayout',
    props: {
        headerText: {
            type: String,
            default: '',
        },
    },
    components: {
        PageHeader,
    },
}
</script>
