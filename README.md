# CODAGER - Client Side
<img width="1439" alt="Screen Shot 2022-06-20 at 12 33 47 PM" src="https://user-images.githubusercontent.com/91504668/174645791-ee759716-1e96-4c85-b6e4-4588dd1d3c00.png">

Backend Code: https://github.com/ZakSchenck/codager-backend

## Project Description
Codager is a fullstack client manager for programmers. It includes all the CRUD operations. You are able to filter through All, Completed, and Pending data. All data is in alphabetical order and includes a pagination function.

## Tools Used
• React / React Router <br>
• Sass/SCSS <br>
• Node.js<br>
• Express.js<br>
• PostgreSQL

## Project Hurtles
I'd say the most creative technique I used was to create a pagination tool without use of a library. Since all entries are in an array, I was able to slice the array while only showing seven entries at once. Everytime I click next it shows the following seven entries. To make it so I disable the next button when I reach the end, I wrapped each function in an if statement based on the slicer's number.
```js
  const [endSlicer, setEndSlicer] = useState(7);
  const [firstPage, setFirstPage] = useState(1);

  const prev = () => {
    if (startSlicer > 0) {
      dataList.setData(
        dataList.data.slice(
          setStartSlicer(startSlicer - 7),
          setEndSlicer(endSlicer - 7)
        )
      );
      setFirstPage(firstPage - 1);
    }
  };

  const next = () => {
    if (endSlicer < Math.ceil(dataList.data.length / 7) * 7) {
      dataList.setData(
        dataList.data.slice(
          setStartSlicer(startSlicer + 7),
          setEndSlicer(endSlicer + 7)
        )
      );
      setFirstPage(firstPage + 1);
    }
  };
```

## GET All Cards
```js
export const getCards = async () => {
    const res = await fetch(`${url}/api/v1/cards`);
    const cardData = await res.json();
    return cardData
}
```
## POST New Card
```js
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
```
## UPDATE Client
```js
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
```
## DELETE Client
```js
<button
   className="delete"
   onClick={async () => {
   await fetch(`https://code-manager-app.herokuapp.com/api/v1/cards/${singleCard.id}`, {
       method: "DELETE",
   });
   navigate("/")
   fetchRequests();
 }}
  >
  Delete
</button>
