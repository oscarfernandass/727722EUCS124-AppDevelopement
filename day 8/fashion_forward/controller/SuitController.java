package com.example.fashion_forward.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.fashion_forward.model.Suite;
import com.example.fashion_forward.services.SuiteService;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class SuitController {
    @Autowired
    private SuiteService service;

    @GetMapping("/suit")
    public List<Suite> allSuits() {
        return service.allSuite();
    }
    @PostMapping("/suite/add")
    public Suite addSuit(@RequestBody Suite suit) {
        return service.create(suit);
    }
}
