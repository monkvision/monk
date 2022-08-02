import React from 'react';
import Svg, { Path } from 'react-native-svg';

const icons = (color) => ({
  cuv: {
    name: 'Crossover',
    icon: (
      <Svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/Svg">
        <Path fillRule="evenodd" clipRule="evenodd" d="M30.4921 19.5302C30.6396 19.0579 30.6511 18.1222 30.6477 17.5618C30.6462 17.3199 30.5971 17.161 30.3591 17.1113C30.2142 17.0811 30.0673 17.0504 30.0639 16.9887C30.0206 16.2445 29.9685 15.6945 29.8872 14.9299C29.8385 14.4565 29.009 14.0389 28.5105 13.5886C28.0678 13.189 27.1512 12.5086 26.7638 12.1915C26.4379 11.9244 26.9246 11.6238 26.6214 11.4967C26.1366 11.2754 25.2265 11.1856 24.2479 11.1551C21.8462 11.0801 18.5902 11.0513 16.244 11.2233C15.4093 11.2844 14.5772 11.3976 13.9393 11.6002C12.1718 12.162 10.6581 13.5479 8.98141 14.3395C6.95271 14.5545 4.90985 14.7408 2.85456 15.2507C2.18969 15.4156 2.04518 15.675 1.84107 16.0706C1.6183 16.5013 1.70621 16.9057 1.60436 17.1503C1.44142 17.1636 1.43541 17.1222 1.38374 17.2174C1.32971 17.3175 1.35994 17.4503 1.34815 17.6143C1.2939 18.3639 1.12602 19.4805 1.75059 19.9466C1.78168 19.97 1.81427 19.9788 1.84836 19.9985H2.79067C3.26172 19.9985 3.23063 19.9089 3.28166 19.4136C3.43067 17.9653 4.65471 16.8356 6.14268 16.8356C7.58241 16.8409 8.77515 17.9398 8.9857 19.2871C9.08175 19.9009 8.9336 20.0113 9.5618 20.0113H21.8766C22.3161 20.0113 22.2876 19.9682 22.3153 19.5272C22.4103 18.0247 23.6592 16.8356 25.1857 16.8356C26.6973 16.8356 27.9147 18.0036 28.053 19.4833C28.1021 20.0085 28.0448 20.0113 28.5382 20.0113H29.7331C30.1063 20.0113 30.3679 19.9277 30.4921 19.5302ZM25.1857 17.5037C26.4076 17.5037 27.398 18.4942 27.398 19.7161C27.398 20.9378 26.4076 21.9285 25.1857 21.9285C23.9638 21.9285 22.9733 20.9378 22.9733 19.7161C22.9733 18.4942 23.9638 17.5037 25.1857 17.5037ZM6.14268 17.5037C7.36436 17.5037 8.35492 18.4942 8.35492 19.7161C8.35492 20.9378 7.36436 21.9285 6.14268 21.9285C4.92078 21.9285 3.93023 20.9378 3.93023 19.7161C3.93023 18.4942 4.92078 17.5037 6.14268 17.5037ZM12.083 14.8172C12.0976 14.7599 12.1735 14.5444 12.187 14.3172C12.2101 13.9334 11.5084 13.9049 11.0734 13.9332C11.917 13.306 13.0725 12.5415 14.1934 12.153C14.5877 12.0209 15.7545 11.9478 16.4955 11.9321C16.8132 11.9253 17.131 11.9186 17.4487 11.912C17.6207 11.9098 17.6434 11.9898 17.593 12.1253C17.4232 12.5805 17.3552 13.5637 17.2532 14.2241C17.2041 14.5429 17.1286 14.6184 16.8027 14.6212C15.5163 14.6319 12.0673 14.8789 12.083 14.8172ZM22.3785 14.4269C22.3616 13.7162 22.222 13.0258 22.0117 12.3472C20.8061 11.82 19.9034 11.927 18.635 11.912C18.5385 11.9109 18.421 11.9658 18.3987 12.0232C18.2626 12.3757 18.2309 12.856 18.0535 14.3067C18.0051 14.7037 18.031 14.5961 18.4714 14.5907C19.5563 14.5777 21.1487 14.4945 22.3785 14.4269ZM22.5807 12.4806C22.7846 13.106 22.9064 13.7516 22.9812 14.4094C23.4147 14.3862 23.285 14.3663 23.6735 14.3534C24.2378 14.3347 24.2203 14.109 23.8637 13.6214C23.7415 13.4544 23.2196 12.7769 22.5807 12.4806ZM25.3969 12.2151C25.6426 12.2312 25.8883 12.2473 26.1343 12.2634C26.8605 12.8601 27.5866 13.3875 28.3128 13.963C28.6986 14.2685 28.3244 14.2385 28.0174 14.1821C26.88 13.973 26.0965 13.0886 25.3969 12.2151Z" fill={color} />
      </Svg>
    ),
  },
  hatchback: {
    name: 'Compact',
    icon: (
      <Svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/Svg">
        <Path fillRule="evenodd" clipRule="evenodd" d="M29.7605 19.5698C30.0761 19.5157 30.3265 19.4448 30.4294 19.3492C30.7566 19.0451 30.6578 18.0968 30.6524 17.611C30.6511 17.4928 30.3512 17.492 30.3441 17.3689C30.3008 16.6198 29.9777 15.2431 29.896 14.4734C29.8664 14.1946 29.753 13.8252 29.259 13.5197C28.6816 13.1629 27.0285 12.1899 26.4014 11.9269C25.9872 11.7532 26.0882 11.7112 25.6435 11.6473C23.4351 11.3304 18.6061 10.956 16.4419 11.6436C14.6625 12.209 13.113 13.0289 11.506 14.028C8.66344 14.5182 6.34379 14.9343 4.96302 15.3057C4.29729 15.4847 4.01214 15.802 3.80652 16.2C3.58247 16.6337 3.47612 16.888 3.37363 17.1341C3.1275 17.1545 3.06811 17.3813 3.07261 17.6879C3.07947 18.1693 3.03466 18.5125 3.16866 18.9894C3.2675 19.3408 3.58204 19.5443 3.95703 19.5565L4.64913 19.5792C4.98489 19.5153 5.08802 19.5338 5.05929 19.0844C5.04943 18.9302 5.04707 18.772 5.04707 18.6092C5.04707 17.01 6.34358 15.7135 7.94283 15.7135C9.54208 15.7135 10.8388 17.01 10.8388 18.6092C10.8388 18.8329 10.8384 19.0505 10.8236 19.2595C10.7736 19.9724 10.5519 19.8985 11.2365 19.9338L22.8734 19.921C23.371 19.8603 23.5044 19.9201 23.4353 19.2445C23.4145 19.04 23.4102 18.8275 23.4102 18.6092C23.4102 17.01 24.7068 15.7135 26.306 15.7135C27.9053 15.7135 29.2018 17.01 29.2018 18.6092C29.2018 18.7531 29.2015 18.8935 29.1968 19.0299C29.1784 19.5792 29.0573 19.6903 29.7605 19.5698ZM20.487 14.2712C20.6654 12.8107 20.6875 12.3878 20.8245 12.0328C20.8466 11.9751 20.9755 11.8555 21.0724 11.86C22.1238 11.9101 23.2938 11.8924 24.3118 12.1284C24.6735 12.2296 25.4139 13.072 25.5991 13.3259C25.6707 13.4234 26.2024 14.0411 26.1171 14.1685C26.0573 14.2575 25.982 14.3134 25.8395 14.3181C24.2563 14.3711 22.4887 14.5381 20.9077 14.5572C20.4643 14.5626 20.4382 14.6708 20.487 14.2712ZM14.4758 14.7851C14.4903 14.7276 14.5669 14.5105 14.5804 14.2817C14.6038 13.8955 13.7556 13.8666 13.3175 13.8951C14.1668 13.2635 15.569 12.5911 16.6979 12.2002C17.6282 11.8885 18.8807 11.8812 19.8779 11.86C20.0514 11.858 20.0451 11.9309 20.0233 12.0748C19.9536 12.533 19.784 13.5231 19.6813 14.1882C19.6316 14.509 19.5557 14.5851 19.2278 14.5876C17.9326 14.5986 14.4599 14.8473 14.4758 14.7851ZM26.306 16.3818C27.536 16.3818 28.5335 17.379 28.5335 18.6092C28.5335 19.8393 27.536 20.8367 26.306 20.8367C25.0757 20.8367 24.0785 19.8393 24.0785 18.6092C24.0785 17.379 25.0757 16.3818 26.306 16.3818ZM7.94283 16.3818C9.17308 16.3818 10.1703 17.379 10.1703 18.6092C10.1703 19.8393 9.17308 20.8367 7.94283 20.8367C6.71278 20.8367 5.71537 19.8393 5.71537 18.6092C5.71537 17.379 6.71278 16.3818 7.94283 16.3818Z" fill={color} />
      </Svg>

    ),
  },
  minivan: {
    name: 'Minivan',
    icon: (
      <Svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/Svg">
        <Path fillRule="evenodd" clipRule="evenodd" d="M25.7959 18.4309C27.1173 18.4309 28.1885 19.4888 28.1885 20.7938C28.1885 22.0989 27.1173 23.1568 25.7959 23.1568C24.4743 23.1568 23.4031 22.0989 23.4031 20.7938C23.4031 19.4888 24.4743 18.4309 25.7959 18.4309ZM29.2171 21.8209C29.7602 21.775 30.4499 21.7218 30.9718 21.6228C31.3111 21.5587 31.5795 21.4748 31.6904 21.3613C32.042 21.0003 32.0016 19.8757 31.9956 19.2991C31.9941 19.1586 31.6721 19.1583 31.6645 19.0119C31.6176 18.1229 31.5445 17.2061 31.3212 16.3217C31.1491 15.64 30.8073 15.176 30.5455 14.6454C30.3124 14.1725 29.7516 12.6465 28.951 11.7728C28.8302 11.6409 28.8233 11.4637 28.8279 11.3177C28.8401 10.9326 28.7797 10.9853 28.4171 10.9542C28.0061 10.9185 27.3098 10.9446 26.3769 10.9496L15.3892 11.0122C14.8734 11.0151 14.3859 11.0611 13.9384 11.0934C11.4782 11.2717 8.52849 13.3213 6.42785 14.568C5.25538 14.9745 3.45338 15.6466 1.87966 16.2166C1.2476 16.4454 1.04585 16.7436 0.856025 17.1469C0.733154 17.408 0.641167 17.7392 0.534004 18.1739C0.464288 18.4566 0.362329 18.7102 0.292154 18.8777C0.116104 18.8936 0.109356 18.8442 0.0536894 18.9579C-0.00478656 19.0771 0.0278264 19.2361 0.014906 19.432C-0.0139981 19.8748 -0.00741203 20.4587 0.0938557 20.8563C0.191001 21.2375 0.27997 21.4224 0.450331 21.563C0.580664 21.6704 0.735181 21.7527 0.918761 21.7593L1.67262 21.7866C2.17981 21.7352 2.20482 21.8241 2.11974 21.2218C2.10007 21.0819 2.08973 20.9391 2.08973 20.7938C2.08973 19.0972 3.48245 17.7217 5.20038 17.7217C6.91834 17.7217 8.31098 19.0972 8.31098 20.7938C8.31098 21.0951 8.26697 21.3865 8.18521 21.6615C8.01147 22.2454 8.09783 22.1519 8.58245 22.199L22.2571 22.1826C22.7556 22.1351 22.9757 22.2609 22.7914 21.5924C22.7212 21.3381 22.6852 21.0701 22.6852 20.7938C22.6852 19.0972 24.0779 17.7217 25.7959 17.7217C27.5137 17.7217 28.9065 19.0972 28.9065 20.7938C28.9065 20.981 28.8895 21.164 28.857 21.3419C28.7966 21.6733 28.8864 21.8489 29.2171 21.8209ZM16.5217 14.878C16.7132 13.1453 16.7588 12.3674 16.906 11.9461C16.9298 11.8781 17.057 11.8142 17.1613 11.8135L21.4081 11.7846C21.6794 11.783 21.8431 11.791 21.8539 12.1499L21.9279 14.6019C21.9372 14.9094 21.9767 15.0648 21.6212 15.0778C19.9207 15.1403 18.672 15.1949 16.9736 15.2172C16.4974 15.2236 16.4693 15.3518 16.5217 14.878ZM9.60768 15.4662C9.6233 15.398 9.70552 15.1403 9.72019 14.8689C9.74504 14.4106 8.98623 14.3765 8.51571 14.4104C9.98012 13.2078 12.4932 11.834 14.3689 11.8306L15.8565 11.8281C16.0428 11.8256 16.0509 11.9154 16.0127 12.0826C15.8835 12.6503 15.7664 13.9907 15.6562 14.7793C15.603 15.1601 15.5213 15.2504 15.169 15.2536C13.7778 15.2663 9.5908 15.5397 9.60768 15.4662ZM22.7023 14.7097C22.6647 13.9095 22.6268 13.1093 22.5891 12.3091C22.5831 12.1836 22.6165 12.0789 22.6394 11.9821C22.6555 11.9138 22.7759 11.8506 22.8798 11.8495C23.8262 11.836 23.4535 11.8388 24.3999 11.8256C24.6553 11.8219 26.2927 12.1435 26.8177 12.5996C27.521 13.2105 28.2483 13.9957 28.4147 14.3158C28.5559 14.5871 28.4935 14.7784 28.1396 14.7916C26.4461 14.8539 24.8881 15.0266 23.1922 15.0491C22.7169 15.0552 22.7247 15.1831 22.7023 14.7097ZM5.20038 18.4309C6.52181 18.4309 7.59306 19.4888 7.59306 20.7938C7.59306 22.0989 6.52181 23.1568 5.20038 23.1568C3.8789 23.1568 2.80766 22.0989 2.80766 20.7938C2.80766 19.4888 3.8789 18.4309 5.20038 18.4309Z" fill={color} />
      </Svg>
    ),
  },
  pickup: {
    name: 'Pickup',
    icon: (
      <Svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/Svg">
        <Path fillRule="evenodd" clipRule="evenodd" d="M32.7597 19.5539C32.8594 19.1535 32.8007 18.5136 32.8158 18.1025C32.8345 17.5945 32.6198 17.76 32.4252 17.6232C32.3841 16.9058 32.4211 15.7012 32.3435 14.9644C32.2529 14.1039 32.0086 13.9971 31.0552 13.999L19.8233 14.0234C19.543 14.024 19.4368 13.9745 19.3773 13.9338C19.177 13.7976 19.0537 12.1607 18.8421 11.21C18.7293 10.7033 18.732 10.4528 18.1698 10.4528H13.1415C12.393 10.4528 11.6471 10.8127 11.0179 11.3267L8.15128 13.6688C5.99613 13.8585 3.7612 14.225 2.02404 14.6786C1.47959 14.8207 1.2572 15.0736 1.26075 15.6828L1.27296 17.7199C1.19102 17.7267 1.0943 17.7431 1.01373 17.7703C0.845315 17.827 0.836846 17.8849 0.825421 18.051C0.816557 18.1832 0.819711 18.3471 0.821484 18.4288C0.828969 18.7545 0.860684 19.686 1.09588 19.8626C1.21111 19.949 1.39627 20.018 1.55897 20.0212L2.0792 20.0315C2.46705 19.9538 2.54171 19.8267 2.61242 19.3874C2.86455 17.8232 4.18864 16.6909 5.78457 16.6963C7.44333 16.6963 8.80603 17.9608 8.98135 19.5835C9.03158 20.0477 9.278 20.0537 9.61719 20.0576L22.5562 20.085C22.8286 20.0858 22.8836 19.9314 22.9036 19.6739C23.0342 18.0076 24.4194 16.6963 26.1089 16.6963C27.781 16.6963 29.1552 17.9812 29.3096 19.6233C29.3504 20.0558 29.3435 20.0995 29.7284 20.1002L30.7716 20.1024C31.2172 20.1034 32.6399 20.035 32.7597 19.5539ZM16.4128 13.7227C16.5601 12.504 16.6279 11.6227 16.686 11.2825C16.7116 11.1341 16.7394 11.0391 16.9216 11.0407H17.6868C17.7473 11.0407 17.7824 11.182 17.7942 11.4009L17.914 13.6046C17.9429 14.1388 17.8864 14.0791 17.6124 14.0791H16.801C16.3807 14.0791 16.3667 14.1045 16.4128 13.7227ZM10.6578 14.0791C10.4882 14.0791 10.7445 13.9754 10.7573 13.7566C10.7792 13.3869 10.1075 13.3594 9.69067 13.3865L11.4312 11.8126C11.6754 11.5918 11.8368 11.4895 12.1417 11.3497C12.5764 11.1507 12.9393 11.0407 13.3289 11.0407H15.8215C15.9863 11.0387 15.9802 11.1087 15.9597 11.2465C15.8859 11.745 15.7458 13.0743 15.6343 13.6965C15.5796 14.002 15.5144 14.0791 15.2029 14.0791H10.6578ZM5.78457 17.3508C7.20105 17.3508 8.34924 18.5067 8.34924 19.932C8.34924 21.3574 7.20105 22.5131 5.78457 22.5131C4.36809 22.5131 3.2199 21.3574 3.2199 19.932C3.2199 18.5067 4.36809 17.3508 5.78457 17.3508ZM26.1089 17.3508C27.5252 17.3508 28.6736 18.5067 28.6736 19.932C28.6736 21.3574 27.5252 22.5131 26.1089 22.5131C24.6924 22.5131 23.5442 21.3574 23.5442 19.932C23.5442 18.5067 24.6924 17.3508 26.1089 17.3508Z" fill={color} />
      </Svg>
    ),
  },
  sedan: {
    name: 'Sedan',
    icon: (
      <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/Svg">
        <Path fillRule="evenodd" clipRule="evenodd" d="M25.7959 16.2861C27.1172 16.2861 28.1886 17.3559 28.1886 18.6757C28.1886 19.9953 27.1172 21.0653 25.7959 21.0653C24.4743 21.0653 23.4032 19.9953 23.4032 18.6757C23.4032 17.3559 24.4743 16.2861 25.7959 16.2861ZM23.5713 12.0492L23.4117 14.1324C23.8806 14.1078 24.3332 14.0862 24.7535 14.0722C24.9069 14.0671 24.9875 14.0071 25.0517 13.9114C25.1436 13.7745 25.2883 13.4615 25.3403 13.3094C25.3795 13.1953 25.3709 13.142 25.2726 13.0074C25.1404 12.8271 24.2625 12.3694 23.5713 12.0492ZM23.0561 14.1515L23.2523 11.9054C23.0423 11.8134 22.873 11.7465 22.7839 11.7216C22.2445 11.5629 21.6797 11.4633 21.1332 11.4569L19.3039 11.435C19.1995 11.4339 19.0724 11.4932 19.0484 11.5551C18.9013 11.936 18.8667 12.4547 18.6751 14.0218C18.6226 14.4505 18.6507 14.3344 19.127 14.3286C20.3004 14.3144 21.726 14.2247 23.0561 14.1515ZM29.5016 19.7331C29.9871 19.696 30.5375 19.6503 30.9716 19.5757C31.3111 19.5175 31.5797 19.4419 31.6902 19.3391C32.0419 19.0129 32.0016 17.9958 31.9956 17.4743C31.994 17.3473 31.672 17.3471 31.6644 17.2149C31.6177 16.4107 31.5612 15.5208 31.4735 14.6948C31.3678 13.7032 29.3321 13.6666 28.0847 13.2724C27.1973 12.992 26.4665 12.3905 25.3269 11.8872C24.072 11.3329 22.9769 10.8248 21.6572 10.8248C19.5132 10.8248 16.3262 10.5693 14.3298 11.2029C12.4184 11.8095 10.6766 12.906 8.86357 13.7609C6.66933 13.9935 4.2332 14.4386 2.01037 14.989C1.2912 15.167 0.978143 15.4996 0.757275 15.9268C0.516439 16.3923 0.402251 16.8291 0.292209 17.0932C0.11609 17.1077 0.10941 17.0628 0.0536753 17.1659C-0.00480067 17.2737 0.0278119 17.4173 0.0149375 17.5944C-0.0140126 17.9951 -0.00742614 18.523 0.0938415 18.8825C0.190987 19.2275 0.279956 19.3945 0.450363 19.5215C0.580604 19.6185 0.735234 19.693 0.918746 19.699L1.73294 19.7257C2.21887 19.6362 2.12733 19.5739 2.09651 18.9565C2.0919 18.8641 2.08972 18.7702 2.08972 18.6757C2.08972 16.96 3.48247 15.5691 5.20036 15.5691C6.91837 15.5691 8.31103 16.96 8.31103 18.6757C8.31103 18.85 8.30749 19.0216 8.29579 19.1882C8.2228 20.2288 8.1257 20.0491 9.07071 20.0963L22.1219 20.082C22.8163 19.9863 22.7769 20.0737 22.7042 19.202C22.6899 19.0308 22.6853 18.8549 22.6853 18.6757C22.6853 16.96 24.078 15.5691 25.7959 15.5691C27.5138 15.5691 28.9064 16.96 28.9064 18.6757C28.9064 18.8229 28.9023 18.9692 28.891 19.1139C28.8353 19.8271 29.0352 19.769 29.5016 19.7331ZM12.2179 14.5731C12.2336 14.5115 12.3157 14.2783 12.3304 14.0331C12.3553 13.6188 11.5964 13.5877 11.126 13.6183C12.0385 12.9407 13.3925 12.2194 14.6048 11.7998C15.0314 11.6572 16.1884 11.4739 16.9899 11.4569L18.0208 11.435C18.2071 11.4327 18.2318 11.5192 18.177 11.6655C17.9934 12.1571 17.9199 13.2193 17.8096 13.9325C17.7564 14.2769 17.6749 14.3585 17.3225 14.3613C15.9312 14.373 12.201 14.6398 12.2179 14.5731ZM5.20036 16.2861C6.52179 16.2861 7.59304 17.3559 7.59304 18.6757C7.59304 19.9953 6.52179 21.0653 5.20036 21.0653C3.87895 21.0653 2.80769 19.9953 2.80769 18.6757C2.80769 17.3559 3.87895 16.2861 5.20036 16.2861Z" fill={color} />
      </Svg>
    ),
  },
  suv: {
    name: 'Large SUV',
    icon: (
      <Svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/Svg">
        <Path fillRule="evenodd" clipRule="evenodd" d="M31.8057 19.9155C31.829 19.9088 31.852 19.9033 31.8749 19.8996C32.2947 19.8278 32.4815 19.8748 32.549 19.3345C32.6299 18.6874 32.6009 17.6695 32.6338 17.2693C32.6564 16.9937 32.6158 16.7352 32.3198 16.6737C32.1541 16.6393 31.9825 16.6049 31.9786 16.5342C31.922 15.5657 31.7757 14.7795 31.5567 14.0619C31.1916 12.8654 30.8197 11.8581 30.1257 10.508C29.7498 9.77663 29.8898 9.81673 28.9323 9.81632C25.4881 9.8151 21.8555 9.78599 18.3586 9.85358C16.021 9.89877 13.7401 9.91403 12.767 10.2226C11.5054 10.9186 10.322 12.6296 9.43643 13.3301C7.16089 13.5707 4.66125 13.7425 2.3559 14.3127C1.54296 14.5138 1.27762 14.5413 1.1225 15.3818C1.03066 15.8788 1.01434 16.4231 0.953718 16.7154C0.89065 16.7203 0.848597 16.7181 0.817982 16.7177C0.697561 16.7152 0.669602 16.8534 0.665315 16.9925C0.648783 17.503 0.603879 18.5998 0.691439 19.2248C0.76512 19.749 1.06903 19.9155 1.52908 19.9155H2.36365C3.01862 19.9155 2.90208 19.8556 2.9476 19.2309C3.07577 17.4713 4.54777 16.0835 6.34489 16.0835C8.13937 16.0835 9.61013 17.468 9.74137 19.2246C9.79219 19.9041 9.6534 19.9155 10.35 19.9155H23.7649C24.5599 19.9155 24.4047 19.8707 24.4919 19.0974C24.6827 17.4016 26.1253 16.0835 27.8765 16.0835C29.6594 16.0835 31.1224 17.4497 31.2705 19.1892C31.3038 19.5796 31.1969 19.9155 31.5947 19.9155H31.8057ZM6.34489 16.771C7.84525 16.771 9.0617 17.9842 9.0617 19.4809C9.0617 20.9775 7.84525 22.191 6.34489 22.191C4.84412 22.191 3.62766 20.9775 3.62766 19.4809C3.62766 17.9842 4.84412 16.771 6.34489 16.771ZM27.8765 16.771C29.3773 16.771 30.5937 17.9842 30.5937 19.4809C30.5937 20.9775 29.3773 22.191 27.8765 22.191C26.376 22.191 25.1595 20.9775 25.1595 19.4809C25.1595 17.9842 26.376 16.771 27.8765 16.771ZM12.123 13.7871C12.1396 13.7232 12.2518 13.5227 12.2669 13.2686C12.2929 12.8393 11.5058 12.8073 11.018 12.8391C11.7189 11.8805 12.3112 11.3921 12.9799 10.8474C13.4222 10.6998 15.9904 10.618 16.8217 10.6005C17.1779 10.5929 17.5342 10.5854 17.8906 10.5779C18.0837 10.5754 18.1094 10.665 18.0524 10.8165C17.9573 11.3459 17.7859 12.4258 17.6716 13.1646C17.6163 13.521 17.5316 13.7275 17.1662 13.7216C15.7234 13.7995 12.1055 13.909 12.123 13.7871ZM24.21 13.2149C24.1457 12.5871 23.8194 11.6291 23.6181 10.9923C23.543 10.7548 23.4577 10.5172 23.1856 10.5247C21.8081 10.5638 20.5741 10.5392 19.2213 10.5779C19.1129 10.5768 18.9813 10.6383 18.9564 10.7022C18.8035 11.0968 18.768 11.6342 18.5692 13.2568C18.5147 13.7008 18.5439 13.7612 19.0378 13.7553C20.1198 13.7553 22.1731 13.7641 23.6577 13.7224C24.1031 13.71 24.2653 13.7568 24.21 13.2149ZM26.0982 13.2647C25.8655 12.7654 25.4979 11.8992 25.153 11.1189C24.9534 10.6672 24.946 10.5253 25.4695 10.5172C26.5041 10.5007 28.4754 10.5243 29.2307 10.5372C29.2989 10.5359 29.4951 10.6383 29.5289 10.7022C29.7377 11.0968 29.9404 11.4984 30.527 13.1212C30.6876 13.5652 30.6078 13.7275 30.2931 13.7216C29.5824 13.7081 27.8039 13.724 26.7513 13.7224C26.4249 13.7218 26.2266 13.5404 26.0982 13.2647Z" fill={color} />
      </Svg>
    ),
  },
  van: {
    name: 'Van',
    icon: (
      <Svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/Svg">
        <Path fillRule="evenodd" clipRule="evenodd" d="M30.0021 22.3339C30.5415 22.2853 31.2824 22.2326 31.8306 22.1261C32.1569 22.0625 32.4151 21.98 32.5216 21.8679C32.8598 21.5119 32.8211 20.4025 32.8151 19.8335C32.8138 19.6951 32.4919 19.6949 32.4967 19.5504C32.4875 16.5914 32.4501 14.6034 32.2942 10.9351C32.2586 10.5567 31.9466 10.3478 31.598 10.3169C31.2027 10.2816 30.8192 10.2939 29.9222 10.2975L11.8574 10.3873C10.5894 10.3944 9.7059 10.4285 8.63267 11.2062C7.53457 12.0021 6.72716 13.6729 6.25205 14.6157C5.20659 14.9871 3.60765 15.4691 2.14449 16.0011C1.78086 16.1333 1.45803 16.2102 1.39523 16.657C1.34333 17.0262 1.34333 17.625 1.34289 18.0702C1.34226 18.676 1.38028 19.1063 1.31259 19.3051C1.26216 19.4532 0.946411 19.3395 0.870974 19.4971C0.814837 19.6148 0.846153 19.7713 0.833852 19.9646C0.80597 20.4016 0.812307 20.9775 0.909662 21.3698C1.00308 21.746 1.08866 21.9283 1.25258 22.0668C1.37782 22.1727 1.52647 22.2541 1.70302 22.2605L2.635 22.2951C3.04832 22.261 2.9118 22.1938 2.85022 21.6706C2.83631 21.5518 2.82905 21.4309 2.82905 21.3081C2.82905 19.6344 4.16839 18.2776 5.82034 18.2776C7.47251 18.2776 8.8118 19.6344 8.8118 21.3081C8.8118 21.581 8.77615 21.8452 8.70947 22.0964C8.56599 22.6382 8.54948 22.6948 9.15421 22.6944L23.6076 22.6779C23.8406 22.6776 23.9702 22.6727 24.018 22.6047C24.0651 22.5379 24.0336 22.3664 23.9588 22.0764C23.8956 21.8311 23.8617 21.5736 23.8617 21.3081C23.8617 19.6344 25.201 18.2776 26.853 18.2776C28.5052 18.2776 29.8445 19.6344 29.8445 21.3081C29.8445 21.5591 29.8144 21.8028 29.7576 22.036C29.7059 22.2485 29.784 22.3533 30.0021 22.3339ZM8.27573 15.2709C8.29069 15.2038 8.3697 14.9494 8.38378 14.6819C8.40777 14.2298 7.70599 14.4788 7.25355 14.512C7.62787 13.7522 8.15316 12.683 8.80608 11.9916C9.43369 11.327 10.1291 11.2098 11.0265 11.2057L12.4877 11.1995C12.6666 11.1968 12.7328 11.2871 12.7093 11.4545C12.6305 12.0141 12.5478 13.5048 12.3814 14.2826C12.3024 14.6529 12.0786 14.7441 11.7456 14.8068C10.4077 15.0596 8.25945 15.3434 8.27573 15.2709ZM5.8204 18.977C7.09114 18.977 8.12147 20.0208 8.12147 21.3081C8.12147 22.5956 7.09114 23.6392 5.8204 23.6392C4.54962 23.6392 3.51943 22.5956 3.51943 21.3081C3.51943 20.0208 4.54962 18.977 5.8204 18.977ZM26.8392 18.977C28.11 18.977 29.1401 20.0208 29.1401 21.3081C29.1401 22.5956 28.11 23.6392 26.8392 23.6392C25.5685 23.6392 24.5382 22.5956 24.5382 21.3081C24.5382 20.0208 25.5685 18.977 26.8392 18.977Z" fill={color} />
      </Svg>
    ),
  },
});

export default icons;
