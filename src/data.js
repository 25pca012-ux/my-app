export const rupee = (n) => '\u20B9' + n.toLocaleString('en-IN');

export const filters = ['All', 'Roses', 'Seasonal', 'Wedding'];

export const bouquets = [
  { id: 1, name: 'Red Rose Romance', type: 'Roses', price: 1499, note: '12 long-stem roses with greenery', look: { label: 'Red rose bouquet', petals: 9, outer: '#e0586f', inner: '#9d1236', center: '#f6c453', dots: '#8a5a00', round: true } },
  { id: 2, name: 'Pink Peony Dream', type: 'Wedding', price: 1899, note: 'Soft peonies in blush wrapping', look: { label: 'Pink peony bouquet', petals: 12, outer: '#fbd0df', inner: '#ee7ea6', center: '#ffd166', dots: '#b9770e', round: true } },
  { id: 3, name: 'Daisy Morning', type: 'Seasonal', price: 799, note: 'Fresh white daisies, hand tied', look: { label: 'Daisy bouquet', petals: 14, outer: '#ffffff', inner: '#e9eef2', center: '#ffc93c', dots: '#a36b00' } },
  { id: 4, name: 'Sunflower Joy', type: 'Seasonal', price: 999, note: 'Bright sunflowers for sunny days', look: { label: 'Sunflower bouquet', petals: 16, outer: '#ffd23f', inner: '#f2a900', center: '#6b3f1d', dots: '#2d1b0e' } },
  { id: 5, name: 'Lavender Whisper', type: 'Seasonal', price: 1199, note: 'Violet blooms with a calm scent', look: { label: 'Lavender bouquet', petals: 7, outer: '#cdb4f0', inner: '#8a5fd0', center: '#fff1a8', dots: '#9c7b00' } },
  { id: 6, name: 'Blush Bridal Bouquet', type: 'Wedding', price: 2999, note: 'Roses and peonies for the big day', look: { label: 'Bridal bouquet', petals: 10, outer: '#ffe3ea', inner: '#f5a3b9', center: '#ffe08a', dots: '#b8860b', round: true } },
  { id: 7, name: 'Pink Rose Classic', type: 'Roses', price: 1299, note: '10 soft pink roses, gift wrapped', look: { label: 'Pink rose bouquet', petals: 9, outer: '#f7a8c4', inner: '#d6336c', center: '#ffd166', dots: '#9a6700', round: true } },
  { id: 8, name: 'Orange Tulip Garden', type: 'Seasonal', price: 899, note: 'Cheerful tulips, spring fresh', look: { label: 'Tulip bouquet', petals: 6, outer: '#ffb067', inner: '#f26a1b', center: '#fff0a0', dots: '#a66a00', round: true } },
];

export const occasions = [
  { name: 'Birthday', text: 'Bright mixes that make the day', look: { petals: 8, outer: '#ffd7a8', inner: '#ff8c42', center: '#fff3b0', dots: '#b36b00' } },
  { name: 'Wedding', text: 'Bridal bouquets and table flowers', look: { petals: 12, outer: '#ffe3ea', inner: '#f5a3b9', center: '#ffe08a', dots: '#b8860b', round: true } },
  { name: 'Anniversary', text: 'Roses for the one you love', look: { petals: 9, outer: '#e0586f', inner: '#9d1236', center: '#f6c453', dots: '#8a5a00', round: true } },
  { name: 'Get well soon', text: 'Fresh, cheerful and calming', look: { petals: 14, outer: '#ffffff', inner: '#dfe7ee', center: '#ffc93c', dots: '#a36b00' } },
];

export const reviews = [
  { name: 'Priya S.', city: 'Coimbatore', text: 'The roses reached my mother before noon and stayed fresh for a week. She still talks about them.' },
  { name: 'Arjun K.', city: 'Salem', text: 'I ordered the bridal bouquet for my sister. The wrapping looked even better than the photo.' },
  { name: 'Meena R.', city: 'Erode', text: 'Easy to order, and the delivery person called before arriving. Will order again for Diwali.' },
];
