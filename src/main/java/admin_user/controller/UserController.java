package admin_user.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import admin_user.dto.UserDto;
import admin_user.service.UserService;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {


	@Autowired
	UserDetailsService userDetailsService;
	
	@Autowired
	private UserService userService;
	
	
	@GetMapping("/registration")
	public String getRegistrationPage(@ModelAttribute("user") UserDto userDto) {
		return "register";
	}
	
	@PostMapping("/registration")
	public String saveUser(@ModelAttribute("user") UserDto userDto, Model model) {
		userService.save(userDto);
		model.addAttribute("message", "Registered Successfuly!");
		return "register";
	}
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	
	@GetMapping("user-page")
	public String userPage (Model model, Principal principal) {
		UserDetails userDetails = userDetailsService.loadUserByUsername(principal.getName());
		model.addAttribute("user", userDetails);
		return "index";
	}
	
	@GetMapping("admin-page")
	public String adminPage (Model model, Principal principal) {
		UserDetails userDetails = userDetailsService.loadUserByUsername(principal.getName());
		model.addAttribute("user", userDetails);
		return "index";
	}

	@GetMapping("insecticides.html")
	public String insecticide()
	{ return  "insecticides.html";}


    @GetMapping("essentials.html")
    public String essentials()
    {
        return "essentials.html";
    }

    @GetMapping("cattles.html")
    public String cattles()
    {
        return "cattles.html";
    }

	@GetMapping("sell.html")
	public String sell()
	{ return  "sell.html";}

	@GetMapping("consult.html")
	public String consult()
	{ return  "consult.html";}



	@PostMapping("uploadProduct")
	public ModelAndView uploadProduct(@ModelAttribute("message") String message) {
		ModelAndView modelAndView = new ModelAndView("redirect:sell.html");
		modelAndView.addObject("message", "Your product has been uploaded. We will get back to you soon.");
		return modelAndView;
	}
}
