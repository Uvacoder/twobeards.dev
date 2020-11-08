<template>
    <div class="bg-white text-black w-full font-sans min-h-screen flex flex-col">
        <SiteNav />
        <main role="main" class="w-full flex-auto">
            <slot />
        </main>
        <SiteFooter/>
    </div>
</template>

<script>
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default {
  components: {
    SiteNav,
    SiteFooter,
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
