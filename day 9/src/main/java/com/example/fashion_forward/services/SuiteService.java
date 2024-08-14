package com.example.fashion_forward.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fashion_forward.model.Suite;

import com.example.fashion_forward.repository.SuiteRepository;

@Service
public class SuiteService {
    @Autowired
    private SuiteRepository suiteRepository;

    public Suite create(Suite s) {
        return suiteRepository.save(s);
    }

    public List<Suite> allSuite() {
        return suiteRepository.findAll();
    }
}
