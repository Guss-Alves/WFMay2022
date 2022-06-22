from flask_app.config.mysqlconnection import connectToMySQL

from flask import flash

import re

DATABASE = 'login_registration'

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod #show the dojo information
    def get_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)[0]


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of friends
        all_users = []
        for user in results:
            all_users.append( cls(user) )
        return all_users

    @classmethod
    def create_new_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES( %(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        result = connectToMySQL(DATABASE).query_db(query, data)
        return result

    @classmethod
    def get_user_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)
        if len(results) == 0:
            return False
        else:
            return User(results[0])
            


    @staticmethod
    def validate_new_user(data):
        is_valid = True

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

        #first name/last name is not in use
        #first name/last name 3 - 50 characters
        if len(data['first_name']) < 3 or len(data['first_name']) > 50 :
            is_valid = False
            flash('First name should be 3 to 50 characters long')

        if len(data['last_name']) < 3 or len(data['last_name']) > 50 :
            is_valid = False
            flash('Last name should be 3 to 50 characters long')

        #email is not in use
        if User.get_user_by_email(data):
            is_valid = False
            flash('Sorry, this email is alredy taken !')

        #email is valid
        if not EMAIL_REGEX.match(data['email']):
            is_valid = False
            flash('Email address is not formatted correctly')
        
        #passworrd is of minimum lengh
        if len(data['password']) < 8:
            is_valid = False
            flash('password must be at least 8 characters long')
        #password and confirm password match 
        if data['password'] != data['confirm_password']:
            is_valid = False
            flash('Password must match on both fields')

        return is_valid