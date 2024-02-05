# (╯°□°)╯︵ ┻━┻ Nested Dictionaries can be intimidating...lets practice!

# Example of a list of dictionaries using the PokeAPI

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

#! Objective 1: Loop through and print each dictionary.

# for pokemon in pokemon_list:
#     print(pokemon)

#! Objective 2: Loop through each dictionary and print each Key.

# for pokemon in pokemon_list:
#     # print(pokemon)
#     # Loop through the dictionary and get every key
#     for key in pokemon.keys():
#         print(key)

#! Objective 3: Loop through each dictionary and print each Value.

# for pokemon in pokemon_list:
#     # print(pokemon)
#     # Loop through the dictionary and get every key
#     # for val in pokemon.values():
#     #     print(val)
#     for key in pokemon.keys():
#         print(pokemon[key])


#! Objective 4: Loop through each dictionary and print each Key AND Value.

# for pokemon in pokemon_list:
#     # print(pokemon)
#     # Loop through the dictionary and get every key
#     for key, val in pokemon.items():
#         print(f'Key : {key}\n Value : {val}\n ======================')


#! Objective 5: Print the types for Butterfree.

for type in pokemon_list[3]['types']:
    print(type)

# A list of dictionaries for our Pokemon Team
pokemon_team = [
    {
        "name": "Mawile",
        "types": ['Steel', 'Fairy'],
        "Pre-Evolution": False
    },
    {
        "name": "Gengar",
        "types": ['Ghost', 'Poison'],
        "can_evolve": False,
        "Pre-Evolution": {
            "name": "Haunter",
            "types": ['Ghost', 'Poison'],
            "Pre-Evolution": {
                "name": "Gastly",
                "types": ['Ghost', 'Poison'],
                "Pre-Evolution": False
            }
        }
    }
]

#! Objective 1: Print the name of Gengar's Pre-evolution.

print(pokemon_team[1]["Pre-Evolution"]["name"])

#! Objective 2: Print the types of Gengar's Pre-evolution
# ? Hint: First try printing the types to get started.

for type in pokemon_team[1]["Pre-Evolution"]["types"]:
    print(type)


# Python Dictionary Built In Methods
# Extra Source: https://www.w3schools.com/python/python_ref_dictionary.asp 🐍

Example = {'Key1': 'Value1'}
# print(str(Example))

Example.pop('Key1')  # Remove a particular key-value pair.

Example.clear()  # Removes everything from the dictionary
# print(Example)
# Adds to the Dictionary or Updates if the Key provided exists.
Example.update({'New_Key': 'New_Value'})
# print(Example)
x = Example.get('New_Key')  # Fetch a specific key, or None if it isn't found.
print(x)
