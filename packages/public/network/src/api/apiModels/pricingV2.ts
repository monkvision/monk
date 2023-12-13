export type ApiRelatedItemType = 'part' | 'vehicle';

export type ApiRepairOperationsTypes =
  | 'polishing'
  | 'sanding'
  | 'painting'
  | 'replacing'
  | 'paintless_dent_repair'
  | 'dent_repair'
  | 'refinishing'
  | 'removing'
  | 'painting_hard'
  | 'paint_preparation';

export type ApiHours = Record<string, number>;

export interface ApiPricingV2Details {
  hours?: ApiHours;
  operations?: ApiRepairOperationsTypes[];
  pricing?: number;
  related_item_id?: string;
  related_item_type: ApiRelatedItemType;
}

export type ApiDetails = Record<string, ApiPricingV2Details>;

export interface ApiPricingV2 {
  details: ApiDetails;
  total_price?: number;
}
