<template>
    <div>
        <div class="view">
            <Viewcode :code="code" :lang="`css`" />
        </div>
    </div>
</template>

<script>
import Viewcode from "../../components/Viewcode.vue";
export default {
    components: {
        Viewcode,
    },
    data() {
        return {
            options: {},
            code: "div.asd{ width: 100% }",
        };
    },

    methods: {},
};
</script>

<style lang="scss">
.view {
    max-width: 50%;
}
</style>
