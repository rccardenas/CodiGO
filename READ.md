# Primer dia con Git/GitHub

Lista de comando de git

* Para poder ver la version de Git

```bash
git --version
```

* Para configurar el correo

```bash
git config --global user.email "email"
```

* Para configurar el username

```bash
git config --global user.name "username"
```

* Sirve para poder empezar a usar el control de version (git) en nuestra carpeta

* Esto solo se hace una vez por carpeta

```bash
git init
```

* Para ver el estado de nuestros cambios

```bash
git status
```

* Agrega los archivos a la memoria de la pc

```bash
git add .
```

* Crea el registro de los cambios realizados

```bash
git commit -m "comentario"
```

* Para ver el historial de commits

[x] Git log retorna un "id" con esto podemos ver el detalle de los cambios que se hicieron en ese commit

```bash
git log
```

* Para ver el detalle del commit

```bash
git show id-de-commit
```