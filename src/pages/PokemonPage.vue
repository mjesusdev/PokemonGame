<template>
    <div>
        <main class="row justify-content-center">
            <div class="col-12 col-md-8">
                <h1 class="text-light" v-if="!pokemon">Wait please... 🥲</h1>

                <div v-else>
                    <img class="img-fluid w-50" src="/img/pokemon-game.png" alt="Pokemon Game Image">
                    <h1 class="text-success fw-bold mt-4">Which pokemon is this? 🤔</h1>

                    <PokemonPicture
                        :pokemonId="pokemon.id"
                        :showPokemon="showPokemon"
                    />

                    <PokemonOptions
                        :pokemons="pokemonArr"
                        @selection-pokemon="checkAnswer"
                    />

                    <template v-if="showAnswer">
                        <h2 class="fw-bold fade-in mt-4 mb-4" :class="type">{{ message }}</h2>
                        <button class="btn btn-lg pb-3 btnNewGame" @click="newGame">
                            New Game 🎮
                        </button>
                    </template>
                </div>
            </div>
        </main>
        <footer class="row justify-content-end fixed-bottom mb-4">
            <div class="col-12">
                <h2 class="author text-info fs-4">
                    Made by Craftianos with 💖
                </h2>
                <a 
                    class="btn btnCode text-success fs-5"
                    href="https://github.com/mjesusoj/PokemonGame"
                    target="_blank"
                    rel="noopener noreferrer">
                        Project on Github
                    <i class="fa-brands fa-github fa-2x"></i>
                </a>
            </div>
        </footer>
    </div>
</template>

<script>
    import PokemonOptions from '@/components/PokemonOptions'
    import PokemonPicture from '@/components/PokemonPicture'
    import getPokemonOptions from '@/helpers/getPokemonOptions'

    export default {
        components: { PokemonOptions, PokemonPicture  },
        data() {
            return {
                pokemonArr: [],
                pokemon: null,
                showPokemon: false,
                showAnswer: false
            }
        },
        methods: {
            async mixPokemonArray() {
                this.pokemonArr = await getPokemonOptions()

                const rndInt = Math.floor( Math.random() * 4 )
                this.pokemon = this.pokemonArr[ rndInt ]
            },
            checkAnswer( selectedId ) {
                this.showPokemon = true
                this.showAnswer  = true

                if ( selectedId === this.pokemon.id ) {
                    this.message = `🎉 ¡Correct! is ${ this.pokemon.name } 🎉`
                    this.type = 'text-success'
                } else {
                    this.message = `🙈 ¡Incorrect! was ${ this.pokemon.name } 🙈`
                    this.type = 'text-danger'
                }
            },
            newGame() {
                this.showPokemon = false
                this.showAnswer  = false
                this.pokemonArr  = []
                this.pokemon     = null
                this.mixPokemonArray()    
            }
        },
        mounted() {
            this.mixPokemonArray()
        }
    }
</script>

<style scoped>
    .btnNewGame {
        background: #4baf8a !important;
        border-color: #4baf8a !important;
        color: #fff !important;
    }

    .btnNewGame:hover {
        background: #24c88c !important;
    }

    .text-info {
        color: #b8d3ff !important;
    }

    .text-success {
        color: #4baf8a !important;
    }

    .text-danger {
        color: #f44545 !important;
    }

    .btnCode:hover {
        color: #24c88c !important;
    }
</style>