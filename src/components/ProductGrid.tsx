import { products, giftSet, formatPrice } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Gift } from "lucide-react";

const ProductGrid = () => {
  const { addToCart } = useCart();

  return (
    <section id="collection" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-xs uppercase tracking-[0.4em] text-gold mb-4 block">
            Our Fragrances
          </span>
          <h2 className="font-heading text-3xl md:text-5xl mb-4">
            The Collection
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Each scent is a masterpiece, crafted with the finest ingredients 
            to evoke emotion and create lasting memories.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Gift Set Feature */}
        <div className="relative bg-cream rounded-sm overflow-hidden animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gift Set Images */}
            <div className="relative aspect-square md:aspect-auto overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                <div className="grid grid-cols-3 gap-3 max-w-md">
                  {products.slice(0, 3).map((product) => (
                    <img
                      key={product.id}
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[3/4] object-cover shadow-lg"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Gift Set Info */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="h-5 w-5 text-gold" />
                <span className="text-xs uppercase tracking-[0.3em] text-gold">
                  Limited Edition
                </span>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl mb-4">
                {giftSet.name}
              </h3>
              <p className="text-muted-foreground mb-6">
                {giftSet.description}
              </p>
              <div className="flex items-center gap-6 mb-8">
                <span className="text-3xl font-heading text-gold">
                  {formatPrice(giftSet.price)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(products.reduce((sum, p) => sum + p.price, 0))}
                </span>
                <span className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1">
                  SAVE {formatPrice(products.reduce((sum, p) => sum + p.price, 0) - giftSet.price)}
                </span>
              </div>
              <Button
                variant="gold"
                size="xl"
                className="self-start"
                onClick={() => addToCart(giftSet)}
              >
                Add Gift Set to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
