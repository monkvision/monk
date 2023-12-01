import { InteractiveStatus } from '@monkvision/types';
import {
  getHexFromRGBA,
  getInteractiveVariants,
  getRGBAFromString,
  InteractiveVariation,
  shadeColor,
} from '../../src';

describe('Color utils', () => {
  describe('getRGBAFromString function', () => {
    it('should return the RGBA values for an rgba color', () => {
      const rgba = getRGBAFromString('rgba(255,12,0,0.55)');
      expect(rgba).toEqual({ r: 255, g: 12, b: 0, a: 0.55 });
    });

    it('should return the RGBA values for an rgb color', () => {
      const rgba = getRGBAFromString('rgb(55,234,067)');
      expect(rgba).toEqual({ r: 55, g: 234, b: 67, a: 1 });
    });

    it('should allow extra whitespaces for the rgb format', () => {
      const rgba = getRGBAFromString('   rgba(   23 ,  233  , 99 ,   0.89 )   ');
      expect(rgba).toEqual({ r: 23, g: 233, b: 99, a: 0.89 });
    });

    it('should be case insensitive for the rgb format', () => {
      const rgba = getRGBAFromString('RgbA(0,0,12,1)');
      expect(rgba).toEqual({ r: 0, g: 0, b: 12, a: 1 });
    });

    it('should return the RGBA values for a hex color (without alpha)', () => {
      const rgba = getRGBAFromString('#AF270C');
      expect(rgba).toEqual({ r: 175, g: 39, b: 12, a: 1 });
    });

    it('should return the RGBA values for a hex color (with alpha)', () => {
      const rgba = getRGBAFromString('#AF270CCC');
      expect(rgba).toEqual({ r: 175, g: 39, b: 12, a: 0.8 });
    });

    it('should return the RGBA values for a hex color (short without alpha)', () => {
      const rgba = getRGBAFromString('#CFA');
      expect(rgba).toEqual({ r: 204, g: 255, b: 170, a: 1 });
    });

    it('should return the RGBA values for a hex color (short with alpha)', () => {
      const rgba = getRGBAFromString('#CFA2');
      expect(rgba).toEqual({ r: 204, g: 255, b: 170, a: 34 / 255 });
    });

    it('should allow extra whitespaces for the hex format', () => {
      const rgba = getRGBAFromString('     #A7E09208  ');
      expect(rgba).toEqual({ r: 167, g: 224, b: 146, a: 8 / 255 });
    });

    it('should be case insensitive for the hex format', () => {
      const rgba = getRGBAFromString('#aFe065Cc');
      expect(rgba).toEqual({ r: 175, g: 224, b: 101, a: 0.8 });
    });

    it('should throw an error if the color format is invalid', () => {
      const invalidColors = ['aaaa', 'rgb(1, 2)', '#ddffs'];
      invalidColors.forEach((color) => {
        expect(() => getRGBAFromString(color)).toThrowError();
      });
    });
  });

  describe('getHexFromRGBA function', () => {
    it('should properly convert the given RGBA object', () => {
      expect(getHexFromRGBA({ r: 111, g: 222, b: 0, a: 0.67 }).toUpperCase()).toEqual('#6FDE00AB');
      expect(getHexFromRGBA({ r: 44, g: 22, b: 254, a: 0.2 }).toUpperCase()).toEqual('#2C16FE33');
    });
  });

  describe('shadeColor function', () => {
    it('should return the same color if the shade amount is 0', () => {
      expect(shadeColor('#FC72A7', 0).toUpperCase()).toEqual('#FC72A7FF');
    });

    it('should properly lighten colors', () => {
      expect(shadeColor('#FC72A7', 0.2).toUpperCase()).toEqual('#FF89C8FF');
      expect(shadeColor('#FC72A7', 0.7).toUpperCase()).toEqual('#FFC2FFFF');
      expect(shadeColor('#FC72A7', 1).toUpperCase()).toEqual('#FFE4FFFF');
    });

    it('should properly darken colors', () => {
      expect(shadeColor('#FC72A7', -0.2).toUpperCase()).toEqual('#CA5B86FF');
      expect(shadeColor('#FC72A7', -0.7).toUpperCase()).toEqual('#4C2232FF');
      expect(shadeColor('#FC72A7', -1).toUpperCase()).toEqual('#000000FF');
    });

    it('should not modify the alpha value', () => {
      expect(shadeColor('#FC72A7CC', -0.2).toUpperCase()).toEqual('#CA5B86CC');
    });
  });

  describe('getInteractiveVariants function', () => {
    it('should create interactive (light) variants of the given color', () => {
      expect(getInteractiveVariants('#FC72A7', InteractiveVariation.LIGHTEN)).toEqual({
        [InteractiveStatus.DEFAULT]: expect.stringMatching(/#FC72A7/i),
        [InteractiveStatus.HOVERED]: expect.stringMatching(/#FF7BB4FF/i),
        [InteractiveStatus.ACTIVE]: expect.stringMatching(/#FF80BBFF/i),
        [InteractiveStatus.DISABLED]: expect.stringMatching(/#FC72A7/i),
      });
    });

    it('should create interactive (dark) variants of the given color', () => {
      expect(getInteractiveVariants('#FC72A7', InteractiveVariation.DARKEN)).toEqual({
        [InteractiveStatus.DEFAULT]: expect.stringMatching(/#FC72A7/i),
        [InteractiveStatus.HOVERED]: expect.stringMatching(/#E8699AFF/i),
        [InteractiveStatus.ACTIVE]: expect.stringMatching(/#DE6493FF/i),
        [InteractiveStatus.DISABLED]: expect.stringMatching(/#FC72A7/i),
      });
    });

    it('should use the lighten variation by default if not provided', () => {
      expect(getInteractiveVariants('#FC72A7')).toEqual(
        getInteractiveVariants('#FC72A7', InteractiveVariation.LIGHTEN),
      );
    });
  });
});
