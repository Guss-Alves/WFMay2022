from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hi():
    return render_template('index.html')

@app.route('/<int:sum>')
def play(sum):
    return render_template('index.html', sum=sum)

@app.route('/<int:sum>/<int:y>')
def size(sum, y):
    return render_template('index.html', sum=sum, y=y)

@app.route('/<int:sum>/<int:y>/<string:color1>/<string:color2>')
def color(sum, y, color1, color2):
    return render_template('second.html', sum=sum, y=y, color1=color1, color2=color2)

if __name__=="__main__":  
    app.run(debug=True)