const url = "https://code-manager-app.herokuapp.com";

// GET Cards Data
export const getCards = async () => {
    const res = await fetch(`${url}/api/v1/cards`);
    const cardData = await res.json();
    return cardData
}

// POST new card
export const createCard = async (newCard) => {
    const res = await fetch(`${url}/api/v1/cards`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCard)
    })
    const data = await res.json();
    return data
}

// Update Client
export const updateClient = async (newRec) => {
    const res = await fetch(`${url}/api/v1/cards/${newRec.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRec)
    })
    const data = await res.json();
    return data
}