<template>
    <Layout>
        <FiveDoubleYewLayout header-text="what">
            <p class="font-sans text-lg md:text-xl text-gray-800 leading-8 md:leading-8 max-w-3xl ml-2 md:ml-8">
                We like making things together. Sometimes people pay us to do that.
                If you pay us to make awesome stuff for you, we get to hang out more and you get a rad website.
                It's a win-win, really. If that sounds cool to you, get in touch with us!
            </p>
        </FiveDoubleYewLayout>
    </Layout>
</template>

<script>
import FiveDoubleYewLayout from '@/components/FiveDoubleYewLayout'

export default {
    name: 'What',
    components: {
        FiveDoubleYewLayout,
    },
    metaInfo: {
        title: 'What Beards',
    },
}
</script>
