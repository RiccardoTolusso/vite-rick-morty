<script>
// IMPORTS
import { store } from "./storage"
import axios from 'axios'

// EXPORT
export default{
  name:"MyApp",
  data(){
    return {
      store
    }
  },
  created(){
    axios.get('https://rickandmortyapi.com/api/character').then((result) => {
      this.store.rickAndMortyData = result.data.results
    })
  }
}
</script>
<template>
<!-- HEADER -->
  <!-- title -->
  <!-- search bar -->
<!-- /HEADER -->

<!-- MAIN -->
  <!-- card -->
    <!-- img -->
    <!-- title name -->
    <!-- vivo o morto -->
    <!-- razza -->
  <!-- /card -->
<!-- /MAIN -->

<!-- FOOTER -->
  <!-- numero di personaggi trovati -->
<!-- /FOOTER -->
</template>
<!-- <style></style> -->
