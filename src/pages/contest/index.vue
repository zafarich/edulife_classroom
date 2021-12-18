<template>
    <div>
        <div class="contest">
            <div class="card-box top flex">
                <div class="head-input">
                    <div class="input-form">
                        <input type="search" placeholder="Masalalar izlash" />
                        <span
                            ><svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
                                    fill="#808080"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="buttons">
                    <button class="flex">
                        <span class="flex"
                            ><svg
                                width="16"
                                height="21"
                                viewBox="0 0 16 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 5.00002C10.1217 5.00002 12.1566 5.84288 13.6569 7.34317C15.1571 8.84346 16 10.8783 16 13C16 15.1218 15.1571 17.1566 13.6569 18.6569C12.1566 20.1572 10.1217 21 8 21C5.87827 21 3.84344 20.1572 2.34315 18.6569C0.842855 17.1566 0 15.1218 0 13C0 10.8783 0.842855 8.84346 2.34315 7.34317C3.84344 5.84288 5.87827 5.00002 8 5.00002ZM8 7.00002C6.4087 7.00002 4.88258 7.63216 3.75736 8.75738C2.63214 9.8826 2 11.4087 2 13C2 14.5913 2.63214 16.1174 3.75736 17.2427C4.88258 18.3679 6.4087 19 8 19C9.5913 19 11.1174 18.3679 12.2426 17.2427C13.3679 16.1174 14 14.5913 14 13C14 11.4087 13.3679 9.8826 12.2426 8.75738C11.1174 7.63216 9.5913 7.00002 8 7.00002ZM8 8.50002L9.323 11.18L12.28 11.61L10.14 13.695L10.645 16.641L8 15.25L5.355 16.64L5.86 13.695L3.72 11.609L6.677 11.179L8 8.50002ZM14 2.34842e-05V3.00002L12.637 4.13802C11.5059 3.54461 10.2711 3.17486 9 3.04902V2.34842e-05H14ZM7 -0.000976562V3.04902C5.72935 3.17467 4.49482 3.54408 3.364 4.13702L2 3.00002V2.34842e-05L7 -0.000976562Z"
                                    fill="black"
                                    fill-opacity="0.7"
                                />
                            </svg>
                        </span>
                        Olimpiada
                    </button>
                    <router-link
                        :to="{ name: `contest-question` }"
                        class="flex"
                    >
                        <span class="flex"
                            ><svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z"
                                    fill="black"
                                    fill-opacity="0.7"
                                />
                            </svg>
                        </span>
                        Olimpiada
                    </router-link>
                </div>
            </div>

            <div class="card-box">
                <div class="table-all">
                    <table>
                        <thead>
                            <tr>
                                <th>Tartib raqam</th>
                                <th>Nomi</th>
                                <th>Qiyinchiligi</th>
                                <th>Toifasi</th>
                                <th>
                                    <span class="flex"
                                        ><svg
                                            width="16"
                                            height="21"
                                            viewBox="0 0 16 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H14C14 19.4087 13.3679 17.8826 12.2426 16.7574C11.1174 15.6321 9.5913 15 8 15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.63214 17.8826 2 19.4087 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z"
                                                fill="#004C43"
                                            />
                                        </svg>
                                    </span>
                                </th>
                                <th>
                                    <span class="flex"
                                        ><svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM2 2V16H16V2H2ZM8.003 13L3.76 8.757L5.174 7.343L8.003 10.172L13.659 4.515L15.074 5.929L8.003 13Z"
                                                fill="#004C43"
                                            />
                                        </svg>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in 10" :key="index">
                                <td>0001</td>
                                <td class="light-td">
                                    <router-link :to="{ name: `contest-id` }">
                                        A+B
                                    </router-link>
                                </td>
                                <td class="light-td">1%</td>
                                <td class="light-td">Oson</td>
                                <td class="light-td">9774</td>
                                <td class="light-td">5431</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="counter">
                        <div class="center">
                            <button>Ortga</button>
                            <p>192<span>/1212</span></p>
                            <button>Oldinga</button>
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
            table: {},
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.contest {
    padding: 20px 0;
    .counter {
        background: #007e6f;
        border-radius: 0px 0px 5px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        .center {
            background: #ffffff;
            border-radius: 50px;
            display: flex;
            align-items: center;
            p {
                padding: 0px 15px;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.02em;
                color: #000000;
                span {
                    color: #007264;
                }
            }
            button {
                background: #c7fff9;
                border-radius: 50px;
                padding: 9px 27px;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.02em;
                color: #007264;
            }
        }
    }
    .top {
        margin-bottom: 20px;
        padding: 5px 20px;
        .buttons {
            display: flex;
        }
        a {
            margin-left: 20px;
            color: #000000;
            span {
                margin-right: 10px;
            }
        }
    }
    .head-input {
        .input-form {
            position: relative;
            input {
                width: 350px;
                background: #efefef;
                border-radius: 30px;
                border: 0;
                padding: 15px 20px;
                &:focus {
                    outline: 1px solid #007e6f;
                }
            }
            span {
                position: absolute;
                top: 50%;
                right: 20px;
                transform: translate(0, -50%);
            }
        }
    }
}
</style>
