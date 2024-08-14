package com.example.fashion_forward.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.example.fashion_forward.model.Tshirt;
import com.example.fashion_forward.services.TshirtService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class TshirtController {
    @Autowired
    private TshirtService service;

    @GetMapping("/tshirt")
    public List<Tshirt> allTshirt() {
        return service.allTshirt();
    }

    @PostMapping("/tshirt/add")
    public Tshirt addTshirt(@RequestBody Tshirt tshirt) {
        return service.create(tshirt);
    }
}
