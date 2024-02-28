from flask_app import app
# REMEMBER TO IMPORT CONTROLLERS INTO YOUR SERVER FILE!
from flask_app.controllers import api_controller

# RUN pipenv install PyMySQL flask flask-bcrypt

if __name__ == "__main__":
    app.run(debug=True)