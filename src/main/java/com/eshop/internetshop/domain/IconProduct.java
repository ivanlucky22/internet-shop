package com.eshop.internetshop.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.math.BigDecimal;
import java.util.Objects;

@Document
public class IconProduct {

    @Id
    private String id;
    @Field
    private String name;
    @Field
    private String key;
    @Field
    private BigDecimal price; // normally I would use MoneyAmount, but to simplify here

    public IconProduct(final String name, final String key, final BigDecimal price) {
        this.name = name;
        this.key = key;
        this.price = price;
    }

    public IconProduct() {
    }

    public String getId() {
        return id;
    }

    public void setId(final String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getKey() {
        return key;
    }

    public void setKey(final String key) {
        this.key = key;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(final BigDecimal price) {
        this.price = price;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final IconProduct that = (IconProduct) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Objects.equals(key, that.key) &&
                Objects.equals(price, that.price);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, key, price);
    }

    @Override
    public String toString() {
        return "IconProduct{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", key='" + key + '\'' +
                ", price=" + price +
                '}';
    }
}
