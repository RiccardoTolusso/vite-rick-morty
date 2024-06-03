<script>
export default{
    name:"Card",
    props: {
        character:Object
    }
}
</script>
<template>
    <!-- card -->
    <div class="card">
        <!-- img -->
        <img :src="character.image" alt="img">
        <!-- title name -->
        <h3>{{ character.name }}</h3>
        <!-- vivo o morto -->           <!-- razza -->
        <p>{{ character.status }}<br>{{ character.species }}</p>
    </div>
<!-- /card -->
</template>

<style lang="scss" scoped>
    .card{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 80%;
            border-radius: 50%;
            margin-bottom: 0.625rem;
        }

        h3{
            font-size: 1.3rem;
            margin-bottom: 1.2rem;
        }
        p{
            position: relative;
            bottom: .3125rem;
            width: 100%;   
            margin-top: auto;      
            margin-bottom: 1.875rem; 
            text-transform: capitalize;
        }
    }
</style>
