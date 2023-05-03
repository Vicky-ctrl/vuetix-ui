<script lang='ts'>
    export default {
        name: "TixButton"
    }
</script>

<script setup lang='ts'>
import { onMounted, ref } from "vue";
import "./VuetixButton.css"
import { delay } from "lodash-es";

// 1. 原生js
const TixButton = ref<HTMLButtonElement>()

// 2. v-bind方法
const glitchText = ref('点我呀')
onMounted(() => {
    // glitchText.value = "hover me"
    // delay(() => {
        // glitchText.value = "hover me"
        // TixButton.value?.style.setProperty("--bg", "var(--blue)")
    // }, 5000)
})
</script>

<template>
    <button ref="TixButton" class="tix-button">
        <slot />
        <span class="tix-button__glitch"></span>
        <span v-if="!!$slots['tag']" class="tix-button__tag">
            <slot name="tag" />
        </span>
    </button>
</template>

<style scoped>
.tix-button{
    --color: var(--w);
    --bg: var(--red);
    --glitch-text: v-bind(glitchText);
}
</style>