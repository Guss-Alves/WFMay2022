from flask_app import app
from flask import render_template, request, redirect

from flask_app.models.model_email import Email

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/email/create', methods=['post'])
def email_create():
    if Email.validate_email(request.form):
        email_id = Email.email_create(request.form)
        return redirect('/email/show')
    return redirect('/')


@app.route('/email/show') #show all the table information from a table
def user_list():

    all_emails = Email.get_all()
    return render_template('list.html', all_emails=all_emails)

@app.route('/reset')
def reset():
    return redirect('/')