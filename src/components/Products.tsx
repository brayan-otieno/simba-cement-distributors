import productBag from "@/assets/product-cement-bag.webp";
import productTrust from "@/assets/product-cement-trust.webp";
import product325r from "@/assets/product-cement-325r.webp";
import productFactory from "@/assets/product-factory.webp";
import tileBlueMarble from "@/assets/tile-blue-marble.webp";
import tileWhiteMarble from "@/assets/tile-white-marble.webp";
import tileFloral from "@/assets/tile-floral.webp";
import tileGoldMarble from "@/assets/tile-gold-marble.webp";
import tileGeometric from "@/assets/tile-geometric.webp";
import tileMagnolia from "@/assets/tile-magnolia.webp";
import tileMedallionInstalled from "@/assets/tile-medallion-installed.webp";
import blocksStack from "@/assets/product-blocks-stack.webp";
import blocksYard from "@/assets/product-blocks-yard.webp";
import roofTiles from "@/assets/product-roof-tiles.webp";
import buildingBlocks from "@/assets/product-building-blocks.webp";
import pavingCompound from "@/assets/product-paving-compound.webp";
import decorativeTile from "@/assets/product-decorative-tile.webp";
import pavingDriveway from "@/assets/product-paving-driveway.webp";
import productDpcRolls from "@/assets/product-dpc-rolls.webp";
import productIronSheets from "@/assets/product-iron-sheets.webp";
import productBarbedWire from "@/assets/product-barbed-wire.webp";
import productBrcMesh from "@/assets/product-brc-mesh.webp";
import productPolythenePaper from "@/assets/product-polythene-paper.webp";
import productWaterDrumsBlue from "@/assets/product-water-drums-blue.webp";
import productWaterTanksIbc from "@/assets/product-water-tanks-ibc.webp";
import productWaterDrumsWarehouse from "@/assets/product-water-drums-warehouse.webp";
import productWaterDrumsJerrycans from "@/assets/product-water-drums-jerrycans.webp";
import productIbcTote from "@/assets/product-ibc-tote.webp";
import productSimbaTanks from "@/assets/product-simba-tanks.webp";
import productWaterTanksYard from "@/assets/product-water-tanks-yard.webp";
import productSepticTanks from "@/assets/product-septic-tanks.webp";
import productRoofRidges from "@/assets/product-roof-ridges.webp";
import productStoneCoatedTiles from "@/assets/product-stone-coated-tiles.webp";
import productBlueRoofTiles from "@/assets/product-blue-roof-tiles.webp";
import productBrownRoofTiles from "@/assets/product-brown-roof-tiles.webp";
import productGreenRoofTiles from "@/assets/product-green-roof-tiles.webp";
import productCharcoalRoofTiles from "@/assets/product-charcoal-roof-tiles.webp";
import productGalvanizedSheets from "@/assets/product-galvanized-sheets.webp";
import productMachineStonesTipping from "@/assets/product-machine-stones-tipping.webp";
import productMachineStonesField from "@/assets/product-machine-stones-field.webp";
import productMachineStonesPallet from "@/assets/product-machine-stones-pallet.webp";
import productMachineStonesUnloading from "@/assets/product-machine-stones-unloading.webp";
import productDeliveryTrucks from "@/assets/product-delivery-trucks.webp";
import productMachineStonesCrate from "@/assets/product-machine-stones-crate.webp";
import productMachineStonesStack from "@/assets/product-machine-stones-stack.webp";
import productMachineStonesLaid from "@/assets/product-machine-stones-laid.webp";
import productBoxProfileSheets from "@/assets/product-box-profile-sheets.webp";
import productSteelRoundBars from "@/assets/product-steel-round-bars.webp";
import productDeformedRebar from "@/assets/product-deformed-rebar.webp";
import productBlueBoxSheets from "@/assets/product-blue-box-sheets.webp";
import productRedBoxSheets from "@/assets/product-red-box-sheets.webp";
import productRoofSheetsRidgesMix from "@/assets/product-roof-sheets-ridges-mix.webp";
import productTexturedRedSheets from "@/assets/product-textured-red-sheets.webp";
import productMatteBrownSheets from "@/assets/product-matte-brown-sheets.webp";
import productNailsMixed from "@/assets/product-nails-mixed.webp";
import productRoofingNailsBlue from "@/assets/product-roofing-nails-blue.webp";
import productUmbrellaNailsHand from "@/assets/product-umbrella-nails-hand.webp";
import productChainlinkTruck from "@/assets/product-chainlink-truck.webp";
import productChainlinkRolls from "@/assets/product-chainlink-rolls.webp";
import productChainlinkMamba from "@/assets/product-chainlink-mamba.webp";
import productBallastQuarry from "@/assets/product-ballast-quarry.webp";
import productBallastOnsite from "@/assets/product-ballast-onsite.webp";
import productGreenSteelCoil from "@/assets/product-green-steel-coil.webp";
import productWasherCapsMixed from "@/assets/product-washer-caps-mixed.webp";
import productWasherCapsMaroon from "@/assets/product-washer-caps-maroon.webp";
import productRedRoofingNailsBulk from "@/assets/product-red-roofing-nails-bulk.webp";
import productRoofingNailsPacks from "@/assets/product-roofing-nails-packs.webp";
import productBlackRoofingNails from "@/assets/product-black-roofing-nails.webp";
import productGreenRoofingNails from "@/assets/product-green-roofing-nails.webp";
import productKenruRebar from "@/assets/product-kenru-rebar.webp";
import productColorSheetsDisplay from "@/assets/product-color-sheets-display.webp";
import productColorSheetsCollage from "@/assets/product-color-sheets-collage.webp";
import productGreenWavySheets from "@/assets/product-green-wavy-sheets.webp";
import productLilacWavySheets from "@/assets/product-lilac-wavy-sheets.webp";
import productDeepGreenBoxSheets from "@/assets/product-deep-green-box-sheets.webp";
import productYellowOrangeSheets from "@/assets/product-yellow-orange-sheets.webp";
import productCorrugatedRedStack from "@/assets/product-corrugated-red-stack.webp";
import productWheelbarrow from "@/assets/product-wheelbarrow.webp";
import productSpades from "@/assets/product-spades.webp";
import productIronSheetsGauge30 from "@/assets/product-iron-sheets-gauge30.webp";

