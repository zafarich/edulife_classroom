<template>
    <div class="mt-24">
        <div class="back-top">
            <button @click="$router.go(-1)">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <path
                        d="M3.828 6.99998H16V8.99998H3.828L9.192 14.364L7.778 15.778L0 7.99998L7.778 0.221985L9.192 1.63598L3.828 6.99998Z"
                        fill="#4D4D4D"
                    />
                </svg>
                <span> Orqaga </span>
            </button>
        </div>

        <div class="mt-24">
            <div class="card-row">
                <div
                    class="item-2"
                    v-for="(item, index) in number"
                    :key="index"
                >
                    <div class="alp-item">
                        <div class="picture">
                            <img
                                v-for="(img, i) in item.img"
                                :key="i"
                                :src="
                                    require(`@/assets/img/number/${img.img}.png`)
                                "
                                :alt="img.img"
                            />
                        </div>
                        <h5>{{ item.name }}</h5>
                        <h6>[{{ item.speech }}]</h6>

                        <div class="bot">
                            <abbr title="Eshitish uchun bosing">
                                <button class="voice">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="18"
                                        viewBox="0 0 22 18"
                                        fill="none"
                                    >
                                        <path
                                            d="M9 4.22001L5.603 7.00001H2V11H5.603L9 13.78V4.22001ZM4.889 13H1C0.734784 13 0.48043 12.8946 0.292893 12.7071C0.105357 12.5196 0 12.2652 0 12V6.00001C0 5.73479 0.105357 5.48044 0.292893 5.2929C0.48043 5.10536 0.734784 5.00001 1 5.00001H4.889L10.183 0.668006C10.2563 0.607953 10.3451 0.569943 10.4391 0.558399C10.5331 0.546856 10.6284 0.562255 10.714 0.602804C10.7996 0.643352 10.872 0.707382 10.9226 0.787439C10.9732 0.867495 11.0001 0.960285 11 1.05501V16.945C11.0001 17.0397 10.9732 17.1325 10.9226 17.2126C10.872 17.2926 10.7996 17.3567 10.714 17.3972C10.6284 17.4378 10.5331 17.4532 10.4391 17.4416C10.3451 17.4301 10.2563 17.3921 10.183 17.332L4.89 13H4.889ZM18.406 17.134L16.99 15.718C17.938 14.8745 18.6964 13.8397 19.2152 12.6817C19.734 11.5237 20.0015 10.2689 20 9.00001C20.0012 7.6661 19.7054 6.34866 19.1339 5.14338C18.5624 3.9381 17.7296 2.87524 16.696 2.03201L18.116 0.612006C19.3345 1.64355 20.3132 2.92849 20.9841 4.3772C21.6549 5.82591 22.0016 7.40352 22 9.00001C22 12.223 20.614 15.122 18.406 17.134ZM14.863 13.591L13.441 12.169C13.9265 11.7957 14.3196 11.3157 14.5899 10.7662C14.8602 10.2167 15.0006 9.61241 15 9.00001C15 7.57001 14.25 6.31501 13.12 5.60801L14.559 4.16901C15.3165 4.7262 15.9321 5.45386 16.3562 6.29312C16.7802 7.13239 17.0008 8.05969 17 9.00001C17 10.842 16.17 12.49 14.863 13.591Z"
                                            fill="black"
                                            fill-opacity="0.6"
                                        />
                                    </svg>
                                </button>
                            </abbr>
                        </div>
                    </div>
                </div>
                <div
                    class="item-4"
                    v-for="(item, index) in number1000"
                    :key="index"
                >
                    <div class="alp-item">
                        <div class="picture">
                            <img
                                v-for="(img, i) in item.img"
                                :key="i"
                                :src="
                                    require(`@/assets/img/number/${img.img}.png`)
                                "
                                :alt="img.img"
                            />
                        </div>
                        <h5>{{ item.name }}</h5>
                        <h6>[{{ item.speech }}]</h6>

                        <div class="bot">
                            <abbr title="Eshitish uchun bosing">
                                <button class="voice">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="18"
                                        viewBox="0 0 22 18"
                                        fill="none"
                                    >
                                        <path
                                            d="M9 4.22001L5.603 7.00001H2V11H5.603L9 13.78V4.22001ZM4.889 13H1C0.734784 13 0.48043 12.8946 0.292893 12.7071C0.105357 12.5196 0 12.2652 0 12V6.00001C0 5.73479 0.105357 5.48044 0.292893 5.2929C0.48043 5.10536 0.734784 5.00001 1 5.00001H4.889L10.183 0.668006C10.2563 0.607953 10.3451 0.569943 10.4391 0.558399C10.5331 0.546856 10.6284 0.562255 10.714 0.602804C10.7996 0.643352 10.872 0.707382 10.9226 0.787439C10.9732 0.867495 11.0001 0.960285 11 1.05501V16.945C11.0001 17.0397 10.9732 17.1325 10.9226 17.2126C10.872 17.2926 10.7996 17.3567 10.714 17.3972C10.6284 17.4378 10.5331 17.4532 10.4391 17.4416C10.3451 17.4301 10.2563 17.3921 10.183 17.332L4.89 13H4.889ZM18.406 17.134L16.99 15.718C17.938 14.8745 18.6964 13.8397 19.2152 12.6817C19.734 11.5237 20.0015 10.2689 20 9.00001C20.0012 7.6661 19.7054 6.34866 19.1339 5.14338C18.5624 3.9381 17.7296 2.87524 16.696 2.03201L18.116 0.612006C19.3345 1.64355 20.3132 2.92849 20.9841 4.3772C21.6549 5.82591 22.0016 7.40352 22 9.00001C22 12.223 20.614 15.122 18.406 17.134ZM14.863 13.591L13.441 12.169C13.9265 11.7957 14.3196 11.3157 14.5899 10.7662C14.8602 10.2167 15.0006 9.61241 15 9.00001C15 7.57001 14.25 6.31501 13.12 5.60801L14.559 4.16901C15.3165 4.7262 15.9321 5.45386 16.3562 6.29312C16.7802 7.13239 17.0008 8.05969 17 9.00001C17 10.842 16.17 12.49 14.863 13.591Z"
                                            fill="black"
                                            fill-opacity="0.6"
                                        />
                                    </svg>
                                </button>
                            </abbr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            number: [
                {
                    img: [
                        {
                            img: "0",
                        },
                    ],
                    name: "Zero",
                    speech: "zero’",
                    letter: "ALLIGATOR",
                    char: "A",
                },
                {
                    img: [
                        {
                            img: "1",
                        },
                    ],
                    name: "One",
                    speech: "van",
                    letter: "BEAR",
                    char: "B",
                },
                {
                    img: [
                        {
                            img: "2",
                        },
                    ],
                    name: "Two",
                    speech: "tu",
                    letter: "CAT",
                    char: "C",
                },
                {
                    img: [
                        {
                            img: "3",
                        },
                    ],
                    name: "Three",
                    speech: "sri",
                    letter: "DUCK",
                    char: "D",
                },
                {
                    img: [
                        {
                            img: "4",
                        },
                    ],
                    name: "Four",
                    speech: "fo’r",
                    letter: "ELEPHANT",
                    char: "E",
                },
                {
                    img: [
                        {
                            img: "5",
                        },
                    ],
                    name: "Five",
                    speech: "fayv",
                    letter: "FROG",
                    char: "F",
                },
                {
                    img: [
                        {
                            img: "6",
                        },
                    ],
                    name: "six",
                    speech: "six",
                    letter: "GIRAFFE",
                    char: "G",
                },
                {
                    img: [
                        {
                            img: "7",
                        },
                    ],
                    name: "seven",
                    speech: "seven",
                    letter: "HIPPOPOTAMUS",
                    char: "H",
                },
                {
                    img: [
                        {
                            img: "8",
                        },
                    ],
                    name: "Eight",
                    speech: "eyt",
                    letter: "IGUANA",
                    char: "I",
                },
                {
                    img: [
                        {
                            img: "9",
                        },
                    ],
                    name: "Nine",
                    speech: "nayn",
                    letter: "JELLYFISH",
                    char: "J",
                },
                {
                    img: [
                        {
                            img: "1",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "ten",
                    speech: "ten",
                    letter: "KOALA",
                    char: "K",
                },
                {
                    img: [
                        {
                            img: "2",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Twenty",
                    speech: "tventy",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "3",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Thirty",
                    speech: "so'rti",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "4",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Forty",
                    speech: "fourti",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "5",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Fifty",
                    speech: "fifti",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "6",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Sixty",
                    speech: "sixti",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "7",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Seventy",
                    speech: "seventi",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "8",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Eighty",
                    speech: "eiti",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "9",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Ninety",
                    speech: "naynti",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "1",
                        },
                        {
                            img: "0",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "One hundred",
                    speech: "van handrid",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "2",
                        },
                        {
                            img: "0",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Two hundred",
                    speech: "tu handrid",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "3",
                        },
                        {
                            img: "0",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Three hundred",
                    speech: "sri handred",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "4",
                        },
                        {
                            img: "0",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Four hundred",
                    speech: "fo'r handred",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "5",
                        },
                        {
                            img: "0",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Five hundred",
                    speech: "fayv handred",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "6",
                        },
                        {
                            img: "0",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Six hundred",
                    speech: "six handred",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "7",
                        },
                        {
                            img: "0",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Seven hundred",
                    speech: "seven handred",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "8",
                        },
                        {
                            img: "0",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Eight hundred",
                    speech: "eit handred",
                    letter: "LION",
                    char: "L",
                },
                {
                    img: [
                        {
                            img: "9",
                        },
                        {
                            img: "0",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "Nine hundred",
                    speech: "nayn handred",
                    letter: "LION",
                    char: "L",
                },
            ],
            number1000: [
                {
                    img: [
                        {
                            img: "1",
                        },
                        {
                            img: "0",
                        },
                        {
                            img: "0",
                        },
                        {
                            img: "0",
                        },
                    ],
                    name: "One thousand",
                    speech: "van sausand",
                    letter: "LION",
                    char: "L",
                },
            ],

            filter: {
                sostav: ["id1", "id2"],
                stiker: [],
                dizayn: ["id3"],
            },
        };
    },
};
</script>

<style lang="scss">
div.alp-item {
    background: #ffffff;
    border-radius: 5px;
    padding: 15px 5px 5px 5px;
    // height: 100%;
    margin-bottom: 24px;
    div.picture {
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
        img {
            height: 110px;
            object-fit: cover;
            margin: 0 3px;
        }
    }
    h5 {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.03em;
        color: #000000;
        margin-bottom: 5px;
    }
    h6 {
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.03em;
        color: #000000;
    }
    div.bot {
        display: flex;
        justify-content: flex-end;
    }

    button.voice {
        width: 45px;
        height: 45px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        transition: 0.2s;
        &:hover {
            background-color: #dffffb;
        }
    }
}
</style>
