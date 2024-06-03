<script>

//COMPONENTS
import CardComponent from "./CardComponent.vue"

// DATASET
import { store } from "../storage"

export default{
    name:"Main",
    data(){
        return {
            store
        }
    },
    components: {
        CardComponent
    }
}
</script>
<template>
<!-- MAIN -->
<main>
    <div class="grid">
        <CardComponent v-for="character in store.rickAndMortyData" :character="character"/>
    </div>
</main>
<!-- /MAIN -->
</template>

<style lang="scss" scoped>
main{
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
}
.grid{
    display: flex;
    flex-wrap: wrap;
    gap: .625rem;

    .card{
        width: calc(100% / 4 - .625rem);
    }
}
</style>
