from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

DATABASE = 'email_schema'

class Email:
    def __init__( self , data ):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # Now we use class methods to query our database

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM emails;"
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of friends
        all_emails = []
        for email in results:
            all_emails.append( cls(email) )
        return all_emails

    @classmethod #create a new email
    def email_create(cls, data):
        query = "INSERT INTO emails (email) VALUES(%(email)s);"
        email_id = connectToMySQL(DATABASE).query_db(query, data)
        return email_id

    @staticmethod
    def validate_email(data):

        email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

        is_valid = True
        if not email_regex.match(data['email']):
            is_valid = False
            flash('Invalid email address')

        return is_valid

# VIDEO EXPLAINING THE VALIDATION PROCESS FROM DIFFERENT TYPES OF INPUT (ADVANCED VALIDATION (SPEFICICALY FOR CHOOSING ID 1 TO MANY MINUTE 35:00))

    # other way of doing it without re

#normal validation for VARCHAR
    #is_valid = True

    #if len(data['email']) < 5:
    #is_valid =  False
    #flash('invalid email address')

    #return is_valid

# Salary/number validation
    #is_valid = True
    #try:
        #salary = int(data['salary'])
        #if salary < 40000 or salary > 200000:
            #is_valid = False
            #flash('whatever you want to ')
    #except:
        #is_valid = False 
        #flash('Salary should be a number between 40000 and 200000')

    #return is_valid

#for choosing an ID in a one to many relationship
    #if data['department_id'] == '-1':
    #is_valid = False
    #flash('whatever you want to')
