
// Part1 - Implementem una funció `getData`encarregada de fer les peticions http
const getData = async (url) => {
    try {
        // Si fem "await" el codi no continuarà fins que no s'hagi resolt la petició (promesa)
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Arribats a aquest punt, tenim la resposta però s'han de "parsejar" les dades amb .json(), que també retorna una promesa!!!
        const data = await response.json();
        return data; 
        
    } catch (error) {
        console.error('Error: ', error)
        throw error;
    }
};

// Part2 - Aquí obtenim les dades de l'INE que volem
const getRentPrices = async () => {
    const url ="https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/59057?nult=10"
    try {
        // "await" farà que el codi s'aturi fins que rebi la informació de getData
        const data = await getData(url);
        
        return data;  
    } catch (error) {
        console.error('Error: ', error)
        return [];
    }

};

const showRentPrices = (data) => {
    // Filtrem les dades per obtenir només les que contenen "Nombre: Cataluña"
    data = data.filter((element)=> element.Nombre.includes('Cataluña. Total'))
    console.log(data)
    // Obtenim els divs de la secció on afegir les dades
    const divs = document.querySelectorAll('.contenidor > div')

    // Creem els elements de la llista 
    const ulElementVariacio = document.createElement('ul')
    const ulElementIndex = document.createElement('ul')

    // Comencaria la meva lògica recursiva per mostrar les dades necessàries
    data.forEach(element => {
        element.Data.forEach((item) =>{
            //1. Crear un element li per cada item de dades
            const liElement = document.createElement('li')
            //2. Comprovar si es tracta de la Variacio Anual o de l'índex de Preus
            if(element.Nombre.includes('Índice')){
            //3. Afegir el contingut a cada element
                liElement.innerHTML = `<b>${item.Anyo}</b> - ${item.Valor}`
                ulElementIndex.appendChild(liElement)
            } else if(){}
        })

        
        //4. Afegir cada element a la llista corresponent (variacio o index)
    });

    // Acaba lògica
    
    // Afegeix la llista de Variació Anual al div corresponent 
    divs[0].appendChild(ulElementIndex)
    divs[1].appendChild(ulElementVariacio)


};

const getIPC = async () => {
}

const showIPC = async () => {
}

let chart = null; // Declarem una variable global per a guardar el gràfic

const myChart = () => {
}

main = async () => {
    const data = await getRentPrices();
    showRentPrices(data)
}

main();