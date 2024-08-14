package com.example.fashion_forward.repository;

import com.example.fashion_forward.model.Cart;
import com.example.fashion_forward.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    CartItem findByCartAndName(Cart cart, String name);
    List<CartItem> findByCart(Cart cart);
}
