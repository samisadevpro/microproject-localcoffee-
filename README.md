# Local Coffee Finder ☕  

A simple Express.js web application that helps users find local coffee shops. This project includes an API that serves coffee shop data and a frontend to display it.  

## 📌 Features  
- **Express.js Backend**: Serves a JSON file with coffee shop details.  
- **Frontend Interface**: A well-designed static website with multiple pages.  
- **API Fetching**: Uses `fetch()` with `async/await` to get data from the server.  
- **Dynamic Data Rendering**: Displays coffee shop details in a user-friendly format.  

## 📂 Project Structure  
📁 local-coffee-finder 
┣ 📁 public ┃ 
    ┃ ┗ 📜 script.js  ┣ 📜 index.html ┃ ┣ 📜 about.html ┃ ┣ 📜 service.html ┃ ┣ 📜 apiDemo.html ┃ ┣ 📜 styles.css 
┣ 📁 data 
    ┃ ┗ 📜 coffeeShop.json 
┣ 📜 app.js (or index.js)
┣ 📜 package.json 
┣ 📜 .gitignore 
┗ 📜 README.md

### 1. Clone the Repository:
```sh
git clone https://github.com/samisadevpro/microproject-localcoffee-.git
cd microproject-localcoffee
```

### 2. Install Dependencies:
```sh
npm install
```

### 3. Run the Server with Nodemon:
```sh
npm start
```

### 4. Open in Browser:
[http://localhost:3000](http://localhost:3000)

---

## API Endpoints

| Method  | Endpoint        | Description                |
|---------|----------------|----------------------------|
| GET     | `/api/coffeeShop`            | Fetches coffee shop data|
---

### **Author**  
- **Samartha Rawal**  
- **Prakriti Karki**


