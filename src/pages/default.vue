<template>
    <div>
        <Navbar />
        <div class="admin-content">
            <div class="container-full">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
    components: { Navbar },
};
</script>

<style></style>
