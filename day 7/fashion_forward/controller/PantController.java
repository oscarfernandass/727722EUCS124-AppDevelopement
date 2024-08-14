package com.example.fashion_forward.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.example.fashion_forward.model.Pant;
import com.example.fashion_forward.services.PantService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class PantController {
    @Autowired
    private PantService service;

    @GetMapping("/pant")
    public List<Pant> allPant() {
        return service.allPant();
    }

    @PostMapping("/pant/add")
    public Pant addPant(@RequestBody Pant pant) {
        return service.create(pant);
    }
}
