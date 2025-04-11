const exchangeRate = 83.2;
const cars = [
    {
        "id": 1,
        "name": "Toyota Corolla LE Gen-1",
        "brand": "Toyota",
        "price": 22061,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 2,
        "name": "Tesla Model 3 Long Range Gen-2",
        "brand": "Tesla",
        "price": 49833,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 3,
        "name": "Toyota Corolla LE Gen-3",
        "brand": "Toyota",
        "price": 21916,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 4,
        "name": "Toyota Corolla LE Gen-4",
        "brand": "Toyota",
        "price": 22763,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 5,
        "name": "Tesla Model 3 Long Range Gen-5",
        "brand": "Tesla",
        "price": 49173,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 6,
        "name": "Honda Civic Touring Gen-6",
        "brand": "Honda",
        "price": 26797,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 7,
        "name": "Toyota Corolla LE Gen-7",
        "brand": "Toyota",
        "price": 25134,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 8,
        "name": "Honda Civic Touring Gen-8",
        "brand": "Honda",
        "price": 26910,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 9,
        "name": "Tesla Model 3 Long Range Gen-9",
        "brand": "Tesla",
        "price": 45265,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 10,
        "name": "Honda Civic Touring Gen-10",
        "brand": "Honda",
        "price": 31315,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 11,
        "name": "Toyota Corolla LE Gen-11",
        "brand": "Toyota",
        "price": 24681,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 12,
        "name": "Tesla Model 3 Long Range Gen-12",
        "brand": "Tesla",
        "price": 45466,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 13,
        "name": "Honda Civic Touring Gen-13",
        "brand": "Honda",
        "price": 30649,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 14,
        "name": "Toyota Corolla LE Gen-14",
        "brand": "Toyota",
        "price": 23546,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 15,
        "name": "Toyota Corolla LE Gen-15",
        "brand": "Toyota",
        "price": 24287,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 16,
        "name": "Toyota Corolla LE Gen-16",
        "brand": "Toyota",
        "price": 24866,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 17,
        "name": "Honda Civic Touring Gen-17",
        "brand": "Honda",
        "price": 29922,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 18,
        "name": "Honda Civic Touring Gen-18",
        "brand": "Honda",
        "price": 26726,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 19,
        "name": "Toyota Corolla LE Gen-19",
        "brand": "Toyota",
        "price": 23747,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 20,
        "name": "Honda Civic Touring Gen-20",
        "brand": "Honda",
        "price": 30602,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 21,
        "name": "Honda Civic Touring Gen-21",
        "brand": "Honda",
        "price": 26727,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 22,
        "name": "Honda Civic Touring Gen-22",
        "brand": "Honda",
        "price": 30519,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 23,
        "name": "Tesla Model 3 Long Range Gen-23",
        "brand": "Tesla",
        "price": 47390,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 24,
        "name": "Toyota Corolla LE Gen-24",
        "brand": "Toyota",
        "price": 20896,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 25,
        "name": "Honda Civic Touring Gen-25",
        "brand": "Honda",
        "price": 30631,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 26,
        "name": "Toyota Corolla LE Gen-26",
        "brand": "Toyota",
        "price": 20807,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 27,
        "name": "Honda Civic Touring Gen-27",
        "brand": "Honda",
        "price": 28623,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 28,
        "name": "Tesla Model 3 Long Range Gen-28",
        "brand": "Tesla",
        "price": 46467,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 29,
        "name": "Tesla Model 3 Long Range Gen-29",
        "brand": "Tesla",
        "price": 48177,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 30,
        "name": "Honda Civic Touring Gen-30",
        "brand": "Honda",
        "price": 27168,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 31,
        "name": "Honda Civic Touring Gen-31",
        "brand": "Honda",
        "price": 28456,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 32,
        "name": "Honda Civic Touring Gen-32",
        "brand": "Honda",
        "price": 28715,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 33,
        "name": "Honda Civic Touring Gen-33",
        "brand": "Honda",
        "price": 26767,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 34,
        "name": "Toyota Corolla LE Gen-34",
        "brand": "Toyota",
        "price": 20520,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 35,
        "name": "Tesla Model 3 Long Range Gen-35",
        "brand": "Tesla",
        "price": 45652,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 36,
        "name": "Toyota Corolla LE Gen-36",
        "brand": "Toyota",
        "price": 21833,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 37,
        "name": "Tesla Model 3 Long Range Gen-37",
        "brand": "Tesla",
        "price": 48697,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 38,
        "name": "Tesla Model 3 Long Range Gen-38",
        "brand": "Tesla",
        "price": 45272,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 39,
        "name": "Honda Civic Touring Gen-39",
        "brand": "Honda",
        "price": 28345,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 40,
        "name": "Toyota Corolla LE Gen-40",
        "brand": "Toyota",
        "price": 20563,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 41,
        "name": "Honda Civic Touring Gen-41",
        "brand": "Honda",
        "price": 30537,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 42,
        "name": "Toyota Corolla LE Gen-42",
        "brand": "Toyota",
        "price": 21931,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 43,
        "name": "Tesla Model 3 Long Range Gen-43",
        "brand": "Tesla",
        "price": 45990,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 44,
        "name": "Honda Civic Touring Gen-44",
        "brand": "Honda",
        "price": 30309,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 45,
        "name": "Honda Civic Touring Gen-45",
        "brand": "Honda",
        "price": 31154,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 46,
        "name": "Honda Civic Touring Gen-46",
        "brand": "Honda",
        "price": 28888,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 47,
        "name": "Toyota Corolla LE Gen-47",
        "brand": "Toyota",
        "price": 20508,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 48,
        "name": "Toyota Corolla LE Gen-48",
        "brand": "Toyota",
        "price": 23075,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 49,
        "name": "Honda Civic Touring Gen-49",
        "brand": "Honda",
        "price": 28676,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 50,
        "name": "Toyota Corolla LE Gen-50",
        "brand": "Toyota",
        "price": 21583,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 51,
        "name": "Tesla Model 3 Long Range Gen-51",
        "brand": "Tesla",
        "price": 45616,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 52,
        "name": "Honda Civic Touring Gen-52",
        "brand": "Honda",
        "price": 31621,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 53,
        "name": "Tesla Model 3 Long Range Gen-53",
        "brand": "Tesla",
        "price": 48606,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 54,
        "name": "Tesla Model 3 Long Range Gen-54",
        "brand": "Tesla",
        "price": 49150,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 55,
        "name": "Tesla Model 3 Long Range Gen-55",
        "brand": "Tesla",
        "price": 45812,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 56,
        "name": "Toyota Corolla LE Gen-56",
        "brand": "Toyota",
        "price": 23394,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 57,
        "name": "Honda Civic Touring Gen-57",
        "brand": "Honda",
        "price": 29059,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 58,
        "name": "Honda Civic Touring Gen-58",
        "brand": "Honda",
        "price": 30928,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 59,
        "name": "Tesla Model 3 Long Range Gen-59",
        "brand": "Tesla",
        "price": 49453,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 60,
        "name": "Honda Civic Touring Gen-60",
        "brand": "Honda",
        "price": 27032,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 61,
        "name": "Toyota Corolla LE Gen-61",
        "brand": "Toyota",
        "price": 22462,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 62,
        "name": "Toyota Corolla LE Gen-62",
        "brand": "Toyota",
        "price": 23504,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 63,
        "name": "Toyota Corolla LE Gen-63",
        "brand": "Toyota",
        "price": 21808,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 64,
        "name": "Tesla Model 3 Long Range Gen-64",
        "brand": "Tesla",
        "price": 47432,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 65,
        "name": "Honda Civic Touring Gen-65",
        "brand": "Honda",
        "price": 29590,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 66,
        "name": "Toyota Corolla LE Gen-66",
        "brand": "Toyota",
        "price": 24756,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 67,
        "name": "Honda Civic Touring Gen-67",
        "brand": "Honda",
        "price": 29507,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 68,
        "name": "Tesla Model 3 Long Range Gen-68",
        "brand": "Tesla",
        "price": 46585,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 69,
        "name": "Tesla Model 3 Long Range Gen-69",
        "brand": "Tesla",
        "price": 49423,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 70,
        "name": "Toyota Corolla LE Gen-70",
        "brand": "Toyota",
        "price": 22100,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 71,
        "name": "Toyota Corolla LE Gen-71",
        "brand": "Toyota",
        "price": 21633,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 72,
        "name": "Honda Civic Touring Gen-72",
        "brand": "Honda",
        "price": 28335,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 73,
        "name": "Honda Civic Touring Gen-73",
        "brand": "Honda",
        "price": 30870,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 74,
        "name": "Toyota Corolla LE Gen-74",
        "brand": "Toyota",
        "price": 22581,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 75,
        "name": "Tesla Model 3 Long Range Gen-75",
        "brand": "Tesla",
        "price": 49660,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 76,
        "name": "Honda Civic Touring Gen-76",
        "brand": "Honda",
        "price": 29186,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 77,
        "name": "Honda Civic Touring Gen-77",
        "brand": "Honda",
        "price": 27018,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 78,
        "name": "Tesla Model 3 Long Range Gen-78",
        "brand": "Tesla",
        "price": 46728,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 79,
        "name": "Tesla Model 3 Long Range Gen-79",
        "brand": "Tesla",
        "price": 49080,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 80,
        "name": "Toyota Corolla LE Gen-80",
        "brand": "Toyota",
        "price": 22683,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 81,
        "name": "Tesla Model 3 Long Range Gen-81",
        "brand": "Tesla",
        "price": 47996,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 82,
        "name": "Toyota Corolla LE Gen-82",
        "brand": "Toyota",
        "price": 22289,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 83,
        "name": "Tesla Model 3 Long Range Gen-83",
        "brand": "Tesla",
        "price": 45389,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 84,
        "name": "Honda Civic Touring Gen-84",
        "brand": "Honda",
        "price": 28775,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 85,
        "name": "Tesla Model 3 Long Range Gen-85",
        "brand": "Tesla",
        "price": 49484,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 86,
        "name": "Honda Civic Touring Gen-86",
        "brand": "Honda",
        "price": 27141,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 87,
        "name": "Honda Civic Touring Gen-87",
        "brand": "Honda",
        "price": 29524,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 88,
        "name": "Toyota Corolla LE Gen-88",
        "brand": "Toyota",
        "price": 20942,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 89,
        "name": "Tesla Model 3 Long Range Gen-89",
        "brand": "Tesla",
        "price": 45481,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 90,
        "name": "Tesla Model 3 Long Range Gen-90",
        "brand": "Tesla",
        "price": 48597,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 91,
        "name": "Tesla Model 3 Long Range Gen-91",
        "brand": "Tesla",
        "price": 45794,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 92,
        "name": "Tesla Model 3 Long Range Gen-92",
        "brand": "Tesla",
        "price": 46558,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 93,
        "name": "Tesla Model 3 Long Range Gen-93",
        "brand": "Tesla",
        "price": 47485,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 94,
        "name": "Toyota Corolla LE Gen-94",
        "brand": "Toyota",
        "price": 22217,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 95,
        "name": "Honda Civic Touring Gen-95",
        "brand": "Honda",
        "price": 28006,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 96,
        "name": "Honda Civic Touring Gen-96",
        "brand": "Honda",
        "price": 27919,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 97,
        "name": "Honda Civic Touring Gen-97",
        "brand": "Honda",
        "price": 29237,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 98,
        "name": "Tesla Model 3 Long Range Gen-98",
        "brand": "Tesla",
        "price": 48247,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 99,
        "name": "Honda Civic Touring Gen-99",
        "brand": "Honda",
        "price": 26740,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 100,
        "name": "Toyota Corolla LE Gen-100",
        "brand": "Toyota",
        "price": 24221,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 101,
        "name": "Honda Civic Touring Gen-101",
        "brand": "Honda",
        "price": 28910,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 102,
        "name": "Tesla Model 3 Long Range Gen-102",
        "brand": "Tesla",
        "price": 48518,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 103,
        "name": "Honda Civic Touring Gen-103",
        "brand": "Honda",
        "price": 27864,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 104,
        "name": "Honda Civic Touring Gen-104",
        "brand": "Honda",
        "price": 28905,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 105,
        "name": "Tesla Model 3 Long Range Gen-105",
        "brand": "Tesla",
        "price": 48364,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 106,
        "name": "Tesla Model 3 Long Range Gen-106",
        "brand": "Tesla",
        "price": 49920,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 107,
        "name": "Tesla Model 3 Long Range Gen-107",
        "brand": "Tesla",
        "price": 48845,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 108,
        "name": "Tesla Model 3 Long Range Gen-108",
        "brand": "Tesla",
        "price": 45910,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 109,
        "name": "Tesla Model 3 Long Range Gen-109",
        "brand": "Tesla",
        "price": 48664,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 110,
        "name": "Honda Civic Touring Gen-110",
        "brand": "Honda",
        "price": 31433,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 111,
        "name": "Toyota Corolla LE Gen-111",
        "brand": "Toyota",
        "price": 22719,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 112,
        "name": "Tesla Model 3 Long Range Gen-112",
        "brand": "Tesla",
        "price": 46559,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 113,
        "name": "Tesla Model 3 Long Range Gen-113",
        "brand": "Tesla",
        "price": 48650,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 114,
        "name": "Honda Civic Touring Gen-114",
        "brand": "Honda",
        "price": 31188,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 115,
        "name": "Tesla Model 3 Long Range Gen-115",
        "brand": "Tesla",
        "price": 49166,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 116,
        "name": "Tesla Model 3 Long Range Gen-116",
        "brand": "Tesla",
        "price": 49087,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 117,
        "name": "Toyota Corolla LE Gen-117",
        "brand": "Toyota",
        "price": 21029,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 118,
        "name": "Toyota Corolla LE Gen-118",
        "brand": "Toyota",
        "price": 22360,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 119,
        "name": "Honda Civic Touring Gen-119",
        "brand": "Honda",
        "price": 31357,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 120,
        "name": "Toyota Corolla LE Gen-120",
        "brand": "Toyota",
        "price": 24405,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 121,
        "name": "Honda Civic Touring Gen-121",
        "brand": "Honda",
        "price": 30437,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 122,
        "name": "Honda Civic Touring Gen-122",
        "brand": "Honda",
        "price": 31333,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 123,
        "name": "Honda Civic Touring Gen-123",
        "brand": "Honda",
        "price": 30636,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 124,
        "name": "Tesla Model 3 Long Range Gen-124",
        "brand": "Tesla",
        "price": 49292,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 125,
        "name": "Tesla Model 3 Long Range Gen-125",
        "brand": "Tesla",
        "price": 45591,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 126,
        "name": "Tesla Model 3 Long Range Gen-126",
        "brand": "Tesla",
        "price": 46576,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 127,
        "name": "Tesla Model 3 Long Range Gen-127",
        "brand": "Tesla",
        "price": 46255,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 128,
        "name": "Toyota Corolla LE Gen-128",
        "brand": "Toyota",
        "price": 20853,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 129,
        "name": "Honda Civic Touring Gen-129",
        "brand": "Honda",
        "price": 28177,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 130,
        "name": "Honda Civic Touring Gen-130",
        "brand": "Honda",
        "price": 28872,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 131,
        "name": "Tesla Model 3 Long Range Gen-131",
        "brand": "Tesla",
        "price": 48113,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 132,
        "name": "Tesla Model 3 Long Range Gen-132",
        "brand": "Tesla",
        "price": 46665,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 133,
        "name": "Tesla Model 3 Long Range Gen-133",
        "brand": "Tesla",
        "price": 46043,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 134,
        "name": "Tesla Model 3 Long Range Gen-134",
        "brand": "Tesla",
        "price": 49519,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 135,
        "name": "Honda Civic Touring Gen-135",
        "brand": "Honda",
        "price": 29301,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 136,
        "name": "Toyota Corolla LE Gen-136",
        "brand": "Toyota",
        "price": 22473,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 137,
        "name": "Tesla Model 3 Long Range Gen-137",
        "brand": "Tesla",
        "price": 49950,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 138,
        "name": "Toyota Corolla LE Gen-138",
        "brand": "Toyota",
        "price": 23180,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 139,
        "name": "Tesla Model 3 Long Range Gen-139",
        "brand": "Tesla",
        "price": 48123,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 140,
        "name": "Honda Civic Touring Gen-140",
        "brand": "Honda",
        "price": 30926,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 141,
        "name": "Tesla Model 3 Long Range Gen-141",
        "brand": "Tesla",
        "price": 48166,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 142,
        "name": "Toyota Corolla LE Gen-142",
        "brand": "Toyota",
        "price": 21190,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 143,
        "name": "Toyota Corolla LE Gen-143",
        "brand": "Toyota",
        "price": 24274,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 144,
        "name": "Tesla Model 3 Long Range Gen-144",
        "brand": "Tesla",
        "price": 49071,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 145,
        "name": "Tesla Model 3 Long Range Gen-145",
        "brand": "Tesla",
        "price": 49477,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 146,
        "name": "Tesla Model 3 Long Range Gen-146",
        "brand": "Tesla",
        "price": 46597,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 147,
        "name": "Toyota Corolla LE Gen-147",
        "brand": "Toyota",
        "price": 20799,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 148,
        "name": "Tesla Model 3 Long Range Gen-148",
        "brand": "Tesla",
        "price": 47222,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 149,
        "name": "Toyota Corolla LE Gen-149",
        "brand": "Toyota",
        "price": 23244,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 150,
        "name": "Honda Civic Touring Gen-150",
        "brand": "Honda",
        "price": 28847,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 151,
        "name": "Tesla Model 3 Long Range Gen-151",
        "brand": "Tesla",
        "price": 47751,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 152,
        "name": "Honda Civic Touring Gen-152",
        "brand": "Honda",
        "price": 30614,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 153,
        "name": "Tesla Model 3 Long Range Gen-153",
        "brand": "Tesla",
        "price": 45803,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 154,
        "name": "Honda Civic Touring Gen-154",
        "brand": "Honda",
        "price": 30262,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 155,
        "name": "Toyota Corolla LE Gen-155",
        "brand": "Toyota",
        "price": 23513,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 156,
        "name": "Toyota Corolla LE Gen-156",
        "brand": "Toyota",
        "price": 25336,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 157,
        "name": "Honda Civic Touring Gen-157",
        "brand": "Honda",
        "price": 27408,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 158,
        "name": "Toyota Corolla LE Gen-158",
        "brand": "Toyota",
        "price": 24035,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 159,
        "name": "Toyota Corolla LE Gen-159",
        "brand": "Toyota",
        "price": 23222,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 160,
        "name": "Honda Civic Touring Gen-160",
        "brand": "Honda",
        "price": 30941,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 161,
        "name": "Honda Civic Touring Gen-161",
        "brand": "Honda",
        "price": 30670,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 162,
        "name": "Toyota Corolla LE Gen-162",
        "brand": "Toyota",
        "price": 24243,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 163,
        "name": "Tesla Model 3 Long Range Gen-163",
        "brand": "Tesla",
        "price": 48459,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 164,
        "name": "Honda Civic Touring Gen-164",
        "brand": "Honda",
        "price": 30162,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 165,
        "name": "Honda Civic Touring Gen-165",
        "brand": "Honda",
        "price": 26890,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 166,
        "name": "Tesla Model 3 Long Range Gen-166",
        "brand": "Tesla",
        "price": 48898,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 167,
        "name": "Honda Civic Touring Gen-167",
        "brand": "Honda",
        "price": 27133,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 168,
        "name": "Tesla Model 3 Long Range Gen-168",
        "brand": "Tesla",
        "price": 49375,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 169,
        "name": "Tesla Model 3 Long Range Gen-169",
        "brand": "Tesla",
        "price": 47293,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 170,
        "name": "Toyota Corolla LE Gen-170",
        "brand": "Toyota",
        "price": 23856,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 171,
        "name": "Tesla Model 3 Long Range Gen-171",
        "brand": "Tesla",
        "price": 49844,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 172,
        "name": "Tesla Model 3 Long Range Gen-172",
        "brand": "Tesla",
        "price": 47705,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 173,
        "name": "Toyota Corolla LE Gen-173",
        "brand": "Toyota",
        "price": 25310,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 174,
        "name": "Toyota Corolla LE Gen-174",
        "brand": "Toyota",
        "price": 22442,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 175,
        "name": "Tesla Model 3 Long Range Gen-175",
        "brand": "Tesla",
        "price": 47094,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 176,
        "name": "Tesla Model 3 Long Range Gen-176",
        "brand": "Tesla",
        "price": 48338,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 177,
        "name": "Honda Civic Touring Gen-177",
        "brand": "Honda",
        "price": 27757,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 178,
        "name": "Tesla Model 3 Long Range Gen-178",
        "brand": "Tesla",
        "price": 47898,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 179,
        "name": "Honda Civic Touring Gen-179",
        "brand": "Honda",
        "price": 27373,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 180,
        "name": "Toyota Corolla LE Gen-180",
        "brand": "Toyota",
        "price": 21971,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 181,
        "name": "Tesla Model 3 Long Range Gen-181",
        "brand": "Tesla",
        "price": 45878,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 182,
        "name": "Tesla Model 3 Long Range Gen-182",
        "brand": "Tesla",
        "price": 45858,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 183,
        "name": "Tesla Model 3 Long Range Gen-183",
        "brand": "Tesla",
        "price": 45501,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 184,
        "name": "Toyota Corolla LE Gen-184",
        "brand": "Toyota",
        "price": 25211,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 185,
        "name": "Honda Civic Touring Gen-185",
        "brand": "Honda",
        "price": 27196,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 186,
        "name": "Toyota Corolla LE Gen-186",
        "brand": "Toyota",
        "price": 24637,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 187,
        "name": "Honda Civic Touring Gen-187",
        "brand": "Honda",
        "price": 31634,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 188,
        "name": "Toyota Corolla LE Gen-188",
        "brand": "Toyota",
        "price": 25117,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 189,
        "name": "Honda Civic Touring Gen-189",
        "brand": "Honda",
        "price": 28531,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 190,
        "name": "Toyota Corolla LE Gen-190",
        "brand": "Toyota",
        "price": 24869,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 191,
        "name": "Toyota Corolla LE Gen-191",
        "brand": "Toyota",
        "price": 24012,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 192,
        "name": "Toyota Corolla LE Gen-192",
        "brand": "Toyota",
        "price": 25216,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 193,
        "name": "Tesla Model 3 Long Range Gen-193",
        "brand": "Tesla",
        "price": 47648,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 194,
        "name": "Honda Civic Touring Gen-194",
        "brand": "Honda",
        "price": 26962,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 195,
        "name": "Toyota Corolla LE Gen-195",
        "brand": "Toyota",
        "price": 23217,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://thumb.ac-illust.com/8b/8bd75513e8e14d2cea786944e94c69b9_t.jpeg",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 196,
        "name": "Honda Civic Touring Gen-196",
        "brand": "Honda",
        "price": 31529,
        "fuel": "Gasoline",
        "seats": 5,
        "mileage": "31/40 mpg",
        "transmission": "10-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Heated Seats",
            "Wireless Charging",
            "Bose Premium Audio"
        ]
    },
    {
        "id": 197,
        "name": "Toyota Corolla LE Gen-197",
        "brand": "Toyota",
        "price": 24754,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    },
    {
        "id": 198,
        "name": "Tesla Model 3 Long Range Gen-198",
        "brand": "Tesla",
        "price": 49772,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 199,
        "name": "Tesla Model 3 Long Range Gen-199",
        "brand": "Tesla",
        "price": 48842,
        "fuel": "Electric",
        "seats": 5,
        "mileage": "358 miles",
        "transmission": "1-Speed Automatic",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Autopilot",
            "Glass Roof",
            "15\" Touchscreen"
        ]
    },
    {
        "id": 200,
        "name": "Toyota Corolla LE Gen-200",
        "brand": "Toyota",
        "price": 21635,
        "fuel": "Hybrid",
        "seats": 5,
        "mileage": "32/41 mpg",
        "transmission": "Automatic CVT",
        "year": 2023,
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "features": [
            "Apple CarPlay",
            "Android Auto",
            "Lane Departure Warning"
        ]
    }
];

cars.forEach(car => {
    car.price = Math.round(car.price * exchangeRate);
});

export default cars;