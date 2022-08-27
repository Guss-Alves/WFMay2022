package com.weatherapp.controller;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
//import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kong.unirest.Unirest;
import kong.unirest.json.JSONArray;
import kong.unirest.json.JSONObject;

@Controller
public class HomeController {

	private String part1 = "https://api.openweathermap.org/data/2.5/weather?q=";
	private String part2 = "&appid=098393bcf1e5425bf7ddc413fcc0f92b&units=imperial";
	
	@GetMapping("/")
	public String renderPage() {
		
		return "Index.jsp";
	}
	
	@GetMapping("/search")
	public String search(@RequestParam("query")String searchQuery, Model model) {
		//make an api call using the searchQuery
		
		String searchComplete = searchQuery.replace(" ", "+");
		String apiCallQuery = part1+searchComplete+part2;
//		System.out.println(apiCallQuery);
		
//		String info = Unirest.get(apiCallQuery).asString().getBody();
//		System.out.println(info);
		
		//Save the response from the api as a JSON Object
		JSONObject resultsObj = Unirest.get(apiCallQuery).asJson().getBody().getObject();
//		System.out.println(resultsObj);
		
		JSONObject mainObj = resultsObj.getJSONObject("main");
		JSONObject sysObj = resultsObj.getJSONObject("sys");
		JSONObject windObj = resultsObj.getJSONObject("wind");
		
		JSONArray resultsArray = resultsObj.getJSONArray("weather");
		
		ArrayList<JSONObject> results = new ArrayList<JSONObject>();
		
		for(int i = 0; i < resultsArray.length(); i++) {
			results.add(resultsArray.getJSONObject(i));
		}
		
		model.addAttribute("mainObj", mainObj);
		model.addAttribute("sysObj", sysObj);
		model.addAttribute("windObj", windObj);
		model.addAttribute("results", results);
		model.addAttribute("resultsObj", resultsObj);
		
		return "Results.jsp";
	}
	@GetMapping("/back")
	public String backMain() {
		return "redirect:/";
	}
}
