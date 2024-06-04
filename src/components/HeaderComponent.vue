<script>
import SearchBarComponent from './SearchBarComponent.vue';

export default{
    name:"Header",
    components:{
      SearchBarComponent
    }, 
    methods:{
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
<!-- HEADER -->
  <!-- title -->
  <!-- search bar -->
<!-- /HEADER -->
<header>
  <h1>Rick and Morty App</h1>

  <SearchBarComponent @search="search" @reset="reset"/>
</header>
</template>


<style lang="scss" scoped>
  @use '../assets/scss/partials/variables' as *;
header{

  text-align: center;

  h1{
    line-height: 2;
    font-size: $font-size-h1;
  }

  
}
</style>