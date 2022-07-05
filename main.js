// Vamos usar a API PokeAPI.

// Como fazemos uma consulta a uma API:

const getPokemonUrl = (id) =>`https://pokeapi.co/api/v2/pokemon/${id}`;

const fetchPokemon = () => {
    const pokemonPromises = []; // recebe todos os 151 pokedexes.

    for (let i = 1; i <= 151; i++) {
        pokemonPromises.push(
            fetch(getPokemonUrl(i)).then((response) => response.json()) 
        );
    }

    Promise.all(pokemonPromises).then((pokemons) => {
        const listPokemons= pokemons.reduce((accumulator, pokemon) => {
            const types = pokemon.types.map((typeInfo) => typeInfo.type.name);

            accumulator += `
                            <li class="card ${types[0]}">
                            <img class="card-image" alt="${pokemon.name}"
                             src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"></img>
                            <h2 class="card-title">${pokemon.id}.${pokemon.name}</h2>
                            <p class="card-subtitle"> ${types.join(" | ")}</p>
                            </li>`;
            return accumulator;
        },
        "")

        const ul = document.querySelector('[data="pokedex"]');
        ul.innerHTML = listPokemons;
    })

}

// Pra executar:
fetchPokemon(); // imprimiu o object no console.


/* Response.json: 
O método json() da interface Response pega um fluxo de resposta e o lê até a conclusão. Ele retorna
 uma promise que resolve com o resultado da análise do corpo do texto como JSON. */

 // Vamos agora pegar os dados de Pokemon e colocá-los dentro dos cards



































/*

 fetch(getPokemonUrl) // função utilizada para fazermos requisições no JS (assíncrona).
       .then((response) => response.json()) // "quando você terminar aí, então execute aqui."
       .then((pokemon) => console.log(pokemon)); // print da resposta.

*/