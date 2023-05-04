<script lang='ts'>
    export default {
        name: "TixButton"
    }
</script>

<script setup lang='ts'>
import { onMounted, ref } from "vue";
import "./VuetixButton.css"
// import { delay } from "lodash-es";

const TixButton = ref<HTMLButtonElement>()
const setProperty: TixButtonFuc["setProperty"] = (key: TixButtonProperty, value: any) => {
    TixButton.value?.style.setProperty(key, value)
}
onMounted(() => {
    setProperty('--bg', 'var(--yellow)')
})

defineExpose({
    setProperty
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
    --bg: var(--red);
    --glitch-text: "Hello";
}
</style>