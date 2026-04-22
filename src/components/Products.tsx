import productBag from "@/assets/product-cement-bag.jpg";
import productTrust from "@/assets/product-cement-trust.jpg";
import product325r from "@/assets/product-cement-325r.jpg";
import productFactory from "@/assets/product-factory.jpg";
import tileBlueMarble from "@/assets/tile-blue-marble.jpg";
import tileWhiteMarble from "@/assets/tile-white-marble.jpg";
import tileFloral from "@/assets/tile-floral.jpg";
import tileGoldMarble from "@/assets/tile-gold-marble.jpg";
import tileGeometric from "@/assets/tile-geometric.jpg";
import tileFloral2 from "@/assets/tile-floral-2.jpg";
import blocksStack from "@/assets/product-blocks-stack.jpg";
import blocksYard from "@/assets/product-blocks-yard.jpg";
import roofTiles from "@/assets/product-roof-tiles.jpg";
import buildingBlocks from "@/assets/product-building-blocks.jpg";
import pavingCompound from "@/assets/product-paving-compound.jpg";
import decorativeTile from "@/assets/product-decorative-tile.jpg";
import pavingDriveway from "@/assets/product-paving-driveway.jpg";

const cementProducts = [
  { name: "Simba Cement 32.5R", desc: "Portland Pozzolana Cement ideal for plastering, block work, and finishing applications. 50kg bags.", tag: "Best Seller", img: productBag },
  { name: "Simba Cement & Simba Power", desc: "Cementing customer trust with our full range of quality cement products for every project.", tag: "Popular", img: productTrust },
  { name: "PPC 32.5R", desc: "High-quality Portland Pozzolana Cement conforming to KS EAS 18-1 standards. 50kg bags.", tag: "Premium", img: product325r },
  { name: "Bulk Cement", desc: "Factory-direct loose cement supply for large-scale commercial and industrial construction projects.", tag: "Industrial", img: productFactory },
];

const blockProducts = [
  { name: "Concrete Blocks (6-inch)", desc: "Heavy-duty hollow concrete blocks for load-bearing walls and structural applications. Bundled and ready for delivery.", tag: "Best Seller", img: blocksStack },
  { name: "Concrete Blocks (Bulk)", desc: "Large stock of quality concrete blocks for commercial and residential construction projects.", tag: "Bulk", img: blocksYard },
  { name: "Building Blocks (Solid)", desc: "Solid concrete building blocks ideal for foundations, retaining walls, and heavy construction.", tag: "Heavy Duty", img: buildingBlocks },
  { name: "Roofing Tiles & Accessories", desc: "Durable roofing tiles in multiple colors and styles. Complete roofing solutions available.", tag: "Roofing", img: roofTiles },
];

const pavingProducts = [
  { name: "Interlocking Pavers - Compound", desc: "Professional interlocking paver installation for compounds, parking areas, and driveways.", tag: "Popular", img: pavingCompound },
  { name: "Interlocking Pavers - Driveway", desc: "Elegant paving solutions for driveways and walkways with durable interlocking blocks.", tag: "Premium", img: pavingDriveway },
];

const tileProducts = [
  { name: "Blue Marble Tile", desc: "Elegant blue marble ceramic tile with gold veining. Premium Sheltech Ceramics finish.", tag: "Premium", img: tileBlueMarble },
  { name: "White Marble Tile", desc: "Classic white marble porcelain tile with subtle grey and gold accents.", tag: "Popular", img: tileWhiteMarble },
  { name: "Floral Designer Tile", desc: "Beautiful floral pattern wall tile with golden accents. Perfect for feature walls.", tag: "Designer", img: tileFloral },
  { name: "Gold Accent Tile", desc: "Stunning white tile with gold and black marble accents. Modern luxury finish.", tag: "Luxury", img: tileGoldMarble },
  { name: "Geometric Floor Tile", desc: "Classic geometric pattern floor tile. Durable and elegant for living spaces.", tag: "Classic", img: tileGeometric },
  { name: "Botanical Tile", desc: "Delicate botanical floral pattern wall tile. Ideal for bathrooms and kitchens.", tag: "New", img: tileFloral2 },
  { name: "Decorative Medallion Tile", desc: "Ornate baroque-style decorative floor tile with gold and marble detailing. Statement centrepiece.", tag: "Luxury", img: decorativeTile },
];

type Product = { name: string; desc: string; tag: string; img: string };

const ProductCard = ({ p }: { p: Product }) => (
  <div className="group overflow-hidden rounded-lg border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
    <div className="h-56 overflow-hidden bg-concrete">
      <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
    </div>
    <div className="p-6">
      <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{p.tag}</span>
      <h3 className="mb-2 font-heading text-xl font-bold uppercase text-accent">{p.name}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
      <a href={`https://wa.me/254731030404?text=${encodeURIComponent(`I would like to order ${p.name}`)}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary transition-colors hover:text-primary/80">
        Order Now →
      </a>
    </div>
  </div>
);

const SectionHeader = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <div className="mb-12 text-center">
    <p className="mb-2 font-heading text-sm uppercase tracking-[0.2em] text-primary">{subtitle}</p>
    <h2 className="font-heading text-3xl font-bold uppercase text-accent md:text-4xl">{title}</h2>
  </div>
);

const Products = () => (
  <section id="products" className="bg-background py-20">
    <div className="container">
      {/* Cement Products */}
      <SectionHeader subtitle="Our Range" title="Cement Products" />
      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cementProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>

      {/* Blocks & Building Materials */}
      <SectionHeader subtitle="Structural Materials" title="Blocks & Building Materials" />
      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {blockProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>

      {/* Paving */}
      <SectionHeader subtitle="Outdoor Solutions" title="Interlocking Pavers" />
      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto">
        {pavingProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>

      {/* Tiles */}
      <SectionHeader subtitle="Building Finishes" title="Tiles & Ceramics" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tileProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>
    </div>
  </section>
);

export default Products;
