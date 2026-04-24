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
import tileMagnolia from "@/assets/tile-magnolia.jpg";
import tileGoldMarble2 from "@/assets/tile-gold-marble-2.jpg";
import tileMedallionInstalled from "@/assets/tile-medallion-installed.jpg";
import blocksStack from "@/assets/product-blocks-stack.jpg";
import blocksYard from "@/assets/product-blocks-yard.jpg";
import roofTiles from "@/assets/product-roof-tiles.jpg";
import buildingBlocks from "@/assets/product-building-blocks.jpg";
import pavingCompound from "@/assets/product-paving-compound.jpg";
import decorativeTile from "@/assets/product-decorative-tile.jpg";
import pavingDriveway from "@/assets/product-paving-driveway.jpg";
import productDpcRolls from "@/assets/product-dpc-rolls.jpg";
import productIronSheets from "@/assets/product-iron-sheets.jpg";
import productBarbedWire from "@/assets/product-barbed-wire.jpg";
import productBrcMesh from "@/assets/product-brc-mesh.jpg";
import productPolythenePaper from "@/assets/product-polythene-paper.jpg";
import productWaterDrumsBlue from "@/assets/product-water-drums-blue.jpg";
import productWaterTanksIbc from "@/assets/product-water-tanks-ibc.jpg";
import productWaterDrumsWarehouse from "@/assets/product-water-drums-warehouse.jpg";
import productWaterDrumsJerrycans from "@/assets/product-water-drums-jerrycans.jpg";
import productIbcTote from "@/assets/product-ibc-tote.jpg";
import productSimbaTanks from "@/assets/product-simba-tanks.jpg";
import productWaterTanksYard from "@/assets/product-water-tanks-yard.jpg";
import productSepticTanks from "@/assets/product-septic-tanks.jpg";
import productRoofRidges from "@/assets/product-roof-ridges.jpg";
import productStoneCoatedTiles from "@/assets/product-stone-coated-tiles.jpg";
import productBlueRoofTiles from "@/assets/product-blue-roof-tiles.jpg";
import productBrownRoofTiles from "@/assets/product-brown-roof-tiles.jpg";
import productGreenRoofTiles from "@/assets/product-green-roof-tiles.jpg";
import productCharcoalRoofTiles from "@/assets/product-charcoal-roof-tiles.jpg";
import productGalvanizedSheets from "@/assets/product-galvanized-sheets.jpg";
import productMachineStonesTipping from "@/assets/product-machine-stones-tipping.jpg";
import productMachineStonesField from "@/assets/product-machine-stones-field.jpg";
import productMachineStonesPallet from "@/assets/product-machine-stones-pallet.jpg";
import productMachineStonesUnloading from "@/assets/product-machine-stones-unloading.jpg";
import productDeliveryTrucks from "@/assets/product-delivery-trucks.jpg";

type PriceItem = { label: string; price: string };
type Product = { name: string; desc: string; tag: string; img: string; prices?: PriceItem[] };

const cementProducts: Product[] = [
  { name: "Cement 32.5R (50kg)", desc: "Portland Pozzolana Cement ideal for plastering, block work, and finishing. We stock all leading brands.", tag: "Best Seller", img: productBag },
  { name: "Cement & Power Range", desc: "Full range of quality cement products available — we distribute multiple trusted brands.", tag: "Popular", img: productTrust },
  { name: "PPC 32.5R (50kg)", desc: "High-quality Portland Pozzolana Cement conforming to KS EAS 18-1 standards. Always in stock.", tag: "Premium", img: product325r },
  { name: "Bulk Cement Supply", desc: "Large-quantity cement supply for commercial and industrial projects. Competitive distributor pricing.", tag: "Industrial", img: productFactory },
];

