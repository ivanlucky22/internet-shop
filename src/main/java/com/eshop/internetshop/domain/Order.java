package com.eshop.internetshop.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Objects;

@Document
public class Order {

    @Id
    private String id;
    @Field
    @DBRef
    private IconProduct product;
    @Field
    private int amount;

    public Order() {
    }

    public String getId() {
        return id;
    }

    public void setId(final String id) {
        this.id = id;
    }

    public IconProduct getProduct() {
        return product;
    }

    public void setProduct(final IconProduct product) {
        this.product = product;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(final int amount) {
        this.amount = amount;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final Order order = (Order) o;
        return amount == order.amount &&
                Objects.equals(id, order.id) &&
                Objects.equals(product, order.product);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, product, amount);
    }

    @Override
    public String toString() {
        return "Order{" +
                "id='" + id + '\'' +
                ", product=" + product +
                ", amount=" + amount +
                '}';
    }
}
