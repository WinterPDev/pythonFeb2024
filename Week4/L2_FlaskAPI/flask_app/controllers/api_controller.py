import requests # pipenv install requests
import os
from flask_app import app
from flask import render_template, jsonify, request 
# Import jsonify 

@app.route('/')
@app.route('/search_pokemon')
def index():
    return render_template('pokeapi.html')

@app.route('/get_pokemon' , methods=['POST'])
def get_pokemon():
    r = requests.get(f'https://pokeapi.co/api/v2/pokemon/{request.form["query"]}')
    return jsonify( r.json() )

@app.route('/show_test')
def show_test():
    return render_template('index.html')