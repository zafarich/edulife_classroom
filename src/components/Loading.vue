<template>
    <div v-if="isLoading">
        <div class="loading-full">
            <div class="hollow-dots-spinner" :style="spinnerStyle">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isLoading() {
            return this.$store.state.loading;
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/styles/style.scss";
div.loading-full {
    position: fixed;
    background: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 100vh;
    z-index: 15122021;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hollow-dots-spinner,
.hollow-dots-spinner * {
    box-sizing: border-box;
}

.hollow-dots-spinner {
    height: 15px;
    width: calc(30px * 3);
}

.hollow-dots-spinner .dot {
    width: 15px;
    height: 15px;
    margin: 0 calc(15px / 2);
    border: calc(15px / 5) solid $gc;
    border-radius: 50%;
    float: left;
    transform: scale(0);
    animation: hollow-dots-spinner-animation 700ms ease infinite 0ms;
}

.hollow-dots-spinner .dot:nth-child(1) {
    animation-delay: calc(300ms * 1);
}

.hollow-dots-spinner .dot:nth-child(2) {
    animation-delay: calc(300ms * 2);
}

.hollow-dots-spinner .dot:nth-child(3) {
    animation-delay: calc(300ms * 3);
}

@keyframes hollow-dots-spinner-animation {
    50% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
