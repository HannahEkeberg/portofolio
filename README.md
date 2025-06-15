How to use this repo:

Start srv: 
python3 -m http.server --> [localhost](http://localhost:8000/index.html)


style.css: styling of page

Content: 

Code for menu:
sidebar.html --> Set html pages that the menu should link to. 
    ### <li><a href="index.html">Home</a></li> --> just a regular link
    ### Can also have a drop down menu. Like this. If you click Personal work, the menu will drop down with the following links:  
            <li class="dropdown">
                <button class="dropdown-btn">Personal work</button>
                <div class="dropdown-content">
                    <a href="analogue_work.html">Analogue</a>
                    <a href="summer.html">Summer</a>
                </div>
            </li>

dropdownmenu.js --> Drop menu, which will move remaining links further down on the page when open. Can also set the drop down to be open on specific pages, like specified here: 
    ### const personalPages = ["analogue_work.html", "summer.html"];

To call sidebar.html in the current html file you are in, this must be included inside body, with necessary styling to place it where you want it to be: 
<script>
    fetch('sidebar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('sidebar-nav').innerHTML = html;
    });
</script> 

For javascript code to be called, this must be included in the html files right before </body>:
<script src="dropdownmenu.js"></script>

Code for gallery: 



Gallery:

Generate json files for gallery: 
Go to Photos/images.py
Can simply get a list of file paths to find images in a json file. 
Give the folder where your pictures are, what you want to call the filename, and where you want to save the json file.
For example, write in the bottom of the code: generateJson('Frontpage', 'test', 'JsonGalleries')
Will find the photos in 'Frontpage', json file will be called 'test.json', and the file will be saved in the folder 'JsonGalleries'.

To access the gallery, simply put the path into loadGallery (see below): 

gallery-loader.js --> fetch a json file with paths to images to include in a gallery. 
lightbox.js --> allows to click on photos and view in slideshow. 

In the body, this must be included in html files:
        <div id="gallery-container">
            <script src="gallery-loader.js"></script>
            <script>
              loadGallery('Photos/JsonGalleries/test.json'); // her kan du sette hvilken JSON-fil du vil bruke
            </script>
          </div>
          <p>Short description of the page if needed</p>
        </main>
    </div>
    <!-- Lightbox -->
    <div id="lightbox" class="lightbox hidden">
        <span class="close" id="closeBtn">&times;</span>
        <img id="lightboxImage" src="" alt="Stort bilde">
        <div class="lightbox-nav">
            <span id="prevBtn">&#10094;</span>
            <span id="nextBtn">&#10095;</span>
        </div>
    </div>

In addition, for js scripts to be loaded, this must be included before </body>:
<script src="lightbox.js"></script>
<script src="dropdownmenu.js"></script>



Example index.html: 
<!DOCTYPE html>
<html lang="en">
<head>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HANNAH LOVISE</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="icon" href="Photos/iconphoto.png" type="image/png" />

</head>

<body>
  <button class="hamburger" onclick="toggleSidebar()">MENU</button>

  <header class="main-header">
    <h1>HANNAH LOVISE</h1>
  </header>

  <div class="container">
    <aside class="sidebar">
        
        <div id="sidebar-nav">
          <script>
              fetch('sidebar.html')
                .then(response => response.text())
                .then(html => {
                  document.getElementById('sidebar-nav').innerHTML = html;
                });
          </script> 
        </div>
        <div class="sidebar-footer">
          <p>© 2025 Hannah Lovise</p>
        </div>
      </aside> 
      

    <div class="content">
      <main>
        <img src="Photos/Frontpage/18D49685-AF93-428D-AFDA-DB83C5A7FDE6.jpeg" alt="frontpage">
        <p>Under construction. For inquiries: hlekeberg@gmail.com</p>
      </main>
    </div>
  </div>
  <script src="dropdownmenu.js"></script>
</body>
</html>

Example gallery: 
<!DOCTYPE html>
<html lang="en">
<head>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HANNAH LOVISE</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="icon" href="Photos/Icon/iconphoto.png" type="image/png" />
</head>

<body>
  <button class="hamburger" onclick="toggleSidebar()">MENU</button>

  <header class="main-header">
    <h1>HANNAH LOVISE</h1>
  </header>
  <div class="container">
    <aside class="sidebar">
        
        <div id="sidebar-nav">
          <script>
              fetch('sidebar.html')
                .then(response => response.text())
                .then(html => {
                  document.getElementById('sidebar-nav').innerHTML = html;
                });
          </script> 
        </div>

        <div class="sidebar-footer">
          <p>© 2025 Hannah Lovise</p>
        </div>
      </aside> 
      

      <div class="content">
          <main>
        
        <div id="gallery-container">
            <script src="gallery-loader.js"></script>
            <script>
              loadGallery('Photos/JsonGalleries/test.json'); // her kan du sette hvilken JSON-fil du vil bruke
            </script>
          </div>
          <p>Short description of the page if needed</p>
        </main>
    </div>
    <!-- Lightbox -->
    <div id="lightbox" class="lightbox hidden">
        <span class="close" id="closeBtn">&times;</span>
        <img id="lightboxImage" src="" alt="Stort bilde">
        <div class="lightbox-nav">
            <span id="prevBtn">&#10094;</span>
            <span id="nextBtn">&#10095;</span>
        </div>
    </div>
    </div>
  </div>

  <script src="lightbox.js"></script>
  <script src="dropdownmenu.js"></script>
</body>
</html>