import os
import re

def process_file(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
        
        original = content
        
        # Supprimer imports @/routes (déjà fait, mais au cas où)
        content = re.sub(r"import\s+.*from\s+'@/routes.*';\n?", "", content)
        
        # Supprimer imports bizarres liés aux actions
        # Ex: import ... from '/resources/js/actions/...'
        content = re.sub(r"import\s+.*from\s+'.*actions/.*';\n?", "", content)
        
        # Remplacement générique pour les formulaires Inertia Form
        # <Form v-bind="store.form()" ...> -> <form @submit.prevent="submit" ...>
        # C'est trop complexe à faire en regex pur sans casser la structure.
        
        # On va juste commenter les imports cassés pour que Vite ne plante pas.
        
        if content != original:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Cleaned imports in {filepath}")
            
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

# Parcourir récursivement
for root, dirs, files in os.walk("resources/js"):
    for file in files:
        if file.endswith(".vue") or file.endswith(".ts"):
            process_file(os.path.join(root, file))

