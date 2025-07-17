
interface Iproduct {
readonly id: number ;
    title: string;
    description?: string;
};

const product: Iproduct = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
