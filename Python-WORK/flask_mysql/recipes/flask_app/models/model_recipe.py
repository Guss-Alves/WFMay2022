from flask_app.config.mysqlconnection import connectToMySQL

from flask import flash

from flask_app.models.model_user import User

DATABASE = 'user_recipes'

class Recipe:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instruction = data['instruction']
        self.date = data['date']
        self.under_thirty = data['under_thirty']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.user = None
    # Now we use class methods to query our database

    @classmethod #display all the recipes on dashboard
    def get_all_recipes(cls):
        query ="SELECT * FROM recipes JOIN users ON recipes.user_id = users.id"
        result = connectToMySQL(DATABASE).query_db(query)

        recipes = []

        for item in result:
            new_recipe = Recipe(item)

            user_data = {
                'id' : item['users.id'],
                'first_name' : item['first_name'],
                'last_name' : item['last_name'],
                'email' : item['email'],
                'password' : item['password'],
                'created_at' : item['users.created_at'],
                'updated_at' : item['users.updated_at'],
            }
            new_user = User(user_data)
            new_recipe.user = new_user
            
            recipes.append(new_recipe)

        return recipes

    @classmethod # get to view information of a single recipe
    def get_recipe_by_id(cls, data):
        query = "SELECT * FROM recipes JOIN users ON recipes.user_id = users.id WHERE recipes.id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)[0]

        new_recipe = Recipe(result)
        user_data = {
            'id' : result['users.id'],
            'first_name' : result['first_name'],
            'last_name' : result['last_name'],
            'email' : result['email'],
            'password' : result['password'],
            'created_at' : result['users.created_at'],
            'updated_at' : result['users.updated_at'],
        }
        new_user = User(user_data)
        new_recipe.user = new_user

        return new_recipe

    @classmethod #default get_all
    def get_all(cls):
        query = "SELECT * FROM recipes;"
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of friends
        all_recipes = []
        for recipe in results:
            all_recipes.append( cls(recipe) )
        return all_recipes

    @classmethod #create a new recipe
    def recipe_create(cls, data):
        query = "INSERT INTO recipes (name, description, instruction, date, under_thirty, user_id) VALUES(%(name)s, %(description)s, %(instruction)s, %(date)s, %(under_thirty)s, %(user_id)s);"

        recipe_id = connectToMySQL(DATABASE).query_db(query, data)
        return recipe_id

    @classmethod #Edit and update a recipe
    def update_recipe(cls, data):
        query = "UPDATE recipes SET name = %(name)s, description = %(description)s, instruction = %(instruction)s, date = %(date)s, under_thirty = %(under_thirty)s WHERE id = %(id)s;"

        connectToMySQL(DATABASE).query_db(query, data)

    @classmethod # Here you will delete a recipe
    def delete_recipe(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s"

        connectToMySQL(DATABASE).query_db(query, data)

    @staticmethod
    def validate_new_recipe(data):
        is_valid = True
        
        if len(data['recipe_name']) < 3 or len(data['recipe_name']) > 100 :
            is_valid = False
            flash('Recipe name should be 3 to 100 characters long')

        if len(data['recipe_description']) < 3 or len(data['recipe_description']) > 100 :
            is_valid = False
            flash('Recipe description should be 3 to 100 characters long')

        if len(data['recipe_instruction']) < 3 or len(data['recipe_instruction']) > 500 :
            is_valid = False
            flash('Recipe instruction should be 3 to 500 characters long')

        if data['recipe_date'] == "":
            is_valid = False
            flash('You must choose a date for your recipe')

        return is_valid