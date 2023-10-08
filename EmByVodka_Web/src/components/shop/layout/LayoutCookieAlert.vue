<template>
    <div class="alert text-center cookiealert" role="alert">
        <b>Do you like cookies?</b> We use cookies to ensure you get the best experience on our website. <a
            href="https://cookiesandyou.com/">Learn more</a>

        <button type="button" class="btn btn-primary btn-sm acceptcookies" aria-label="Close">
            I agree
        </button>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { initializeCookieAlert } from '../../../assets/legacy/cookiealert'

export default {
    name: 'LayoutCookieAlert',
    setup() {
        onMounted(() => {
            initializeCookieAlert();
        })
    }
}
</script>
