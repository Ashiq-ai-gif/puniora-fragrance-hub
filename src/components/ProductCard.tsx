import { Button } from "@/components/ui/button";
import { Product, formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <article
      className="group relative animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
        <img
          src={product.image}
          alt={`${product.name} - ${product.category} Eau de Parfum by Puniora`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick Add Button */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <Button
            variant="gold"
            className="w-full"
            onClick={() => addToCart(product)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>

        {/* Category Badge */}
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-background/90 backdrop-blur-sm px-3 py-1.5">
          {product.category}
        </span>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-xl">{product.name}</h3>
          <span className="text-gold font-semibold whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground">
          {product.notes.join(" • ")} | {product.size}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
