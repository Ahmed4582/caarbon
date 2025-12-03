// Mock API Service - يعمل بدون باك إند
import Regular from "../assets/Svg/Regular.svg";
import Veicals from "../assets/Svg/Veicals.svg";
import HandShake from "../assets/Svg/HandShake.svg";
import HeadPhone from "../assets/Svg/HeadPhone.svg";
import CreditCart from "../assets/Svg/CreditCart.svg";

// صور سيارات من مصادر موثوقة - Pixabay و Pexels
const getCarImage = (carId, imageIndex = 0) => {
  const carImages = {
    1: [
      "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg", // Toyota Camry - Sedan
      "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/automobile-1834274_1280.jpg",
    ],
    2: [
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/automobile-1834274_1280.jpg", // Honda Accord - Sedan
      "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.jpg",
    ],
    3: [
      "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg", // Nissan Altima - Sedan
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/automobile-1834274_1280.jpg",
    ],
    4: [
      "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg", // Ford Explorer - SUV
      "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/automobile-1834274_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg",
    ],
    5: [
      "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.jpg", // Chevrolet Tahoe - SUV
      "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/automobile-1834274_1280.jpg",
    ],
    6: [
      "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg", // BMW 3 Series - Luxury
      "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/automobile-1834274_1280.jpg",
    ],
    7: [
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/automobile-1834274_1280.jpg", // Mercedes C-Class - Luxury
      "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg",
    ],
    8: [
      "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg", // Audi A4 - Luxury
      "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/automobile-1834274_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg",
    ],
    9: [
      "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.jpg", // Tesla Model 3 - Electric
      "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/automobile-1834274_1280.jpg",
    ],
    10: [
      "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg", // Hyundai Elantra - Sedan
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/automobile-1834274_1280.jpg",
    ],
  };
  const images = carImages[carId] || carImages[1];
  return images[imageIndex % images.length] || images[0];
};

// Simulate delay for realistic API calls
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock Users Database
const mockUsers = [
  {
    id: 1,
    email: "user@example.com",
    password: "123456",
    name: "Ahmed Ali",
    phone: "+201234567890",
  },
  {
    id: 2,
    email: "test@test.com",
    password: "password",
    name: "Test User",
    phone: "+201111111111",
  },
];

