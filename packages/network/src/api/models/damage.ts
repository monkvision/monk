import { DamageType, VehiclePart } from '@monkvision/types';
import type { ApiRelatedImages } from './image';
import type { ApiPartIds } from './part';

export interface ApiDamage {
  damage_size_cm?: number;
  damage_type: string;
  id: string;
  part_ids: ApiPartIds;
  related_images?: ApiRelatedImages;
}

export interface ApiDamageSimplifiedGet {
  damage_type: string;
  id: string;
  part_ids: ApiPartIds;
  damage_size_cm?: number;
}

export type ApiDamages = ApiDamage[];

export type ApiDamageIds = string[];

export interface ApiDamagePost {
  damage_type: DamageType;
  part_type: VehiclePart;
}
