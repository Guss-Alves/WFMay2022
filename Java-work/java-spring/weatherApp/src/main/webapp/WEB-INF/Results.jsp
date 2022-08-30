<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Weather Info</title>
<link rel="stylesheet" type="text/css" href="/CSS/style.css">
</head>
<body class="body2">
    <div class="go-back">
        <div class="arrow-container">
            <a href="/back" ><img class="arrow-img" src="https://icons.veryicon.com/png/o/miscellaneous/mrcongicon/arrow-go-back-fill-2.png" alt="arrow"></a>
        </div>
    </div>
    <div class="container-results">
        <div class="head">
            <div class="left">
                <div class="img-main">
                    <c:forEach var="climate" items="${ results }">
                        <img class="weather-icon" src="http://openweathermap.org/img/wn/${climate.getString('icon')}@2x.png" alt="icon">
                    </c:forEach>
                    <c:forEach var="climate" items="${ results }">
                        <span class="main">${climate.getString("main")}</span>
                    </c:forEach>
                </div>
                <h2 class="city-name"> <c:out value="${resultsObj.getString('name')}" />, <c:out value="${sysObj.getString('country')}" /> </h2>
            </div>
            <div class="right">
                <span><c:out value="${mainObj.getString('temp')}" />°F</span><br>
                <span class="high-low">H: <c:out value="${mainObj.getString('temp_max')}" />°F</span>
                <span class="high-low">L: <c:out value="${mainObj.getString('temp_min')}" />°F</span>
            </div>
        </div>
        <hr>
            <c:forEach var="climate" items="${ results }">
                <p>
                    description : ${climate.getString("description")}	
                </p>
            </c:forEach>
            <p>wind speed: <c:out value="${windObj.getString('speed')}" /> </p>
        <div class="sun-time">
            <p>sunrise time: <c:out value="${sysObj.getString('sunrise')}" /> </p>
            <p>sunset time: <c:out value="${sysObj.getString('sunset')}" /> </p>
        </div>
    </div>
</body>
</html>