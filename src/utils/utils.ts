export const transformString = (input: string): string => {
  return input
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

//['kitchen-accessories', 'mobile-accessories']