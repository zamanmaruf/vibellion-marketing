type Offer = {
  active: boolean;
  endDate?: string;
};

export function isOfferCurrentlyActive(offer: Offer): boolean {
  if (!offer.active) {
    return false;
  }

  if (!offer.endDate) {
    return true;
  }

  const endDate = new Date(`${offer.endDate}T23:59:59.999Z`);
  return !Number.isNaN(endDate.getTime()) && endDate.getTime() >= Date.now();
}
