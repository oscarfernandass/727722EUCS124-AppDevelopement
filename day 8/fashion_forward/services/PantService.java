package com.example.fashion_forward.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fashion_forward.model.Pant;
import com.example.fashion_forward.repository.PantRepository;

@Service
public class PantService {
    @Autowired
    private PantRepository pantRepository;

    public Pant create(Pant p) {
        return pantRepository.save(p);
    }

    public List<Pant> allPant() {
        return pantRepository.findAll();
    }
}
