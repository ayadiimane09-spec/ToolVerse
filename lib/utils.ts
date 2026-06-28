// Utility function to generate URL slugs
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Format pricing type for display
export function formatPricingType(type: string): string {
  const mapping: Record<string, string> = {
    FREE: 'Gratuit',
    FREEMIUM: 'Freemium',
    PAID: 'Payant',
    OPEN_SOURCE: 'Open Source',
  };
  return mapping[type] || type;
}

// Calculate average rating
export function calculateAverageRating(ratings: { score: number }[]): number {
  if (ratings.length === 0) return 0;
  const sum = ratings.reduce((acc, rating) => acc + rating.score, 0);
  return Math.round((sum / ratings.length) * 10) / 10;
}