// Mock Products Database
const mockProducts = [
  {
    id: 1,
    name: "سيارة تويوتا كامري 2024",
    name_en: "Toyota Camry 2024",
    price: 450,
    oldPrice: 500,
    discount: 10,
    rating: 4.8,
    numReviews: 187,
    images: [1, 2, 3, 4], // سيتم تحويلها لصور في getProducts
    isFeatured: "hot",
    category: "sedan",
    category_id: 1,
    description: "سيارة فاخرة مع أحدث التقنيات والمواصفات\n\nتتميز سيارة تويوتا كامري 2024 بتصميم عصري وأنيق يجمع بين الفخامة والأداء العالي. تأتي السيارة بمحرك قوي ونظام أمان متقدم يضمن رحلة آمنة ومريحة.",
    description_en: "Luxury car with latest technology and features",
    brand: "Toyota",
    availability: "In Stock",
    features: [
      { icon: Regular, title: "نظام ملاحة GPS متقدم" },
      { icon: Veicals, title: "كاميرات خلفية وأمامية" },
      { icon: HandShake, title: "نظام أمان متقدم" },
      { icon: HeadPhone, title: "نظام صوتي فاخر" },
      { icon: CreditCart, title: "ضمان شامل 5 سنوات" },
    ],
  },
  {
    id: 2,
    name: "سيارة هوندا أكورد 2024",
    name_en: "Honda Accord 2024",
    price: 420,
    oldPrice: 480,
    discount: 12,
    rating: 4.5,
    numReviews: 294,
    images: [1, 2, 3],
    isFeatured: false,
    category: "sedan",
    category_id: 1,
    description: "سيارة عائلية مريحة واقتصادية\n\nهوندا أكورد 2024 هي الخيار المثالي للعائلات التي تبحث عن راحة وأمان مع توفير في استهلاك الوقود.",
    description_en: "Comfortable and economical family car",
    brand: "Honda",
    availability: "In Stock",
    features: [
      { icon: Regular, title: "محرك قوي واقتصادي" },
      { icon: Veicals, title: "مساحة واسعة للمسافرين" },
      { icon: HandShake, title: "نظام أمان شامل" },
    ],
  },
  {
    id: 3,
    name: "سيارة نيسان ألتيما 2024",
    name_en: "Nissan Altima 2024",
    price: 380,
    oldPrice: 450,
    discount: 15,
    rating: 4.2,
    numReviews: 143,
    images: [1, 2],
    isFeatured: "best-deals",
    category: "sedan",
    category_id: 1,
    description: "سيارة عملية بتصميم عصري\n\nنيسان ألتيما تجمع بين الأناقة والأداء العملي في سيارة واحدة.",
    description_en: "Practical car with modern design",
    brand: "Nissan",
    availability: "In Stock",
    features: [
      { icon: Regular, title: "تصميم عصري وجذاب" },
      { icon: Veicals, title: "تقنيات متقدمة" },
    ],
  },
  {
    id: 4,
    name: "سيارة فورد إكسبلورر 2024",
    name_en: "Ford Explorer 2024",
    price: 550,
    oldPrice: 600,
    discount: 8,
    rating: 4.7,
    numReviews: 211,
    images: [1, 2, 3, 4, 5],
    isFeatured: false,
    category: "suv",
    category_id: 2,
    description: "سيارة دفع رباعي قوية ومريحة\n\nفورد إكسبلورر تقدم تجربة قيادة استثنائية مع مساحة واسعة وتقنيات متقدمة.",
    description_en: "Powerful and comfortable SUV",
    brand: "Ford",
    availability: "In Stock",
    features: [
      { icon: Regular, title: "دفع رباعي متقدم" },
      { icon: Veicals, title: "مساحة شاسعة" },
      { icon: HandShake, title: "قوة وسرعة" },
    ],
  },
  {
    id: 5,
    name: "سيارة شيفروليه تاهو 2024",
    name_en: "Chevrolet Tahoe 2024",
    price: 650,
    oldPrice: 700,
    discount: 7,
    rating: 4.6,
    numReviews: 276,
    images: [1, 2, 3],
    isFeatured: "sale",
    category: "suv",
    category_id: 2,
    description: "سيارة فاخرة كبيرة الحجم\n\nشيفروليه تاهو تجمع بين الفخامة والقوة في سيارة واحدة مناسبة للعائلات الكبيرة.",
    description_en: "Large luxury SUV",
    brand: "Chevrolet",
    availability: "In Stock",
    features: [
      { icon: Regular, title: "فخامة وراحة" },
      { icon: Veicals, title: "مساحة 7 مقاعد" },
    ],
  },
  {
    id: 6,
    name: "سيارة بي إم دبليو الفئة الثالثة 2024",
    name_en: "BMW 3 Series 2024",
    price: 750,
    oldPrice: 850,
    discount: 11,
    rating: 4.9,
    numReviews: 189,
    images: [1, 2, 3, 4],
    isFeatured: "25% off",
    category: "luxury",
    category_id: 3,
    description: "سيارة فاخرة بأداء عالي\n\nبي إم دبليو الفئة الثالثة تجسد الكمال في التصميم والأداء. سيارة رياضية فاخرة بكل معنى الكلمة.",
    description_en: "Luxury car with high performance",
    brand: "BMW",
    availability: "In Stock",
    features: [
      { icon: Regular, title: "أداء رياضي" },
      { icon: Veicals, title: "تقنيات فاخرة" },
      { icon: HandShake, title: "راحة قصوى" },
    ],
  },
  {
    id: 7,
    name: "سيارة مرسيدس بنز الفئة C 2024",
    name_en: "Mercedes-Benz C-Class 2024",
    price: 800,
    oldPrice: 900,
    discount: 11,
    rating: 4.4,
    numReviews: 98,
    images: [1, 2],
    isFeatured: "empty",
    category: "luxury",
    category_id: 3,
    description: "أناقة وفخامة ألمانية\n\nمرسيدس بنز الفئة C تجمع بين الأناقة الألمانية والتقنيات المتطورة.",
    description_en: "German elegance and luxury",
    brand: "Mercedes-Benz",
    availability: "In Stock",
    features: [
      { icon: Regular, title: "تصميم أنيق" },
      { icon: Veicals, title: "تقنيات متطورة" },
    ],
  },
  {
    id: 8,
    name: "سيارة أودي A4 2024",
    name_en: "Audi A4 2024",
    price: 700,
    oldPrice: 780,
    discount: 10,
    rating: 4.3,
    numReviews: 175,
    images: [1, 2, 3, 4, 5],
    isFeatured: false,
    category: "luxury",
    category_id: 3,
    description: "سيارة فاخرة بتقنيات متقدمة\n\nأودي A4 تقدم تجربة قيادة فاخرة مع تقنيات ذكية وأداء قوي.",
    description_en: "Luxury car with advanced technology",
    brand: "Audi",
    availability: "In Stock",
    features: [
      { icon: Regular, title: "تقنيات ذكية" },
      { icon: Veicals, title: "أداء قوي" },
    ],
  },
  {
    id: 9,
    name: "سيارة تيسلا موديل 3 2024",
    name_en: "Tesla Model 3 2024",
    price: 550,
    oldPrice: 600,
    discount: 8,
    rating: 4.7,
    numReviews: 231,
    images: [1, 2, 3],
    isFeatured: "hot",
    category: "electric",
    category_id: 4,
    description: "سيارة كهربائية صديقة للبيئة\n\nتيسلا موديل 3 هي المستقبل في عالم السيارات الكهربائية. أداء سريع وتقنيات ذكية.",
    description_en: "Eco-friendly electric car",
    brand: "Tesla",
    availability: "In Stock",
    features: [
      { icon: Regular, title: "طاقة نظيفة" },
      { icon: Veicals, title: "تقنيات ذكية" },
      { icon: HandShake, title: "أداء سريع" },
    ],
  },
  {
    id: 10,
    name: "سيارة هيونداي إلنترا 2024",
    name_en: "Hyundai Elantra 2024",
    price: 350,
    oldPrice: 400,
    discount: 12,
    rating: 4.2,
    numReviews: 88,
    images: [1, 2],
    isFeatured: "best-deals",
    category: "sedan",
    category_id: 1,
    description: "سيارة اقتصادية وعملية\n\nهيونداي إلنترا هي الخيار المثالي لمن يبحث عن سيارة موثوقة واقتصادية.",
    description_en: "Economical and practical car",
    brand: "Hyundai",
    availability: "In Stock",
    features: [
      { icon: Regular, title: "اقتصادية في الاستهلاك" },
      { icon: Veicals, title: "موثوقة" },
    ],
  },
];

