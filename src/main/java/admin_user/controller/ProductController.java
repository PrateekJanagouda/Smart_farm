package admin_user.controller;


import admin_user.dto.ProductDto;
import admin_user.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ProductController {



    @Autowired
    private ProductService productService;
    @PostMapping("/sell.html")
    public String saveProduct(@ModelAttribute ("product")ProductDto productDto , Model model )
    {
        productService.save(productDto);
        model.addAttribute("message","ProductUploaded sucessfully");
        return "sell";
    }
}
