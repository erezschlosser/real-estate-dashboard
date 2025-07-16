export const formatNumber = (value: number, options?: Intl.NumberFormatOptions): string => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits: 0,
      ...options,
    }).format(value);
  };
  
  export const formatCurrency = (value: number, currency: string = "USD"): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  };