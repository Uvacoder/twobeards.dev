<template>
    <header class="p-4 text-gray-900 flex items-center mb-12">
        <LogoMark class="h-12 mr-8" />
        <nav class="flex items-center">
            <NavLink to="/who" title="Who" :active="$route.path === '/who'" />
            <NavLink to="/what" title="What" :active="$route.path === '/what'" />
            <NavLink to="/when" title="When" :active="$route.path === '/when'" />
            <NavLink to="/where" title="Where" :active="$route.path === '/where'" />
            <NavLink to="/why" title="Why" :active="$route.path === '/why'" />
        </nav>
    </header>
</template>

<script>
import LogoMark from './LogoMark.vue'
import NavLink from './NavLink.vue'

export default {
    name: 'SiteNav',
    components: {
      LogoMark,
      NavLink,
    },
}
</script>
