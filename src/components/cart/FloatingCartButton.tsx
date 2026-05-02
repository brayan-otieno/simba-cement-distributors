import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const FloatingCartButton = () => {
  const { itemCount, openCart } = useCart();

  return (
    <button
      onClick={() => openCart()}
      aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-95"
    >
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span
          key={itemCount}
          className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-bold text-accent-foreground shadow-md animate-scale-in"
        >
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  );
};

export default FloatingCartButton;
