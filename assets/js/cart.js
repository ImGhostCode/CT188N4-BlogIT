/* HO THANH LIEM */
const Courses = {
    "01": {
        "id": 1,
        "title": "Complete React Developer in 2023",
        "description": "Updated! Become a Senior React Developer. Build a massive E-commerce app with Redux, Hooks, GraphQL, Stripe, Firebase",
        "author": "Andrei Neagoie, Yihua Zhang, Zero To Masteryo",
        "rate": 4.4,
        "rate_number": 119847,
        "price": 2199000,
        "sale": 249000,
        "photo": "course1",
    },
    "02": {
        "id": 2,
        "title": "Ethereum and Solidity: The Complete Developer's Guide",
        "description": "Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain",
        "author": "Stephen Grider",
        "rate": 4.6,
        "rate_number": 24205,
        "price": 899000,
        "sale": 329000,
        "photo": "course2",
    },
    "03": {
        "id": 3,
        "title": "Modern HTML & CSS From The Beginning (Including Sass)",
        "description": "Build modern responsive websites & UIs with HTML5, CSS3 & Sass! Learn Flex & CSS Grid",
        "author": "Brad Travers",
        "rate": 4.7,
        "rate_number": 24081,
        "price": 990000,
        "sale": 199000,
        "photo": "course3",
    },
    "04": {
        "id": 4,
        "title": "The Complete Angular Course: Beginner to Advanced",
        "description": "The most comprehensive Angular 4 (Angular 2+) course. Build a real e-commerce app with Angular, Firebase and Bootstrap 4",
        "author": "Mosh Hamedani",
        "rate": 4.4,
        "rate_number": 26143,
        "price": 1999000,
        "sale": 249000,
        "photo": "course4",
    },
    "05": {
        "id": 5,
        "title": "TNode.js, Express, MongoDB & More: The Complete Bootcamp 2023",
        "description": "Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more) ",
        "author": "Jonas Schmedtmann",
        "rate": 4.7,
        "rate_number": 14687,
        "price": 2499000,
        "sale": 329000,
        "photo": "course5",
    },
    "06": {
        "id": 6,
        "title": "Node with React: Fullstack Web Development",
        "description": "Build and deploy fullstack web apps with NodeJS, React, Redux, Express,and MongoDB.",
        "author": "Stephen Grider",
        "rate": 4.7,
        "rate_number": 14248,
        "price": 1899000,
        "sale": 229000,
        "photo": "course6",
    },
    "07": {
        "id": 7,
        "title": "Docker & Kubernetes: The Practical Guide [2023 Edition]",
        "description": "Learn Docker, Docker Compose, Multi-Container Projects, Deployment and all about Kubernetes from the ground up!",
        "author": "Maximilian Schwarzmüller",
        "rate": 4.7,
        "rate_number": 14026,
        "price": 2499000,
        "sale": 299000,
        "photo": "course7",
    },
    "08": {
        "id": 8,
        "title": "Microservices with Node JS and React",
        "description": "Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and Kubernetes",
        "author": "Stephen Grider",
        "rate": 4.9,
        "rate_number": 12249,
        "price": 2199000,
        "sale": 279000,
        "photo": "course8",
    },
    "09": {
        "id": 9,
        "title": "React Front To Back",
        "description": "Learn Modern React 16.8+ Including Hooks, Context API, Full Stack MERN & Redux By Building Real Life Projects",
        "author": "Brad Traversy",
        "rate": 4.3,
        "rate_number": 9895,
        "price": 1099000,
        "sale": 229000,
        "photo": "course9",
    },
    "10": {
        "id": 10,
        "title": "GitHub Actions - The Complete Guide",
        "description": "Learn how to build automated CI / CD workflows with GitHub's DevOps service.",
        "author": "Maximilian Schwarzmüller",
        "rate": 4.8,
        "rate_number": 253,
        "price": 429000,
        "sale": 250000,
        "photo": "slide1",
    },
    "11": {
        "id": 11,
        "title": "Fundamentals of Backend Communications and Protocols",
        "description": "Understand backend communication design patterns, protocols, execution and proxying",
        "author": "Hussein Nasser",
        "rate": 4.8,
        "rate_number": 1253,
        "price": 429000,
        "sale": 250000,
        "photo": "slide2",
    },
    "12": {
        "id": 12,
        "title": "Math for Data Science Masterclass",
        "description": "Learn about probability, statistics, and more using the mathematics that are foundational to the field of data science.",
        "author": "Jose Portlla",
        "rate": 4.7,
        "rate_number": 110,
        "price": 1669000,
        "sale": 250000,
        "photo": "slide3",
    },
}
const CoursesList = [
    {
        "id": 1,
        "title": "Complete React Developer in 2023",
        "description": "Updated! Become a Senior React Developer. Build a massive E-commerce app with Redux, Hooks, GraphQL, Stripe, Firebase",
        "author": "Andrei Neagoie, Yihua Zhang, Zero To Masteryo",
        "rate": 4.4,
        "rate_number": 119847,
        "price": 2199000,
        "sale": 249000,
        "photo": "course1",
    },
    {
        "id": 2,
        "title": "Ethereum and Solidity: The Complete Developer's Guide",
        "description": "Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain",
        "author": "Stephen Grider",
        "rate": 4.6,
        "rate_number": 24205,
        "price": 899000,
        "sale": 329000,
        "photo": "course2",
    },
    {
        "id": 3,
        "title": "Modern HTML & CSS From The Beginning (Including Sass)",
        "description": "Build modern responsive websites & UIs with HTML5, CSS3 & Sass! Learn Flex & CSS Grid",
        "author": "Brad Travers",
        "rate": 4.7,
        "rate_number": 24081,
        "price": 990000,
        "sale": 199000,
        "photo": "course3",
    },
    {
        "id": 4,
        "title": "The Complete Angular Course: Beginner to Advanced",
        "description": "The most comprehensive Angular 4 (Angular 2+) course. Build a real e-commerce app with Angular, Firebase and Bootstrap 4",
        "author": "Mosh Hamedani",
        "rate": 4.4,
        "rate_number": 26143,
        "price": 1999000,
        "sale": 249000,
        "photo": "course4",
    },
    {
        "id": 5,
        "title": "TNode.js, Express, MongoDB & More: The Complete Bootcamp 2023",
        "description": "Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more) ",
        "author": "Jonas Schmedtmann",
        "rate": 4.7,
        "rate_number": 14687,
        "price": 2499000,
        "sale": 329000,
        "photo": "course5",
    },
    {
        "id": 6,
        "title": "Node with React: Fullstack Web Development",
        "description": "Build and deploy fullstack web apps with NodeJS, React, Redux, Express,and MongoDB.",
        "author": "Stephen Grider",
        "rate": 4.7,
        "rate_number": 14248,
        "price": 1899000,
        "sale": 229000,
        "photo": "course6",
    },
    {
        "id": 7,
        "title": "Docker & Kubernetes: The Practical Guide [2023 Edition]",
        "description": "Learn Docker, Docker Compose, Multi-Container Projects, Deployment and all about Kubernetes from the ground up!",
        "author": "Maximilian Schwarzmüller",
        "rate": 4.7,
        "rate_number": 14026,
        "price": 2499000,
        "sale": 299000,
        "photo": "course7",
    },
    {
        "id": 8,
        "title": "Microservices with Node JS and React",
        "description": "Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and Kubernetes",
        "author": "Stephen Grider",
        "rate": 4.9,
        "rate_number": 12249,
        "price": 2199000,
        "sale": 279000,
        "photo": "course8",
    },
    {
        "id": 9,
        "title": "React Front To Back",
        "description": "Learn Modern React 16.8+ Including Hooks, Context API, Full Stack MERN & Redux By Building Real Life Projects",
        "author": "Brad Traversy",
        "rate": 4.3,
        "rate_number": 9895,
        "price": 1099000,
        "sale": 229000,
        "photo": "course9",
    },
    {
        "id": 10,
        "title": "GitHub Actions - The Complete Guide",
        "description": "Learn how to build automated CI / CD workflows with GitHub's DevOps service.",
        "author": "Maximilian Schwarzmüller",
        "rate": 4.8,
        "rate_number": 253,
        "price": 429000,
        "sale": 250000,
        "photo": "slide1",
    },
    {
        "id": 11,
        "title": "Fundamentals of Backend Communications and Protocols",
        "description": "Understand backend communication design patterns, protocols, execution and proxying",
        "author": "Hussein Nasser",
        "rate": 4.8,
        "rate_number": 1253,
        "price": 429000,
        "sale": 250000,
        "photo": "slide2",
    },
    {
        "id": 12,
        "title": "Math for Data Science Masterclass",
        "description": "Learn about probability, statistics, and more using the mathematics that are foundational to the field of data science.",
        "author": "Jose Portlla",
        "rate": 4.7,
        "rate_number": 110,
        "price": 1669000,
        "sale": 250000,
        "photo": "slide3",
    }
]


