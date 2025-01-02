export interface Product {
    id: string
    name: string
    category: string
    subcategory: string
    price: number
    image: string
  }
  
  export interface Categories {
    [key: string]: string[]
  }
  
  export const categories: Categories = {
    'External Flooring': [
      'Slates',
      'Lime Stones',
      'Sand Stone',
      'Block Stone Pavers',
      'Latrite Exterior floor',
      'Granite Pavers',
      'Pebble Pavers'
    ],
    'Wall Elevation': [
      'Stacking',
      'Bricks cladding',
      'Latrite',
      'Squares',
      'Squares & Rectangle',
      'Barcode',
      'Opus',
      'Block stone',
      'Split face',
      'Pebbles'
    ],
    'Steps & Raisers': [
      'Steps',
      'Riser'
    ],
    'Bathroom Concepts': [
      'Wall Cladding',
      'Bathroom Flooring',
      'Bathroom engraved highlighters',
      'Pebbles'
    ],
    'Frames & Sills': [
      'Door frame',
      'Window sill'
    ],
    'Stone Utilities': [
      'Stone Tables & Benches',
      'Shelves',
      'Lamp shades & Pots'
    ]
  }
  
  