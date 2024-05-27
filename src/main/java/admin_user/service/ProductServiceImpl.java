package admin_user.service;

import admin_user.dto.ProductDto;
import admin_user.model.Product;
import admin_user.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Override
    public Product save(ProductDto productDto) {
        Product product = new Product(productDto.getProductName(), productDto.getProductDescription(),
                productDto.getProductPrice(), productDto.getProductImage());
        return productRepository.save(product);
    }
}
