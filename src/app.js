// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here

//defining variables that will be used
const contactArea = document.querySelector("#display_all_contacts")
//what I am trying to do is create a space where the cards will be added

// this is supposed to add each contact to the space I specified, tried iterating through the array and adding it to the space, didn't work. Tried this where inserting it into the html, didn't work.
function displayCards(){
  document.body.insertAdjacentHTML('beforeend', contactsList.join('<br/>'));
  }

//if I could have done that then I would have added event listeners to each contact that would open them in the section display one contact

//from there I would have created a button through here and then displayed it in the display one contact section. Then would have added an event listener to it that when clicked displayed the all contacts list section. 
