import os
import json

def generateJson(picturefolder, jsonFilename, jsonFolder=None):
    files = [f for f in os.listdir(picturefolder) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.gif'))]
    
    picturefolder = 'Photos/' + picturefolder
    if jsonFolder == None:
        jsonFilename = jsonFilename + '.json'
    else: 
        jsonFilename = jsonFolder + '/' + jsonFilename + '.json'
    
    paths = [f"{picturefolder}/{file}" for file in sorted(files)]
    with open(jsonFilename, 'w') as f:
            json.dump(paths, f, indent=2)

    print(jsonFilename + ' generated.')


# generateJson('Gallery/Analogue', 'analogue', 'jsonGalleries')
generateJson('Gallery/Nature', 'nature', 'jsonGalleries')
