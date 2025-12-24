import os
import json
import subprocess

def processImages(inputFolder, outputFolder, maxWidth=1600, quality=80):
    os.makedirs(outputFolder, exist_ok=True)

    for file in os.listdir(inputFolder):
        if file.lower().endswith(('.jpg', '.jpeg', '.png')):
            input_path = os.path.join(inputFolder, file)
            output_path = os.path.join(outputFolder, file)

            subprocess.run([
                "sips",
                "-Z", str(maxWidth),
                "-s", "format", "jpeg",
                "-s", "formatOptions", str(quality),
                input_path,
                "--out", output_path
            ])

            print(f"Processed: {output_path}")



def generateJson(picturefolder, jsonFilename, jsonFolder=None):
    files = [
        f for f in os.listdir(picturefolder)
        if f.lower().endswith(('.jpg', '.jpeg', '.png', '.gif'))
    ]

    picturefolder = 'Photos/' + picturefolder

    if jsonFolder is None:
        jsonFilename = jsonFilename + '.json'
    else:
        os.makedirs(jsonFolder, exist_ok=True)
        jsonFilename = jsonFolder + '/' + jsonFilename + '.json'

    paths = [f"{picturefolder}/{file}" for file in sorted(files)]

    with open(jsonFilename, 'w') as f:
        json.dump(paths, f, indent=2)

    print(jsonFilename + ' generated.')

# processImages('Gallery/Digitals', 'Gallery/Digitals_processed')
# processImages('Gallery/Analogue', 'Gallery/Analogue_processed')

generateJson('Gallery/Analogue_processed', 'analogue', 'jsonGalleries')
generateJson('Gallery/Digitals_processed', 'digitals', 'jsonGalleries')

"""
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
# generateJson('Gallery/Nature', 'nature', 'jsonGalleries')
generateJson('Gallery/Digitals', 'digitals', 'jsonGalleries')
"""