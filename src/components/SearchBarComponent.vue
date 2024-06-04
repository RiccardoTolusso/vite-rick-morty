<script>
import { store } from '../storage';

export default{
    name:"Search Bar",
    data(){
        return {
            store
        }
    },
    methods: {
        search(){
            this.$emit('search')
        },
        reset(){
            this.$emit("reset")
        }
    }
}
</script>
<template>
    <div class="search-bar">
        <input type="text" placeholder="Search Character" v-model="this.store.inputName">
        <select v-model="this.store.inputStatus">
            <option value="all">Select status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="undefined">Undefined</option>
        </select>
        <button class="search" @click="search">Search</button>
        <button class="reset" @click="reset">Reset</button>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";
.search-bar{
    text-align: center;
    margin-bottom: 1rem;
    *{
        border-radius: $round-value;
        padding: .3rem .5rem;
        margin: 0 .9375rem;
        border: 0.5px solid gray;
        font-size: $font-size-h3;
        margin-bottom: 1rem;
    }
    button{
        border: none;
        &:hover{
            box-shadow: 0px 0px 5px black;
        }
    }
    input, select{
        &:focus-visible{
            outline: none;
            border: 0.5px solid gray;
            box-shadow: 0px 0px 5px black;
        }
        &:hover{
            box-shadow: 0px 0px 5px black;
        }
    }
    .search{
        background-color: $button-blue;
        color: white;
    }
    .reset{
        background-color: $button-orange;
    }
}
</style>
