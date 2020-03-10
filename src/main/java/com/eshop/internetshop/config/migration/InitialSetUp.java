package com.eshop.internetshop.config.migration;

import com.eshop.internetshop.domain.IconProduct;
import com.eshop.internetshop.repository.ProductRepository;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.math.BigDecimal;
import java.util.ArrayList;

@Component
public class InitialSetUp {
    private final ProductRepository productRepository;

    public InitialSetUp(final ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @PostConstruct
    public void init() {
        final ArrayList<IconProduct> iconProducts = new ArrayList<>();
        iconProducts.add(new IconProduct("Icon that represents home page", "home", new BigDecimal("125.99")));
        iconProducts.add(new IconProduct("Icon that represents motorcycle", "motorcycle", new BigDecimal("365.99")));
        iconProducts.add(new IconProduct("Icon that represents home clock", "alarm", new BigDecimal("435.99")));
        iconProducts.add(new IconProduct("Icon that represents home clip", "attachment", new BigDecimal("825.99")));
        iconProducts.add(new IconProduct("Icon that represents home microphone", "mic", new BigDecimal("95.99")));
        iconProducts.add(new IconProduct("Icon that represents movie", "movie", new BigDecimal("125.99")));
        iconProducts.add(new IconProduct("Icon that represents games", "games", new BigDecimal("225.99")));
        iconProducts.add(new IconProduct("Icon that represents stop symbol", "stop", new BigDecimal("325.99")));
        iconProducts.add(new IconProduct("Icon that represents replay", "replay", new BigDecimal("325.99")));
        iconProducts.add(new IconProduct("Icon that represents pause", "pause", new BigDecimal("35.99")));
        iconProducts.add(new IconProduct("Icon that represents videocam", "videocam", new BigDecimal("775.99")));
        iconProducts.add(new IconProduct("Icon that represents high definition", "hd", new BigDecimal("325.99")));

        productRepository.saveAll(iconProducts);
    }
}
