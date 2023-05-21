<template>
    <p>pokemon</p>
    <input type="text" name="search" id="search" @blur="onBlur" value="">
</template>
<script setup lang="ts">
async function onBlur(event: Event) {
    if (event?.target?.value) {
        const url: string = "https://pokeapi.co/api/v2/pokemon/"
        const res = await fetch(url+event.target.value)
        const pokemon = await res.json()
        console.log(pokemon)
    }
}
</script>
