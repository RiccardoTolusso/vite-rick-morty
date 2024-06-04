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
    this.apiCall()
  },
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },
  methods:{
    apiCall(){
      let url = this.store.apiUrl;
      let params = {
        page: this.store.currentPage
      }
      if (this.store.inputName !== ""){
        params['name'] = this.store.inputName; 
      }
      if (this.store.inputStatus !== "all"){
        params['status'] = this.store.inputStatus;
      }
      axios.get(url, {params})
      .then((result) => {
        console.log(result)
        this.store.rickAndMortyData = result.data.results;
        this.store.rickAndMortyInfo = result.data.info;
      }).catch((e) => {
        this.store.rickAndMortyData = []
      })
    },   
    update(){
      this.apiCall()
    }
  },
}
</script>
<template>
<div id="view">

  <HeaderComponent @update="update" />
  <MainComponent/>
  <FooterComponent @update="update"/>
</div>
</template>
<style lang="scss" scoped>
#view{
  display: flex;
  height: 100vh;
  flex-direction: column;
}
</style>
