import { LiveConfig, VehicleType } from '@monkvision/types';
import { v4 } from 'uuid';
import { LiveConfigSchema } from './schema';

export function isConfigValid(obj: unknown): obj is LiveConfig {
  try {
    LiveConfigSchema.parse(obj);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export function parseConfig(file: File, onParsed: (config: unknown | null) => void): void {
  const fileReader = new FileReader();
  fileReader.readAsText(file, 'utf-8');
  fileReader.onload = (e) => {
    try {
      onParsed(typeof e.target?.result === 'string' ? JSON.parse(e.target.result) : null);
    } catch (err) {
      console.error(err);
      onParsed(null);
    }
  };
}

export function createConfig(): LiveConfig {
  return {
    id: v4(),
    startTasksOnComplete: true,
    showCloseButton: false,
    allowSkipRetake: false,
    enableAddDamage: true,
    defaultVehicleType: VehicleType.CROSSOVER,
    allowManualLogin: true,
    fetchFromSearchParams: true,
    enableSteeringWheelPosition: false,
    sights: {
      [VehicleType.SUV]: [
        'jgc21-QIvfeg0X',
        'jgc21-KyUUVU2P',
        'jgc21-zCrDwYWE',
        'jgc21-z15ZdJL6',
        'jgc21-RE3li6rE',
        'jgc21-omlus7Ui',
        'jgc21-m2dDoMup',
        'jgc21-3gjMwvQG',
        'jgc21-ezXzTRkj',
        'jgc21-tbF2Ax8v',
        'jgc21-3JJvM7_B',
        'jgc21-RAVpqaE4',
        'jgc21-F-PPd4qN',
        'jgc21-XXh8GWm8',
        'jgc21-TRN9Des4',
        'jgc21-s7WDTRmE',
        'jgc21-__JKllz9',
      ],
      [VehicleType.CROSSOVER]: [
        'fesc20-H1dfdfvH',
        'fesc20-WMUaKDp1',
        'fesc20-LTe3X2bg',
        'fesc20-WIQsf_gX',
        'fesc20-hp3Tk53x',
        'fesc20-fOt832UV',
        'fesc20-NLdqASzl',
        'fesc20-4Wqx52oU',
        'fesc20-dfICsfSV',
        'fesc20-X8k7UFGf',
        'fesc20-LZc7p2kK',
        'fesc20-5Ts1UkPT',
        'fesc20-gg1Xyrpu',
        'fesc20-P0oSEh8p',
        'fesc20-j3H8Z415',
        'fesc20-dKVLig1i',
        'fesc20-Wzdtgqqz',
      ],
      [VehicleType.SEDAN]: [
        'haccord-8YjMcu0D',
        'haccord-DUPnw5jj',
        'haccord-hsCc_Nct',
        'haccord-GQcZz48C',
        'haccord-QKfhXU7o',
        'haccord-mdZ7optI',
        'haccord-bSAv3Hrj',
        'haccord-W-Bn3bU1',
        'haccord-GdWvsqrm',
        'haccord-ps7cWy6K',
        'haccord-Jq65fyD4',
        'haccord-OXYy5gET',
        'haccord-5LlCuIfL',
        'haccord-Gtt0JNQl',
        'haccord-cXSAj2ez',
        'haccord-KN23XXkX',
        'haccord-Z84erkMb',
      ],
      [VehicleType.HATCHBACK]: [
        'ffocus18-XlfgjQb9',
        'ffocus18-3TiCVAaN',
        'ffocus18-43ljK5xC',
        'ffocus18-x_1SE7X-',
        'ffocus18-QKfhXU7o',
        'ffocus18-yo9eBDW6',
        'ffocus18-cPUyM28L',
        'ffocus18-S3kgFOBb',
        'ffocus18-9MeSIqp7',
        'ffocus18-X2LDjCvr',
        'ffocus18-jWOq2CNN',
        'ffocus18-P2jFq1Ea',
        'ffocus18-U3Bcfc2Q',
        'ffocus18-ts3buSD1',
        'ffocus18-cXSAj2ez',
        'ffocus18-KkeGvT-F',
        'ffocus18-lRDlWiwR',
      ],
      [VehicleType.VAN]: [
        'ftransit18-wyXf7MTv',
        'ftransit18-UNAZWJ-r',
        'ftransit18-5SiNC94w',
        'ftransit18-Y0vPhBVF',
        'ftransit18-xyp1rU0h',
        'ftransit18-6khKhof0',
        'ftransit18-eXJDDYmE',
        'ftransit18-3Sbfx_KZ',
        'ftransit18-iu1Vj2Oa',
        'ftransit18-aA2K898S',
        'ftransit18-NwBMLo3Z',
        'ftransit18-cf0e-pcB',
        'ftransit18-FFP5b34o',
        'ftransit18-RJ2D7DNz',
        'ftransit18-3fnjrISV',
        'ftransit18-eztNpSRX',
        'ftransit18-TkXihCj4',
        'ftransit18-4NMPqEV6',
        'ftransit18-IIVI_pnX',
      ],
      [VehicleType.MINIVAN]: [
        'tsienna20-YwrRNr9n',
        'tsienna20-HykkFbXf',
        'tsienna20-TI4TVvT9',
        'tsienna20-65mfPdRD',
        'tsienna20-Ia0SGJ6z',
        'tsienna20-1LNxhgCR',
        'tsienna20-U_FqYq-a',
        'tsienna20-670P2H2V',
        'tsienna20-1n_z8bYy',
        'tsienna20-qA3aAUUq',
        'tsienna20--a2RmRcs',
        'tsienna20-SebsoqJm',
        'tsienna20-u57qDaN_',
        'tsienna20-Rw0Gtt7O',
        'tsienna20-TibS83Qr',
        'tsienna20-cI285Gon',
        'tsienna20-KHB_Cd9k',
      ],
      [VehicleType.PICKUP]: [
        'ff150-zXbg0l3z',
        'ff150-3he9UOwy',
        'ff150-KgHVkQBW',
        'ff150-FqbrFVr2',
        'ff150-g_xBOOS2',
        'ff150-vwE3yqdh',
        'ff150-V-xzfWsx',
        'ff150-ouGGtRnf',
        'ff150--xPZZd83',
        'ff150-nF_oFvhI',
        'ff150-t3KBMPeD',
        'ff150-3rM9XB0Z',
        'ff150-eOjyMInj',
        'ff150-18YVVN-G',
        'ff150-BmXfb-qD',
        'ff150-gFp78fQO',
        'ff150-7nvlys8r',
      ],
    },
  };
}