const blockProducts: Product[] = [
  { name: "Concrete Blocks (6-inch)", desc: "Heavy-duty hollow concrete blocks for load-bearing walls. Bundled and ready for delivery.", tag: "Best Seller", img: blocksStack },
  { name: "Concrete Blocks (Bulk)", desc: "Large stock of quality concrete blocks for commercial and residential projects.", tag: "Bulk", img: blocksYard },
  { name: "Building Blocks (Solid)", desc: "Solid concrete blocks ideal for foundations, retaining walls, and heavy construction.", tag: "Heavy Duty", img: buildingBlocks },
  { name: "Roofing Tiles & Accessories", desc: "Durable roofing tiles in multiple colours and styles. We supply complete roofing solutions.", tag: "Roofing", img: roofTiles },
];

const pavingProducts: Product[] = [
  { name: "Interlocking Pavers - Compound", desc: "Professional interlocking pavers for compounds, parking areas, and driveways.", tag: "Popular", img: pavingCompound },
  { name: "Interlocking Pavers - Driveway", desc: "Elegant paving solutions for driveways and walkways with durable interlocking blocks.", tag: "Premium", img: pavingDriveway },
];

const steelAndFencingProducts: Product[] = [
  {
    name: "BRC Wire Mesh",
    desc: "Strong reinforcement wire mesh for slabs, foundations, and concrete works. Multiple gauges available.",
    tag: "Reinforcement",
    img: productBrcMesh,
    prices: [
      { label: "A66 (3mm)", price: "Ksh 3,500 – 10,000" },
      { label: "A65 (4mm) Standard", price: "Ksh 13,000" },
      { label: "A610 (2.5mm)", price: "Ksh 2,800 – 7,500" },
      { label: "A98 (5mm)", price: "Ksh 13,500 – 20,500" },
      { label: "A142 (6mm)", price: "Ksh 19,500 – 33,000" },
    ],
  },
  {
    name: "Chainlink Fencing (18m)",
    desc: "Durable chainlink fencing for residential, commercial, and farm perimeter security. Bulk orders available.",
    tag: "Fencing",
    img: productBarbedWire,
    prices: [
      { label: "4ft × 18mts", price: "Ksh 2,000" },
      { label: "5ft × 18mts", price: "Ksh 2,500" },
      { label: "6ft × 18mts", price: "Ksh 3,000" },
      { label: "7ft × 18mts", price: "Ksh 3,500" },
    ],
  },
  {
    name: "Barbed Wire (16 Gauge)",
    desc: "Heavy-duty galvanised barbed wire for secure perimeter fencing. Available in multiple roll lengths.",
    tag: "Security",
    img: productBarbedWire,
    prices: [
      { label: "240 mts", price: "Ksh 1,900" },
      { label: "480 mts", price: "Ksh 3,400" },
      { label: "610 mts", price: "Ksh 4,200" },
    ],
  },
  {
    name: "Round Bars",
    desc: "Smooth mild steel round bars for general construction, gates, grills, and metalwork.",
    tag: "Steel",
    img: productIronSheets,
    prices: [
      { label: "R16", price: "Ksh 1,800" },
      { label: "R12", price: "Ksh 950" },
      { label: "R10", price: "Ksh 600" },
      { label: "R8", price: "Ksh 300" },
      { label: "R6", price: "Ksh 140" },
    ],
  },
  {
    name: "Building Steel (12 metres)",
    desc: "High-tensile deformed steel reinforcement bars for slabs, columns, and beams.",
    tag: "Reinforcement",
    img: productIronSheets,
    prices: [
      { label: "D8", price: "Ksh 450" },
      { label: "D10", price: "Ksh 750" },
      { label: "D12", price: "Ksh 1,020" },
      { label: "D16", price: "Ksh 2,050" },
      { label: "D20", price: "Ksh 3,200" },
      { label: "D25", price: "Ksh 5,750" },
    ],
  },
  {
    name: "Iron Sheets (Gauge 30)",
    desc: "Premium corrugated iron sheets for roofing, sheds, and construction. Strong, durable, and rust-resistant.",
    tag: "Roofing",
    img: productGalvanizedSheets,
    prices: [
      { label: "Per metre", price: "Ksh 350" },
      { label: "Over 2 metres", price: "Ksh 700" },
      { label: "Over 2.5 metres", price: "Ksh 850" },
      { label: "Over 3 metres", price: "Ksh 1,050" },
    ],
  },
  {
    name: "Binding Wire",
    desc: "Soft annealed binding wire for tying reinforcement bars on construction sites.",
    tag: "Essential",
    img: productBarbedWire,
    prices: [{ label: "Per roll", price: "Ksh 2,500" }],
  },
];

