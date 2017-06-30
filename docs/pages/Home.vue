<template>
    <section class="home">
        <app-header home></app-header>
        <MyTestComponent :msg="'hello world'"></MyTestComponent>
        <app-footer></app-footer>
    </section>
</template>

<script>
    import AppHeader from '../template/Header'
    import AppFooter from '../template/Footer'

    export default {
        name: 'app',
        components: {
            AppHeader,
            AppFooter
        }
    }
</script>
