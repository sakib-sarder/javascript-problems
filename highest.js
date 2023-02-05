const phonesArray = [
    {
        name: 'samsung',
        camera: 12,
        storage: '32gb',
        price: 36000,
        color: 'silver'
    },
    {
        name: 'walton',
        camera: 10,
        storage: '32gb',
        price: 22000,
        color: 'silver'
    },
    {
        name: 'iphone',
        camera: 8,
        storage: '32gb',
        price: 82000,
        color: 'silver'
    },
    {
        name: 'xiaomi',
        camera: 24,
        storage: '32gb',
        price: 52000,
        color: 'silver'
    },
    {
        name: 'xiaomi',
        camera: 32,
        storage: '32gb',
        price: 52000,
        color: 'silver'
    },
    {
        name: 'Oppo',
        camera: 64,
        storage: '32gb',
        price: 20000,
        color: 'silver'
    },
    {
        name: 'Nokia',
        camera: 108,
        storage: '32gb',
        price: 44000,
        color: 'silver'
    },
    {
        name: 'HTC',
        camera: 200,
        storage: '32gb',
        price: 62000,
        color: 'silver'
    }
];

function highestCamera(phones) {
    let selectedPhone = phones[0];
    for (let i = 0; i < phones.length; i++){
        let phone = phones[i];
        if (phone.camera > selectedPhone.camera) {
            selectedPhone = phone;
        }
    }
    return selectedPhone.name;
}

const result = highestCamera(phonesArray);
console.log(result);