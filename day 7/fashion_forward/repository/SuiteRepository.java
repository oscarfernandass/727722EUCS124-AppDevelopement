package com.example.fashion_forward.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.fashion_forward.model.Suite;

@Repository
public interface SuiteRepository extends JpaRepository<Suite, Long> {
    Suite findById(long id);

    Suite findByName(String name);

    List<Suite> findByPriceGreaterThanEqual(double price);

    List<Suite> findByPriceLessThanEqual(double price);
}
