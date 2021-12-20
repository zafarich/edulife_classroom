<template>
    <div class="mt-24">
        <div class="card-row">
            <div class="item-9">
                <div class="card-row">
                    <div class="item-8 mb-24">
                        <div class="video-course mb-24">
                            <video controls src="@/assets/video.mp4"></video>
                        </div>

                        <div class="tab-course">
                            <div v-if="activeTab == 1">1</div>
                            <div v-if="activeTab == 2">2</div>
                            <div v-if="activeTab == 3">
                                <h2 class="video-title">Testlar</h2>

                                <div class="question-item">
                                    <h4>
                                        1. Savol bo’lishi kerak bo’lgan joy?
                                    </h4>

                                    <div class="radio-box">
                                        <label class="cont"
                                            >One
                                            <input
                                                type="radio"
                                                checked="checked"
                                                name="radio"
                                            />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="cont"
                                            >Two
                                            <input type="radio" name="radio" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="question-item">
                                    <h4>
                                        1. Savol bo’lishi kerak bo’lgan joy?
                                    </h4>

                                    <div class="radio-box">
                                        <label class="cont"
                                            >One
                                            <input
                                                type="radio"
                                                checked="checked"
                                                name="radio"
                                            />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="cont"
                                            >Two
                                            <input type="radio" name="radio" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div v-if="activeTab == 4">4</div>
                        </div>
                    </div>
                    <div class="item-4">
                        <div class="card-box">
                            <h2 class="text-light mb-24">Tezkor manbalar</h2>

                            <div class="card-row">
                                <div class="item-6">
                                    <button
                                        @click="clickTab(1)"
                                        :class="
                                            activeTab == 1
                                                ? 'right-links active-tab'
                                                : 'right-links'
                                        "
                                    >
                                        <div class="top-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="26"
                                                viewBox="0 0 30 26"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.33325 25.9747C6.51198 25.8348 4.78146 25.1231 3.38879 23.9412C1.99611 22.7592 1.0125 21.1674 0.578388 19.3931C0.144278 17.6188 0.28187 15.7527 0.97152 14.0613C1.66117 12.3699 2.86761 10.9396 4.41858 9.97467C4.74859 7.40145 6.00498 5.03667 7.9526 3.32288C9.90023 1.60908 12.4056 0.663727 14.9999 0.663727C17.5942 0.663727 20.0996 1.60908 22.0472 3.32288C23.9948 5.03667 25.2512 7.40145 25.5812 9.97467C27.1322 10.9396 28.3387 12.3699 29.0283 14.0613C29.718 15.7527 29.8555 17.6188 29.4214 19.3931C28.9873 21.1674 28.0037 22.7592 26.611 23.9412C25.2184 25.1231 23.4878 25.8348 21.6666 25.9747V26H8.33325V25.9747ZM16.3332 14V8.66667H13.6666V14H9.66658L14.9999 20.6667L20.3332 14H16.3332Z"
                                                    fill="#007E6F"
                                                />
                                            </svg>
                                        </div>
                                        <h4>Resurslar</h4>
                                    </button>
                                </div>
                                <div class="item-6">
                                    <button
                                        @click="clickTab(2)"
                                        :class="
                                            activeTab == 2
                                                ? 'right-links active-tab'
                                                : 'right-links'
                                        "
                                    >
                                        <div class="top-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                viewBox="0 0 28 28"
                                                fill="none"
                                            >
                                                <path
                                                    d="M24.6737 0.666672C26.143 0.666672 27.3337 1.86401 27.3337 3.32001V24.68C27.3337 26.1453 26.143 27.3333 24.6737 27.3333H3.33366V22H0.666992V19.3333H3.33366V15.3333H0.666992V12.6667H3.33366V8.66667H0.666992V6.00001H3.33366V0.666672H24.6737ZM8.66699 3.33334H6.00033V24.6667H8.66699V3.33334ZM24.667 3.33334H11.3337V24.6667H24.667V3.33334Z"
                                                    fill="#808080"
                                                />
                                            </svg>
                                        </div>
                                        <h4>Vazifalar</h4>
                                    </button>
                                </div>
                                <div class="item-6">
                                    <button
                                        @click="clickTab(3)"
                                        :class="
                                            activeTab == 3
                                                ? 'right-links active-tab'
                                                : 'right-links'
                                        "
                                    >
                                        <div class="top-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="30"
                                                viewBox="0 0 22 30"
                                                fill="none"
                                            >
                                                <path
                                                    d="M17.6663 19.3267V28.4893C17.6664 28.6073 17.6351 28.7231 17.5757 28.8251C17.5163 28.927 17.431 29.0113 17.3284 29.0695C17.2257 29.1276 17.1095 29.1575 16.9916 29.1561C16.8736 29.1547 16.7582 29.122 16.657 29.0613L10.9997 25.6667L5.34234 29.0613C5.24106 29.122 5.12549 29.1547 5.00743 29.1561C4.88937 29.1575 4.77306 29.1275 4.6704 29.0692C4.56774 29.0108 4.4824 28.9263 4.42313 28.8242C4.36385 28.7221 4.33275 28.6061 4.33301 28.488V19.328C2.60787 17.9468 1.35433 16.0638 0.74562 13.9394C0.136909 11.8149 0.203082 9.55385 0.934996 7.46863C1.66691 5.38341 3.02842 3.577 4.83139 2.29904C6.63435 1.02108 8.78973 0.334671 10.9997 0.334671C13.2096 0.334671 15.365 1.02108 17.168 2.29904C18.9709 3.577 20.3324 5.38341 21.0644 7.46863C21.7963 9.55385 21.8624 11.8149 21.2537 13.9394C20.645 16.0638 19.3915 17.9468 17.6663 19.328V19.3267ZM6.99968 20.8907V24.9573L10.9997 22.5573L14.9997 24.9573V20.8907C13.7288 21.4047 12.3706 21.6682 10.9997 21.6667C9.62879 21.6682 8.27055 21.4047 6.99968 20.8907ZM10.9997 19C13.1214 19 15.1562 18.1571 16.6565 16.6569C18.1568 15.1566 18.9997 13.1217 18.9997 11C18.9997 8.87827 18.1568 6.84344 16.6565 5.34315C15.1562 3.84286 13.1214 3 10.9997 3C8.87794 3 6.84311 3.84286 5.34282 5.34315C3.84253 6.84344 2.99967 8.87827 2.99967 11C2.99967 13.1217 3.84253 15.1566 5.34282 16.6569C6.84311 18.1571 8.87794 19 10.9997 19Z"
                                                    fill="#808080"
                                                />
                                            </svg>
                                        </div>
                                        <h4>Testlar</h4>
                                    </button>
                                </div>
                                <div class="item-6">
                                    <button
                                        @click="clickTab(4)"
                                        :class="
                                            activeTab == 4
                                                ? 'right-links active-tab'
                                                : 'right-links'
                                        "
                                    >
                                        <div class="top-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                viewBox="0 0 28 28"
                                                fill="none"
                                            >
                                                <path
                                                    d="M14.0003 27.3333C6.63633 27.3333 0.666992 21.364 0.666992 14C0.666992 6.636 6.63633 0.666664 14.0003 0.666664C21.3643 0.666664 27.3337 6.636 27.3337 14C27.3337 21.364 21.3643 27.3333 14.0003 27.3333ZM14.0003 24.6667C16.8293 24.6667 19.5424 23.5429 21.5428 21.5425C23.5432 19.5421 24.667 16.829 24.667 14C24.667 11.171 23.5432 8.45791 21.5428 6.45753C19.5424 4.45714 16.8293 3.33333 14.0003 3.33333C11.1713 3.33333 8.45824 4.45714 6.45785 6.45753C4.45747 8.45791 3.33366 11.171 3.33366 14C3.33366 16.829 4.45747 19.5421 6.45785 21.5425C8.45824 23.5429 11.1713 24.6667 14.0003 24.6667ZM12.667 18H15.3337V20.6667H12.667V18ZM15.3337 15.8067V16.6667H12.667V14.6667C12.667 14.313 12.8075 13.9739 13.0575 13.7239C13.3076 13.4738 13.6467 13.3333 14.0003 13.3333C14.3791 13.3333 14.7501 13.2257 15.0701 13.0231C15.3901 12.8205 15.646 12.5312 15.808 12.1888C15.97 11.8464 16.0315 11.4651 15.9852 11.0891C15.939 10.7132 15.7869 10.3581 15.5468 10.0652C15.3066 9.77232 14.9882 9.55364 14.6286 9.43462C14.269 9.31561 13.883 9.30115 13.5156 9.39294C13.1481 9.48472 12.8142 9.67897 12.5528 9.95309C12.2914 10.2272 12.1132 10.5699 12.039 10.9413L9.42299 10.4173C9.58517 9.60678 9.95967 8.85383 10.5082 8.23545C11.0568 7.61707 11.7597 7.15544 12.5451 6.89776C13.3305 6.64007 14.1703 6.59558 14.9786 6.76882C15.7868 6.94206 16.5346 7.32682 17.1454 7.88376C17.7562 8.44071 18.2082 9.14987 18.4551 9.93875C18.7021 10.7276 18.7351 11.5679 18.5508 12.3737C18.3665 13.1796 17.9716 13.922 17.4064 14.5251C16.8411 15.1283 16.1258 15.5705 15.3337 15.8067Z"
                                                    fill="#808080"
                                                />
                                            </svg>
                                        </div>
                                        <h4>Savollar</h4>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-3">
                <div class="card-box">
                    <h2 class="light-text mb-24">Mavzular</h2>

                    <div class="item-quarter">
                        <h4>Figma</h4>
                        <button class="video-item complete">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                            >
                                <path
                                    d="M6.99967 13.6667C3.31767 13.6667 0.333008 10.682 0.333008 7C0.333008 3.318 3.31767 0.333328 6.99967 0.333328C10.6817 0.333328 13.6663 3.318 13.6663 7C13.6663 10.682 10.6817 13.6667 6.99967 13.6667ZM6.99967 12.3333C8.41416 12.3333 9.77072 11.7714 10.7709 10.7712C11.7711 9.77104 12.333 8.41448 12.333 7C12.333 5.58551 11.7711 4.22895 10.7709 3.22876C9.77072 2.22856 8.41416 1.66666 6.99967 1.66666C5.58519 1.66666 4.22863 2.22856 3.22844 3.22876C2.22824 4.22895 1.66634 5.58551 1.66634 7C1.66634 8.41448 2.22824 9.77104 3.22844 10.7712C4.22863 11.7714 5.58519 12.3333 6.99967 12.3333ZM6.33501 9.66666L3.50634 6.838L4.44901 5.89533L6.33501 7.78133L10.1057 4.00999L11.049 4.95266L6.33501 9.66666Z"
                                    fill="#009382"
                                />
                            </svg>

                            <span>Figmada registratsiya qilish</span>
                        </button>
                        <button class="video-item open">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="9"
                                viewBox="0 0 12 9"
                                fill="none"
                            >
                                <path
                                    d="M4.66649 7.11466L10.7945 0.985992L11.7378 1.92866L4.66649 8.99999L0.423828 4.75733L1.36649 3.81466L4.66649 7.11466Z"
                                    fill="#F4A100"
                                    fill-opacity="0.9"
                                />
                            </svg>

                            <span>Figma interfeysi bilan tanishish</span>
                        </button>
                        <button class="video-item lock">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                            >
                                <path
                                    d="M10.6667 5.66666H11.3333C11.5101 5.66666 11.6797 5.7369 11.8047 5.86192C11.9298 5.98695 12 6.15652 12 6.33333V13C12 13.1768 11.9298 13.3464 11.8047 13.4714C11.6797 13.5964 11.5101 13.6667 11.3333 13.6667H0.666667C0.489856 13.6667 0.320286 13.5964 0.195262 13.4714C0.0702379 13.3464 0 13.1768 0 13V6.33333C0 6.15652 0.0702379 5.98695 0.195262 5.86192C0.320286 5.7369 0.489856 5.66666 0.666667 5.66666H1.33333V5C1.33333 4.38716 1.45404 3.78033 1.68856 3.21414C1.92308 2.64795 2.26683 2.1335 2.70017 1.70016C3.13351 1.26682 3.64796 0.923079 4.21414 0.688557C4.78033 0.454035 5.38716 0.333328 6 0.333328C6.61284 0.333328 7.21967 0.454035 7.78586 0.688557C8.35204 0.923079 8.86649 1.26682 9.29983 1.70016C9.73317 2.1335 10.0769 2.64795 10.3114 3.21414C10.546 3.78033 10.6667 4.38716 10.6667 5V5.66666ZM9.33333 5.66666V5C9.33333 4.11594 8.98214 3.26809 8.35702 2.64297C7.7319 2.01785 6.88406 1.66666 6 1.66666C5.11595 1.66666 4.2681 2.01785 3.64298 2.64297C3.01786 3.26809 2.66667 4.11594 2.66667 5V5.66666H9.33333ZM5.33333 8.33333V11H6.66667V8.33333H5.33333Z"
                                    fill="black"
                                    fill-opacity="0.5"
                                />
                            </svg>
                            <span
                                >Figmada frame turlari va frame tuzish hamda
                                frotend uchun media dizaynni yasash
                                (Performance)</span
                            >
                        </button>
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
            activeTab: 1,
        };
    },
    methods: {
        clickTab(index) {
            this.activeTab = index;
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/styles/style.scss";
h2.video-title {
    font-weight: normal;
    font-size: 22px;
    line-height: 31px;
    color: #000000;
    margin-bottom: 15px;
}
div.question-item {
    background: #ffffff;
    border-radius: 5px;
    padding: 10px 20px;
    margin-bottom: 20px;
    h4 {
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 16px;
        color: #000000;
    }
}

.radio-box {
    .cont {
        display: block;
        position: relative;
        padding-left: 30px;
        margin-bottom: 12px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height, or 150% */

        letter-spacing: 0.02em;

        color: #000000;
    }

    /* Hide the browser's default checkbox */
    .cont input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: rgba(20, 192, 172, 0.2);
        border-radius: 100%;
        border: 1px solid $gc;
    }

    /* On mouse-over, add a grey background color */
    .cont:hover input ~ .checkmark {
        background-color: rgba(17, 148, 133, 0.2);
    }

    /* When the checkbox is checked, add a blue background */
    .cont input:checked ~ .checkmark {
        background-color: $gc;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .cont input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .cont .checkmark:after {
        left: 6px;
        top: 2px;
        width: 3px;
        height: 8px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
}

div.video-course {
    video {
        max-height: 350px;
        width: 100%;

        &:focus {
            outline: none;
        }
    }
}
.right-links {
    margin-bottom: 70px;
    display: block;
    width: 100%;
    &:hover {
        div.top-icon {
            svg path {
                fill: $gc;
            }
        }
        h4 {
            color: $gc;
        }
    }
    div.top-icon {
        display: flex;
        justify-content: center;
        margin-bottom: 12px;
        svg path {
            fill: #808080;
        }
    }
    h4 {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #000000;
    }
}
.active-tab {
    div.top-icon {
        svg path {
            fill: $gc;
        }
    }
    h4 {
        color: $gc;
    }
}
div.item-quarter {
    margin-bottom: 5px;
    h4 {
        font-weight: 500;
        font-size: 22px;
        line-height: 31px;
        margin-bottom: 10px;
        color: rgba(0, 0, 0, 0.9);
    }

    button.video-item {
        display: block;
        margin-bottom: 15px;
        text-align: left;
        svg {
            margin-top: 7px;
        }
        span {
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.02em;
            margin-left: 10px;
            font-weight: normal;
        }
    }

    button.complete {
        span {
            color: $gc;
            font-weight: 600;
        }
    }
    button.open {
        span {
            color: #f4a100;
        }
    }
    button.lock {
        span {
            color: rgba(0, 0, 0, 0.6);
        }
    }
}
</style>
