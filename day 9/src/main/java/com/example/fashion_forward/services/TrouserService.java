package com.example.fashion_forward.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fashion_forward.model.Trouser;
import com.example.fashion_forward.repository.TrouserRepository;

@Service
public class TrouserService {
    @Autowired
    private TrouserRepository trouserRepository;

    public Trouser create(Trouser t) {
        return trouserRepository.save(t);
    }

    public List<Trouser> allTrouser() {
        return trouserRepository.findAll();
    }
}
