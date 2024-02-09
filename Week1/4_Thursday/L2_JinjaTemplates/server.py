from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
@app.route('/hello')
def hello_world():
    return 'Hello World!'


# Objective 1: Replace our return of a string to instead render an html file.

@app.route('/helloworld')
def hello_world_template():
    return render_template('index.html', name='Buu')

# Objective 2: Add a name variable to our route and then render it on the html file using Jinja

# url parameter is an undefined variable.
# The variable get's the definition/value from the url when it is entered!

# WE NEVER USE THE ANGLE BRACKETS ANYWHERE ELSE IN OUR FLASK APPS!


@app.route('/helloworld/<string:name>')
def hello_world_template2(name):

    return render_template('index.html', name=name)


# Objective 3: Display Pokemon Data from a dictionary in an html table using Jinja.
# We'll need to loop through our list and then make a row for each dictionary inside.


@app.route('/poketable')
def Show_Table():
    pokemon_list = [
        {"id": 1, "name": "Bulbasaur", "types": ["poison", "grass"]},
        {"id": 5, "name": "Charmeleon", "types": ["fire"]},
        {"id": 9, "name": "Blastoise", "types": ["water"]},
        {"id": 12, "name": "Butterfree", "types": ["bug", "flying"]},
        {"id": 16, "name": "Pidgey", "types": ["normal", "flying"]},
        {"id": 23, "name": "Ekans", "types": ["poison"]},
        {"id": 24, "name": "Arbok", "types": ["poison"]},
        {"id": 25, "name": "Pikachu", "types": ["electric"]},
    ]
    return render_template('poketable.html', pokemon_list=pokemon_list)


if __name__ == "__main__":
    app.run(debug=True, port=5001)
