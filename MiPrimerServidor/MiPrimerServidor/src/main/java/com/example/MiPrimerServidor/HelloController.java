package com.example.MiPrimerServidor;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public String hello (){
        return "hola desde mi servidor de aplicacion";


    }
    @GetMapping ("/saludo")
    public String saludar (@RequestParam String nombre){
        return "hola: " + nombre + "desde mi servidor de apps";


    }

    @PostMapping("/mensaje")
    public String recibirmensaje(@RequestBody String mensaje) {
        return "recibi el mensaje" + mensaje;
    }
}
