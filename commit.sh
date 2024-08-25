#!/bin/bash

# Verificar si se proporcionó un mensaje de commit
if [ -z "$1" ]; then
  echo "Por favor, proporciona un mensaje para el commit."
  exit 1
fi

# Iniciar el agente SSH
eval "$(ssh-agent -s)"

# Agregar la clave privada SSH al agente
ssh-add ~/.ssh/git

# Navegar al directorio del repositorio (opcional, si no estás en el directorio del repo)
# cd /ruta/a/tu/repositorio

# Añadir todos los cambios al área de preparación
git add .

# Hacer un commit con el mensaje proporcionado
git commit -m "$1"

# Empujar los cambios al repositorio remoto
git push origin main

# Puedes cambiar 'main' por la rama en la que estás trabajando si es diferente
