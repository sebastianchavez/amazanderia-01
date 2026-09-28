const MOCK_DATA = {
    categories: [
        { id: 1, name: 'Panes', icon: '🍞', description: 'Panes artesanales recién horneados' },
        { id: 2, name: 'Empanadas', icon: '🥟', description: 'Empanadas tradicionales y especiales' },
        { id: 3, name: 'Dulces', icon: '🍪', description: 'Dulces y postres caseros' },
        { id: 4, name: 'Tortas', icon: '🎂', description: 'Tortas para toda ocasión' },
        { id: 5, name: 'Sandwiches', icon: '🥪', description: 'Sandwiches frescos del día' },
        { id: 6, name: 'Bebidas', icon: '🥤', description: 'Bebidas refrescantes' }
    ],

    products: [
        { id: 1, name: 'Pan Marraqueta', categoryId: 1, price: 500, stock: 50, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop', description: 'Pan marraqueta tradicional chileno, crujiente por fuera y suave por dentro. Perfecto para acompañar cualquier comida.', rating: 4.8, reviews: 124, featured: true },
        { id: 2, name: 'Pan Hallulla', categoryId: 1, price: 400, stock: 60, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop', description: 'Hallulla suave y esponjosa, ideal para sandwiches y acompañamientos.', rating: 4.7, reviews: 98, featured: true },
        { id: 3, name: 'Pan de Pascua', categoryId: 1, price: 8500, stock: 15, image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&h=300&fit=crop', description: 'Pan de Pascua tradicional con frutas confitadas y especias navideñas.', rating: 4.9, reviews: 67, featured: false },
        { id: 4, name: 'Empanada de Pino', categoryId: 2, price: 1500, stock: 30, image: 'https://images.unsplash.com/photo-1604467707321-70d009801bf4?w=400&h=300&fit=crop', description: 'Empanada de pino tradicional con carne, cebolla, aceituna y huevo.', rating: 4.9, reviews: 256, featured: true },
        { id: 5, name: 'Empanada de Queso', categoryId: 2, price: 1200, stock: 25, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop', description: 'Empanada rellena de queso derretido, crujiente y deliciosa.', rating: 4.6, reviews: 145, featured: false },
        { id: 6, name: 'Empanada Napolitana', categoryId: 2, price: 1800, stock: 20, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop', description: 'Empanada napolitana con jamón, queso y salsa de tomate.', rating: 4.7, reviews: 189, featured: true },
        { id: 7, name: 'Alfajor', categoryId: 3, price: 800, stock: 40, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop', description: 'Alfajor casero relleno de manjar y cubierto con chocolate.', rating: 4.8, reviews: 203, featured: true },
        { id: 8, name: 'Chilenito', categoryId: 3, price: 1000, stock: 35, image: 'https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=400&h=300&fit=crop', description: 'Chilenito tradicional con manjar y hojaldre crujiente.', rating: 4.9, reviews: 178, featured: true },
        { id: 9, name: 'Kuchen de Manzana', categoryId: 3, price: 3500, stock: 12, image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=400&h=300&fit=crop', description: 'Kuchen alemán de manzana con canela y masa crujiente.', rating: 4.7, reviews: 92, featured: false },
        { id: 10, name: 'Torta de Chocolate', categoryId: 4, price: 15000, stock: 8, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop', description: 'Torta de chocolate con tres leches y decoración artesanal.', rating: 4.9, reviews: 134, featured: true },
        { id: 11, name: 'Torta Selva Negra', categoryId: 4, price: 18000, stock: 6, image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop', description: 'Torta Selva Negra con crema, cerezas y chocolate.', rating: 4.8, reviews: 87, featured: false },
        { id: 12, name: 'Torta de Zanahoria', categoryId: 4, price: 12000, stock: 10, image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop', description: 'Torta húmeda de zanahoria con frosting de queso crema.', rating: 4.6, reviews: 76, featured: false },
        { id: 13, name: 'Sandwich de Pollo', categoryId: 5, price: 2500, stock: 15, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop', description: 'Sandwich de pollo con palta, tomate y mayonesa casera.', rating: 4.5, reviews: 64, featured: false },
        { id: 14, name: 'Sandwich Italiano', categoryId: 5, price: 2000, stock: 18, image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=300&fit=crop', description: 'Sandwich italiano con palta, tomate y mayonesa.', rating: 4.7, reviews: 112, featured: true },
        { id: 15, name: 'Sandwich de Jamón y Queso', categoryId: 5, price: 1800, stock: 20, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop', description: 'Sandwich clásico de jamón y queso en pan fresco.', rating: 4.4, reviews: 89, featured: false },
        { id: 16, name: 'Limonada Natural', categoryId: 6, price: 1500, stock: 25, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop', description: 'Limonada natural hecha con limones frescos y hierbabuena.', rating: 4.8, reviews: 156, featured: true },
        { id: 17, name: 'Jugo de Naranja', categoryId: 6, price: 1800, stock: 20, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop', description: 'Jugo de naranja natural recién exprimido.', rating: 4.7, reviews: 98, featured: false },
        { id: 18, name: 'Té Helado', categoryId: 6, price: 1200, stock: 30, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', description: 'Té helado con limón y durazno, refrescante y natural.', rating: 4.5, reviews: 67, featured: false }
    ],

    reviews: [
        { id: 1, productId: 1, userId: 1, userName: 'María González', rating: 5, comment: 'El mejor pan marraqueta que he probado. Siempre fresco y crujiente.', date: '2026-09-15' },
        { id: 2, productId: 1, userId: 2, userName: 'Carlos Pérez', rating: 5, comment: 'Excelente calidad, lo compro todos los días.', date: '2026-09-14' },
        { id: 3, productId: 1, userId: 3, userName: 'Ana Martínez', rating: 4, comment: 'Muy bueno, aunque a veces se pone duro rápido.', date: '2026-09-13' },
        { id: 4, productId: 4, userId: 1, userName: 'María González', rating: 5, comment: 'Las empanadas de pino son espectaculares, muy sabrosas.', date: '2026-09-16' },
        { id: 5, productId: 4, userId: 4, userName: 'Pedro Sánchez', rating: 5, comment: 'Las mejores empanadas de la ciudad, sin duda.', date: '2026-09-15' },
        { id: 6, productId: 7, userId: 2, userName: 'Carlos Pérez', rating: 5, comment: 'Alfajores deliciosos, el manjar es perfecto.', date: '2026-09-14' },
        { id: 7, productId: 10, userId: 3, userName: 'Ana Martínez', rating: 5, comment: 'La torta de chocolate es increíble, la pedí para mi cumpleaños.', date: '2026-09-13' },
        { id: 8, productId: 16, userId: 4, userName: 'Pedro Sánchez', rating: 4, comment: 'Limonada muy refrescante, perfecta para el verano.', date: '2026-09-12' }
    ],

    users: [
        { id: 1, name: 'María González', email: 'maria@example.com', password: 'password123', phone: '+56912345678', address: 'Av. Principal 123, Santiago' },
        { id: 2, name: 'Carlos Pérez', email: 'carlos@example.com', password: 'password123', phone: '+56923456789', address: 'Calle Central 456, Valparaíso' },
        { id: 3, name: 'Ana Martínez', email: 'ana@example.com', password: 'password123', phone: '+56934567890', address: 'Pasaje Norte 789, Concepción' },
        { id: 4, name: 'Pedro Sánchez', email: 'pedro@example.com', password: 'password123', phone: '+56945678901', address: 'Ruta Sur 321, Temuco' }
    ],

    orders: [
        {
            id: 'PED-001',
            userId: 1,
            date: '2026-09-15',
            status: 'Entregado',
            items: [
                { productId: 1, name: 'Pan Marraqueta', quantity: 10, price: 500, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop' },
                { productId: 4, name: 'Empanada de Pino', quantity: 5, price: 1500, image: 'https://images.unsplash.com/photo-1604467707321-70d009801bf4?w=400&h=300&fit=crop' }
            ],
            subtotal: 12500,
            shipping: 2000,
            total: 14500,
            address: 'Av. Principal 123, Santiago',
            shippingMethod: 'Express',
            paymentMethod: 'Tarjeta de crédito'
        },
        {
            id: 'PED-002',
            userId: 1,
            date: '2026-09-10',
            status: 'Entregado',
            items: [
                { productId: 7, name: 'Alfajor', quantity: 6, price: 800, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop' },
                { productId: 16, name: 'Limonada Natural', quantity: 3, price: 1500, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop' }
            ],
            subtotal: 9300,
            shipping: 2000,
            total: 11300,
            address: 'Av. Principal 123, Santiago',
            shippingMethod: 'Estándar',
            paymentMethod: 'Transferencia bancaria'
        },
        {
            id: 'PED-003',
            userId: 1,
            date: '2026-09-20',
            status: 'En camino',
            items: [
                { productId: 10, name: 'Torta de Chocolate', quantity: 1, price: 15000, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop' }
            ],
            subtotal: 15000,
            shipping: 3000,
            total: 18000,
            address: 'Av. Principal 123, Santiago',
            shippingMethod: 'Express',
            paymentMethod: 'Tarjeta de débito'
        }
    ],

    team: [
        { name: 'Juan Carlos Amasador', role: 'Fundador y Maestro Panadero', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face', bio: 'Con más de 30 años de experiencia en panadería artesanal.' },
        { name: 'María Elena Cocinera', role: 'Chef Principal', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face', bio: 'Especialista en empanadas y platos tradicionales chilenos.' },
        { name: 'Roberto Dulcero', role: 'Pastelero Jefe', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face', bio: 'Experto en tortas y postres artesanales con 15 años de experiencia.' },
        { name: 'Carmen Repostera', role: 'Repostera', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face', bio: 'Creadora de los famosos alfajores y chilenitos de Amasanderia.' }
    ],

    shippingMethods: [
        { id: 'standard', name: 'Envío Estándar', price: 2000, days: '3-5 días hábiles' },
        { id: 'express', name: 'Envío Express', price: 3000, days: '1-2 días hábiles' },
        { id: 'pickup', name: 'Retiro en tienda', price: 0, days: 'Disponible hoy' }
    ],

    paymentMethods: [
        { id: 'credit', name: 'Tarjeta de crédito', icon: '💳' },
        { id: 'debit', name: 'Tarjeta de débito', icon: '💳' },
        { id: 'transfer', name: 'Transferencia bancaria', icon: '🏦' },
        { id: 'cash', name: 'Efectivo contra entrega', icon: '💵' }
    ]
};
