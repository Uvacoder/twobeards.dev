<template>
  <Layout>
      <div class="m ml-56">
        <PageHeader header-text="what" />
      </div>
  </Layout>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  name: 'What',
  components: {
    PageHeader,
  },
  metaInfo: {
    title: 'What Beards'
  },
}
</script>
