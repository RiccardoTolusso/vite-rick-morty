<script>
import SearchBarComponent from './SearchBarComponent.vue';

export default{
    name:"Header",
    components:{
      SearchBarComponent
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
</header>
</template>


<style lang="scss" scoped>
  @use '../assets/scss/partials/variables' as *;
header{

  text-align: center;

  h1{
    line-height: 3;
    font-size: $font-size-h1;
  }

  
}
</style>