<script>
export default{
    name:"Search Bar"
}
</script>
<template>
    <div class="search-bar">
        <input type="text" placeholder="Search Character">
        <select name="" id="">
            <option value="0">Select status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="undefined">Undefined</option>
        </select>
        <button class="search">Search</button>
        <button class="reset">Reset</button>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";
.search-bar{
    position: sticky;
    top: 0;
    text-align: center;
    margin-bottom: 2rem;
    padding: 1rem 0;
    z-index: 1;
    *{
        border-radius: $round-value;
        padding: .3rem .5rem;
        margin: 0 .9375rem;
        border: 0.5px solid gray;
        font-size: $font-size-h3;
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
