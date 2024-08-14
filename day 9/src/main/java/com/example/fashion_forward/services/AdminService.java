package com.example.fashion_forward.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fashion_forward.model.Admin;
import com.example.fashion_forward.repository.AdminRepository;

@Service
public class AdminService {
    
    @Autowired
    private AdminRepository adminRepo;

    public Admin getAdminByEmail(String email) {
        return adminRepo.findByEmail(email);
    }
}
