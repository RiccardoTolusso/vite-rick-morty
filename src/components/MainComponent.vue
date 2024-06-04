<script>

//COMPONENTS
import CardComponent from "./CardComponent.vue"
import SearchBarComponent from './SearchBarComponent.vue';

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
        CardComponent,
        SearchBarComponent
    }
}
</script>
<template>
<!-- MAIN -->
<main>
    <div class="grid">
        <CardComponent v-for="character in store.rickAndMortyData" :character="character" :key="`key-${character.name}`"/>
    </div>
</main>
<!-- /MAIN -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

main{
    width: 90vw;
    margin: 0 auto;
    overflow: auto;
    .grid{
        display: flex;
        flex-wrap: wrap;
        gap: .625rem;
    
        .card{
            width: calc(100% / 4 - .625rem);
        }
        @media screen and (max-width: 480px){
            .card{
                width: calc(100% / 2 - .625rem);
                
            }
        }
}
}
</style>
