#!/bin/bash

# Iniciar el agente SSH
eval "$(ssh-agent -s)"

# Agregar la clave privada SSH al agente
ssh-add ~/.ssh/git


# Ruperar cambios
git pull origin main
