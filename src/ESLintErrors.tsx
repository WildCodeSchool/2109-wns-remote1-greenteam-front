// Composant pour tester la config ESLint/Airbnb !
// src/ESLintErrors.tsx

function addLastName(name: string): string {
  // ERREUR :
  name += ' Abitbol';
  // WARNING no-console : l'usage de console.log|error|warn est découragé
  console.log(name);
  return name;
}

// WARNING @typescript-eslint/explicit-module-boundary-types :
// on devrait spécifier un type de retour pour la fonction
export default function ComponentWithESLintErrors({
  name = 'Jacques',
}: {
  name: string;
}) {
  return (
    <div>
      <h2>Composant avec erreurs de {addLastName(name)}</h2>

      <div>
        {/* ERREUR jsx-a11y/label-has-associated-control : le label devrait être associé à un contrôle */}
        <label>Ceci est un label non-relié à un input</label>
      </div>

      <div>
        {/* ERREUR react/no-unescaped-entities : l'apostrophe devrait être remplacée par une entité HTML */}
        <span>Ce flim n'est pas un flim sur le cyclimse.</span>
      </div>

      {/*
         2 ERREURS + 1 WARNING
           - ERREUR jsx-a11y/no-static-element-interactions : onClick sur un élément "statique" non-interactif
           - ERREUR jsx-a11y/click-events-have-key-events : pas de gestion du clavier associé au onClick
           - WARNING no-alert : usage d'alert découragé
        */}
      <span onClick={() => alert('Hello')}>Faux bouton</span>
    </div>
  );
}
