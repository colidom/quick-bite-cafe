export const formatCurrency = (qty) => {
    return qty.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
    });
};
