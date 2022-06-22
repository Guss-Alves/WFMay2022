from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the friend table from our database

DATABASE = 'dojos_and_ninjas'

class Ninja:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dojo_id = data['dojo_id']
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of friends
        all_ninjas = []
        for ninja in results:
            all_ninjas.append( cls(ninja) )
        return all_ninjas


    @classmethod #create a new ninja
    def ninja_create(cls, data):
        query = "INSERT INTO ninjas (first_name, last_name, age, dojo_id) VALUES(%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s);"
        ninja_id = connectToMySQL(DATABASE).query_db(query, data)
        return ninja_id

    @classmethod #delete a ninja
    def delete_one(clas, data):
        query = "DELETE FROM ninjas WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

        #displaying ninjas and dojos old method
    # @classmethod #show the ninjas in the dojos
    # def show_ninjas(cls,data):
    #     query = "SELECT * FROM ninjas WHERE dojo_id = %(id)s;"
    #     results = connectToMySQL(DATABASE).query_db(query, data)
    #     all_ninjas = []
    #     for ninja in results:
    #         all_ninjas.append( cls(ninja))
    #     return all_ninjas