const accessoriesProducts: Product[] = [
  {
    name: "Polythene Paper (1 Roll)",
    desc: "Heavy-duty 20kg polythene paper roll for damp proofing and construction protection.",
    tag: "Damp Proof",
    img: productPolythenePaper,
    prices: [{ label: "1 Roll (20kgs)", price: "Ksh 1,400" }],
  },
  {
    name: "DPC Roll (10m × 1m)",
    desc: "Damp Proof Course roll for preventing rising damp in walls and foundations.",
    tag: "Damp Proof",
    img: productDpcRolls,
    prices: [{ label: "1 Roll (10m × 1m)", price: "Ksh 2,100" }],
  },
  {
    name: "Spades",
    desc: "Strong, durable spades for digging, mixing, and general construction site work.",
    tag: "Tools",
    img: productIronSheets,
    prices: [
      { label: "Imported", price: "Ksh 750" },
      { label: "Local", price: "Ksh 580" },
    ],
  },
  {
    name: "Wheelbarrows",
    desc: "Heavy-duty wheelbarrows for transporting materials on construction sites. Multiple sizes available.",
    tag: "Tools",
    img: productIronSheets,
    prices: [
      { label: "Small", price: "Ksh 2,500" },
      { label: "Medium", price: "Ksh 4,200" },
      { label: "Large", price: "Ksh 5,000" },
    ],
  },
];

const waterStorageProducts: Product[] = [
  { name: "Simba Plastic Water Tanks", desc: "Premium Simba plastic water tanks in 1000L, 3000L, 5000L and 10,000L capacities. Durable, UV-resistant, and ideal for homes and projects.", tag: "Best Seller", img: productSimbaTanks },
  { name: "Bulk Water Tank Stock", desc: "Wide range of black and green water storage tanks available in multiple sizes. Direct distributor pricing on bulk orders.", tag: "Wholesale", img: productWaterTanksYard },
  { name: "Septic & Underground Tanks", desc: "Heavy-duty septic and underground storage tanks in green, orange, and black. Engineered for long-lasting underground installation.", tag: "Septic", img: productSepticTanks },
  { name: "IBC Tote Tank (1000L)", desc: "Caged IBC tote tank for water, chemicals, and bulk liquid storage. Robust steel cage with reliable outlet valve.", tag: "Industrial", img: productIbcTote },
  { name: "Plastic Storage Drums (Blue)", desc: "Heavy-duty blue plastic drums for water, chemicals, and bulk storage on construction sites.", tag: "Storage", img: productWaterDrumsBlue },
  { name: "Mixed IBC & Drums", desc: "Assorted IBC tanks and coloured drums for large-volume site water and liquid storage.", tag: "Bulk", img: productWaterTanksIbc },
  { name: "Industrial Storage Drums", desc: "Wide stock of industrial-grade plastic drums supplied in bulk for contractors and projects.", tag: "Wholesale", img: productWaterDrumsWarehouse },
  { name: "Drums & Jerrycans", desc: "Plastic drums and jerrycans in multiple sizes — ideal for water storage, transport, and site use.", tag: "Versatile", img: productWaterDrumsJerrycans },
];

