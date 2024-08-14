package com.example.fashion_forward.services;

import com.example.fashion_forward.model.Cart;
import com.example.fashion_forward.model.CartItem;
import com.example.fashion_forward.repository.CartItemRepository;
import com.example.fashion_forward.repository.CartRepository;
import com.example.fashion_forward.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private UserRepository userRepository;

    public void addToCart(Long userId, String name, String imageUrl, double price, String description, int quantity, String category) {
        // Find or create a cart for the user
        Cart cart = cartRepository.findByUserId(userId).orElseGet(() -> {
            Cart newCart = new Cart();
            newCart.setUser(userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found")));
            return cartRepository.save(newCart);
        });

        // Check if the item already exists in the cart
        CartItem existingCartItem = cartItemRepository.findByCartAndName(cart, name);

        if (existingCartItem != null) {
            // Item already exists, update its quantity
            existingCartItem.setQuantity(existingCartItem.getQuantity() + quantity);
            cartItemRepository.save(existingCartItem);
        } else {
            // Item does not exist, create a new one
            CartItem cartItem = new CartItem();
            cartItem.setCart(cart);
            cartItem.setName(name);
            cartItem.setImageUrl(imageUrl);
            cartItem.setPrice(price);
            cartItem.setDescription(description);
            cartItem.setQuantity(quantity);
            cartItem.setCategory(category);

            cartItemRepository.save(cartItem);
        }
    }

    public List<CartItem> getCartByUserId(Long userId) {
        Cart cart = cartRepository.findByUserId(userId).orElseThrow(() -> new RuntimeException("Cart not found"));
        return cartItemRepository.findByCart(cart);
    }
}
