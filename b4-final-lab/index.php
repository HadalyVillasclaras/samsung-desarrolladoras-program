<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="./css/style.css">
  <title>final lab</title>
</head>

<body>
<<<<<<< HEAD
  <section>
    <h2 id="form-title">Formulario de Registro</h2>
    <form method="POST" action="register.php" aria-labelledby="form-title" autocomplete="off">
  
      <label for="nombre">Nombre<span aria-hidden="true">*</span></label>
      <div>
        <input type="text" class="input-field" name="nombre" aria-required="true">
        <span class="error-message"></span>
      </div>
  
      <label for="primer-apellido">Primer Apellido<span aria-hidden="true">*</span></label>
      <div>
        <input type="text" class="input-field" name="primer-apellido" aria-required="true">
        <span class="error-message"></span>
      </div>
  
      <label for="segundo-apellido">Segundo Apellido<span aria-hidden="true">*</span></label>
      <div>
        <input type="text" class="input-field" name="segundo-apellido" aria-required="true">
        <span class="error-message"></span>
      </div>
  
      <label for="email">Email<span aria-hidden="true">*</span></label>
      <div>
        <input type="email" class="input-field" name="email" autocomplete="email" aria-required="true">
        <span class="error-message"></span>
      </div>
  
      <label for="password">Password<span aria-hidden="true">*</span></label>
      <div>
        <input type="password" class="input-field" name="password" autocomplete="new-password" aria-required="true">
        <span class="error-message"></span>
      </div>
      <span id="form-feedback"></span>
      <input type="submit" value="Enviar">
    <button id="consulta-btn" style="display: none;">Consultar usuarios</button>
  
    </form>
  </section>
  <section id="user-table" style="display: none;">
    <h2 id="form-title">Listado de usuarios</h2>
    <table >
=======
  <h2 id="form-title">Formulario de Registro</h2>
  <form method="POST" action="register.php" aria-labelledby="form-title" autocomplete="off">

    <label for="nombre">Nombre<span aria-hidden="true">*</span></label>
    <div>
      <input type="text" class="input-field" name="nombre" aria-required="true">
      <span class="error-message"></span>
    </div>

    <label for="primer-apellido">Primer Apellido<span aria-hidden="true">*</span></label>
    <div>
      <input type="text" class="input-field" name="primer-apellido" aria-required="true">
      <span class="error-message"></span>
    </div>

    <label for="segundo-apellido">Segundo Apellido<span aria-hidden="true">*</span></label>
    <div>
      <input type="text" class="input-field" name="segundo-apellido" aria-required="true">
      <span class="error-message"></span>
    </div>

    <label for="email">Email<span aria-hidden="true">*</span></label>
    <div>
      <input type="email" class="input-field" name="email" autocomplete="email" aria-required="true">
      <span class="error-message"></span>
    </div>

    <label for="password">Password<span aria-hidden="true">*</span></label>
    <div>
      <input type="password" class="input-field" name="password" autocomplete="new-password" aria-required="true">
      <span class="error-message"></span>
    </div>
    <span id="form-feedback"></span>
    <input type="submit" value="Enviar">
  </form>
  <button id="consulta-btn" style="display: none;">Consulta</button>


  <table id="user-table" style="display: none;">
>>>>>>> c85b33d8e69bb177dd39bbbeb7b2c1af99206b75
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Primer Apellido</th>
        <th>Segundo Apellido</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody id="user-table-body">
    </tbody>
  </table>
<<<<<<< HEAD
  </section>
=======

>>>>>>> c85b33d8e69bb177dd39bbbeb7b2c1af99206b75
  <script type="module" src="./js/main.js"></script>
</body>

</html>