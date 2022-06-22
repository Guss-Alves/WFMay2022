from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models.model_ninja import Ninja

DATABASE = 'dojos_and_ninjas'

class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []

    # Now we use class methods to query our database

    @classmethod #how to display information of the both tables with JOIN
    def get_dojos_with_ninjas(cls, data):
        query = "SELECT * FROM dojos JOIN ninjas ON ninjas.dojo_id = dojos.id WHERE dojos.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)

        dojo = cls(results[0])
        for item in results:

            ninja_data = {
                'id' : item['ninjas.id'],
                'first_name' : item['first_name'],
                'last_name' : item['last_name'],
                'age' : item['age'],
                'created_at' : item['ninjas.created_at'],
                'updated_at' : item['ninjas.updated_at'],
                'dojo_id' : item['dojo_id']
            }
            new_ninja = Ninja(ninja_data)
            dojo.ninjas.append(new_ninja)
        return dojo

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of friends
        all_dojos = []
        for dojo in results:
            all_dojos.append( cls(dojo) )
        return all_dojos

    @classmethod #create a new dojo
    def dojo_create(cls, data):
        query = "INSERT INTO dojos (name) VALUES(%(name)s);"
        dojo_id = connectToMySQL(DATABASE).query_db(query, data)
        return dojo_id

    # @classmethod #show the dojo information
    # def show_one(cls, data):
    #     query = "SELECT * FROM dojos WHERE id = %(id)s;"
    #     return connectToMySQL(DATABASE).query_db(query, data)[0]
