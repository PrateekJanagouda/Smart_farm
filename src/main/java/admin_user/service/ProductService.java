package admin_user.service;

import admin_user.dto.ProductDto;
import admin_user.model.Product;
import org.springframework.stereotype.Service;




public interface ProductService {

    Product save (ProductDto productDto);
}
