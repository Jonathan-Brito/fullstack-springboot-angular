package br.brito.api.controller;

import br.brito.api.model.Cliente;
import br.brito.api.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @PostMapping("/")
    public Cliente cadastrar(@RequestBody Cliente c){
        return clienteRepository.save(c); // c é o objeto contendo as caracteristicas
    }
    @GetMapping("/")
    public Iterable<Cliente> selecionar(){
        return clienteRepository.findAll();
    }

    @PutMapping("/")
    public Cliente editar(@RequestBody Cliente c){
        return clienteRepository.save(c);
    }
    @DeleteMapping("/{codigo}") // passando por url
    public void remover(@PathVariable long codigo){
        clienteRepository.deleteById(codigo);
    }
}
