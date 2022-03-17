
const ListaPokemon = document.querySelectorAll('.pokemon')
const PokemonsCards = document.querySelectorAll('.cartao-pokemon')


ListaPokemon.forEach(pokemon => {

    pokemon.addEventListener('click', function(){

        const CartaoAberto = document.querySelector('.aberto')
        CartaoAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idCartaoPokemon = 'cartao-' + idPokemonSelecionado
        const AbrirPokemon = document.getElementById(idCartaoPokemon)
        AbrirPokemon.classList.add('aberto')

        const RemoverPokemonAtivo = document.querySelector('.ativo')
        RemoverPokemonAtivo.classList.remove('ativo')

        const listagemAtivado = document.getElementById(idPokemonSelecionado)
        listagemAtivado.classList.add('ativo')
       
      
    })
    
})
