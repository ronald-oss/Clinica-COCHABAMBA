// Referencia de la API de Velo: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Clínica Cochabamba</title>
    <jdoc:include type="head" />
    <link rel="stylesheet" href="templates/tu_plantilla/css/style.css">
</head>
<body>
    <header>
        <h1>Clínica Cochabamba</h1>
        <nav>
            <jdoc:include type="modules" name="mainmenu" />
        </nav>
    </header>

    <main>
        <jdoc:include type="component" />
    </main>

    <aside>
        <jdoc:include type="modules" name="sidebar" />
    </aside>

    <footer>
        <p>&copy; 2024 Clínica Cochabamba. Todos los derechos reservados.</p>
    </footer>
</body>
</html>

CODIGO CSS
/* General styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 15px 0;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

header h1 {
    margin: 0;
    font-size: 24px;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
}

nav ul li a:hover {
    text-decoration: underline;
}

.content-container {
    display: flex;
    max-width: 1200px;
    margin: 20px auto;
    padding: 0 20px;
}

main {
    flex: 3;
    padding: 20px;
    background-color: white;
    margin-right: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

aside {
    flex: 1;
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
}
footer p {
    margin: 0;
}

});