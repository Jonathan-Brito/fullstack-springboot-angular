package br.brito.api.controller;

import br.brito.api.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;
    @GetMapping("/")
    public String teste(){
        return "Hello World !";
    }
}
