package com.eshop.internetshop.repository;

import com.eshop.internetshop.domain.IconProduct;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<IconProduct, String> {
}
