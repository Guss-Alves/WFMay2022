from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def first():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def survey_resut():
    print(request.form)

    return render_template ('result.html',
        name = request.form['name'],
        city = request.form['city'],
        language = request.form['language'],
        comment = request.form['comment']
    )

if __name__=="__main__":
    app.run(debug=True)