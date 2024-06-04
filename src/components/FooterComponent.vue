<script>
import { store } from '../storage';

export default{
    name:"Footer",
    data(){
      return {
        store
      }
    },
    methods: {
      changePage(diff){
        const newPage = this.store.currentPage + diff
        if( newPage > 0 && newPage <= this.store.rickAndMortyInfo.pages){
          this.store.currentPage = newPage;
          this.$emit('update')
        }
      }
    },
    computed: {
      pageNum(){
        return `Page ${this.store.currentPage}/${this.store.rickAndMortyInfo.pages}` 
      }
    }

}
</script>
<template>
<!-- FOOTER -->
<footer>
  <span class="" @click="() => changePage(-1)"> - </span>
  <!-- numero di personaggi trovati -->
  <p>{{ pageNum }}</p>
  
  <span @click="() => changePage(1)"> + </span>
</footer>
<!-- /FOOTER -->
</template>
<style lang="scss" scoped>
footer{
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  p{
    text-align: center;
    margin: 2rem;
    font-weight: bold;
  }
  span{
    font-weight: bold;
    font-size: 1.5rem;

    &:hover{
      cursor: pointer;
    }
    &:active{
      text-shadow: 0px 0px 2px black;
    }
    &.disabled{
      pointer-events: none;
      color: rgb(174, 174, 174);
    }
  }
}
</style>
