<template>
    <Layout>
        <div>
            <PageHeader header-text="who" />
        </div>
    </Layout>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  name: 'Who',
  components: {
    PageHeader,
  },
  metaInfo: {
    title: 'Who Beards'
  },
}
</script>
