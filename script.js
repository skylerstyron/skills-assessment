let contacts = [
    {
        name: "Christian",
        email: "christian@yahoo.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave. Culver City CA 90234",
        status: "available"
    },
    {
        name: "Rich",
        email: "rich@tripod.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave. Culver City CA 90234",
        status: "available"
    },
    {
        name: "Scott",
        email: "scott@mailinator.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave. Culver City CA 90234",
        status: "available"
    },
    {
        name: "Danny",
        email: "danny@hotmail.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave. Culver City CA 90234",
        status: "available"
    },
    {
        name: "Taka",
        email: "taka@myspace.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave. Culver City CA 90234",
        status: "offline"
    },
    {
        name: "Tim",
        email: "tim@netscape.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave. Culver City CA 90234",
        status: "busy"
    },
    {
        name: "Patrick",
        email: "patrick@live.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave. Culver City CA 90234",
        status: "available"
    },
    {
        name: "Jacques",
        email: "jacques@aol.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave. Culver City CA 90234",
        status: "busy"
    }
];

const contactBody = document.getElementById('contact-body');

const createContactList = () => {
  clear();

  const contactMethod = document.getElementById('contact-method').value;

  // Create elements for each contact
  contacts.forEach((contact, i, ) => {
    // console.log(contact.name);
    // Create Row
    let contactRow = document.createElement('div');
    contactRow.className = "contact-row";
    contactBody.appendChild(contactRow);
    
    // Create Left Column
    const leftCol = document.createElement('div');
    leftCol.className = "left-column";
    contactRow.appendChild(leftCol);
    
    // add availability
    const status = document.createElement('div');
    status.className = "availability " + contact.status;
    leftCol.appendChild(status);
    
    // Add Name 
    const contactName = document.createElement("div");
    contactName.className = "contact-name";
    const contactNameText = document.createTextNode(contact.name);
    leftCol.appendChild(contactName);
    contactName.appendChild(contactNameText);
    
    // Create Right Column
    const rightCol = document.createElement('div');
    rightCol.className = "right-column";
    rightCol.classList.add("flex-col");
    contactRow.appendChild(rightCol);

    // Add Email or Phone #
    const contactInfo = document.createElement('div');
    contactInfo.className = "contact-info";
    const contactInner = document.createElement('div');
    contactInner.className = 'contact-inner'
    let contactInfoText = document.createTextNode(contact.email);

    if (contactMethod == "Phone") {
      contactInfoText.nodeValue = contact.phone;
    } else if (contactMethod == "Email") {
      contactInfoText.nodeValue = contact.email;
    }

    // Create additional info
    const addInfo = document.createElement('div');
    addInfo.className = "additional-info";
    const info1 = document.createElement('a');
    const info2 = document.createElement('p');
    const info3 = document.createElement('p');

    info1.className = "contact-email contact-info2";
    const info1Text = document.createTextNode(contact.email);
    info1.href = "mailto:" + contact.email;
    info2.className = "add-details";
    const info2Text = document.createTextNode(contact.phone);
    info3.className = "add-details";
    const info3Text = document.createTextNode(contact.address);

    
    rightCol.appendChild(contactInfo);
    rightCol.appendChild(addInfo);

    addInfo.appendChild(info1);
    info1.appendChild(info1Text);
    addInfo.appendChild(info2);
    info2.appendChild(info2Text);
    addInfo.appendChild(info3);
    info3.appendChild(info3Text);
    contactInfo.appendChild(contactInner);
    contactInner.appendChild(contactInfoText);

  });

}

const clear = () => {
  while (contactBody.firstChild) {
    contactBody.removeChild(contactBody.firstChild);
  }
}

createContactList();


