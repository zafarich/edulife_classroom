<template>
    <div>
        <div class="editor">
            <h2>vue-code-highlight example</h2>
            <code-highlight :language="lang">
                <pre>
                  {{ code }}
                </pre>
            </code-highlight>
        </div>
    </div>
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
export default {
    props: {
        code: {
            type: String,
        },
        lang: {
            type: String,
        },
    },
    components: {
        CodeHighlight,
    },
    data() {
        return {
            options: {},
        };
    },

    methods: {},
};
</script>

<style lang="scss">
pre {
    width: 100%;
    padding: 3rem 0 !important;
    display: flex !important;
    align-items: center;
    justify-content: center;
    code {
        width: 100%;
    }
}
</style>
