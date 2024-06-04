import { reactive } from "vue";

export const store = reactive({
    // api call data received
    rickAndMortyData: [],
    rickAndMortyInfo: {},

    // input fields values
    inputName: "",
    inputStatus: "all",

    // api calls settings
    apiUrl: 'https://rickandmortyapi.com/api/character',

    // pagination
    currentPage: 1
})