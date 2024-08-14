package com.example.fashion_forward.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.fashion_forward.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findById(long id);
    User findByEmail(String email); // Corrected method name
}
