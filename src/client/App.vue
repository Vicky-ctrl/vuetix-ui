<script setup lang='ts'>
</script>

<template>
    <tix-button></tix-button>
</template>
<script lang="ts">
const digui = (index: number) => {
    count += index
    if (index < 100) {
        index ++
        digui(index)
    } else {
        console.log(count, "is count")
        return count
    }
}
var count = 0
var index = 1
digui(index)
</script>