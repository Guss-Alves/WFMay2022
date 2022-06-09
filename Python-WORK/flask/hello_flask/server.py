from flask import Flask
app = Flask(__name__)
@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/2')
def dojo():
    return "Dojo"

@app.route('/3/<name>')
def hello(name):
    return "Hi, " + name

@app.route('/4/<int:num>/<string:name>')
def repeat(num, name):
    return num * name

if __name__=="__main__":  
    app.run(debug=True)