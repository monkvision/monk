import { Sight, VehicleType } from '@monkvision/types';
import { sights } from '@monkvision/sights';

const APP_SIGHTS_BY_VEHICLE_TYPE: Partial<Record<VehicleType, Sight[]>> = {
  [VehicleType.SUV]: [
    sights['jgc21-QIvfeg0X'],
    sights['jgc21-KyUUVU2P'],
    sights['jgc21-zCrDwYWE'],
    sights['jgc21-z15ZdJL6'],
    sights['jgc21-RE3li6rE'],
    sights['jgc21-omlus7Ui'],
    sights['jgc21-m2dDoMup'],
    sights['jgc21-3gjMwvQG'],
    sights['jgc21-ezXzTRkj'],
    sights['jgc21-tbF2Ax8v'],
    sights['jgc21-3JJvM7_B'],
    sights['jgc21-RAVpqaE4'],
    sights['jgc21-F-PPd4qN'],
    sights['jgc21-XXh8GWm8'],
    sights['jgc21-TRN9Des4'],
    sights['jgc21-s7WDTRmE'],
    sights['jgc21-__JKllz9'],
  ],
  [VehicleType.CROSSOVER]: [
    sights['fesc20-H1dfdfvH'],
    sights['fesc20-WMUaKDp1'],
    sights['fesc20-LTe3X2bg'],
    sights['fesc20-WIQsf_gX'],
    sights['fesc20-hp3Tk53x'],
    sights['fesc20-fOt832UV'],
    sights['fesc20-NLdqASzl'],
    sights['fesc20-4Wqx52oU'],
    sights['fesc20-dfICsfSV'],
    sights['fesc20-X8k7UFGf'],
    sights['fesc20-LZc7p2kK'],
    sights['fesc20-5Ts1UkPT'],
    sights['fesc20-gg1Xyrpu'],
    sights['fesc20-P0oSEh8p'],
    sights['fesc20-j3H8Z415'],
    sights['fesc20-dKVLig1i'],
    sights['fesc20-Wzdtgqqz'],
  ],
  [VehicleType.SEDAN]: [
    sights['haccord-8YjMcu0D'],
    sights['haccord-DUPnw5jj'],
    sights['haccord-hsCc_Nct'],
    sights['haccord-GQcZz48C'],
    sights['haccord-QKfhXU7o'],
    sights['haccord-mdZ7optI'],
    sights['haccord-bSAv3Hrj'],
    sights['haccord-W-Bn3bU1'],
    sights['haccord-GdWvsqrm'],
    sights['haccord-ps7cWy6K'],
    sights['haccord-Jq65fyD4'],
    sights['haccord-OXYy5gET'],
    sights['haccord-5LlCuIfL'],
    sights['haccord-Gtt0JNQl'],
    sights['haccord-cXSAj2ez'],
    sights['haccord-KN23XXkX'],
    sights['haccord-Z84erkMb'],
  ],
  [VehicleType.HATCHBACK]: [
    sights['ffocus18-XlfgjQb9'],
    sights['ffocus18-3TiCVAaN'],
    sights['ffocus18-43ljK5xC'],
    sights['ffocus18-x_1SE7X-'],
    sights['ffocus18-QKfhXU7o'],
    sights['ffocus18-yo9eBDW6'],
    sights['ffocus18-cPUyM28L'],
    sights['ffocus18-S3kgFOBb'],
    sights['ffocus18-9MeSIqp7'],
    sights['ffocus18-X2LDjCvr'],
    sights['ffocus18-jWOq2CNN'],
    sights['ffocus18-P2jFq1Ea'],
    sights['ffocus18-U3Bcfc2Q'],
    sights['ffocus18-ts3buSD1'],
    sights['ffocus18-cXSAj2ez'],
    sights['ffocus18-KkeGvT-F'],
    sights['ffocus18-lRDlWiwR'],
  ],
  [VehicleType.VAN]: [
    sights['ftransit18-wyXf7MTv'],
    sights['ftransit18-UNAZWJ-r'],
    sights['ftransit18-5SiNC94w'],
    sights['ftransit18-Y0vPhBVF'],
    sights['ftransit18-xyp1rU0h'],
    sights['ftransit18-6khKhof0'],
    sights['ftransit18-eXJDDYmE'],
    sights['ftransit18-3Sbfx_KZ'],
    sights['ftransit18-iu1Vj2Oa'],
    sights['ftransit18-aA2K898S'],
    sights['ftransit18-NwBMLo3Z'],
    sights['ftransit18-cf0e-pcB'],
    sights['ftransit18-FFP5b34o'],
    sights['ftransit18-RJ2D7DNz'],
    sights['ftransit18-3fnjrISV'],
    sights['ftransit18-eztNpSRX'],
    sights['ftransit18-TkXihCj4'],
    sights['ftransit18-4NMPqEV6'],
    sights['ftransit18-IIVI_pnX'],
  ],
  [VehicleType.MINIVAN]: [
    sights['tsienna20-YwrRNr9n'],
    sights['tsienna20-HykkFbXf'],
    sights['tsienna20-TI4TVvT9'],
    sights['tsienna20-65mfPdRD'],
    sights['tsienna20-Ia0SGJ6z'],
    sights['tsienna20-1LNxhgCR'],
    sights['tsienna20-U_FqYq-a'],
    sights['tsienna20-670P2H2V'],
    sights['tsienna20-1n_z8bYy'],
    sights['tsienna20-qA3aAUUq'],
    sights['tsienna20--a2RmRcs'],
    sights['tsienna20-SebsoqJm'],
    sights['tsienna20-u57qDaN_'],
    sights['tsienna20-Rw0Gtt7O'],
    sights['tsienna20-TibS83Qr'],
    sights['tsienna20-cI285Gon'],
    sights['tsienna20-KHB_Cd9k'],
  ],
  [VehicleType.PICKUP]: [
    sights['ff150-zXbg0l3z'],
    sights['ff150-3he9UOwy'],
    sights['ff150-KgHVkQBW'],
    sights['ff150-FqbrFVr2'],
    sights['ff150-g_xBOOS2'],
    sights['ff150-vwE3yqdh'],
    sights['ff150-V-xzfWsx'],
    sights['ff150-ouGGtRnf'],
    sights['ff150--xPZZd83'],
    sights['ff150-nF_oFvhI'],
    sights['ff150-t3KBMPeD'],
    sights['ff150-3rM9XB0Z'],
    sights['ff150-eOjyMInj'],
    sights['ff150-18YVVN-G'],
    sights['ff150-BmXfb-qD'],
    sights['ff150-gFp78fQO'],
    sights['ff150-7nvlys8r'],
  ],
};

export function getSights(vehicleType: VehicleType | null): Sight[] {
  const type =
    !vehicleType || !Object.keys(APP_SIGHTS_BY_VEHICLE_TYPE).includes(vehicleType)
      ? VehicleType.CROSSOVER
      : vehicleType;
  return APP_SIGHTS_BY_VEHICLE_TYPE[type] as Sight[];
}