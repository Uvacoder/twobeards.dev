<template>
    <div class="font-sans text-xl md:text-4xl">
        {{ time }}
    </div>
</template>

<script>
import format from 'date-fns/format'

export default {
    name: 'CountupTimer',
    data() {
        return {
            time: '',
            intervalTimer: null,
        }
    },
    created() {
        this.setTime()
        this.intervalTimer = setInterval(() => {
            this.setTime()
        }, 1000)
    },
    destroyed() {
        this.stopTimer()
    },
    methods: {
        setTime() {
            this.time = format(new Date(), 'PPPP pp')
        },
        stopTimer() {
            clearInterval(this.intervalTimer)
        },
    },
}
</script>
