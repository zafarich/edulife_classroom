<template>
    <div>
        <div class="marks">
            <div class="top">
                <div class="title-kurs">
                    <h3>Kurslar</h3>
                </div>
                <div class="card-row">
                    <div class="item-3" v-for="item in 2" :key="item">
                        <router-link :to="{ name: `index` }">
                            <div class="card-box card-top">
                                <div class="img">
                                    <img src="@/assets/img/kurs.png" alt="" />
                                </div>
                                <div class="info-card">
                                    <h3>Figma UI/UX design</h3>
                                    <div class="result">
                                        <p><span>34/118</span> Video darslar</p>
                                        <p><span>4/17</span> Vazifalar</p>
                                        <p><span>5/7</span> Test</p>
                                    </div>
                                    <p>Natija: 70%</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="item-3" v-for="item in 2" :key="item">
                        <router-link :to="{ name: `index` }">
                            <div class="card-box card-top">
                                <div class="img">
                                    <img src="@/assets/img/kurs.png" alt="" />
                                </div>
                                <div class="info-card">
                                    <h3>Figma UI/UX design</h3>
                                    <div class="result">
                                        <p>
                                            <span>118/118</span> Video darslar
                                        </p>
                                        <p><span>17/17</span> Vazifalar</p>
                                        <p><span>7/7</span> Test</p>
                                    </div>
                                    <p class="flex">
                                        Natija: 100%
                                        <span class="flex"
                                            ><svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.99967 13.6667C3.31767 13.6667 0.333008 10.682 0.333008 7.00004C0.333008 3.31804 3.31767 0.333374 6.99967 0.333374C10.6817 0.333374 13.6663 3.31804 13.6663 7.00004C13.6663 10.682 10.6817 13.6667 6.99967 13.6667ZM6.99967 12.3334C8.41416 12.3334 9.77072 11.7715 10.7709 10.7713C11.7711 9.77108 12.333 8.41453 12.333 7.00004C12.333 5.58555 11.7711 4.229 10.7709 3.2288C9.77072 2.22861 8.41416 1.66671 6.99967 1.66671C5.58519 1.66671 4.22863 2.22861 3.22844 3.2288C2.22824 4.229 1.66634 5.58555 1.66634 7.00004C1.66634 8.41453 2.22824 9.77108 3.22844 10.7713C4.22863 11.7715 5.58519 12.3334 6.99967 12.3334ZM6.33501 9.66671L3.50634 6.83804L4.44901 5.89537L6.33501 7.78137L10.1057 4.01004L11.049 4.95271L6.33501 9.66671Z"
                                                    fill="#007E6F"
                                                />
                                            </svg>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="title-kurs">
                    <h3>Tavsiya etilgan kurslar</h3>
                </div>
                <div class="card-row">
                    <div class="item-4" v-for="item in 6" :key="item">
                        <router-link
                            class="card-bottom flex"
                            :to="{ name: `index` }"
                        >
                            <div class="img">
                                <img src="@/assets/img/kurs.png" alt="" />
                            </div>
                            <div class="kurs-info">
                                <p class="price">250.000 so’m</p>
                                <p class="name-kurs">Grafik dizayn</p>
                                <p class="info">
                                    Siz bu kursda grafik dizayn asoslari to’liq
                                    o’zlashtirib chiqas...
                                </p>
                                <p class="length">
                                    Davomiyligi: <span>3 oy</span>
                                </p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.marks {
    padding: 20px 0;
    .title-kurs {
        margin-bottom: 20px;
        h3 {
            font-weight: normal;
            font-size: 25px;
            line-height: 31px;
            color: #000000;
        }
    }
    .top {
        margin-bottom: 30px;
        .card-top {
            padding: 0;
            overflow: hidden;
            .img {
                img {
                    width: 100%;
                    height: 100%;
                    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.16);
                }
            }
            .info-card {
                padding: 10px 15px;
                h3 {
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 30px;
                    color: #000000;
                }
                .result {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    p {
                        font-size: 12px;
                        line-height: 24px;
                        letter-spacing: 0.02em;
                        color: rgba(0, 0, 0, 0.6);
                        span {
                            color: rgba(0, 0, 0);
                        }
                    }
                }
                p {
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.02em;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }
    .bottom {
        .card-bottom {
            background: #fff;
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: 20px;
            .img {
                width: 150px;
                height: 150px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .kurs-info {
                width: calc(100% - 155px);
                padding: 10px;
                p.price {
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 30px;
                    color: #000000;
                }
                p.name-kurs {
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.02em;
                    color: rgba(0, 0, 0, 0.8);
                }
                p.info {
                    font-size: 16px;
                    letter-spacing: 0.02em;
                    color: rgba(0, 0, 0, 0.6);

                    height: 48px;
                    line-height: 24px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                p.length {
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.02em;
                    color: rgba(0, 0, 0, 0.6);
                    span {
                        color: rgba(0, 0, 0, 0.9);
                    }
                }
            }
        }
    }
}
</style>
