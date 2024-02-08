'''
# How to Flask:

! Please disable auto-save! Otherwise you'll be rebooting your server every few minutes !

1. Create folders for individual assignments (Do this for all assignments going forward!)

2. Install pipenv globally. (pip install pipenv) (pip3 install pipenv)

2. Create a pipenv virtual enviornment by using pipenv to install flask. ( pipenv install flask )
    - Virtual Enviornments seperate our dependencies between projects. (I.E. keep certain packages related to certain projects and avoid overlap/conflicts.)
    - Make sure you are installing flask to your assignment/project folder!
    - We can confirm if we added a virtual enviornment/installed packages to it correctly by checking our Pipfile. 

3. Activate our pipenv shell, this allows us to run our python app through that virtual enviornment. 

4. Turn on your local server by  running server.py with python! ( While in your shell! )


Note: We can customize our host name and port number when we use app.run() later. 
'''

#! Objective 1: Get our server up and running with a route for 'Hello World!'
from flask import Flask  # Import Flask to allow us to create our app
# ? Create a new instance of the Flask class called "app"
app = Flask(__name__)


# The "@" decorator associates this route with the function immediately following
@app.route('/')
@app.route('/hello')
def hello_world():
    return 'Hello Mars!'  # Return the string 'Hello World!' as a response

#! Objective 2: Create another route that uses a variable in the route to make it dynamic.

#  www.google.com/Profile/1543
#   Take the user id -> Use the id to send a request to our database and get that user's information


@app.route('/hello/<name>')
def hello_name(name):

    if name == 'Theo':
        return f'Hello Theo!'
    else:
        return f'Hello, {name}'


@app.route('/goodbye/<name>')
def goodbye_name(name):
    return f'Goodbye {name}'


@app.route('/hello/<name>/<food>')
def hello_name_food(name, food):
    return f'Hello my name is {name}, my favorite food is {food}'


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True, port=5001)    # Run the app in debug mode.


#! Objective 3: Add a second variable to our created route and use them both in our return.
