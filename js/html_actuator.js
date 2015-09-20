<!DOCTYPE html>
<html lang="en" manifest="cache.appcache">
<head>
  <meta charset="utf-8">

  <link href="style/main.css" rel="stylesheet" type="text/css">
  <link href='http://fonts.googleapis.com/css?family=Source+Code+Pro:400,600,700' rel='stylesheet' type='text/css'>
  <link rel="shortcut icon" href="favicon.ico">
  <link rel="apple-touch-icon" href="meta/apple-touch-icon.png">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="keywords" content="HTML,CSS,Javascript,Make your own 2048,Play 2048">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width, target-densitydpi=160dpi, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui">
  <meta name="format-detection" content="telephone=no" />

  <meta property="og:title" content="2048 game"/>
  <meta property="og:site_name" content="2048 game"/>
    <meta property="og:image" content="http://gabrielecirulli.github.io/2048/meta/og_image.png"/>
</head>
<body>
  <div class="container">
    <div class="heading">
      <h1 class="title">Shorooq's 2048</h1>
      <div class="scores-container">
        <div class="score-container">0</div>
        <div class="best-container">0</div>
      </div>
    </div>

    <div class="above-game">
      <p class="game-intro">
      <a class="restart-button">New Game</a>
      Use the arrow keys to slide  tiles. Combine similar tiles to create new ones.</p>
      
    </div>

    


    <div class="game-container">
      <div class="game-message">
        <p></p>
        <div class="lower">
	                <a class="retry-button">Play Again</a>
          <div class="score-sharing"></div>
        </div>
      </div>

      <div class="grid-container">
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
      </div>

      <div class="tile-container">

      </div>
    </div>


    <p class="game-explanation">
         </p>
    <hr>
    <p class="game-explanation">
      <strong class="important">How to play:</strong> Use your <strong>arrow keys</strong> to move the tiles. When two tiles with the same value touch, they <strong>merge into one!</strong>
    </p>
    <hr>
    <p>
    This is a modified version of the <a href="http://gabrielecirulli.github.io/2048/" target="_blank">original game</a> created by Gabriele Cirulli.
    </p>
  </div>

  <script src="js/bind_polyfill.js"></script>
  <script src="js/classlist_polyfill.js"></script>
  <script src="js/animframe_polyfill.js"></script>
  <script src="js/keyboard_input_manager.js"></script>
  <script src="js/html_actuator.js"></script>
  <script src="js/grid.js"></script>
  <script src="js/tile.js"></script>
  <script src="js/local_storage_manager.js"></script>
  <script src="js/game_manager.js"></script>
  <script src="js/application.js"></script>
  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

</body> 
</html>
