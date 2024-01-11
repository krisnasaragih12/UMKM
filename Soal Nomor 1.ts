type IFruit = {
    fruitId: number,
    fruitName: string,
    fruitType: 'IMPORT' | 'LOCAL',
    stock: number
}

// Fungsi untuk mengubah huruf pertama menjadi huruf besar
const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const fruits: IFruit[] = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 6,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 7,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
]

// Fungsi menampilkan data
const displayFruits = (fruits: IFruit[]): void => {
    const uniqueFruitNames = new Set();

    fruits.forEach(function (fruit) {
        const formattedFruitName = capitalizeFirstLetter(fruit.fruitName);

        if (!uniqueFruitNames.has(formattedFruitName)) {
            uniqueFruitNames.add(formattedFruitName);
            console.log("fruitName", formattedFruitName);
        }
    });
}

// Memanggil fungsi menampilkan data buah
displayFruits(fruits);