type PriceItem = { label: string; price: string };
type Product = { name: string; desc: string; tag: string; img: string; prices?: PriceItem[] };

const cementProducts: Product[] = [
  {
    name: "Cement 32.5R (50kg)",
    desc: "Portland Pozzolana Cement ideal for plastering, block work, and finishing. We stock all leading brands.",
    tag: "Best Seller",
    img: productBag,
    prices: [
      { label: "Per bag", price: "Ksh 650" },
      { label: "35+ bags", price: "Ksh 580" },
    ],
  },
  { name: "Cement & Power Range", desc: "Full range of quality cement products available — we distribute multiple trusted brands.", tag: "Popular", img: productTrust },
  {
    name: "PPC 32.5R (50kg)",
    desc: "High-quality Portland Pozzolana Cement conforming to KS EAS 18-1 standards. Always in stock.",
    tag: "Premium",
    img: product325r,
    prices: [
      { label: "Per bag", price: "Ksh 650" },
      { label: "35+ bags", price: "Ksh 580" },
    ],
  },
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
    desc: "Durable Mamba-brand chainlink fencing for residential, commercial, and farm perimeter security. Bulk orders available.",
    tag: "Fencing",
    img: productChainlinkMamba,
    prices: [
      { label: "4ft × 18mts", price: "Ksh 2,000" },
      { label: "5ft × 18mts", price: "Ksh 2,500" },
      { label: "6ft × 18mts", price: "Ksh 3,000" },
      { label: "7ft × 18mts", price: "Ksh 3,500" },
    ],
  },
  {
    name: "Chainlink Rolls (Yard Stock)",
    desc: "Galvanised chainlink rolls in stock at our yard. Multiple gauges and heights — ready for immediate dispatch.",
    tag: "In Stock",
    img: productChainlinkRolls,
  },
  {
    name: "Chainlink Bulk Delivery",
    desc: "Truckloads of chainlink fencing dispatched countrywide. Reliable bulk supply for fencing contractors and projects.",
    tag: "Bulk Delivery",
    img: productChainlinkTruck,
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
    img: productSteelRoundBars,
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
    img: productKenruRebar,
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
    name: "Corrugated Ordinary Mabati (Gauge 30)",
    desc: "Standard corrugated ordinary iron roofing sheets, gauge 30. Strong, lightweight, and rust-resistant.",
    tag: "Roofing",
    img: productIronSheetsGauge30,
    prices: [
      { label: "Per metre", price: "Ksh 350" },
      { label: "2m sheet", price: "Ksh 700" },
      { label: "2.5m sheet", price: "Ksh 875" },
      { label: "3m sheet", price: "Ksh 1,050" },
    ],
  },
  {
    name: "Corrugated Ordinary Mabati (Gauge 28)",
    desc: "Heavier-duty corrugated ordinary mabati, gauge 28. Stronger gauge for long-lasting roofing.",
    tag: "Heavy Duty",
    img: productCorrugatedRedStack,
    prices: [
      { label: "Per metre", price: "Ksh 400" },
      { label: "2m sheet", price: "Ksh 800" },
      { label: "2.5m sheet", price: "Ksh 1,000" },
      { label: "3m sheet", price: "Ksh 1,200" },
    ],
  },
  {
    name: "Versatile Tile-Profile Mabati (Gauge 30)",
    desc: "Premium versatile tile-profile roofing sheets, gauge 30. Stylish, durable, and modern.",
    tag: "Premium",
    img: productTexturedRedSheets,
    prices: [
      { label: "Per metre", price: "Ksh 600" },
      { label: "2m sheet", price: "Ksh 1,200" },
      { label: "2.5m sheet", price: "Ksh 1,500" },
      { label: "3m sheet", price: "Ksh 1,800" },
    ],
  },
  {
    name: "Versatile Tile-Profile Mabati (Gauge 28)",
    desc: "Heavier versatile tile-profile mabati, gauge 28. Superior strength with elegant tile finish.",
    tag: "Premium",
    img: productMatteBrownSheets,
    prices: [
      { label: "Per metre", price: "Ksh 700" },
      { label: "2m sheet", price: "Ksh 1,400" },
      { label: "2.5m sheet", price: "Ksh 1,750" },
      { label: "3m sheet", price: "Ksh 2,100" },
    ],
  },
  {
    name: "Box-Profile Covermax Mabati (Gauge 30)",
    desc: "Modern box-profile Covermax roofing sheets, gauge 30. Bold ribs and reliable weather sealing.",
    tag: "Box Profile",
    img: productBoxProfileSheets,
    prices: [
      { label: "Per metre", price: "Ksh 400" },
      { label: "2m sheet", price: "Ksh 800" },
      { label: "2.5m sheet", price: "Ksh 1,000" },
      { label: "3m sheet", price: "Ksh 1,200" },
    ],
  },
  {
    name: "Box-Profile Covermax Mabati (Gauge 28)",
    desc: "Heavy-duty box-profile Covermax mabati, gauge 28. Premium thickness for commercial and residential roofs.",
    tag: "Heavy Duty",
    img: productBlueBoxSheets,
    prices: [
      { label: "Per metre", price: "Ksh 500" },
      { label: "2m sheet", price: "Ksh 1,000" },
      { label: "2.5m sheet", price: "Ksh 1,250" },
      { label: "3m sheet", price: "Ksh 1,500" },
    ],
  },
  {
    name: "Box Profile Reject Mabati (Gauge 30)",
    desc: "Affordable reject box-profile mabati, gauge 30. Great for sheds, stores, and budget projects.",
    tag: "Budget",
    img: productRedBoxSheets,
    prices: [
      { label: "2m sheet", price: "Ksh 400" },
      { label: "2.5m sheet", price: "Ksh 500" },
      { label: "3m sheet", price: "Ksh 600" },
    ],
  },
  {
    name: "Ordinary Dumuzas Reject (Gauge 30)",
    desc: "Reject ordinary dumuzas mabati, gauge 30. Pocket-friendly roofing for outhouses and temporary structures.",
    tag: "Budget",
    img: productIronSheets,
    prices: [
      { label: "2m sheet", price: "Ksh 300" },
      { label: "2.5m sheet", price: "Ksh 375" },
      { label: "3m sheet", price: "Ksh 450" },
    ],
  },
  {
    name: "Corrugated Dumuzas Reject (Gauge 30)",
    desc: "Reject corrugated dumuzas mabati, gauge 30. Affordable corrugated roofing in standard lengths.",
    tag: "Budget",
    img: productCorrugatedRedStack,
    prices: [
      { label: "1m sheet", price: "Ksh 180" },
      { label: "2m sheet", price: "Ksh 360" },
      { label: "2.5m sheet", price: "Ksh 450" },
      { label: "3m sheet", price: "Ksh 540" },
    ],
  },
  {
    name: "Dumuzas Ordinary Mabati (Gauge 30)",
    desc: "Standard ordinary dumuzas mabati, gauge 30. Just Ksh 300 per metre. Free delivery countrywide on orders over 20 sheets.",
    tag: "Free Delivery 20+",
    img: productIronSheetsGauge30,
    prices: [
      { label: "Per metre", price: "Ksh 300" },
      { label: "2m sheet", price: "Ksh 600" },
      { label: "2.5m sheet", price: "Ksh 750" },
      { label: "3m sheet", price: "Ksh 900" },
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
    img: productSpades,
    prices: [
      { label: "Imported", price: "Ksh 750" },
      { label: "Local", price: "Ksh 580" },
    ],
  },
  {
    name: "Wheelbarrows",
    desc: "Heavy-duty wheelbarrows for transporting materials on construction sites. Multiple sizes available.",
    tag: "Tools",
    img: productWheelbarrow,
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
  { name: "Box-Profile Roofing Sheets", desc: "Heavy-duty galvanised box-profile metal roofing sheets. Strong, modern, and ideal for residential and commercial projects.", tag: "Industrial", img: productBoxProfileSheets },
  { name: "Blue Box-Profile Sheets", desc: "Glossy blue box-profile metal roofing sheets. Vibrant, weather-resistant, and ideal for modern homes and commercial buildings.", tag: "Colour", img: productBlueBoxSheets },
  { name: "Red Box-Profile Sheets", desc: "Bold red box-profile roofing sheets straight from the factory. Pre-painted, long-lasting, and ready for installation.", tag: "Factory Direct", img: productRedBoxSheets },
  { name: "Textured Red Roofing Sheets", desc: "Premium textured tile-profile sheets in a rich red finish. Stone-grain texture for an elegant, durable roof.", tag: "Textured", img: productTexturedRedSheets },
  { name: "Matte Brown Roofing Sheets", desc: "Sleek matte brown box-profile sheets with a granular finish. Modern aesthetic with superior weather resistance.", tag: "Matte Finish", img: productMatteBrownSheets },
  { name: "Roof Sheets & Curved Ridges", desc: "Complete roofing showcase — coloured tile-profile sheets paired with matching curved ridge caps for a finished look.", tag: "Showcase", img: productRoofSheetsRidgesMix },
  { name: "Pre-Painted Steel Coils", desc: "Factory-grade pre-painted galvanised steel coils — raw material for premium roofing sheet production. Bulk supply available.", tag: "Wholesale", img: productGreenSteelCoil },
  { name: "Corrugated Roofing Stack (Red & Galvanised)", desc: "Factory-fresh corrugated metal roofing sheets stacked in red and galvanised finishes. Bulk dispatch ready.", tag: "Factory Stock", img: productCorrugatedRedStack },
  { name: "Colour Box-Profile Showroom Display", desc: "Full range of box-profile roofing sheets on display — red, yellow, blue, and green finishes. Walk in and pick your colour.", tag: "Showroom", img: productColorSheetsDisplay },
  { name: "Multi-Colour Roofing Range", desc: "Wide colour selection of corrugated and box-profile roofing sheets — navy, forest green, red, black, and lime green available.", tag: "Colour Range", img: productColorSheetsCollage },
  { name: "Green Wavy Corrugated Sheets", desc: "Classic wavy corrugated metal roofing sheets in vibrant green. Lightweight, strong, and easy to install.", tag: "Wavy Profile", img: productGreenWavySheets },
  { name: "Lilac Wavy Corrugated Sheets", desc: "Stylish lilac/purple wavy corrugated roofing sheets with a glossy finish. Unique colour for standout projects.", tag: "Specialty Colour", img: productLilacWavySheets },
  { name: "Deep Green Box-Profile Stack", desc: "Premium deep-green box-profile metal roofing sheets — bulk factory stack ready for dispatch.", tag: "Bulk Stock", img: productDeepGreenBoxSheets },
  { name: "Yellow-Orange Glossy Sheets", desc: "Eye-catching yellow-orange box-profile roofing sheets with a high-gloss finish. Perfect for branded buildings and standout designs.", tag: "Glossy Finish", img: productYellowOrangeSheets },
];

const machineStonesProducts: Product[] = [
  { name: "Machine-Cut Stones (Bulk Delivery)", desc: "Premium machine-cut building stones supplied in bulk. Tipper deliveries direct to your construction site.", tag: "Best Seller", img: productMachineStonesTipping },
  { name: "Machine-Cut Stones (Yard Stock)", desc: "Large stock of precision machine-cut stones, neatly arranged and ready for immediate dispatch.", tag: "In Stock", img: productMachineStonesField },
  { name: "Palletised Machine-Cut Stones", desc: "Uniformly cut, high-quality building stones supplied in palletised loads for easy handling.", tag: "Premium", img: productMachineStonesPallet },
  { name: "Site Offloading Service", desc: "Tipper trucks deliver and offload machine-cut stones directly at your project site across the country.", tag: "Logistics", img: productMachineStonesUnloading },
  { name: "Countrywide Transport", desc: "Fleet of heavy-duty trucks for fast, reliable countrywide delivery of all building materials.", tag: "Delivery", img: productDeliveryTrucks },
  { name: "Crated Machine-Cut Stones", desc: "Tightly packed, top-grade machine-cut stones in timber crates — uniform sizing and consistent finish for premium builds.", tag: "Top Grade", img: productMachineStonesCrate },
  { name: "Stacked Stone Inventory", desc: "Massive stacks of precision-cut building stones, drying and ready for dispatch from our quarry partners.", tag: "Bulk Stock", img: productMachineStonesStack },
  { name: "Quarry-Direct Stone Yard", desc: "Endless rows of freshly cut stones laid out at the quarry — direct sourcing for the best prices and quality.", tag: "Quarry Direct", img: productMachineStonesLaid },
];

const nailsProducts: Product[] = [
  { name: "Construction Nails (Mixed Sizes)", desc: "Strong, durable wire nails in assorted sizes — ideal for carpentry, formwork, and general construction.", tag: "Best Seller", img: productNailsMixed },
  { name: "Roofing Nails with Washers", desc: "Galvanised roofing nails pre-fitted with rubber washers for leak-proof iron sheet installation.", tag: "Roofing", img: productRoofingNailsBlue },
  { name: "Umbrella Roofing Nails", desc: "Heavy-duty umbrella-head roofing nails for secure fixing of iron sheets to timber purlins.", tag: "Heavy Duty", img: productUmbrellaNailsHand },
  { name: "Red-Head Roofing Nails (Bulk)", desc: "Bulk supply of red-capped roofing nails with rubber washers. Colour-matched for red roofing sheets.", tag: "Bulk", img: productRedRoofingNailsBulk },
  { name: "Black-Head Roofing Nails", desc: "Galvanised roofing nails with black rubber-coated heads. Ideal for charcoal and dark-finish roofing sheets.", tag: "Colour Match", img: productBlackRoofingNails },
  { name: "Green-Head Roofing Nails", desc: "Roofing nails with green-coated rubber heads — perfect colour match for green tile and box-profile sheets.", tag: "Colour Match", img: productGreenRoofingNails },
  { name: "Pre-Packed Roofing Nails", desc: "Roofing nails neatly pre-packed in retail-ready bags. Available in blue, green, and brown head colours.", tag: "Retail Pack", img: productRoofingNailsPacks },
  { name: "Rubber Washer Caps (Mixed Colours)", desc: "Assorted colour rubber washer caps for roofing nails — red, brown, blue, green, and charcoal.", tag: "Accessories", img: productWasherCapsMixed },
  { name: "Maroon Rubber Washer Caps", desc: "Bulk maroon rubber washer caps for roofing nails. Weather-sealing replacements and spares.", tag: "Spares", img: productWasherCapsMaroon },
];

const aggregatesProducts: Product[] = [
  { name: "Quarry Ballast (Direct Source)", desc: "Premium crushed ballast straight from the quarry conveyor. Consistent grading for concrete works.", tag: "Quarry Direct", img: productBallastQuarry },
  { name: "Ballast Site Delivery", desc: "Bulk ballast tipped and delivered straight to your construction site, anywhere in the country.", tag: "Bulk Delivery", img: productBallastOnsite },
];

const tileProducts: Product[] = [
  {
    name: "Floor Tiles",
    desc: "Premium ceramic and porcelain floor tiles in multiple sizes. Durable finish for living areas, bedrooms, and commercial spaces.",
    tag: "Floor",
    img: tileGeometric,
    prices: [
      { label: "30×30 (17 pcs/box)", price: "Ksh 760" },
      { label: "40×40 (12 pcs/box)", price: "Ksh 840" },
      { label: "50×50 (8 pcs/box)", price: "Ksh 1,550" },
      { label: "60×60 (4 pcs/box)", price: "Ksh 2,550" },
    ],
  },
  {
    name: "Wall Tiles",
    desc: "Stylish wall tiles for kitchens, bathrooms, and feature walls. Wide range of designs and finishes.",
    tag: "Wall",
    img: tileFloral,
    prices: [
      { label: "20×30 (25 pcs/box)", price: "Ksh 1,080" },
      { label: "25×40 (15 pcs/box)", price: "Ksh 1,150" },
      { label: "30×60 (8 pcs/box)", price: "Ksh 1,500" },
    ],
  },
  { name: "Blue Marble Tile", desc: "Elegant blue marble ceramic tile with gold veining. Premium finish.", tag: "Premium", img: tileBlueMarble },
  { name: "White Marble Tile", desc: "Classic white marble porcelain tile with subtle grey and gold accents.", tag: "Popular", img: tileWhiteMarble },
  { name: "Floral Designer Tile", desc: "Beautiful floral pattern wall tile with golden accents. Perfect for feature walls.", tag: "Designer", img: tileFloral },
  { name: "Gold Accent Tile", desc: "Stunning white tile with gold and black marble accents. Modern luxury finish.", tag: "Luxury", img: tileGoldMarble },
  { name: "Geometric Floor Tile", desc: "Classic geometric pattern floor tile. Durable and elegant for living spaces.", tag: "Classic", img: tileGeometric },
  { name: "Decorative Medallion Tile", desc: "Ornate baroque-style decorative floor tile with gold and marble detailing.", tag: "Luxury", img: decorativeTile },
  { name: "Magnolia Floral Tile", desc: "Stunning 3D-effect magnolia floral wall tile with gold accents. Perfect statement piece.", tag: "Designer", img: tileMagnolia },
  { name: "Installed Medallion Showcase", desc: "Luxury baroque medallion floor tile installation — true craftsmanship for elegant interiors.", tag: "Showcase", img: tileMedallionInstalled },
];

import AddToCartControl from "@/components/cart/AddToCartControl";

const ProductCard = ({ p }: { p: Product }) => (
  <div className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
    <div className="h-56 overflow-hidden bg-concrete">
      <img
        src={p.img}
        alt={p.name}
        loading="lazy"
        decoding="async"
        width={800}
        height={600}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
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
      <AddToCartControl name={p.name} img={p.img} prices={p.prices} />
      <a
        href={`https://wa.me/254731030404?text=${encodeURIComponent(`I would like to order ${p.name}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-center text-xs font-semibold text-primary transition-colors hover:text-primary/80"
      >
        Order →
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

      <SectionHeader subtitle="Quarry Direct" title="Machine-Cut Stones & Delivery" />
      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {machineStonesProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>

      <SectionHeader subtitle="Aggregates" title="Ballast & Quarry Materials" />
      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto">
        {aggregatesProducts.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>

      <SectionHeader subtitle="Fixings" title="Nails & Fasteners" />
      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {nailsProducts.map((p) => <ProductCard key={p.name} p={p} />)}
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
