from flask_app import app
from flask import render_template, request, redirect

# from flask_app.models import model_dojo, model_ninja
from flask_app.models.model_ninja import Ninja
from flask_app.models.model_dojo import Dojo

@app.route('/ninja/new') # display new html page, and pass dojo information
def ninja_new():
    all_dojos = Dojo.get_all()
    return render_template('ninja_new.html', all_dojos=all_dojos)

@app.route('/ninja/create', methods=['post']) # create a new ninja
def ninja_create():
    ninja_id = Ninja.ninja_create(request.form)
    return redirect('/')

@app.route('/ninja/<int:id>/delete') #delete a ninja
def delete_one(id):
    Ninja.delete_one({'id':id})
    return redirect ('/')

