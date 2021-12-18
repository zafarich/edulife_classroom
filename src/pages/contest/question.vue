<template>
    <div>
        <div class="question">
            <div class="card-row">
                <div class="item-3 left">
                    <div class="card-box box">
                        <div class="title-box">
                            <p>Boshlash sanasi</p>
                        </div>
                        <div class="input-form">
                            <p>Sana</p>
                            <input type="text" placeholder="Sana" />
                        </div>
                    </div>
                    <div class="card-box box">
                        <div class="title-box">
                            <p>Davomiyligi</p>
                        </div>
                        <div class="input-form">
                            <p>Boshlash vaqti</p>
                            <input type="text" placeholder="Boshlash vaqti" />
                        </div>
                        <div class="input-form">
                            <p>Tugash vaqti</p>
                            <input type="text" placeholder="Tugash vaqti" />
                        </div>
                    </div>
                    <div class="card-box box">
                        <div class="title-box">
                            <p>Toifa</p>
                        </div>
                        <div class="input-form">
                            <p>Toifalar</p>
                            <select name="" id="">
                                <option value="">opt</option>
                                <option value="">opt</option>
                                <option value="">opt</option>
                            </select>
                        </div>
                    </div>
                    <button class="start">Boshlash</button>
                </div>
                <div class="item-9">
                    <div class="card-box box">
                        <div class="title-box">
                            <p>Qisqacha izoh</p>
                        </div>
                        <div class="input-form">
                            <input
                                type="text"
                                placeholder="Sarlavha yozing...!"
                            />
                        </div>
                        <div class="input-form">
                            <textarea
                                placeholder="Shu yerga yozing...!"
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                    </div>
                    <div class="card-box">
                        <div class="question-table">
                            <p>Savollar</p>
                            <div class="right">
                                <button class="random flex">
                                    <span class="flex"
                                        ><svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.64167 1.95533C3.85138 0.907108 5.399 0.331102 6.99967 0.333335C10.6817 0.333335 13.6663 3.318 13.6663 7C13.6663 8.424 13.2197 9.744 12.4597 10.8267L10.333 7H12.333C12.3331 5.95442 12.0258 4.93187 11.4495 4.05951C10.8731 3.18714 10.053 2.50344 9.09113 2.09342C8.12929 1.68339 7.06815 1.56514 6.03965 1.75335C5.01114 1.94156 4.06064 2.42793 3.30634 3.152L2.64167 1.95533ZM11.3577 12.0447C10.148 13.0929 8.60035 13.6689 6.99967 13.6667C3.31767 13.6667 0.333008 10.682 0.333008 7C0.333008 5.576 0.779674 4.256 1.53967 3.17333L3.66634 7H1.66634C1.66626 8.04559 1.97351 9.06813 2.5499 9.9405C3.12629 10.8129 3.94639 11.4966 4.90822 11.9066C5.87006 12.3166 6.9312 12.4349 7.9597 12.2467C8.98821 12.0584 9.93871 11.5721 10.693 10.848L11.3577 12.0447Z"
                                                fill="#004C43"
                                            />
                                        </svg>
                                    </span>
                                    Random orqali tanlash
                                </button>
                                <select name="" id="">
                                    <option value="">Filtr</option>
                                    <option value="">1</option>
                                    <option value="">1</option>
                                </select>
                                <div class="search-input">
                                    <input
                                        type="search"
                                        placeholder="Savollar izlash..."
                                    />
                                    <span class="flex">
                                        <svg
                                            width="21"
                                            height="21"
                                            viewBox="0 0 21 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9.00001C0 4.03201 4.032 7.62939e-06 9 7.62939e-06C13.968 7.62939e-06 18 4.03201 18 9.00001C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9.00001C16 5.13201 12.867 2.00001 9 2.00001C5.132 2.00001 2 5.13201 2 9.00001C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
                                                fill="#808080"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="table-all">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Savol nomi</th>
                                        <th>Qiyinlik darajasi</th>
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
                                    <tr v-for="(item, index) in 6" :key="index">
                                        <td>
                                            <input
                                                type="checkbox"
                                                id="vehicle1"
                                                name="vehicle1"
                                                value="Bike"
                                            />
                                        </td>
                                        <td class="light-td">
                                            <router-link
                                                :to="{ name: `contest-id` }"
                                            >
                                                A+B
                                            </router-link>
                                        </td>
                                        <td class="light-td">1%</td>
                                        <td class="light-td">9774</td>
                                        <td class="light-td">5431</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.question {
    padding: 20px 0;
    .left {
        button.start {
            background: #007e6f;
            border-radius: 100px;
            width: 100%;
            padding: 17px 0;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.03em;
            color: #ffffff;
        }
    }
    .question-table {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        p {
            font-size: 25px;
            line-height: 31px;
            color: #000000;
        }
        .right {
            display: flex;
            align-items: center;
            button {
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.02em;
                color: #004c43;
                span {
                    margin-right: 5px;
                }
            }
            .search-input {
                position: relative;
                span {
                    position: absolute;
                    top: 50%;
                    right: 10px;
                    transform: translate(0, -50%);
                }
            }
            select {
                width: 200px;
            }

            select,
            input {
                margin-left: 20px;
                background: #efefef;
                border-radius: 30px;
                padding: 10px 15px;
                border: 1px solid transparent;
                &:focus {
                    outline: 1px solid $gc;
                }
            }
            input {
                width: 250px;
                padding-right: 30px;
            }
        }
    }
    .box {
        margin-bottom: 20px;
        .title-box {
            font-size: 25px;
            line-height: 31px;
            color: #000000;
            margin-bottom: 20px;
        }
        .input-form {
            p {
                font-size: 20px;
                line-height: 30px;
                color: #000000;
            }
            input,
            textarea,
            select {
                border: 0;
                width: 100%;
                padding: 10px 20px;
                background: #efefef;
                border-radius: 30px;
                border: 1px solid #efefef;
                &:focus {
                    outline: 1px solid $gc;
                }
            }
            textarea {
                margin-top: 20px;
            }
        }
    }
}
</style>
