let salon = {
    name: 'The Pet Salon',
    phone: '916-215-321',
    address: {
        street: 'Main',
        number: '3245'
    },
    workingHours: {
        open: '0900',
        close: '1700'
    },

    pets: []
}; 

let {name, phone, address: {number, street}}= salon;
document.getElementById('info').innerHTML =`<h2> ${name} is located at ${number} ${street} ST. <br> Our phone number is ${phone}. <br> Our operating hours are from ${salon.workingHours.open} 'til ${salon.workingHours.close}. <br> 
Please call us ahead of time if you can't pick up your pet so that we may get a bed ready for them. <br> There will be a $30 charge per pet, per night. `;

function Pet(name, age, serviceType, ownerName, phoneContact) { 
    this.hunger = 20;
    this.happiness = 10;
    this.name = name;
    this.age = age;
    this.serviceType =  serviceType;
    this.ownerName = ownerName;
    this.phoneContact = phoneContact ;

    this.feed = function() {
        this.hunger -=10;
        this.happiness +=10;
    }

    this.status= function () {
        console.log(this.name, 'hunger level = ' + this.hunger, 'Happy level = ' + this.happiness);
    }

    this.ownerContact = function() {
        console.log('The owner of ' + this.name  + ' is ' + this.ownerName, 'and to contact them, call ' + this.phoneContact);
    }

}

var pet1 = new Pet ('Janis', 3, 'Haircut', 'Sabrina', '1122334455');
var pet2 = new Pet ('Ozzy', 2, 'Complete shave', 'Omar', '2233445566');
var pet3 = new Pet ('Bruno', 7, 'Complete shave', 'Sonia', '3344556677');
var pet4 = new Pet ('Loki' , 5, 'Hair Wash', 'Victor', '4455667788');
var pet5 = new Pet ('Coco', 12, 'Nail Trim', 'Ada', '5566778899');

document.getElementById('pet status').innerHTML = `${pet1.name} is first in line. For this visit, they will get a ${pet1.serviceType} done. <br> 
${pet2.name} is second in line. For this visit, they will get a ${pet2.serviceType} done. <br> 
${pet3.name} is the third in line. For this visit, they will get a ${pet3.serviceType} done. <br> 
${pet4.name} is the fourth in line. For this visit, they will get a ${pet4.serviceType} done. <br>
${pet5.name} is the fifth in line. For this visit, they will get a ${pet5.serviceType} done. `;

document.getElementById('owner info').innerHTML = `${pet1.ownerName} is the owner of ${pet1.name}. You can reach them at ${pet1.phoneContact} with any questions. <br>
${pet2.ownerName} is the owner of ${pet2.name}. You can reach them at ${pet2.phoneContact} with any questions. <br>
${pet3.ownerName} is the owner of ${pet3.name}. You can reach them at ${pet3.phoneContact} with any questions. <br>
${pet4.ownerName} is the owner of ${pet4.name}. You can reach them at ${pet4.phoneContact} with any questions. <br>
${pet5.ownerName} is the owner of ${pet5.name}. You can reach them at ${pet5.phoneContact} with any questions. <br> `;



salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);
salon.pets.push(pet4);
salon.pets.push(pet5);


pet1.ownerContact();
pet2.ownerContact();
pet3.ownerContact();
pet4.ownerContact();
pet5.ownerContact();

pet1.status();
pet2.status();
pet3.status();
pet4.status();
pet5.status();


alert('We have ' + salon.pets.length + ' new pets as customers.');