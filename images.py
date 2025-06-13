import os
import json

def generateJson(folder, jsonFilename):
    files = [f for f in os.listdir(folder) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.gif'))]
    jsonFilename = jsonFilename + '.json'
    paths = [f"{folder}/{file}" for file in sorted(files)]
    with open(jsonFilename, 'w') as f:
            json.dump(paths, f, indent=2)

    print(jsonFilename + ' generated.')


# generateJson('Photos/Personal/', 'analogue')
# generateJson('Photos/Personal/Post', 'post_analogue')
generateJson('Photos/Personal/summer', 'summer2014')
