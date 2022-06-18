from flask_app import app
from flask import render_template, request, redirect

from flask_app.models.model_user import User

@app.route("/")
def index():
    all_users = User.get_all()
    print(all_users)
    return render_template("index.html", all_users=all_users)

@app.route('/user/create', methods=['post']) #create something
def user_create():
    user_id = User.create(request.form)

    all_users = User.get_all()
    return redirect('/list')

@app.route('/user/edit/<int:id>') #update seomething from a table part 1
def edit(id):
    data = {
        "id":id
    }
    return render_template('edit.html',user=User.get_one(data))

@app.route('/user/update', methods=['POST']) #update something from a table part 2
def update():
    User.update(request.form)
    print(request.form)
    return redirect ('/list')

@app.route('/user/<int:id>/delete') #delete something froma table
def user_delete(id):
    User.delete_one({'id':id})

    all_users = User.get_all()
    return redirect ('/list')

@app.route('/show/<int:id>') #show information of a specifically object in a table by id 
def user_show(id):
    user = User.show_one({'id':id})
    print(user)

    all_users = User.get_all()
    return render_template ('show.html', user = user)

@app.route('/list') #show all the table information from a table
def user_list():
    all_users = User.get_all()
    return render_template('list.html', all_users=all_users)

@app.route('/reset') #clean and go back to the start/ first page
def reset():
    return redirect('/')