
// creiamo un oggetto per inserire altri oggetti al interno
const persone = [
    persona('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'),
    persona('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'),
    persona('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    persona('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'),
    persona('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'),
    persona('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg')
];

// funzione che crea gli ogetti che ci servono
function persona(nome, role, image) {
    // ogetto creato
    const person = {
        nome: nome,
        role: role,
        image: image
    }

    // ritorno alla funzione l'ogetto creato
    return person;
}

console.log(persone);