<script>
import SearchBarComponent from './SearchBarComponent.vue';

export default{
    name:"Header",
    components:{
      SearchBarComponent
    }, 
    methods:{
      update(){
        this.$emit('update')
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

  <SearchBarComponent @update="update"/>
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