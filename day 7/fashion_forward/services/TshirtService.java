package com.example.fashion_forward.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fashion_forward.model.Tshirt;
import com.example.fashion_forward.repository.TshirtRepository;

@Service
public class TshirtService {
    @Autowired
    private TshirtRepository tshirtRepository;

    public Tshirt create(Tshirt t) {
        return tshirtRepository.save(t);
    }

    public List<Tshirt> allTshirt() {
        return tshirtRepository.findAll();
    }
}
