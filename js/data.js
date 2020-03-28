var countryList = ["Turkey", "China", "Italy", "Spain", "USA", "Germany", "Iran", "France", "South Korea", "Switzerland", "England", "Netherlands", "Belgium", "Austria", "Norway", "Sweden", "Portugal", "Denmark", "Canada", "Malaysia", "Australia", "Brazil", "Ireland", "Poland", "Greece", "Indonesia", "Philippines", "Hong Kong", "Iraq", "Algeria","Israel","India"];
var data = {
    "China": {
        data: {
            totalCase: [571, 830, 1287, 1975, 2744, 4515, 5974, 7711, 9692, 11791, 14380, 17205, 20440, 24324, 28018, 31161, 34546, 37198, 40171, 42638, 44653, 58761, 63851, 66492, 68500, 70548, 72436, 74185, 74576, 75465, 76288, 76936, 77150, 77658, 78064, 78497, 78824, 79251, 79824, 80026, 80151, 80270, 80409, 80552, 80651, 80695, 80735, 80754, 80778, 80793, 80813, 80824, 80844, 80860, 80881, 80894, 80928, 80967, 81008, 81054, 81093, 81171, 81218, 81285, 81340, 81394],
            newCase: [0, 259, 457, 688, 769, 1771, 1459, 1737, 1981, 2099, 2589, 2825, 3235, 3884, 3694, 3143, 3385, 2652, 2973, 2467, 2015, 14108, 5090, 2641, 2008, 2048, 1888, 1749, 391, 889, 823, 648, 214, 508, 406, 433, 327, 427, 573, 202, 125, 119, 139, 143, 99, 44, 40, 19, 24, 15, 20, 11, 20, 16, 21, 13, 34, 39, 41, 46, 39, 78, 47, 67, 55, 54],
            totalDeath: [17, 25, 41, 56, 80, 106, 132, 170, 213, 259, 304, 361, 425, 490, 563, 636, 722, 811, 908, 1016, 1113, 1259, 1380, 1523, 1665, 1770, 1868, 2004, 2118, 2236, 2345, 2442, 2592, 2663, 2715, 2744, 2788, 2835, 2870, 2912, 2943, 2981, 3012, 3042, 3070, 3097, 3119, 3136, 3158, 3169, 3176, 3189, 3199, 3213, 3226, 3237, 3245, 3248, 3255, 3261, 3270, 3277, 3281, 3287, 3292, 3295],
            newDeath: [0, 8, 16, 15, 24, 26, 26, 38, 43, 46, 45, 57, 64, 65, 73, 73, 86, 89, 97, 108, 97, 146, 121, 143, 142, 105, 98, 136, 114, 118, 109, 97, 150, 71, 52, 29, 44, 47, 35, 42, 31, 38, 31, 30, 28, 27, 22, 17, 22, 11, 7, 13, 10, 14, 13, 11, 8, 3, 7, 6, 9, 7, 4, 6, 5, 3]
        },
        startDate: new Date(2020, 0, 22),
        text: "China"
    },
    "Italy": {
        data: {
            totalCase: [3, 3, 3, 3, 3, 4, 21, 79, 157, 229, 323, 470, 655, 889, 1128, 1701, 2036, 2502, 3089, 3858, 4636, 5883, 7375, 9172, 10149, 12462, 15113, 17660, 21157, 24747, 27980, 31506, 35713, 41035, 47021, 53578, 59138, 63927, 69176, 74386, 80589, 86498],
            newCase: [0, 0, 0, 0, 0, 1, 17, 58, 78, 72, 94, 147, 185, 234, 239, 573, 335, 466, 587, 769, 778, 1247, 1492, 1797, 977, 2313, 2651, 2547, 3497, 3590, 3233, 3526, 4207, 5322, 5986, 6557, 5560, 4789, 5249, 5210, 6203, 5909],
            totalDeath: [0, 0, 0, 0, 0, 0, 1, 2, 3, 7, 11, 12, 17, 21, 29, 41, 52, 79, 107, 148, 197, 233, 366, 463, 631, 827, 1016, 1266, 1441, 1809, 2158, 2503, 2978, 3405, 4032, 4825, 5476, 6077, 6820, 7503, 8215, 9134],
            newDeath: [0, 0, 0, 0, 0, 0, 1, 1, 1, 4, 4, 1, 5, 4, 8, 12, 11, 27, 28, 41, 49, 36, 133, 97, 168, 196, 189, 250, 175, 368, 349, 345, 475, 427, 627, 793, 651, 601, 743, 683, 712, 919]
        },
        startDate: new Date(2020, 1, 15),
        text: "Italy"
    },
    "Spain": {
        data: {
            totalCase: [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 9, 13, 25, 33, 58, 84, 120, 165, 228, 282, 401, 525, 674, 1231, 1695, 2277, 3146, 5232, 6391, 7988, 9942, 11826, 14769, 18077, 21571, 25496, 28768, 35136, 42058, 49515, 57786, 65719],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 4, 12, 8, 25, 26, 36, 45, 63, 54, 119, 124, 149, 557, 464, 582, 869, 2086, 1159, 1597, 1954, 1884, 2943, 3308, 3494, 3925, 3272, 6368, 6922, 7457, 8271, 7933],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 8, 10, 17, 30, 36, 55, 86, 133, 196, 294, 342, 533, 638, 831, 1093, 1381, 1772, 2311, 2991, 3647, 4365, 5138],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 5, 2, 7, 13, 6, 19, 31, 47, 63, 98, 48, 191, 105, 193, 262, 288, 391, 539, 680, 656, 718, 773]
        },
        startDate: new Date(2020, 1, 15),
        text: "Spain"
    },
    "USA": {
        data: {
            totalCase: [15, 15, 15, 15, 15, 15, 35, 35, 35, 53, 57, 60, 60, 63, 68, 75, 100, 124, 158, 221, 319, 435, 541, 704, 994, 1301, 1630, 2183, 2770, 3613, 4596, 6344, 9197, 13779, 19367, 24192, 33592, 43781, 54856, 68211, 85435, 104126],
            newCase: [0, 0, 0, 0, 0, 0, 20, 0, 0, 18, 4, 3, 0, 3, 5, 7, 25, 24, 34, 63, 98, 116, 106, 163, 290, 307, 329, 553, 587, 843, 983, 1748, 2853, 4582, 5588, 4825, 9400, 10189, 11075, 13355, 17224, 18691],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 6, 9, 11, 12, 15, 19, 22, 26, 30, 38, 41, 48, 57, 69, 87, 110, 150, 206, 255, 301, 414, 555, 780, 1027, 1295, 1696],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 5, 3, 2, 1, 3, 4, 3, 4, 4, 8, 3, 7, 9, 12, 18, 23, 40, 56, 49, 46, 113, 141, 225, 247, 268, 401]
        },
        startDate: new Date(2020, 1, 15),
        text: "USA"
    },
    "Germany": {
        data: {
            totalCase: [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 26, 48, 74, 79, 130, 165, 203, 262, 545, 670, 800, 1040, 1224, 1565, 1966, 2745, 3675, 4599, 5813, 7272, 9367, 12327, 15320, 19848, 22364, 24873, 29056, 32991, 37323, 43938, 50871],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 22, 26, 5, 51, 35, 38, 59, 283, 125, 130, 240, 184, 341, 401, 779, 930, 924, 1214, 1459, 2095, 2960, 2993, 4528, 2516, 2509, 4183, 3935, 4332, 6615, 6933],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 6, 8, 9, 13, 17, 26, 28, 44, 68, 84, 94, 123, 159, 206, 267, 351],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 3, 2, 1, 4, 4, 9, 2, 16, 24, 16, 10, 29, 36, 47, 61, 84]
        },
        startDate: new Date(2020, 1, 15),
        text: "Germany"
    },
    "Iran": {
        data: {
            totalCase: [0, 0, 0, 0, 2, 5, 18, 29, 43, 61, 95, 139, 245, 388, 593, 978, 1501, 2336, 2922, 3513, 4747, 5823, 6566, 7161, 8042, 9000, 10075, 11364, 12729, 13938, 14991, 16169, 17361, 18407, 19644, 20610, 21638, 23049, 24811, 27017, 29406, 32332],
            newCase: [0, 0, 0, 0, 0, 3, 13, 11, 14, 18, 34, 44, 106, 143, 205, 385, 523, 835, 586, 591, 1234, 1076, 743, 595, 881, 958, 1075, 1289, 1365, 1209, 1053, 1178, 1192, 1046, 1237, 966, 1028, 1411, 1762, 2206, 2389, 2926],
            totalDeath: [0, 0, 0, 0, 2, 2, 4, 6, 8, 12, 16, 19, 26, 34, 43, 54, 66, 77, 92, 108, 124, 145, 194, 237, 291, 354, 429, 514, 611, 724, 853, 988, 1135, 1284, 1433, 1556, 1685, 1812, 1934, 2077, 2234, 2378],
            newDeath: [0, 0, 0, 0, 0, 0, 2, 2, 2, 4, 4, 3, 7, 8, 9, 11, 12, 11, 15, 16, 16, 21, 49, 43, 54, 63, 75, 85, 97, 113, 129, 135, 147, 149, 149, 123, 129, 127, 122, 143, 157, 144]
        },
        startDate: new Date(2020, 1, 15),
        text: "Iran"
    },
    "France": {
        data: {
            totalCase: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 14, 18, 38, 57, 100, 130, 191, 212, 285, 423, 653, 949, 1209, 1412, 1784, 2281, 2876, 3661, 4499, 5423, 6633, 7730, 9134, 10995, 12612, 14459, 16018, 19856, 22304, 25233, 29155, 32964],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 20, 19, 43, 30, 61, 21, 73, 138, 230, 296, 260, 203, 372, 497, 595, 785, 838, 924, 1210, 1097, 1404, 1861, 1617, 1847, 1559, 3838, 2448, 2929, 3922, 3809],
            totalDeath: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 4, 4, 7, 9, 16, 19, 30, 33, 48, 61, 79, 91, 127, 148, 175, 264, 372, 450, 562, 674, 860, 1100, 1331, 1696, 1995],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 3, 2, 7, 3, 11, 3, 15, 13, 18, 12, 36, 21, 27, 89, 108, 78, 112, 112, 186, 240, 231, 365, 299]
        },
        startDate: new Date(2020, 1, 15),
        text: "France"
    },
    "South Korea": {
        data: {
            totalCase: [28, 29, 30, 31, 58, 111, 209, 436, 602, 833, 977, 1261, 1766, 2337, 3150, 3736, 4335, 5186, 5621, 6284, 6593, 7041, 7313, 7478, 7513, 7755, 7869, 7979, 8086, 8162, 8236, 8320, 8413, 8565, 8652, 8799, 8897, 8961, 9037, 9137, 9241, 9332],
            newCase: [0, 1, 1, 1, 27, 53, 98, 227, 166, 231, 144, 284, 505, 571, 813, 586, 599, 851, 435, 663, 309, 448, 272, 165, 35, 242, 114, 110, 107, 76, 74, 84, 93, 152, 87, 147, 98, 64, 76, 100, 104, 91],
            totalDeath: [0, 0, 0, 0, 0, 1, 2, 2, 6, 8, 11, 12, 13, 16, 17, 21, 28, 32, 35, 42, 43, 48, 50, 53, 60, 60, 66, 67, 72, 75, 75, 81, 84, 91, 94, 102, 104, 111, 120, 126, 131, 139],
            newDeath: [0, 0, 0, 0, 0, 1, 1, 0, 4, 2, 3, 1, 1, 3, 1, 4, 7, 4, 3, 7, 1, 5, 2, 3, 7, 0, 6, 1, 5, 3, 0, 6, 3, 7, 3, 8, 2, 7, 9, 6, 5, 8]
        },
        startDate: new Date(2020, 1, 15),
        text: "South Korea"
    },
    "Switzerland": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 8, 15, 19, 24, 30, 58, 93, 120, 214, 268, 332, 374, 497, 652, 868, 1139, 1375, 2217, 2353, 2742, 3115, 4222, 5615, 6863, 7474, 8795, 9877, 10897, 11811, 12928],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 4, 5, 6, 28, 35, 27, 94, 54, 64, 42, 123, 155, 216, 271, 236, 842, 136, 389, 373, 1107, 1393, 1248, 611, 1321, 1082, 1020, 914, 1117],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 4, 7, 11, 13, 14, 19, 27, 33, 43, 56, 80, 98, 120, 122, 153, 192, 231],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 3, 4, 2, 1, 5, 8, 6, 10, 13, 24, 18, 22, 2, 31, 39, 39]
        },
        startDate: new Date(2020, 1, 15),
        text: "Switzerland"
    },
    "England": {
        data: {
            totalCase: [9, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 16, 20, 23, 36, 39, 51, 87, 116, 164, 209, 278, 321, 383, 460, 590, 798, 1140, 1391, 1543, 1950, 2626, 3269, 3983, 5018, 5683, 6650, 8077, 9529, 11658, 14543],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 3, 4, 3, 13, 3, 12, 36, 29, 48, 45, 69, 43, 62, 77, 130, 208, 342, 251, 152, 407, 676, 643, 714, 1035, 665, 967, 1427, 1452, 2129, 2885],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 5, 6, 8, 10, 11, 21, 35, 55, 71, 104, 144, 177, 233, 281, 335, 422, 463, 578, 759],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 2, 1, 2, 2, 1, 10, 14, 20, 16, 33, 40, 33, 56, 48, 54, 87, 41, 115, 181]
        },
        startDate: new Date(2020, 1, 15),
        text: "England"
    },
    "Netherlands": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 7, 10, 18, 23, 38, 82, 128, 188, 265, 321, 382, 503, 614, 804, 959, 1135, 1413, 1705, 2051, 2460, 2994, 3631, 4204, 4749, 5560, 6412, 7431, 8603],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 3, 8, 5, 15, 44, 46, 60, 77, 56, 61, 121, 111, 190, 155, 176, 278, 292, 346, 409, 534, 637, 573, 545, 811, 852, 1019, 1172],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 4, 4, 5, 5, 10, 12, 20, 24, 43, 58, 76, 106, 136, 179, 213, 276, 356, 434, 546],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 1, 0, 5, 2, 8, 4, 19, 15, 18, 30, 30, 43, 34, 63, 80, 78, 112]
        },
        startDate: new Date(2020, 1, 15),
        text: "Netherlands"
    },
    "Belgium": {
        data: {
            totalCase: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 8, 15, 23, 50, 109, 169, 200, 239, 267, 314, 399, 559, 689, 886, 1058, 1243, 1486, 1795, 2257, 2815, 3401, 3743, 4269, 4937, 6235, 7284],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 7, 8, 27, 59, 60, 31, 39, 28, 47, 85, 160, 130, 197, 172, 185, 243, 309, 462, 558, 586, 342, 526, 668, 1298, 1049],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 4, 4, 10, 10, 14, 21, 37, 67, 75, 88, 122, 178, 220, 289],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 6, 0, 4, 7, 16, 30, 8, 13, 34, 56, 42, 69]
        },
        startDate: new Date(2020, 1, 15),
        text: "Belgium"
    },
    "Austria": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 5, 7, 10, 14, 18, 24, 29, 43, 66, 81, 104, 131, 182, 246, 361, 504, 655, 860, 1018, 1332, 1646, 2179, 2649, 2992, 3582, 4474, 5283, 5588, 6909, 7697],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 3, 4, 4, 6, 5, 14, 23, 15, 23, 27, 51, 64, 115, 143, 151, 205, 158, 314, 314, 533, 470, 343, 590, 892, 809, 305, 1321, 788],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 3, 4, 4, 6, 6, 8, 16, 21, 28, 31, 49, 58],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 1, 0, 2, 0, 2, 8, 5, 7, 3, 18, 9]
        },
        startDate: new Date(2020, 1, 15),
        text: "Austria"
    },
    "Norway": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 6, 15, 19, 25, 33, 59, 94, 127, 156, 176, 227, 400, 629, 800, 996, 1109, 1256, 1348, 1471, 1591, 1790, 1959, 2164, 2385, 2625, 2866, 3084, 3372, 3771],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 9, 4, 6, 8, 26, 35, 33, 29, 20, 51, 173, 229, 171, 196, 113, 147, 92, 123, 120, 199, 169, 205, 221, 240, 241, 218, 288, 399],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 6, 7, 7, 7, 7, 10, 12, 14, 14, 19],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 3, 1, 0, 0, 0, 3, 2, 2, 0, 5]
        },
        startDate: new Date(2020, 1, 15),
        text: "Norway"
    },
    "Sweden": {
        data: {
            totalCase: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 7, 11, 13, 14, 15, 30, 52, 94, 137, 161, 203, 260, 355, 500, 687, 814, 961, 1040, 1121, 1196, 1301, 1439, 1639, 1770, 1934, 2046, 2299, 2526, 2840, 3069],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 4, 2, 1, 1, 15, 22, 42, 43, 24, 42, 57, 95, 145, 187, 127, 147, 79, 81, 75, 105, 138, 200, 131, 164, 112, 253, 227, 314, 229],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 3, 7, 8, 10, 11, 16, 20, 21, 27, 40, 62, 77, 105],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 4, 1, 2, 1, 5, 4, 1, 6, 13, 22, 15, 28]
        },
        startDate: new Date(2020, 1, 15),
        text: "Sweden"
    },
    "Portugal": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 6, 9, 13, 21, 30, 39, 41, 61, 78, 112, 169, 245, 331, 448, 642, 786, 1020, 1280, 1600, 2060, 2362, 2995, 3544, 4268],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 4, 8, 9, 9, 2, 20, 17, 34, 57, 76, 86, 117, 194, 144, 234, 260, 320, 460, 302, 633, 549, 724],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 6, 12, 14, 23, 33, 43, 60, 76],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 2, 6, 2, 9, 10, 10, 17, 16]
        },
        startDate: new Date(2020, 1, 15),
        text: "Portugal"
    },
    "Denmark": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 4, 10, 14, 19, 21, 27, 35, 90, 262, 514, 674, 804, 836, 864, 914, 977, 1057, 1151, 1255, 1326, 1395, 1460, 1591, 1724, 1877, 2046],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 6, 4, 5, 2, 6, 8, 55, 172, 252, 160, 130, 32, 28, 50, 63, 80, 94, 104, 71, 69, 65, 131, 133, 153, 169],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 4, 4, 6, 9, 13, 13, 24, 32, 34, 41, 52],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 2, 3, 4, 0, 11, 8, 2, 7, 11]
        },
        startDate: new Date(2020, 1, 15),
        text: "Denmark"
    },
    "Canada": {
        data: {
            totalCase: [8, 8, 8, 8, 8, 8, 9, 9, 10, 11, 11, 12, 14, 15, 20, 24, 27, 30, 34, 37, 54, 60, 66, 77, 95, 110, 142, 198, 252, 341, 441, 598, 727, 873, 1087, 1328, 1470, 2091, 2792, 3409, 4043, 4757],
            newCase: [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 2, 1, 5, 4, 3, 3, 4, 3, 17, 6, 6, 11, 18, 15, 32, 56, 54, 89, 100, 157, 129, 146, 214, 241, 142, 621, 701, 617, 634, 714],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 4, 8, 9, 12, 12, 19, 20, 24, 26, 36, 39, 55],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 4, 1, 3, 0, 7, 1, 4, 2, 10, 3, 16]
        },
        startDate: new Date(2020, 1, 15),
        text: "Canada"
    },
    "Malaysia": {
        data: {
            totalCase: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 25, 25, 29, 29, 36, 50, 55, 83, 93, 99, 117, 129, 149, 158, 197, 238, 428, 566, 673, 790, 900, 1030, 1183, 1306, 1518, 1624, 1796, 2031, 2161],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 4, 0, 7, 14, 5, 28, 10, 6, 18, 12, 20, 9, 39, 41, 190, 138, 107, 117, 110, 130, 153, 123, 212, 106, 172, 235, 130],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 8, 10, 14, 16, 20, 23, 26],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 5, 2, 4, 2, 4, 3, 3]
        },
        startDate: new Date(2020, 1, 15),
        text: "Malaysia"
    },
    "Australia": {
        data: {
            totalCase: [15, 15, 15, 15, 15, 17, 19, 21, 22, 22, 22, 23, 23, 25, 25, 29, 33, 39, 53, 60, 63, 74, 83, 93, 116, 128, 156, 199, 248, 300, 401, 455, 596, 756, 928, 1072, 1609, 1887, 2317, 2676, 3050, 3378],
            newCase: [0, 0, 0, 0, 0, 2, 2, 2, 1, 0, 0, 1, 0, 2, 0, 4, 4, 6, 14, 7, 3, 11, 9, 10, 23, 12, 28, 43, 49, 52, 101, 54, 141, 160, 172, 144, 537, 278, 430, 359, 374, 328],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 6, 7, 7, 7, 7, 7, 8, 11, 13, 13],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 3, 2, 0]
        },
        startDate: new Date(2020, 1, 15),
        text: "Australia"
    },
    "Brazil": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 8, 13, 19, 25, 25, 34, 52, 77, 151, 151, 200, 234, 346, 529, 640, 970, 1178, 1546, 1924, 2247, 2554, 2985, 3417],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 5, 6, 6, 0, 9, 18, 25, 74, 0, 49, 34, 112, 183, 111, 330, 208, 368, 378, 323, 307, 431, 432],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 7, 11, 18, 25, 34, 46, 59, 77, 92],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 4, 7, 7, 9, 12, 13, 18, 15]
        },
        startDate: new Date(2020, 1, 15),
        text: "Brazil"
    },
    "Ireland": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 6, 13, 18, 19, 21, 24, 34, 43, 70, 90, 129, 170, 223, 292, 366, 557, 683, 785, 906, 1125, 1329, 1564, 1819, 2121],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 7, 5, 1, 2, 3, 10, 9, 27, 20, 39, 41, 53, 69, 74, 191, 126, 102, 121, 219, 204, 235, 255, 302],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 6, 7, 9, 19, 22],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 2, 1, 2, 10, 3]
        },
        startDate: new Date(2020, 1, 15),
        text: "Ireland"
    },
    "Poland": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 6, 11, 17, 22, 31, 51, 68, 104, 125, 177, 238, 287, 355, 425, 536, 634, 749, 901, 1051, 1221, 1389],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 5, 6, 5, 9, 20, 17, 36, 21, 52, 61, 49, 68, 70, 111, 98, 115, 152, 150, 170, 168],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 4, 5, 5, 5, 5, 5, 7, 8, 10, 14, 16, 16],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 2, 1, 2, 4, 2, 0]
        },
        startDate: new Date(2020, 1, 15),
        text: "Poland"
    },
    "Greece": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 4, 7, 7, 7, 7, 9, 31, 45, 66, 73, 84, 89, 99, 117, 190, 228, 331, 352, 387, 418, 464, 495, 530, 624, 695, 743, 821, 892, 966],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 3, 0, 0, 0, 2, 22, 14, 21, 7, 11, 5, 10, 18, 73, 38, 103, 21, 35, 31, 46, 31, 35, 94, 71, 48, 78, 71, 74],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 4, 4, 5, 5, 6, 10, 13, 15, 17, 20, 22, 27, 28],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 1, 0, 1, 4, 3, 2, 2, 3, 2, 5, 1]
        },
        startDate: new Date(2020, 1, 15),
        text: "Greece"
    },
    "Indonesia": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 6, 19, 27, 34, 34, 69, 96, 117, 134, 172, 227, 309, 369, 450, 514, 579, 686, 790, 893, 1046],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 13, 8, 7, 0, 35, 27, 21, 17, 38, 55, 82, 60, 81, 64, 65, 107, 104, 103, 153],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4, 5, 5, 5, 7, 19, 25, 32, 38, 48, 49, 55, 58, 78, 87],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3, 1, 0, 0, 2, 12, 6, 7, 6, 10, 1, 6, 3, 20, 9]
        },
        startDate: new Date(2020, 1, 15),
        text: "Indonesia"
    },
    "Philippines": {
        data: {
            totalCase: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 6, 10, 24, 33, 49, 52, 64, 111, 140, 142, 187, 202, 217, 230, 307, 380, 462, 552, 636, 707, 803],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 4, 14, 9, 16, 3, 12, 47, 29, 2, 45, 15, 15, 13, 77, 73, 82, 90, 84, 71, 96],
            totalDeath: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 5, 8, 12, 12, 14, 17, 17, 18, 19, 25, 33, 35, 38, 45, 54],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 3, 4, 0, 2, 3, 0, 1, 1, 6, 8, 2, 3, 7, 9]
        },
        startDate: new Date(2020, 1, 15),
        text: "Philippines"
    },
    "Hong Kong": {
        data: {
            totalCase: [56, 57, 60, 62, 65, 69, 69, 70, 74, 81, 85, 89, 92, 93, 95, 100, 100, 101, 103, 105, 108, 108, 115, 116, 121, 130, 131, 132, 142, 149, 155, 168, 193, 208, 256, 274, 318, 357, 387, 411, 454, 519],
            newCase: [0, 1, 3, 2, 3, 4, 0, 1, 4, 7, 4, 4, 3, 1, 2, 5, 0, 1, 2, 2, 3, 0, 7, 1, 5, 9, 1, 1, 10, 7, 6, 13, 25, 15, 48, 18, 44, 39, 30, 24, 43, 65],
            totalDeath: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            newDeath: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        startDate: new Date(2020, 1, 15),
        text: "Hong Kong"
    },
    "Iraq": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 5, 5, 7, 8, 13, 19, 27, 32, 37, 40, 46, 54, 65, 71, 71, 71, 83, 101, 110, 124, 133, 154, 164, 192, 208, 214, 233, 266, 316, 346, 382, 458],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 2, 1, 5, 6, 8, 5, 5, 3, 6, 8, 11, 6, 0, 0, 12, 18, 9, 14, 9, 21, 10, 28, 16, 6, 19, 33, 50, 30, 36, 76],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 4, 6, 7, 7, 7, 8, 9, 10, 10, 10, 11, 12, 13, 17, 17, 20, 23, 27, 29, 36, 40],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 2, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 4, 0, 3, 3, 4, 2, 7, 4]
        },
        startDate: new Date(2020, 1, 15),
        text: "Iraq"
    },
    "Algeria": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 5, 8, 17, 17, 17, 19, 20, 20, 20, 20, 26, 26, 39, 54, 60, 61, 75, 90, 94, 139, 201, 230, 264, 302, 367, 409],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 9, 0, 0, 2, 1, 0, 0, 0, 6, 0, 13, 15, 6, 1, 14, 15, 4, 45, 62, 29, 34, 38, 65, 42],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 4, 4, 5, 7, 9, 11, 15, 17, 17, 19, 21, 25, 26],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 0, 1, 2, 2, 2, 4, 2, 0, 2, 2, 4, 1]
        },
        startDate: new Date(2020, 1, 15),
        text: "Algeria"
    },
    "Turkey": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 5, 6, 18, 47, 98, 191, 359, 670, 947, 1236, 1529, 1872, 2433, 3629, 5698],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 12, 29, 51, 93, 168, 311, 277, 289, 293, 343, 561, 1196, 2069],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 9, 21, 30, 37, 44, 59, 75, 92],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 12, 9, 7, 7, 15, 16, 17]
        },
        startDate: new Date(2020, 1, 15),
        text: "Turkey"
    },
    "Israel": {
        data: {
            totalCase: [0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 3, 7, 7, 10, 12, 12, 15, 17, 21, 25, 39, 50, 75, 97, 109, 143, 193, 213, 298, 337, 433, 677, 705, 883, 1071, 1442, 1930, 2369, 2693, 3035],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 4, 0, 3, 2, 0, 3, 2, 4, 4, 14, 11, 25, 22, 12, 34, 50, 20, 85, 39, 96, 244, 28, 178, 188, 371, 488, 439, 324, 342],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 3, 5, 8, 12],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 2, 3, 4]
        },
        startDate: new Date(2020, 1, 15),
        text: "Israel"
    },
    "India": {
        data: {
            totalCase: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 7, 29, 30, 31, 34, 40, 47, 62, 62, 74, 82, 100, 114, 129, 143, 169, 194, 249, 332, 396, 499, 536, 657, 727, 887],
            newCase: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 22, 1, 1, 3, 6, 7, 15, 0, 12, 8, 18, 14, 15, 14, 26, 25, 55, 83, 64, 103, 37, 121, 70, 160],
            totalDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 7, 10, 10, 12, 20, 20],
            newDeath: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 2, 3, 0, 2, 8, 0]
        },
        startDate: new Date(2020, 1, 15),
        text: "India"
    }
}