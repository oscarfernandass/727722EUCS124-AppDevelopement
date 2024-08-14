package com.example.fashion_forward.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.example.fashion_forward.model.Trouser;
import com.example.fashion_forward.services.TrouserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class TrouserController {
    @Autowired
    private TrouserService service;

    @GetMapping("/trouser")
    public List<Trouser> allTrouser() {
        return service.allTrouser();
    }

    @PostMapping("/trouser/add")
    public Trouser addTrouser(@RequestBody Trouser trouser) {
        return service.create(trouser);
    }
}
