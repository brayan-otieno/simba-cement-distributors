import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart, formatKsh } from "@/context/CartContext";
import { toast } from "sonner";

const CartPanel = () => {
  const { items, isOpen, closeCart, removeItem, updateQty, clearCart, subtotal, tax, total, itemCount } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const WHATSAPP_NUMBER = "254731030404";

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  const handleCheckout = () => {
    if (items.length === 0) return;
    setCheckingOut(true);

    const lines: string[] = [];
    lines.push("*New Order — Simba Cement Hardware*");
    lines.push("");
    items.forEach((item, idx) => {
      const variant = item.variant ? ` (${item.variant})` : "";
      const priceText =
        item.unitPrice > 0
          ? `${formatKsh(item.unitPrice)} × ${item.quantity} = ${formatKsh(item.unitPrice * item.quantity)}`
          : `${item.quantity} × Request Quote`;
      lines.push(`${idx + 1}. ${item.name}${variant}`);
      lines.push(`   ${priceText}`);
    });
    lines.push("");
    lines.push(`Subtotal: ${formatKsh(subtotal)}`);
    lines.push(`VAT (16%): ${formatKsh(tax)}`);
    lines.push(`*Total: ${formatKsh(total)}*`);
    if (items.some((i) => i.unitPrice === 0)) {
      lines.push("");
      lines.push("_Note: Some items are quote-only and not included in the total._");
    }
    lines.push("");
    lines.push("Please confirm availability, delivery and final pricing. Thank you!");

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");

    toast.success("Opening WhatsApp", {
      description: `Sending your order of ${itemCount} item${itemCount === 1 ? "" : "s"} to our team.`,
    });
    setCheckingOut(false);
    closeCart();
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b px-6 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="font-heading text-lg font-bold uppercase text-accent">
              Your Cart {itemCount > 0 && <span className="text-muted-foreground">({itemCount})</span>}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center animate-fade-in">
              <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-primary/10">
                <ShoppingBag className="h-16 w-16 text-primary/60" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold uppercase text-accent">Your cart is empty</h3>
              <p className="mb-6 max-w-xs text-sm text-muted-foreground">
                Browse our catalogue and add quality construction materials to get started.
              </p>
              <Button onClick={closeCart} variant="default">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 rounded-lg border bg-card p-3 shadow-sm animate-fade-in"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    className="h-20 w-20 flex-shrink-0 rounded-md object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h4 className="truncate text-sm font-semibold text-accent">{item.name}</h4>
                        {item.variant && (
                          <p className="text-xs text-muted-foreground">{item.variant}</p>
                        )}
                        <p className="mt-1 text-sm font-semibold text-primary">
                          {item.unitPrice > 0 ? formatKsh(item.unitPrice) : "Request Quote"}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground transition-colors hover:text-destructive"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center rounded-md border">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center text-foreground transition-colors hover:bg-muted"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center text-foreground transition-colors hover:bg-muted"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      {item.unitPrice > 0 && (
                        <span className="text-sm font-bold text-accent">
                          {formatKsh(item.unitPrice * item.quantity)}
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <footer className="border-t bg-muted/30 px-6 py-4">
            <div className="mb-4 space-y-1.5 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="tabular-nums">{formatKsh(subtotal)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>VAT (16%)</span>
                <span className="tabular-nums">{formatKsh(tax)}</span>
              </div>
              <div className="flex justify-between border-t pt-1.5 text-base font-bold text-accent">
                <span>Total</span>
                <span className="tabular-nums">{formatKsh(total)}</span>
              </div>
              {items.some((i) => i.unitPrice === 0) && (
                <p className="pt-1 text-xs text-muted-foreground">
                  * Some items are quote-only and not included in the total.
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={clearCart}
                className="flex-1"
              >
                Clear
              </Button>
              <Button
                onClick={handleCheckout}
                disabled={checkingOut}
                className="flex-[2]"
              >
                {checkingOut ? "Processing…" : "Checkout"}
              </Button>
            </div>
          </footer>
        )}
      </aside>
    </>
  );
};

export default CartPanel;
