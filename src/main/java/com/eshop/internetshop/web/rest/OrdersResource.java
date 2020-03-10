package com.eshop.internetshop.web.rest;

import com.eshop.internetshop.domain.Order;
import com.eshop.internetshop.repository.OrderRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/api")
public class OrdersResource {

    private final OrderRepository orderRepository;

    public OrdersResource(final OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @PostMapping(path = "/orders")
    public ResponseEntity<Order> create(@RequestBody Order order) throws URISyntaxException {
        final Order createdOrder = orderRepository.save(order);
        return ResponseEntity.created(new URI("/api/orders/" + order.getId()))
                .body(createdOrder);
    }

    @GetMapping("/orders/{id}")
    public ResponseEntity<Order> find(@PathVariable String id) {
        return orderRepository.findById(id)
                .map((response) -> ResponseEntity.ok().body(response))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
