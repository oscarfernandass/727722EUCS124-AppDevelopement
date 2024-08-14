package com.example.fashion_forward.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.fashion_forward.model.Trouser;

@Repository
public interface TrouserRepository extends JpaRepository<Trouser,Long>{
    Trouser findById(long id);

    Trouser findByName(String name);

    List<Trouser> findByPriceGreaterThanEqual(double price);

    List<Trouser> findByPriceLessThanEqual(double price);
}
