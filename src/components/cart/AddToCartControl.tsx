import { Minus, Plus, ShoppingCart, Zap } from "lucide-react";
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
  const { addItem, openCart } = useCart();
  const hasVariants = !!prices && prices.length > 0;
  const [variantIdx, setVariantIdx] = useState(0);
  const [qty, setQty] = useState(1);

  const buildItem = () => {
    if (hasVariants) {
      const v = prices![variantIdx];
      return {
        id: `${name}::${v.label}`,
        name,
        variant: v.label,
        unitPrice: parsePrice(v.price),
        priceLabel: v.price,
        img,
      };
    }
    return {
      id: name,
      name,
      unitPrice: 0,
      priceLabel: "Request Quote",
      img,
    };
  };

  const handleAdd = () => addItem(buildItem(), qty);

  const handleOrderNow = () => {
    const item = buildItem();
    addItem(item, qty);
    // Open cart with this item highlighted
    setTimeout(() => openCart(item.id), 50);
  };

  return (
    <div className="mt-auto flex flex-col gap-2.5">
      {hasVariants && prices!.length > 1 && (
        <select
          value={variantIdx}
          onChange={(e) => setVariantIdx(Number(e.target.value))}
          className="w-full rounded-md border border-input bg-background px-2 py-2 text-xs font-medium text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label={`Choose option for ${name}`}
        >
          {prices!.map((p, i) => (
            <option key={p.label} value={i}>
              {p.label} — {p.price}
            </option>
          ))}
        </select>
      )}

      {/* Quantity stepper */}
      <div className="flex items-center justify-between rounded-md border border-input bg-background px-1">
        <span className="px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Qty</span>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:bg-muted"
            aria-label="Decrease quantity"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="w-8 text-center text-sm font-bold tabular-nums">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:bg-muted"
            aria-label="Increase quantity"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button
          onClick={handleAdd}
          size="sm"
          variant="outline"
          className="gap-1.5 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
        >
          <ShoppingCart className="h-4 w-4" />
          Add
        </Button>
        <Button
          onClick={handleOrderNow}
          size="sm"
          className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all active:scale-95"
        >
          <Zap className="h-4 w-4" />
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default AddToCartControl;
