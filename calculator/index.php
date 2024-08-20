<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="assets/style/style.css" rel="stylesheet">
    <title>My Calculator</title>
</head>
<body>
    
    <main>
        <section id="calculator"> 
            <div id="screen-display">

            </div>
           <!-- <div id="top-button-area">
                <div class="row">
                    <button id="on-btn"> On</button>
                    <div id="direction">
                        <button id="left-btn"><</button>
                        <button id="right-btn">></button>
                    </div>
                    <button id="Off-btn"> Off</button>
                </div>
            </div> -->

            <div id="second-button-area">
                <div id="numeric-keys">
                    <?php for($i=1; $i <= 9; $i++):?>
                        <button class="numeric-button"><?=$i?></button>
                    <?php endfor; ?>
                    <button id="clear-screen-button">C</button>
                    <button class="numeric-button">0</button>
                    <button id="backspace-button"><</button>
                </div>

                <div id="operators">
                        <button class="operator-button">+</button>
                        <button class="operator-button">-</button>
                        <button class="operator-button">*</button>
                        <button class="operator-button">/</button>
                        <button class="operator-button">%</button>
                </div>
            </div>
        </section>
    </main>

</body>
<script src="assets/js/app.js" type="module"></script>
</html>