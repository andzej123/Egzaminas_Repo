package com.example.demo.service;

import com.example.demo.exceptions.CategoryAlreadyExists;
import com.example.demo.exceptions.CategoryNotFoundException;
import com.example.demo.model.Category;
import com.example.demo.repository.CategoryRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository repository;

    @Autowired
    public CategoryService(CategoryRepository repository) {
        this.repository = repository;
    }

    @PostConstruct
    private void postConstruct() {
        Category horror = new Category();
        horror.setName("Toys");
        Category action = new Category();
        action.setName("Clothes");
        Category comedy = new Category();
        comedy.setName("Auto Parts");
        repository.save(horror);
        repository.save(action);
        repository.save(comedy);
    }

    public List<Category> getAllCategories() {
        return repository.findAll();
    }

    public Category findCategoryById(Integer id) {
        return repository.findById(id).orElseThrow(
                () -> new CategoryNotFoundException("Category not found with id - " + id)
        );
    }

    public Category addCategory(Category request) {
        Category c = repository.findByName(request.getName());
        if (c != null) {
            throw new CategoryAlreadyExists("Category with such name already exists");
        }

        Category category = new Category();
        category.setName(request.getName());
        return repository.save(category);
    }

    public void deleteCategory(Integer id) {
        repository.deleteById(id);
    }

    public Category updateCategory(Integer id, Category requestCategory){
        Category category = repository.findById(id).orElseThrow(
                () -> new CategoryNotFoundException("Not found")
        );
        category.setName(requestCategory.getName());
        repository.save(category);
        return category;
    }

}
