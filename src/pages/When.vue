<template>
    <Layout>
        <FiveDoubleYewLayout header-text="when">
            <CountupTimer class="mt-12" />
        </FiveDoubleYewLayout>
    </Layout>
</template>

<script>
import FiveDoubleYewLayout from '@/components/FiveDoubleYewLayout'
import CountupTimer from '@/components/CountupTimer'

export default {
    name: 'When',
    components: {
        FiveDoubleYewLayout,
        CountupTimer
    },
    metaInfo: {
        title: 'When Beards',
    },
}
</script>
