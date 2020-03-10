package com.eshop.internetshop.web.rest;

import com.eshop.internetshop.domain.IconProduct;
import com.eshop.internetshop.repository.ProductRepository;
import com.eshop.internetshop.web.util.PaginationUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;


@RestController
@RequestMapping("/api")
public class ProductsResource {

    private final ProductRepository productRepository;

    public ProductsResource(final ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/products")
    public ResponseEntity<List<IconProduct>> isAuthenticated(Pageable pageable, UriComponentsBuilder uriBuilder) {
        final Page<IconProduct> page = productRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(uriBuilder.path("/api/products"), page);
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }
}
