package com.example.demo.controller;

import com.example.demo.model.Category;
import com.example.demo.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CategoryController {

    private final CategoryService service;

    @Autowired
    public CategoryController(CategoryService service) {
        this.service = service;
    }

    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return service.getAllCategories();
    }

    @GetMapping("/categories/{id}")
    public Category getBookById(@PathVariable Integer id) {
        return service.findCategoryById(id);
    }

    @PostMapping("/categories")
    public Category addCategory(@RequestBody Category category) {
        return service.addCategory(category);
    }

    @DeleteMapping("/categories/{id}")
    public void deleteCategory(@PathVariable Integer id) {
        service.deleteCategory(id);
    }

    @PatchMapping("/categories/{id}")
    public Category updateCategory(@PathVariable Integer id, @RequestBody Category category) {
        return service.updateCategory(id, category);
    }

}
