<template>
    <div class="mt-24">
        <div>
            <div class="card-row">
                <div class="item-4">
                    <router-link class="english-top" :to="{ name: `alphabet` }">
                        <span class="vector">
                            <img src="@/assets/img/top1.png" alt="" />
                        </span>

                        <div class="vector-right">
                            <h1>Alfavitni o'rganamiz</h1>
                            <p>
                                Ingiliz tili alifbosini eshitish orqali
                                o'rganing
                            </p>
                        </div>
                    </router-link>
                </div>
                <div class="item-4">
                    <router-link class="english-top" :to="{ name: `number` }">
                        <span class="vector">
                            <img src="@/assets/img/top1.png" alt="" />
                        </span>

                        <div class="vector-right">
                            <h1>Sanashni o'rganish</h1>
                            <p>
                                Ingiliz tilida sanash eshitish orqali o'rganing
                            </p>
                        </div>
                    </router-link>
                </div>
                <div class="item-4">
                    <router-link class="english-top" :to="{ name: `index` }">
                        <span class="vector">
                            <img src="@/assets/img/top2.png" alt="" />
                        </span>

                        <div class="vector-right">
                            <h1>O'yinlar</h1>
                            <p>
                                Ingiliz tilini o'yinlar orqali tez
                                o'rganishingiz mumkin
                            </p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/styles/style.scss";
.english-top {
    display: flex;
    background: #ffffff;
    border-radius: 5px;
    padding: 20px;
    span.vector {
        width: 117px;
        margin-right: 40px;
    }

    div.vector-right {
        h1 {
            font-weight: normal;
            font-size: 25px;
            line-height: 31px;
            color: $gc;
            margin-bottom: 7px;
        }
        p {
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.02em;
            color: rgba(0, 0, 0, 0.8);
        }
    }
}
</style>
