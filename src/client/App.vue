<script setup lang='ts'>
import { onMounted, ref } from 'vue';

const button = ref<TixButtonFuc>()

onMounted(() => {
    button.value?.setProperty("--bg", "pink")
})
</script>

<template>
    <x-button ref="button" class="button">
        click me
        <template #tag>
            tag
        </template>
    </x-button>
</template>