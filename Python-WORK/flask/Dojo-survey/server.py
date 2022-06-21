from flask import Flask, render_template, request, redirect, session

from flask_app.models.model_dojo import Dojo

app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def first():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def survey_result():

    session['name'] = request.form['name']
    session['city'] = request.form['city']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']
    return redirect('/answer')

@app.route('/answer')
def final():
    return render_template('result.html')

if __name__=="__main__":
    app.run(debug=True)