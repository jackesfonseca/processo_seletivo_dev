var object = 
{
  "titulo": "Formulário Dinâmico",
  "campos": [
    {
      "name": "email",
      "label": "E-Mail",
      "type": "email",
      "id": 1,
      "ordem": 1
    },
    {
      "name": "senha",
      "label": "Senha",
      "type": "password",
      "id": 2,
      "ordem": 3
    },
    {
      "name": "numero",
      "label": "Número",
      "type": "number",
      "id": 3,
      "ordem": 2
    },
    {
      "name": "selecao",
      "label": "Seleção",
      "type": "select",
      "id": 4,
      "ordem": 4,
      "options": [
        {
          "value": "1",
          "text": "1"
        },
        {
          "value": "2",
          "text": "2"
        },
        {
          "value": "3",
          "text": "3"
        },
        {
          "value": "4",
          "text": "4"
        },
        
      ]
    }
  ]
};

const form = document.querySelector('form');

/* campo 1 label */
const email_label = document.createElement('label');
email_label.classList.add(object.campos[0].type);
form.appendChild(email_label);
email_label.innerHTML += object.campos[0].label;

/* adicionando campo 1 */
const email = document.createElement('input');
email.classList.add(object.campos[0].type);
email.setAttribute("type", "text");
email.setAttribute("placeholder", object.campos[0].name);
form.appendChild(email);

/*campo 2 label */
const password_label = document.createElement('label');
password_label.classList.add(object.campos[1].type);
form.appendChild(password_label);
password_label.innerHTML = object.campos[1].label;

/* adicionando campo 2 */
const password = document.createElement('input');
password.classList.add(object.campos[1].type);
password.setAttribute("type", "password");
password.setAttribute("placeholder", object.campos[1].name);
form.appendChild(password);

/*campo 3 label */
const number_label = document.createElement('label');
number_label.classList.add(object.campos[2].type);
form.appendChild(number_label);
number_label.innerHTML = object.campos[2].label;

/* adicionando campo 3 */
const number = document.createElement('input');
number.classList.add(object.campos[2].type);
number.setAttribute("type", "text");
number.setAttribute("placeholder", object.campos[2].name);
form.appendChild(number);

/*campo 4 label */
const selection_label = document.createElement('label');
selection_label.classList.add(object.campos[3].type);
form.appendChild(selection_label);
selection_label.innerHTML = object.campos[3].label;

/* adicionando campo 4 */
const selection = document.createElement('select');
selection.classList.add(object.campos[3].type);
form.appendChild(selection);

const option1 = document.createElement('option');
option1.classList.add(object.campos[3].options[0].value);
option1.appendChild(document.createTextNode(object.campos[3].options[0].text));
option1.value = object.campos[3].options[0].text;
selection.appendChild(option1);

const option2 = document.createElement('option');
option2.classList.add(object.campos[3].options[1].value);
option2.appendChild(document.createTextNode(object.campos[3].options[1].text));
option2.value = object.campos[3].options[1].text;
selection.appendChild(option2);

const option3 = document.createElement('option');
option3.classList.add(object.campos[3].options[2].value);
option3.appendChild(document.createTextNode(object.campos[3].options[2].text));
option3.value = object.campos[3].options[2].text;
selection.appendChild(option3);

/* adicionando botão */
const button = document.createElement('input');
button.classList.add('send-button');
button.setAttribute("type", "submit");
button.setAttribute("value", "Enviar");
form.appendChild(button);


/* obtém valores do input */
button.addEventListener('click', (e) => {
   e.preventDefault();
   
   const email_field = document.querySelector(object.campos[0].type);
   const email_value = email.value;
   //console.log(email.value);
   
   const password_field = document.querySelector(object.campos[1].type);
   const password_value = password.value;
   //console.log(password.value);

   const number_field = document.querySelector(object.campos[2].type);
   const number_value = number.value;
   //console.log(number.value);

   const selection_field = document.querySelector(object.campos[3].type);
   const selection_value = selection.value;
   //console.log(selection.value);

   /* convertendo string para JSON */
   var text = '{"'
   + object.campos[0].name + '":'+ email_value + ', "' 
   + object.campos[1].name + '":' + password_value + ', "'
   + object.campos[2].name + '":' + number_value + ', "'
   + object.campos[3].name + '":' + selection_value
   + '"}';

   console.log(text); 
});