package com.example.fashion_forward.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.fashion_forward.model.Cart3;

@Repository
public interface Cart3Repository extends JpaRepository<Cart3,Long>{
    @Query(value = "SELECT * FROM Cart3 WHERE user_id = ?1", nativeQuery = true)
    Cart3 findByUserId(Long userId);
}
