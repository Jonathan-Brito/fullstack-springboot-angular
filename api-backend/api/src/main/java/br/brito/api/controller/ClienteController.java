package br.brito.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClienteController {

    @GetMapping("/")
    public String teste(){
        return "Hello World !";
    }
}
