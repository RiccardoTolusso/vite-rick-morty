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
      let params = {}
      if (this.store.inputName !== ""){
        params['name'] = this.store.inputName; 
      }
      if (this.store.inputStatus !== "all"){
        params['status'] = this.store.inputStatus;
      }
      axios.get(url, {params})
      .then((result) => {
        console.log(result)
        this.store.rickAndMortyData = result.data.results
      }).catch((e) => {
        this.reset()
      })
    },   
    search(){
      console.log("sto cercando")
      this.apiCall()
    },
    reset(){
      console.log("reset in corso")
      this.store.inputName = "",
      this.store.inputStatus = "all",
      this.search()
    }
  },
}
</script>
<template>
<div id="view">

  <HeaderComponent @search="search" @reset="reset"/>
  <MainComponent/>
  <FooterComponent/>
</div>
</template>
<style lang="scss" scoped>
#view{
  display: flex;
  height: 100vh;
  flex-direction: column;
}
</style>
