#!/bin/bash

# Iniciar el agente SSH
eval "$(ssh-agent -s)"

# Agregar la clave privada SSH al agente
ssh-add ~/.ssh/git

# Navegar al directorio del repositorio (opcional, si no estás en el directorio del repo)
# cd /ruta/a/tu/repositorio

# Añadir todos los cambios al área de preparación
git pull 