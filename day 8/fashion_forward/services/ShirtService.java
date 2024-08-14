package com.example.fashion_forward.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fashion_forward.model.Shirt;
import com.example.fashion_forward.repository.ShirtRepository;

@Service
public class ShirtService {
    @Autowired
    private ShirtRepository shirtRepository;

    public Shirt create(Shirt s) {
        return shirtRepository.save(s);
    }

    public List<Shirt> allShirt() {
        return shirtRepository.findAll();
    }
}
