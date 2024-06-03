<script>

// COMPONENTS
import HeaderComponent from "./components/HeaderComponent.vue"
import MainComponent from "./components/MainComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"

// DATASET
import { store } from "./storage"

// MODULE
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
  },
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  }
}
</script>
<template>
<HeaderComponent/>
<MainComponent/>
<FooterComponent/>
</template>
<!-- <style></style> -->
