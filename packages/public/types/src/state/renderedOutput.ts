import { MonkEntity, MonkEntityType } from './entity';
import { AdditionalData } from './common';

/**
 * A rendered output is an image generated by the API by editing an existing image to mark some useful details.
 */
export interface RenderedOutput extends MonkEntity {
  /**
   * The type of the entity.
   */
  entityType: MonkEntityType.RENDERED_OUTPUT;
  /**
   * The ID of the image this rendered output was generated from.
   */
  baseImageId: string;
  /**
   * The URL at which the rendered output can be downloaded.
   */
  path: string;
  /**
   * Additional data associated with the rendered output.
   */
  additionalData?: AdditionalData;
}
