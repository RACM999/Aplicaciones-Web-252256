package com.example.PokemonAPI.service;


import com.example.PokemonAPI.model.Pokemon;
import com.example.PokemonAPI.repository.PokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class PokemonService {
    @Autowired
    private PokemonRepository pokemonRepository;

    public List<Pokemon> listarTodos(){
        return pokemonRepository.findAll();

    }


    public Optional<Pokemon> listarPorId(Long id){
        return pokemonRepository.findById(id);

    }

    public Pokemon guardar(Pokemon pokemon){
        return pokemonRepository.save(pokemon);

    }

    public Optional<Pokemon> actualizar(Long id, Pokemon pokemon) {
        return pokemonRepository.findById(id).map(pokemonExistente -> {
            pokemonExistente.setNombre(pokemon.getNombre());
            pokemonExistente.setTipo(pokemon.getTipo());
            pokemonExistente.setNivel(pokemon.getNivel());
            pokemonExistente.setAtaque(pokemon.getAtaque());
            pokemonExistente.setDefensa(pokemon.getDefensa());
            pokemonExistente.setDescripcion(pokemon.getDescripcion());
            pokemonExistente.setImagenUrl(pokemon.getImagenUrl());

            return pokemonRepository.save(pokemonExistente);
        });
    }

    // PATCH: solo cambia lo que se envió
    public Optional<Pokemon> actualizarParcial(Long id, Pokemon pokemon) {
        return pokemonRepository.findById(id).map(pokemonExistente -> {
            if (pokemon.getNombre() != null) {
                pokemonExistente.setNombre(pokemon.getNombre());
            }
            if (pokemon.getTipo() != null) {
                pokemonExistente.setTipo(pokemon.getTipo());
            }
            if (pokemon.getNivel() != null) {
                pokemonExistente.setNivel(pokemon.getNivel());
            }
            if (pokemon.getAtaque() != null) {
                pokemonExistente.setAtaque(pokemon.getAtaque());
            }
            if (pokemon.getDefensa() != null) {
                pokemonExistente.setDefensa(pokemon.getDefensa());
            }
            if (pokemon.getDescripcion() != null) {
                pokemonExistente.setDescripcion(pokemon.getDescripcion());
            }
            if (pokemon.getImagenUrl() != null) {
                pokemonExistente.setImagenUrl(pokemon.getImagenUrl());
            }

            return pokemonRepository.save(pokemonExistente);
        });
    }

    // Devuelve true si lo borró, false si no existía
    public boolean eliminar(Long id) {
        if (pokemonRepository.existsById(id)) {
            pokemonRepository.deleteById(id);
            return true;
        }
        return false;
    }

}
