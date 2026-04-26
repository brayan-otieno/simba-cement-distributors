import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart, parsePrice } from "@/context/CartContext";

type PriceItem = { label: string; price: string };

type Props = {
  name: string;
  img: string;
  prices?: PriceItem[];
};

const AddToCartControl = ({ name, img, prices }: Props) => {
  const { addItem } = useCart();
  const hasVariants = !!prices && prices.length > 0;
  const [variantIdx, setVariantIdx] = useState(0);

  const handleAdd = () => {
    if (hasVariants) {
      const v = prices![variantIdx];
      addItem({
        id: `${name}::${v.label}`,
        name,
        variant: v.label,
        unitPrice: parsePrice(v.price),
        priceLabel: v.price,
        img,
      });
    } else {
      addItem({
        id: name,
        name,
        unitPrice: 0,
        priceLabel: "Request Quote",
        img,
      });
    }
  };

  return (
    <div className="mt-auto flex flex-col gap-2">
      {hasVariants && prices!.length > 1 && (
        <select
          value={variantIdx}
          onChange={(e) => setVariantIdx(Number(e.target.value))}
          className="w-full rounded-md border border-input bg-background px-2 py-1.5 text-xs text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label={`Choose option for ${name}`}
        >
          {prices!.map((p, i) => (
            <option key={p.label} value={i}>
              {p.label} — {p.price}
            </option>
          ))}
        </select>
      )}
      <Button
        onClick={handleAdd}
        size="sm"
        className="w-full gap-2 transition-transform active:scale-95"
      >
        <ShoppingCart className="h-4 w-4" />
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartControl;
