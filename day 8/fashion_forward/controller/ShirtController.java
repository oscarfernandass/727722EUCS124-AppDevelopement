package com.example.fashion_forward.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.example.fashion_forward.model.Shirt;
import com.example.fashion_forward.services.ShirtService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class ShirtController {
    @Autowired
    private ShirtService service;

    @GetMapping("/shirt")
    public List<Shirt> allCloth() {
        return service.allShirt();
    }

    @PostMapping("/shirt/add")
    public Shirt addShirt(@RequestBody Shirt shirt) {
        return service.create(shirt);
    }
}
