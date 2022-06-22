from flask_app import app
from flask import render_template, request, redirect, session
from flask import flash

from flask_app.models.model_user import User

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/user/register', methods=['post'])#register an user
def register_user():

    if not User.validate_new_user(request.form):
        print('validation fails')
        return redirect ('/')

    else:
        print('validation good')
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'password': bcrypt.generate_password_hash(request.form['password']),
        }
        session['user_id'] = User.create_new_user(data)
        return redirect('/account')


@app.route('/user/login', methods=['post']) #login an user
def login_user():

    user = User.get_user_by_email(request.form)

    if not user: #check email
        flash('Email does not exist')
        return redirect('/')
    
    if not bcrypt.check_password_hash(user.password, request.form['password']): # check the password
        flash('password is incorrect')
        return redirect('/')

    session['user_id'] = user.id
    session['user_first_name'] = user.first_name
    session['user_email'] = user.email

    return redirect('/account')

@app.route('/account')
def account():
    if not 'user_id' in session:
        flash("Please log in to view this resource")
        return redirect('/')

    user = User.get_by_id({'id':session['user_id']})

    return render_template('account.html',user=user)

@app.route('/reset') #clean and go back to the start/ first page
def reset():
    session.clear()
    return redirect('/')