// Mock Categories
const mockCategories = [
  { id: 1, name: "سيدان", name_en: "Sedan", slug: "sedan" },
  { id: 2, name: "دفع رباعي", name_en: "SUV", slug: "suv" },
  { id: 3, name: "فاخرة", name_en: "Luxury", slug: "luxury" },
  { id: 4, name: "كهربائية", name_en: "Electric", slug: "electric" },
];

// Mock Cart Storage (in-memory)
let mockCart = [];
let mockWishlist = [];
let mockUserProducts = [];
let currentUser = null;

// Mock API Functions
export const mockAPI = {
  // Auth APIs
  async login(credentials) {
    await delay();
    const user = mockUsers.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    );
    if (user) {
      currentUser = user;
      return {
        jwt: `mock_token_${user.id}_${Date.now()}`,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          phone: user.phone,
        },
      };
    }
    throw {
      response: {
        data: {
          detail: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
        },
      },
    };
  },

  async register(userData) {
    await delay();
    const existingUser = mockUsers.find((u) => u.email === userData.email);
    if (existingUser) {
      throw {
        response: {
          data: {
            detail: "البريد الإلكتروني مستخدم بالفعل",
          },
        },
      };
    }
    const newUser = {
      id: mockUsers.length + 1,
      ...userData,
    };
    mockUsers.push(newUser);
    currentUser = newUser;
    return {
      jwt: `mock_token_${newUser.id}_${Date.now()}`,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        phone: newUser.phone,
      },
    };
  },

  async getUserInfo(token) {
    await delay();
    if (!token || !token.startsWith("mock_token_")) {
      throw { response: { data: { detail: "غير مصرح" } } };
    }
    if (!currentUser) {
      const userId = parseInt(token.split("_")[2]);
      currentUser = mockUsers.find((u) => u.id === userId) || mockUsers[0];
    }
    return {
      id: currentUser.id,
      email: currentUser.email,
      name: currentUser.name,
      phone: currentUser.phone,
    };
  },

  // Product APIs
  async getProducts() {
    await delay();
    // تحويل المنتجات للشكل المتوقع من الكود
    return mockProducts.map((product) => ({
      ...product,
      cost_per_day: product.price,
      is_available: product.availability === "In Stock" ? "1" : "0",
      amount: "10", // الكمية المتاحة
      in_stock: "10",
      images: product.images.map((imgIndex, index) => ({
        id: index + 1,
        image: getCarImage(product.id, imgIndex - 1),
      })),
    }));
  },

  async getProductDetails(id) {
    await delay();
    const product = mockProducts.find((p) => p.id === parseInt(id));
    if (!product) {
      throw { response: { data: { detail: "المنتج غير موجود" } } };
    }
    // تحويل المنتج للشكل المتوقع من الكود
    return {
      ...product,
      cost_per_day: product.price,
      is_available: product.availability === "In Stock" ? "1" : "0",
      amount: "10", // الكمية المتاحة
      in_stock: "10",
      images: product.images.map((imgIndex, index) => ({
        id: index + 1,
        image: getCarImage(product.id, imgIndex - 1),
      })),
    };
  },

  // Category APIs
  async getCategories() {
    await delay();
    return mockCategories;
  },

  // Cart APIs
  async getCart(token) {
    await delay();
    if (!token || !token.startsWith("mock_token_")) {
      return [];
    }
    return mockCart;
  },

  async addToCart(productId, token) {
    await delay();
    if (!token || !token.startsWith("mock_token_")) {
      throw { response: { data: { detail: "يجب تسجيل الدخول" } } };
    }
    const product = mockProducts.find((p) => p.id === parseInt(productId));
    if (!product) {
      throw { response: { data: { detail: "المنتج غير موجود" } } };
    }
    const existingItem = mockCart.find((item) => item.product_id === productId);
    if (existingItem) {
      existingItem.amount += 1;
    } else {
      mockCart.push({
        id: mockCart.length + 1,
        product_id: productId,
        product: product,
        amount: 1,
      });
    }
    return { message: "تمت الإضافة بنجاح", success: true };
  },

  async removeFromCart(productId, token) {
    await delay();
    if (!token || !token.startsWith("mock_token_")) {
      throw { response: { data: { detail: "يجب تسجيل الدخول" } } };
    }
    mockCart = mockCart.filter((item) => item.product_id !== parseInt(productId));
    return { message: "تم الحذف بنجاح", success: true };
  },

  async updateCart(productId, amount, token) {
    await delay();
    if (!token || !token.startsWith("mock_token_")) {
      throw { response: { data: { detail: "يجب تسجيل الدخول" } } };
    }
    const item = mockCart.find((item) => item.product_id === parseInt(productId));
    if (item) {
      item.amount = amount;
    }
    return { message: "تم التحديث بنجاح", success: true };
  },

  // Wishlist APIs
  async getWishlist(token) {
    await delay();
    if (!token || !token.startsWith("mock_token_")) {
      return [];
    }
    return mockWishlist;
  },

  async addToWishlist(productId, token) {
    await delay();
    if (!token || !token.startsWith("mock_token_")) {
      throw { response: { data: { detail: "يجب تسجيل الدخول" } } };
    }
    const product = mockProducts.find((p) => p.id === parseInt(productId));
    if (!product) {
      throw { response: { data: { detail: "المنتج غير موجود" } } };
    }
    const exists = mockWishlist.find((item) => item.id === productId);
    if (!exists) {
      mockWishlist.push(product);
    }
    return { message: "تمت الإضافة للمفضلة بنجاح", success: true };
  },

  async removeFromWishlist(productId, token) {
    await delay();
    if (!token || !token.startsWith("mock_token_")) {
      throw { response: { data: { detail: "يجب تسجيل الدخول" } } };
    }
    mockWishlist = mockWishlist.filter((item) => item.id !== parseInt(productId));
    return { message: "تم الحذف من المفضلة بنجاح", success: true };
  },

  // User Products APIs
  async getUserProducts(token) {
    await delay();
    if (!token || !token.startsWith("mock_token_")) {
      return [];
    }
    return mockUserProducts;
  },

  async addProduct(productData, token) {
    await delay();
    if (!token || !token.startsWith("mock_token_")) {
      throw { response: { data: { detail: "يجب تسجيل الدخول" } } };
    }
    const newProduct = {
      id: mockProducts.length + 1,
      ...productData,
      created_at: new Date().toISOString(),
    };
    mockProducts.push(newProduct);
    mockUserProducts.push(newProduct);
    return newProduct;
  },

  async publishProduct(productId, token) {
    await delay();
    if (!token || !token.startsWith("mock_token_")) {
      throw { response: { data: { detail: "يجب تسجيل الدخول" } } };
    }
    return { message: "تم النشر بنجاح", success: true };
  },

  async archiveProduct(productId, token) {
    await delay();
    if (!token || !token.startsWith("mock_token_")) {
      throw { response: { data: { detail: "يجب تسجيل الدخول" } } };
    }
    return { message: "تم الأرشفة بنجاح", success: true };
  },

  // OTP API
  async verifyOTP(otpData) {
    await delay();
    // Mock OTP verification - always succeeds for demo
    return {
      jwt: `mock_token_${Date.now()}`,
      message: "تم التحقق بنجاح",
      success: true,
    };
  },

  // Tags API
  async getTags() {
    await delay();
    return [
      { id: 1, name: "جديد", name_en: "New", slug: "new" },
      { id: 2, name: "عروض", name_en: "Offers", slug: "offers" },
      { id: 3, name: "مميز", name_en: "Featured", slug: "featured" },
      { id: 4, name: "سريع", name_en: "Fast", slug: "fast" },
    ];
  },
};

export default mockAPI;

