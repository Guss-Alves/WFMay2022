from flask import Flask, render_template, request, redirect
from models.model_user import User
app = Flask(__name__)

@app.route("/")
def index():
    all_users = User.get_all()
    print(all_users)
    return render_template("index.html", all_users=all_users)

@app.route('/user/create', methods=['post'])
def user_create():
    user_id = User.create(request.form)

    all_users = User.get_all()
    return redirect('/list')

@app.route('/list')
def user_list():
    all_users = User.get_all()
    return render_template('list.html', all_users=all_users)

@app.route('/reset')
def reset():
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)