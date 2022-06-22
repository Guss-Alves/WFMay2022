from flask_app import app
from flask import render_template, request, redirect

# from flask_app.models import model_dojo, model_ninja
from flask_app.models.model_dojo import Dojo
from flask_app.models.model_ninja import Ninja

@app.route('/') #displaying all the dojos in main page
def index():
    all_dojos = Dojo.get_all()
    print(all_dojos)
    return render_template('index.html', all_dojos=all_dojos)

@app.route('/dojo/create', methods=['post'])
def dojo_create():
    dojo_id = Dojo.dojo_create(request.form)
    return redirect('/')

@app.route('/dojo/<int:id>') #display the ninjas in each dojo
def dojo_show(id):
    dojo = Dojo.get_dojos_with_ninjas({"id":id})
    print(dojo)

    return render_template('show.html', dojo = dojo)


@app.route('/reset') #clean and go back to the start/ first page
def reset():
    return redirect('/')


