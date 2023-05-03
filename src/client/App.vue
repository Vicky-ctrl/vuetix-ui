<script setup lang='ts'></script>

<template>
    <x-button class="button">
        click me
        <template #tag>
            tag
        </template>
    </x-button>
</template>

<script lang="ts">
</script>

<style scoped>
.button{
    --glitch-text: "hover"
}
</style>