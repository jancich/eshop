export const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-BE', {
        style: 'currency',
        currency: 'EUR',
    }).format(amount);
};
