# Tracktivity - Project by Dennis Kjellin
Detta är ett MERN stack projekt som har MongoDB, Nodemon, Node.js och Express i back-end. I front-end är det React som JavaScript ramverk samt Bootstrap för CSS.

## Testkör mitt projekt
För att testköra mitt projekt behöver du ha MongoDB installerat på din enhet.

* Starta upp MongoDB genom att skriva följande i terminalen:

```sh
mongod 
```
```sh
mongosh 
```
Ovan fungerar om du har installerat MongoDB globalt, annars kan du behöva stå i din MongoDB filmapp för att utföra dessa kommandon.

## Starta upp Back-end
### Öppna upp terminalen:
När du MongoDB är startad så är nästa steg att öppna upp terminalen och utföra följande steg.

### Ställ dig i Backend mappen och installera:


```sh
Tracktivity\Backend> npm install  
```

### Kör sedan för att starta upp:
```sh
Tracktivity\Backend> npm start
```

### Server started 
Nu borde servern vara startad och connection till databasen etablerad.

****************

## Starta upp Frontend
```sh
Tracktivity\frontend> npm install  
```

### Kör sedan för att starta upp:
```sh
Tracktivity\frontend> npm start
```

### Port 3000 kan vara upptagen
Om det står att port 3000 är upptagen, så accepterar du bara i terminalen att denna server ska startas upp på en annan port!

## Sådär!
Nu borde du vara igång och du kan nu integrera med applikationen och testa på dess funktionaliteter!

## Routes i API

### Sessions
| Metod     | Ändpunkt      | Beskrivning   
| ------------- | ------------- | --------    |
| `POST`        | /sessions        | `Addera session`   |
| `GET`         | /sessions         | `Hämta alla`   |
| `GET`         | /sessions/ID         | `Hämta specifik`   |
| `DELETE`         | /sessions/ID         | `Ta bort`   |
| `PATCH`         | /sessions/ID         | `Uppdatera`   |

Skickas som JSON med följande struktur:

POST/PUT
```
{
    "exercise" : "Benchpress",
    "reps" : "12, 10, 9, failure",
    "weight" : "22kg",
    "date" : "2023-01-01"
}
```
```DELETE/PATCH görs genom att ange önskat ID på slutet av respektive routes!```

******