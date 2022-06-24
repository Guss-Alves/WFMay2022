from flask_app import app
from flask import render_template, request, redirect, session
from flask import flash

from flask_app.controllers import controller_recipe

from flask_app.models.model_user import User
from flask_app.models.model_recipe import Recipe


@app.route('/dashboard')
def account():
    if not 'user_id' in session:
        flash("Please log in to view this resource")
        return redirect('/')

    recipes = Recipe.get_all_recipes()

    user = User.get_by_id({'id':session['user_id']})
    return render_template('recipes.html',user=user, recipes=recipes)

@app.route('/recipe/new') # display new html page to create a new recipe
def recipe_new():

    return render_template('recipe_new.html')

@app.route('/recipe/create', methods=['post']) #creating a new recipe
def recipe_create():
    print(request.form)
    if Recipe.validate_new_recipe(request.form):
        data = {
            'name': request.form['recipe_name'],
            'description': request.form['recipe_description'],
            'instruction': request.form['recipe_instruction'],
            'date': request.form['recipe_date'],
            'under_thirty': request.form['recipe_under_thirty'],
            'user_id': session['user_id']
        }

        Recipe.recipe_create(data)
    else:
        return redirect('/recipe/new')
    return redirect('/dashboard')

@app.route('/view/<int:recipe_id>') # how to view a single show
def view_recipe(recipe_id):
    data = {
        'id': recipe_id
    }
    recipe = Recipe.get_recipe_by_id(data)
    user = User.get_by_id({'id':session['user_id']})

    return render_template('view_recipe.html', recipe=recipe, user=user)

@app.route('/recipe/<int:recipe_id>/edit')#display the page to edit, and pass information
def edit_recipe(recipe_id):
    data = {
        'id': recipe_id
    }
    recipe = Recipe.get_recipe_by_id(data)

    if recipe.user.id != session['user_id']:
        return redirect('/dashboard')

    return render_template('edit_recipe.html', recipe=recipe)

@app.route('/recipe/<int:recipe_id>/update', methods=['post'])# here you are actually updating the information
def update_recipe(recipe_id):
    data = {
        'id': recipe_id,
        'name': request.form['recipe_name'],
        'description': request.form['recipe_description'],
        'instruction': request.form['recipe_instruction'],
        'date': request.form['recipe_date'],
        'under_thirty': request.form['recipe_under_thirty'],
        'user_id': session['user_id']
    }
    recipe = Recipe.get_recipe_by_id(data)
    
    if recipe.user.id != session['user_id']:
        return redirect('/dashboard')

    if Recipe.validate_new_recipe(request.form):
        Recipe.update_recipe(data)
        return redirect('/dashboard')

    else:
        return redirect(f'/recipe/{recipe_id}/edit')

@app.route('/recipe/<int:recipe_id>/delete')
def delete_recipe(recipe_id):
    data = {
        'id': recipe_id
    }
    recipe = Recipe.get_recipe_by_id(data)
    
    if recipe.user.id != session['user_id']:
        return redirect('/dashboard')

    Recipe.delete_recipe(data)
    return redirect('/dashboard')

