import productModel from '../model/product-model'

// TODO: remove mock data, integrate  with AWS serverless API Gateway/Lambda

export function getProductById(productId) {
    const products = searchProducts();
    return products.find(x => x.id == productId);
}

export function searchProducts() {
    return [
        new productModel(
            1,
            'aliquam quat voluptatem',
            [
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg')
            ],
            150,
            100,
            3,
            ['green', '#11426b', '#7d5a3c', '#ffffff'],
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        ),
        new productModel(
            2,
            'aspetur autodit autfugit',
            [
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg')
            ],
            150,
            100,
            4,
            ['#7d5a3c', '#ffffff', 'green', '#11426b'],
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ),
        new productModel(
            3,
            'magni dolores eosquies',
            [
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg')
            ],
            150,
            100,
            3,
            ['#11426b', '#7d5a3c', 'green', '#ffffff'],
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ),
        new productModel(
            4,
            'voluptas nulla pariatur',
            [
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg')
            ],
            150,
            100,
            4,
            ['#ffffff', 'green', '#11426b', '#7d5a3c'],
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ),
        new productModel(
            5,
            'aliquam quat voluptatem',
            [
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/06.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg')
            ],
            150,
            100,
            5,
            ['#7d5a3c', 'green', '#11426b', '#ffffff'],
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ),
        new productModel(
            6,
            'voluptas sit aspernatur',
            [
                require('../assets/img/products/06.jpg'),
                require('../assets/img/products/07.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg')
            ],
            150,
            100,
            4,
            ['green', '#11426b', '#7d5a3c', '#ffffff'],
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ),
        new productModel(
            7,
            'aspetur autodit autfugit',
            [
                require('../assets/img/products/07.jpg'),
                require('../assets/img/products/08.jpg'),
                require('../assets/img/products/09.jpg'),
                require('../assets/img/products/10.jpg'),
                require('../assets/img/products/01.jpg')
            ],
            75,
            60,
            4,
            ['#7d5a3c', '#ffffff', 'green', '#11426b'],
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ),
        new productModel(
            8,
            'aliquam quat voluptatem',
            [
                require('../assets/img/products/08.jpg'),
                require('../assets/img/products/09.jpg'),
                require('../assets/img/products/10.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/01.jpg')
            ],
            175,
            160,
            5,
            ['#11426b', '#7d5a3c', '#ffffff', 'green'],
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ),
        new productModel(
            9,
            'magni dolores eosquies',
            [
                require('../assets/img/products/09.jpg'),
                require('../assets/img/products/10.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/06.jpg')
            ],
            80,
            55,
            2,
            ['green', '#11426b', '#7d5a3c', '#ffffff'],
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        )
    ];
}

export function fetchTrendingProduct() {
    return {
        featuredProducts: fetchFeaturedProducts(),
        latestProducts: fetchLatestProducts(),
        bestSellerProducts: fetchBestSellerProducts()
    };
}

export function fetchSpecialProducts() {
    return [
        new productModel(
            1,
            'aliquam quat voluptatem',
            [
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg')
            ],
            150,
            100,
            3
        ),
        new productModel(
            2,
            'aspetur autodit autfugit',
            [
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg')
            ],
            150,
            100,
            4
        ),
        new productModel(
            3,
            'magni dolores eosquies',
            [
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg')
            ],
            150,
            100,
            3
        ),
        new productModel(
            4,
            'voluptas nulla pariatur',
            [
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg')
            ],
            150,
            100,
            4
        ),
        new productModel(
            5,
            'aliquam quat voluptatem',
            [
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/06.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg')
            ],
            150,
            100,
            5
        ),
        new productModel(
            6,
            'voluptas sit aspernatur',
            [
                require('../assets/img/products/06.jpg'),
                require('../assets/img/products/07.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg')
            ],
            150,
            100,
            4
        )
    ];
}

function fetchFeaturedProducts() {
    return [
        new productModel(
            5,
            'aliquam quat voluptatem',
            [
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/06.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg')
            ],
            150,
            100,
            5
        ),
        new productModel(
            6,
            'voluptas sit aspernatur',
            [
                require('../assets/img/products/06.jpg'),
                require('../assets/img/products/07.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg')
            ],
            150,
            100,
            4
        ),
        new productModel(
            1,
            'aliquam quat voluptatem',
            [
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg')
            ],
            150,
            100,
            3
        ),
        new productModel(
            2,
            'aspetur autodit autfugit',
            [
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg')
            ],
            150,
            100,
            4
        ),
        new productModel(
            3,
            'magni dolores eosquies',
            [
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg')
            ],
            150,
            100,
            3
        ),
        new productModel(
            4,
            'voluptas nulla pariatur',
            [
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg')
            ],
            150,
            100,
            4
        )
    ];
}

function fetchLatestProducts() {
    return [
        new productModel(
            3,
            'magni dolores eosquies',
            [
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg')
            ],
            150,
            100,
            3
        ),
        new productModel(
            4,
            'voluptas nulla pariatur',
            [
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg')
            ],
            150,
            100,
            4
        ),
        new productModel(
            5,
            'aliquam quat voluptatem',
            [
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/06.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg')
            ],
            150,
            100,
            5
        ),
        new productModel(
            6,
            'voluptas sit aspernatur',
            [
                require('../assets/img/products/06.jpg'),
                require('../assets/img/products/07.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg')
            ],
            150,
            100,
            4
        ),
        new productModel(
            1,
            'aliquam quat voluptatem',
            [
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg')
            ],
            150,
            100,
            3
        ),
        new productModel(
            2,
            'aspetur autodit autfugit',
            [
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg')
            ],
            150,
            100,
            4
        )
    ];
}

function fetchBestSellerProducts() {
    return [
        new productModel(
            1,
            'aliquam quat voluptatem',
            [
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg')
            ],
            150,
            100,
            3
        ),
        new productModel(
            2,
            'aspetur autodit autfugit',
            [
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg')
            ],
            150,
            100,
            4
        ),
        new productModel(
            3,
            'magni dolores eosquies',
            [
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg')
            ],
            150,
            100,
            3
        ),
        new productModel(
            4,
            'voluptas nulla pariatur',
            [
                require('../assets/img/products/04.jpg'),
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/01.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg')
            ],
            150,
            100,
            4
        ),
        new productModel(
            5,
            'aliquam quat voluptatem',
            [
                require('../assets/img/products/05.jpg'),
                require('../assets/img/products/06.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg')
            ],
            150,
            100,
            5
        ),
        new productModel(
            6,
            'voluptas sit aspernatur',
            [
                require('../assets/img/products/06.jpg'),
                require('../assets/img/products/07.jpg'),
                require('../assets/img/products/02.jpg'),
                require('../assets/img/products/03.jpg'),
                require('../assets/img/products/04.jpg')
            ],
            150,
            100,
            4
        )
    ];
}