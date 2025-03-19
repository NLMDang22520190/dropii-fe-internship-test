const productTitles = [
  "Ultra-Thin Minimalist Laptop Stand with Adjustable Height",
  "Premium 3-Layer Food Storage Container Set with Bamboo Lids",
  "Eco-Friendly Bamboo Bathroom Organizer with Multiple Compartments",
  "Wireless Smart Home Hub with Voice Control and App Connectivity",
  "Ergonomic Desktop Humidifier with Aromatherapy Function",
  "Multi-functional Kitchen Gadget Set with Premium Storage Case",
  "Organic Cotton Reusable Produce Bags Set of 6 Different Sizes",
  "Smart LED Desk Lamp with Wireless Charging Base",
  "Compact Personal Air Purifier with HEPA Filter Technology",
  "Stainless Steel Vacuum Insulated Water Bottle with Temperature Display",
  "Foldable Silicone Food Storage Containers with Locking Lids",
  "Handcrafted Ceramic Tableware Set with Natural Glaze Finish",
  "Premium Leather Desk Organizer with Multiple Compartments",
  "Digital Kitchen Scale with Nutritional Calculator Function",
  "Eco-Friendly Bamboo Fiber Dinnerware Set for 4 People",
  "Smart Plant Monitor with Soil Moisture and Light Detection",
  "Non-Stick Silicone Baking Mat Set with Measurement Guides",
  "Multifunctional Travel Adapter with USB-C and Wireless Charging",
  "Compact Collapsible Water Bottle with Filter System",
  "Premium Glass Food Storage Container Set with Bamboo Lids",
  "Adjustable Laptop Stand with Cooling Fan and USB Ports",
  "Natural Cotton Throw Blanket with Hand-Woven Pattern",
  "Wireless Earbuds with Noise Cancellation and Charging Case",
  "Compact Espresso Maker with Adjustable Pressure Control",
];

// Function to generate random products
const generateMockProducts = (count) => {
  const products = [];

  for (let i = 1; i <= count; i++) {
    const price = Math.floor(Math.random() * 1900000) + 100000;
    const hasDiscount = Math.random() < 0.6;
    const discount = hasDiscount
      ? Math.floor(Math.random() * 70) + 10
      : undefined;
    const originalPrice = hasDiscount
      ? Math.floor(price / (1 - discount / 100))
      : undefined;
    const freeShipping = Math.random() < 0.4;
    const hasGift = Math.random() < 0.3;
    const hasFlashSale = Math.random() < 0.25;
    const hasSoldCount = Math.random() < 0.8;
    const totalSold = hasSoldCount
      ? Math.floor(Math.random() * 49990) + 10
      : undefined;
    const titleIndex = Math.floor(Math.random() * productTitles.length);

    products.push({
      id: i,
      title: productTitles[titleIndex],
      image: `https://picsum.photos/300/300?random=${i}`,
      price: price,
      originalPrice: originalPrice,
      discount: discount,
      freeShipping: freeShipping,
      hasGift: hasGift,
      flashSale: hasFlashSale
        ? {
            active: true,
            endsAt: `${Math.floor(Math.random() * 23) + 1}:${
              Math.floor(Math.random() * 59) + 1
            }・${Math.floor(Math.random() * 30) + 1}/12`,
          }
        : undefined,
      totalSold: totalSold,
    });
  }

  return products;
};

// Generate an initial set of 40 products
const mockProducts = generateMockProducts(40);

export { generateMockProducts, mockProducts };
