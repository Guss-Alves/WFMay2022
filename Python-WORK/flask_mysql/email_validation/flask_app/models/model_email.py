from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

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
        is_valid = True
        if len(data['email']) < 5:
            is_valid = False
            flash('Invalid email address')

        return is_valid