const roofingProducts: Product[] = [
  { name: "Stone-Coated Roof Tiles", desc: "Premium stone-coated metal roofing tiles. Stylish, durable, and weather-resistant — perfect for modern homes.", tag: "Premium", img: productStoneCoatedTiles },
  { name: "Charcoal Roof Tiles", desc: "Elegant charcoal-finish profiled roofing sheets. Long-lasting and modern aesthetic.", tag: "Modern", img: productCharcoalRoofTiles },
  { name: "Brown Tile-Profile Sheets", desc: "Tile-profile metal roofing sheets in rich brown finish. Durable and easy to install.", tag: "Popular", img: productBrownRoofTiles },
  { name: "Green Tile-Profile Sheets", desc: "Tile-profile roofing sheets in green finish. Strong, lightweight, and corrosion-resistant.", tag: "Colour", img: productGreenRoofTiles },
  { name: "Blue Tile-Profile Sheets", desc: "Vibrant blue tile-profile metal roofing sheets. Standard and custom lengths available.", tag: "Colour", img: productBlueRoofTiles },
  { name: "Roof Ridges & Accessories", desc: "Matching roof ridges in multiple colours to complete your roofing installation.", tag: "Accessories", img: productRoofRidges },
];

const tileProducts: Product[] = [
  { name: "Blue Marble Tile", desc: "Elegant blue marble ceramic tile with gold veining. Premium finish.", tag: "Premium", img: tileBlueMarble },
  { name: "White Marble Tile", desc: "Classic white marble porcelain tile with subtle grey and gold accents.", tag: "Popular", img: tileWhiteMarble },
  { name: "Floral Designer Tile", desc: "Beautiful floral pattern wall tile with golden accents. Perfect for feature walls.", tag: "Designer", img: tileFloral },
  { name: "Gold Accent Tile", desc: "Stunning white tile with gold and black marble accents. Modern luxury finish.", tag: "Luxury", img: tileGoldMarble },
  { name: "Geometric Floor Tile", desc: "Classic geometric pattern floor tile. Durable and elegant for living spaces.", tag: "Classic", img: tileGeometric },
  { name: "Decorative Medallion Tile", desc: "Ornate baroque-style decorative floor tile with gold and marble detailing.", tag: "Luxury", img: decorativeTile },
  { name: "Magnolia Floral Tile", desc: "Stunning 3D-effect magnolia floral wall tile with gold accents. Perfect statement piece.", tag: "Designer", img: tileMagnolia },
  { name: "Installed Medallion Showcase", desc: "Luxury baroque medallion floor tile installation — true craftsmanship for elegant interiors.", tag: "Showcase", img: tileMedallionInstalled },
];

const ProductCard = ({ p }: { p: Product }) => (
  <div className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
    <div className="h-56 overflow-hidden bg-concrete">
      <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
    </div>
    <div className="flex flex-1 flex-col p-6">
      <span className="mb-2 inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{p.tag}</span>
      <h3 className="mb-2 font-heading text-xl font-bold uppercase text-accent">{p.name}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
      {p.prices && (
        <ul className="mb-4 space-y-1.5 rounded-md bg-muted/50 p-3 text-sm">
          {p.prices.map((pr) => (
            <li key={pr.label} className="flex items-center justify-between gap-2">
              <span className="text-muted-foreground">{pr.label}</span>
              <span className="font-semibold text-accent">{pr.price}</span>
            </li>
          ))}
        </ul>
      )}
      <a
        href={`https://wa.me/254731030404?text=${encodeURIComponent(`I would like to order ${p.name}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-sm font-semibold text-primary transition-colors hover:text-primary/80"
      >
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
      <SectionHeader subtitle="We Distribute" title="Cement Products" />
      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cementProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>

      <SectionHeader subtitle="Structural Materials" title="Blocks & Building Materials" />
      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {blockProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>

      <SectionHeader subtitle="Roofing Solutions" title="Roofing Tiles & Sheets" />
      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {roofingProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>

      <SectionHeader subtitle="Steel & Fencing" title="Steel, Mesh & Fencing" />
      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {steelAndFencingProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>

      <SectionHeader subtitle="Site Essentials" title="Tools & Accessories" />
      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {accessoriesProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>

      <SectionHeader subtitle="Outdoor Solutions" title="Interlocking Pavers" />
      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto">
        {pavingProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>

      <SectionHeader subtitle="Site Storage" title="Water Tanks & Storage Drums" />
      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {waterStorageProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>

      <SectionHeader subtitle="Building Finishes" title="Tiles & Ceramics" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tileProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>
    </div>
  </section>
);

export default Products;
