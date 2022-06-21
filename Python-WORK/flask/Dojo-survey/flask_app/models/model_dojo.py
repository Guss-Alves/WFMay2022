from flask_app.config.mysqlconnection import connectToMySQL

DATABASE = 'dojo_survey_schema'

class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # Now we use class methods to query our database

    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(DATABASE).query_db(query)
        all_dojos = []
        for dojo in results:
            all_dojos.append( cls(dojo) )
        return all_dojos

    @classmethod
    def save(cls, data):
        query = "INSERT INTO dojos (name, location, language,commment VALUES (%(name)s, %(location)s, %(language)s, %(comment)s );"
        return connectToMySQL(DATABASE).query_db(query, data)

    classmethod
    def get_last_dojo():
        query = "SELECT * FROM dojos ORDER BY dojos.id DESC LIMIT 1;"
        result = connectToMySQL(DATABASE).query_db(query)
        return Dojo(result[0])