package com.savetravel.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;

import com.savetravel.models.Expense;
import com.savetravel.services.ExpenseService;

@Controller
public class ExpenseController {

	@Autowired
	private ExpenseService expenseService;
	
	//HERE WE ARE -----DISPLAYING ALL-----
	@GetMapping("/")
	public String dashboard(Model model) {
		//get the list of Expenses from the database
		List<Expense> expenses = expenseService.allExpenses();
		
		//Passing form info to use the modelAtribute
		model.addAttribute("expense", new Expense());
		
		//add the list to our JSP file
		model.addAttribute("expenseList", expenses);
		return "dashboard.jsp";
	}
	
	//HERE WE WILL ----CREATE---- A NEW SOMETHING
	@PostMapping("/expenses/new")
	public String proccessCreate(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
		
		if(result.hasErrors()) {
			return "redirect:/";
		}else {
			expenseService.createExpense(expense);
			return "redirect:/";
		}
			
	}
	
	//HERE WE WILL ADD THE ----UPDATE--- CONTROLL
	@GetMapping("/expense/{id}")
	public String renderEdit(@PathVariable("id") Long id, Model model) {
		Expense foundExpense = expenseService.oneExpense(id);
		
		model.addAttribute("expense", foundExpense);
		
		return "editPage.jsp";
	}
	
	@PutMapping("/expense/{id}")
	public String processEdit(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
		if(result.hasErrors()) {
			return "editPage.jsp";
		}else {
			expenseService.updateExpense(expense);
			return "redirect:/";
		}
	}
	
	//HERE WE WILL ----DELETE---- SOMETHING
	@DeleteMapping("expense/delete/{id}")
	public String processDelete(@PathVariable("id") Long id) {
		
		expenseService.deleteExpense(id);
		
		return "redirect:/";
	}
	
	
}
