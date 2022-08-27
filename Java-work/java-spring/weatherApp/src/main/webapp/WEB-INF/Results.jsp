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
        <c:forEach var="climate" items="${ results }">
            <img src="http://openweathermap.org/img/wn/${climate.getString('icon')}@2x.png" alt="icon">
            <p>
                main: ${climate.getString("main")}<br>
                description : ${climate.getString("description")}	
            </p>
        </c:forEach>
        <h1>Let's go, u got here</h1>
        <div>
            <h2> <c:out value="${resultsObj.getString('name')}" /> </h2><br>
            <p>
            
            <!-- visibility: <c:out value="${resultsObj.getString('visibility')}" /><br> -->
            temp: <c:out value="${mainObj.getString('temp')}" /><br>
            temp min: <c:out value="${mainObj.getString('temp_min')}" />
            </p>
        </div>
        <p>country: <c:out value="${sysObj.getString('country')}" /> </p>
        <p>sunrise time: <c:out value="${sysObj.getString('sunrise')}" /> </p>
        <p>sunset time: <c:out value="${sysObj.getString('sunset')}" /> </p>
        <p>wind speed: <c:out value="${windObj.getString('speed')}" /> </p>
    </div>
</body>
</html>