//Course in cart
document.querySelector(".cart__heading--3 span").textContent = cart.length ? cart.length : '0'
let cart_courses = document.querySelector(".cart-courses")

function showCart() {

    if (cart.length == 0) {
        cart_courses.style.display = 'none'
        document.querySelector(".cart-checkout").style.display = 'none'
        document.querySelector(".cart-empty").style.display = 'flex'

    } else {
        let totalPrice = 0, totalSale = 0;

        cart.forEach(id => {

            totalPrice += CoursesList[id].price
            totalSale += CoursesList[id].sale
            cart_courses.innerHTML += `<div class="cart-item">
            <img src="./assets/images/khoahoc/${CoursesList[id].photo}.jpg" class="cart__img" alt="${CoursesList[id].photo}">
            <div class="cart-item-info">
            <a href="#" class="cart-item__link">${CoursesList[id].title}</a>
            <p class="cart-item-author">By ${CoursesList[id].author}</p>
            <p class="cart-item-rating">
            <span style="color: #b4690e;">${CoursesList[id].rate}</span>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            ${CoursesList[id].rate > 4.7 ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-solid fa-star-half-stroke"></i>'} 
            <span class="item-rate-number">(${CoursesList[id].rate_number} ratings)</span>
            </p>
            </div>
            <div class="cart-item-price-wrapper">
            <p class="cart-item-price-sale">${VNDConverter(CoursesList[id].sale)} <i style="color: rgb(135, 16, 216);" class="fa-solid fa-tag"></i></p>
            <p class="cart-item-price">${VNDConverter(CoursesList[id].price)}</p>
            </div>
            <div class="cart-btn-wrapper">
            <button type="button" onclick="removeItem(${id})" class="cart__btn-close"><i class="fa-solid fa-xmark"></i></button>
            </div>
            </div>`
        });
        //Display total price
        document.querySelector(".cart-total-price").textContent = `${VNDConverter(totalPrice)}`
        document.querySelector('.cart-sale-price').textContent = `${VNDConverter(totalSale)}`
    }
}

function removeItem(id) {
    const newCart = cart.filter(idItem => idItem != id)
    localStorage.setItem('cart', JSON.stringify(newCart))
    location.reload()
}

showCart()

