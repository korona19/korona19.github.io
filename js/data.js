var countryList = ["France", "Poland", "Sweden", "Australia", "Israel", "Iran", "Switzerland", "Greece", "Brazil", "Austria", "USA", "Hong Kong", "Portugal", "Canada", "Belgium", "Netherlands", "Malaysia", "Philippines", "Turkey", "India", "Italy", "Ireland", "Norway", "Denmark", "China", "Spain", "Iraq", "Indonesia", "England", "South Korea", "Algeria", "Germany"]
var data = {"Sweden": {startDate: new Date(2020, 1, 15), text: "Sweden", data: {totalCase: [1,1,1,1,1,1,1,1,1,1,1,2,7,11,13,14,15,30,52,94,137,161,203,260,355,500,687,814,961,1040,1121,1196,1301,1439,1639,1770,1934,2046,2299,2526,2840,3069,3447,3700,4028,4435,4947,5568,6131,6443,6830,7206,7693,8419,9141,9685,10151,10483,10948,11445,11927,12540,13216,13822,14385,14777,15322,16004,16755,17567,18177,18640,18926,19621,20302,21092,21520,22082,22317,22721,23216,23918,24623,25265,25921,26322,26670,27272,27909,28582,29207,29677,30143,30377,30799,31523], accRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.20999999999999996, -0.35, -0.21, -0.07999999999999999, 0.0, 0.43, -0.08000000000000002, 0.030000000000000027, -0.14, -0.16, 0.06, 0.010000000000000009, 0.05000000000000002, 0.019999999999999962, -0.019999999999999962, -0.11000000000000001, -0.010000000000000009, -0.06999999999999999, -0.009999999999999995, -0.010000000000000009, 0.020000000000000004, 0.020000000000000004, 0.01999999999999999, -0.04999999999999999, 0.009999999999999995, -0.03, 0.06, -0.020000000000000004, 0.020000000000000004, -0.039999999999999994, 0.039999999999999994, -0.039999999999999994, 0.009999999999999995, 0.009999999999999995, 0.010000000000000009, 0.009999999999999995, -0.020000000000000004, -0.039999999999999994, 0.009999999999999995, -0.009999999999999995, 0.009999999999999995, 0.03, -0.009999999999999995, -0.020000000000000004, -0.009999999999999995, -0.020000000000000004, 0.010000000000000002, 0.0, 0.0, 0.010000000000000002, 0.0, -0.010000000000000002, 0.0, -0.010000000000000002, 0.010000000000000002, 0.0, 0.0, 0.010000000000000002, -0.020000000000000004, -0.009999999999999998, 0.0, 0.02, -0.010000000000000002, 0.010000000000000002, -0.02, 0.009999999999999998, -0.019999999999999997, 0.01, 0.0, 0.009999999999999998, 0.0, 0.0, 0.0, -0.009999999999999998, -0.01, 0.01, 0.0, 0.0, 0.0, 0.0, 0.0, -0.01, 0.0, 0.01], newCase: [0,0,0,0,0,0,0,0,0,0,0,1,5,4,2,1,1,15,22,42,43,24,42,57,95,145,187,127,147,79,81,75,105,138,200,131,164,112,253,227,314,229,378,253,328,407,512,621,563,312,387,376,487,726,722,544,466,332,465,497,482,613,676,606,563,392,545,682,751,812,610,463,286,695,681,790,428,562,235,404,495,702,705,642,656,401,348,602,637,673,625,470,466,234,422,724], totalDeath: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,3,7,8,10,11,16,20,21,27,40,62,77,105,105,110,146,180,239,308,358,373,401,477,591,687,793,870,887,899,919,1033,1203,1333,1400,1511,1540,1580,1765,1937,2021,2152,2192,2194,2274,2355,2462,2586,2653,2669,2679,2769,2854,2941,3040,3175,3220,3225,3256,3313,3460,3529,3646,3674,3679,3698,3743,3831], deathRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.02, 0.02, 0.03, 0.03, 0.03, 0.03, 0.04, 0.04, 0.05, 0.06, 0.06, 0.06, 0.06, 0.07, 0.08, 0.08, 0.09, 0.09, 0.09, 0.09, 0.08, 0.09, 0.1, 0.11, 0.11, 0.11, 0.11, 0.11, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.13, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12], newDeath: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,4,1,2,1,5,4,1,6,13,22,15,28,0,5,36,34,59,69,50,15,28,76,114,96,106,77,17,12,20,114,170,130,67,111,29,40,185,172,84,131,40,2,80,81,107,124,67,16,10,90,85,87,99,135,45,5,31,57,147,69,117,28,5,19,45,88], increaseRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.71, 0.36, 0.15, 0.07, 0.07, 0.5, 0.42, 0.45, 0.31, 0.15, 0.21, 0.22, 0.27, 0.29, 0.27, 0.16, 0.15, 0.08, 0.07, 0.06, 0.08, 0.1, 0.12, 0.07, 0.08, 0.05, 0.11, 0.09, 0.11, 0.07, 0.11, 0.07, 0.08, 0.09, 0.1, 0.11, 0.09, 0.05, 0.06, 0.05, 0.06, 0.09, 0.08, 0.06, 0.05, 0.03, 0.04, 0.04, 0.04, 0.05, 0.05, 0.04, 0.04, 0.03, 0.04, 0.04, 0.04, 0.05, 0.03, 0.02, 0.02, 0.04, 0.03, 0.04, 0.02, 0.03, 0.01, 0.02, 0.02, 0.03, 0.03, 0.03, 0.03, 0.02, 0.01, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.01, 0.01, 0.02]}}, "England": {startDate: new Date(2020, 1, 15), text: "England", data: {totalCase: [9,9,9,9,9,9,9,9,13,13,13,13,16,20,23,36,39,51,87,116,164,209,278,321,383,460,590,798,1140,1391,1543,1950,2626,3269,3983,5018,5683,6650,8077,9529,11658,14543,17089,19522,22141,25150,29474,33718,38168,41903,47806,51608,55242,60733,65077,73758,78991,84279,88621,93873,98476,103093,108692,114217,120067,124743,129044,133495,138078,143464,148377,152840,157149,161145,165221,171253,177454,182260,186599,190584,194990,201101,206715,211364,215260,219183,223060,226463,229705,233151,236711,240161,243695,246406,248818,248293], accRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.31, -0.31, 0.0, 0.0, 0.19, 0.010000000000000009, -0.07, 0.22999999999999998, -0.27999999999999997, 0.15999999999999998, 0.16999999999999998, -0.15999999999999998, 0.03999999999999998, -0.06999999999999998, 0.03, -0.12, 0.03, 0.010000000000000009, 0.04999999999999999, 0.04000000000000001, 0.03999999999999998, -0.12, -0.07999999999999999, 0.10999999999999999, 0.05000000000000002, -0.06, -0.020000000000000018, 0.03, -0.09, 0.03, 0.03, -0.03, 0.03, 0.020000000000000018, -0.05000000000000002, -0.03, 0.0, 0.0, 0.03, -0.01999999999999999, -0.010000000000000009, -0.03, 0.03, -0.04999999999999999, 0.0, 0.01999999999999999, -0.01999999999999999, 0.04999999999999999, -0.04999999999999999, -0.010000000000000009, -0.009999999999999995, 0.009999999999999995, -0.009999999999999995, -0.010000000000000002, 0.010000000000000002, 0.0, 0.0, -0.010000000000000002, -0.010000000000000002, 0.0, 0.0, 0.010000000000000002, -0.010000000000000002, 0.0, 0.0, -0.009999999999999998, 0.0, 0.02, -0.010000000000000002, 0.0, -0.009999999999999998, 0.0, 0.0, 0.009999999999999998, 0.0, -0.009999999999999998, 0.0, 0.0, 0.0, 0.0, -0.01, 0.0, 0.01, -0.01, 0.0, 0.0, 0.0, -0.01], newCase: [0,0,0,0,0,0,0,0,4,0,0,0,3,4,3,13,3,12,36,29,48,45,69,43,62,77,130,208,342,251,152,407,676,643,714,1035,665,967,1427,1452,2129,2885,2546,2433,2619,3009,4324,4244,4450,3735,5903,3802,3634,5491,4344,8681,5233,5288,4342,5252,4603,4617,5599,5525,5850,4676,4301,4451,4583,5386,4913,4463,4309,3996,4076,6032,6201,4806,4339,3985,4406,6111,5614,4649,3896,3923,3877,3403,3242,3446,3560,3450,3534,2711,2412,-525], totalDeath: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,3,7,7,9,10,28,43,65,81,115,158,194,250,285,359,508,694,877,1161,1455,1669,2043,2425,3095,3747,4461,5221,5865,6433,7471,8505,9608,10760,11599,12285,13029,14073,14915,15944,16879,17994,18492,19051,20223,21060,21787,22792,23635,24055,24393,25302,26097,26771,27510,28131,28446,28734,29427,30076,30615,31241,31587,31855,32065,32692,33186,33614,33998,34466,34636,34796,35341,35704], deathRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.01, 0.01, 0.0, 0.01, 0.01, 0.02, 0.02, 0.02, 0.01, 0.02, 0.03, 0.04, 0.04, 0.04, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06, 0.07, 0.08, 0.08, 0.09, 0.09, 0.09, 0.1, 0.11, 0.11, 0.12, 0.12, 0.12, 0.12, 0.14, 0.14, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.16, 0.16, 0.15, 0.15, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14], newDeath: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,4,0,2,1,18,15,22,16,34,43,36,56,35,74,149,186,183,284,294,214,374,382,670,652,714,760,644,568,1038,1034,1103,1152,839,686,744,1044,842,1029,935,1115,498,559,1172,837,727,1005,843,420,338,909,795,674,739,621,315,288,693,649,539,626,346,268,210,627,494,428,384,468,170,160,545,363], increaseRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.31, 0.0, 0.0, 0.0, 0.19, 0.2, 0.13, 0.36, 0.08, 0.24, 0.41, 0.25, 0.29, 0.22, 0.25, 0.13, 0.16, 0.17, 0.22, 0.26, 0.3, 0.18, 0.1, 0.21, 0.26, 0.2, 0.18, 0.21, 0.12, 0.15, 0.18, 0.15, 0.18, 0.2, 0.15, 0.12, 0.12, 0.12, 0.15, 0.13, 0.12, 0.09, 0.12, 0.07, 0.07, 0.09, 0.07, 0.12, 0.07, 0.06, 0.05, 0.06, 0.05, 0.04, 0.05, 0.05, 0.05, 0.04, 0.03, 0.03, 0.03, 0.04, 0.03, 0.03, 0.03, 0.02, 0.02, 0.04, 0.03, 0.03, 0.02, 0.02, 0.02, 0.03, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.01, 0.01, 0.02, 0.01, 0.01, 0.01, 0.01, -0.0]}}, "USA": {startDate: new Date(2020, 1, 15), text: "USA", data: {totalCase: [15,15,15,15,15,15,35,35,35,53,57,60,60,63,68,75,100,124,158,221,319,435,541,704,994,1301,1630,2183,2771,3617,4604,6357,9317,13898,19551,24418,33840,44189,55398,68905,86379,105217,124788,144980,168177,193353,220295,250708,283477,317994,343747,375348,409225,441569,475515,509604,539942,567708,594693,621953,652474,682454,714822,743901,770014,798145,824229,854385,886274,925232,960651,987160,1010356,1035765,1064194,1095023,1131030,1160774,1188122,1212835,1237633,1263092,1292623,1321785,1347309,1367638,1385834,1408636,1430347,1457593,1484285,1507773,1527664,1550294,1570583,1592723], accRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.57, -0.57, 0.0, 0.34, -0.27, -0.020000000000000004, -0.05, 0.05, 0.020000000000000004, 0.01999999999999999, 0.16, -0.06, 0.03, 0.06999999999999998, 0.020000000000000018, -0.03999999999999998, -0.07, 0.03, 0.05999999999999997, -0.04999999999999999, -0.03999999999999998, 0.04999999999999999, -0.04000000000000001, 0.020000000000000018, -0.020000000000000018, 0.07000000000000003, 0.03999999999999998, 0.010000000000000009, -0.040000000000000036, -0.08999999999999997, 0.08000000000000002, -0.05000000000000002, -0.03, 0.0, 0.0, -0.020000000000000018, -0.01999999999999999, -0.01999999999999999, 0.0, -0.010000000000000009, -0.010000000000000009, 0.0, 0.0, -0.009999999999999995, -0.039999999999999994, 0.009999999999999995, 0.0, -0.009999999999999995, 0.0, 0.0, -0.010000000000000009, -0.009999999999999995, 0.0, -0.010000000000000002, 0.010000000000000002, -0.010000000000000002, 0.010000000000000002, -0.010000000000000002, -0.010000000000000002, 0.010000000000000002, -0.010000000000000002, 0.010000000000000002, 0.0, 0.0, 0.0, -0.010000000000000002, -0.009999999999999998, 0.0, 0.009999999999999998, 0.0, 0.0, 0.0, -0.009999999999999998, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.01, 0.0, 0.01, 0.0, 0.0, 0.0, 0.0, -0.01, 0.0, 0.0, 0.0], newCase: [0,0,0,0,0,0,20,0,0,18,4,3,0,3,5,7,25,24,34,63,98,116,106,163,290,307,329,553,588,846,987,1753,2960,4581,5653,4867,9422,10349,11209,13507,17474,18838,19571,20192,23197,25176,26942,30413,32769,34517,25753,31601,33877,32344,33946,34089,30338,27766,26985,27260,30521,29980,32368,29079,26113,28131,26084,30156,31889,38958,35419,26509,23196,25409,28429,30829,36007,29744,27348,24713,24798,25459,29531,29162,25524,20329,18196,22802,21711,27246,26692,23488,19891,22630,20289,22140], totalDeath: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,6,9,11,12,15,19,22,26,30,38,41,48,58,73,95,121,171,239,309,374,509,689,957,1260,1614,2110,2754,3251,4066,5151,6394,7576,8839,10384,11793,13298,15526,17691,19802,22038,24062,25789,27515,30081,32712,34905,37448,39331,40901,42853,45536,47894,50234,52191,54256,55412,56795,59265,61655,63856,65753,67444,68597,69921,72271,74799,76928,78615,80037,80787,81847,83718,85540,87293,88895,90113,90978,91981,93533,94936], deathRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.01, 0.01, 0.06, 0.07, 0.07, 0.05, 0.05, 0.04, 0.04, 0.04, 0.03, 0.03, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06], newDeath: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,5,3,2,1,3,4,3,4,4,8,3,7,10,15,22,26,50,68,70,65,135,180,268,303,354,496,644,497,815,1085,1243,1182,1263,1545,1409,1505,2228,2165,2111,2236,2024,1727,1726,2566,2631,2193,2543,1883,1570,1952,2683,2358,2340,1957,2065,1156,1383,2470,2390,2201,1897,1691,1153,1324,2350,2528,2129,1687,1422,750,1060,1871,1822,1753,1602,1218,865,1003,1552,1403], increaseRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.57, 0.0, 0.0, 0.34, 0.07, 0.05, 0.0, 0.05, 0.07, 0.09, 0.25, 0.19, 0.22, 0.29, 0.31, 0.27, 0.2, 0.23, 0.29, 0.24, 0.2, 0.25, 0.21, 0.23, 0.21, 0.28, 0.32, 0.33, 0.29, 0.2, 0.28, 0.23, 0.2, 0.2, 0.2, 0.18, 0.16, 0.14, 0.14, 0.13, 0.12, 0.12, 0.12, 0.11, 0.07, 0.08, 0.08, 0.07, 0.07, 0.07, 0.06, 0.05, 0.05, 0.04, 0.05, 0.04, 0.05, 0.04, 0.03, 0.04, 0.03, 0.04, 0.04, 0.04, 0.04, 0.03, 0.02, 0.02, 0.03, 0.03, 0.03, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.01, 0.01, 0.02, 0.02, 0.02, 0.02, 0.02, 0.01, 0.01, 0.01, 0.01]}}, "Turkey": {startDate: new Date(2020, 2, 10), text: "Turkey", data: {totalCase: [1,1,1,5,6,18,47,98,191,359,670,947,1236,1529,1872,2433,3629,5698,7402,9217,10827,13531,15679,18135,20921,23934,27069,30217,34109,38226,42282,47029,52167,56956,61049,65111,69392,74193,78546,82329,86306,90980,95591,98674,101790,104912,107773,110130,112261,114653,117589,120204,122392,124375,126045,127659,129491,131744,133721,135569,137115,138657,139771,141475,143114,144749,146457,148067,149435,150593,151615,152587], accRate: [0.0, 0.0, 0.8, -0.63, 0.5, -0.050000000000000044, -0.09999999999999998, -0.030000000000000027, -0.020000000000000018, -0.009999999999999953, -0.17000000000000004, -0.05999999999999997, -0.04000000000000001, -0.010000000000000009, 0.05000000000000002, 0.1, 0.02999999999999997, -0.12999999999999998, -0.03, -0.05000000000000002, 0.05000000000000002, -0.06, 0.0, -0.010000000000000009, 0.0, -0.010000000000000009, -0.01999999999999999, 0.009999999999999995, 0.0, -0.009999999999999995, 0.0, 0.0, -0.020000000000000004, -0.009999999999999995, -0.010000000000000009, 0.0, 0.0, 0.0, -0.009999999999999995, 0.0, 0.0, 0.0, -0.020000000000000004, 0.0, 0.0, 0.0, -0.009999999999999998, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.01, 0.0, 0.0, 0.01, -0.01, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], newCase: [0,0,0,4,1,12,29,51,93,168,311,277,289,293,343,561,1196,2069,1704,1815,1610,2704,2148,2456,2786,3013,3135,3148,3892,4117,4056,4747,5138,4789,4093,4062,4281,4801,4353,3783,3977,4674,4611,3083,3116,3122,2861,2357,2131,2392,2936,2615,2188,1983,1670,1614,1832,2253,1977,1848,1546,1542,1114,1704,1639,1635,1708,1610,1368,1158,1022,972], totalDeath: [0,0,0,0,0,0,0,1,2,4,9,21,30,37,44,59,75,92,108,131,168,214,277,356,425,501,574,649,725,812,908,1006,1101,1198,1296,1403,1518,1643,1769,1890,2017,2140,2259,2376,2491,2600,2706,2805,2900,2992,3081,3174,3258,3336,3397,3461,3520,3584,3641,3689,3739,3786,3841,3894,3952,4007,4055,4096,4140,4171,4199,4222], deathRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.01, 0.01, 0.01, 0.01, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.01, 0.01, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03], newDeath: [0,0,0,0,0,0,0,0,1,2,5,12,9,7,7,15,16,17,16,23,37,46,63,79,69,76,73,75,76,87,96,98,95,97,98,107,115,125,126,121,127,123,119,117,115,109,106,99,95,92,89,93,84,78,61,64,59,64,57,48,50,47,55,53,58,55,48,41,44,31,28,23], increaseRate: [0.0, 0.0, 0.0, 0.8, 0.17, 0.67, 0.62, 0.52, 0.49, 0.47, 0.46, 0.29, 0.23, 0.19, 0.18, 0.23, 0.33, 0.36, 0.23, 0.2, 0.15, 0.2, 0.14, 0.14, 0.13, 0.13, 0.12, 0.1, 0.11, 0.11, 0.1, 0.1, 0.1, 0.08, 0.07, 0.06, 0.06, 0.06, 0.06, 0.05, 0.05, 0.05, 0.05, 0.03, 0.03, 0.03, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.01, 0.01, 0.01, 0.02, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01]}}, "India": {startDate: new Date(2020, 1, 15), text: "India", data: {totalCase: [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,7,29,30,31,34,40,47,62,62,74,82,100,114,129,143,169,194,249,332,396,499,536,657,727,887,987,1024,1251,1397,1998,2543,3059,3588,4289,4778,5351,5916,6725,7600,8446,9205,10453,11487,12370,13430,14352,16365,17615,18539,20080,21370,23039,24447,26283,27890,29451,31324,33062,34863,37257,39699,42505,46437,49400,52987,56351,59695,62808,67161,70768,74292,78055,81997,85784,90648,95698,100328,106475,112028], accRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, -0.36, 0.62, -0.73, 0.0, 0.06, 0.06, 0.0, 0.09, -0.24, 0.16, -0.06, 0.07999999999999999, -0.06, 0.0, -0.01999999999999999, 0.04999999999999999, -0.01999999999999999, 0.09, 0.03, -0.09, 0.04999999999999999, -0.13999999999999999, 0.10999999999999999, -0.07999999999999999, 0.07999999999999999, -0.07999999999999999, -0.060000000000000005, 0.13999999999999999, -0.07999999999999999, 0.19999999999999998, -0.09, -0.03999999999999998, -0.020000000000000018, 0.010000000000000009, -0.06, 0.009999999999999995, -0.009999999999999995, 0.01999999999999999, 0.0, -0.01999999999999999, -0.020000000000000004, 0.039999999999999994, -0.03, -0.01999999999999999, 0.009999999999999995, -0.020000000000000004, 0.06, -0.04999999999999999, -0.020000000000000004, 0.03, -0.020000000000000004, 0.010000000000000009, -0.010000000000000009, 0.010000000000000009, -0.010000000000000009, -0.009999999999999995, 0.009999999999999995, -0.009999999999999995, 0.0, 0.009999999999999995, 0.0, 0.010000000000000009, 0.009999999999999995, -0.020000000000000004, 0.010000000000000009, -0.010000000000000009, 0.0, -0.009999999999999995, 0.009999999999999995, -0.009999999999999995, 0.0, 0.0, 0.0, -0.010000000000000002, 0.010000000000000002, 0.0, 0.0, 0.009999999999999995, -0.009999999999999995], newCase: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,22,1,1,3,6,7,15,0,12,8,18,14,15,14,26,25,55,83,64,103,37,121,70,160,100,37,227,146,601,545,516,529,701,489,573,565,809,875,846,759,1248,1034,883,1060,922,2013,1250,924,1541,1290,1669,1408,1836,1607,1561,1873,1738,1801,2394,2442,2806,3932,2963,3587,3364,3344,3113,4353,3607,3524,3763,3942,3787,4864,5050,4630,6147,5553], totalDeath: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,3,3,4,5,5,7,10,10,12,20,20,24,27,32,35,58,72,86,99,118,136,160,178,227,249,288,331,358,393,422,448,486,521,559,592,645,681,721,780,825,881,939,1008,1079,1154,1223,1323,1391,1566,1693,1785,1889,1985,2101,2212,2294,2415,2551,2649,2753,2871,3025,3156,3302,3434], deathRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.01, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.03, 0.02, 0.02, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.04, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03], newDeath: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,2,3,0,2,8,0,4,3,5,3,23,14,14,13,19,18,24,18,49,22,39,43,27,35,29,26,38,35,38,33,53,36,40,59,45,56,58,69,71,75,69,100,68,175,127,92,104,96,116,111,82,121,136,98,104,118,154,131,146,132], increaseRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.14, 0.76, 0.03, 0.03, 0.09, 0.15, 0.15, 0.24, 0.0, 0.16, 0.1, 0.18, 0.12, 0.12, 0.1, 0.15, 0.13, 0.22, 0.25, 0.16, 0.21, 0.07, 0.18, 0.1, 0.18, 0.1, 0.04, 0.18, 0.1, 0.3, 0.21, 0.17, 0.15, 0.16, 0.1, 0.11, 0.1, 0.12, 0.12, 0.1, 0.08, 0.12, 0.09, 0.07, 0.08, 0.06, 0.12, 0.07, 0.05, 0.08, 0.06, 0.07, 0.06, 0.07, 0.06, 0.05, 0.06, 0.05, 0.05, 0.06, 0.06, 0.07, 0.08, 0.06, 0.07, 0.06, 0.06, 0.05, 0.06, 0.05, 0.05, 0.05, 0.05, 0.04, 0.05, 0.05, 0.05, 0.06, 0.05]}}, "China": {startDate: new Date(2020, 0, 22), text: "China", data: {totalCase: [571,830,1287,1975,2744,4515,5974,7711,9692,11791,14380,17205,20440,24324,28018,31161,34546,37198,40171,42638,44653,58761,63851,66492,68500,70548,72436,74185,74576,75465,76288,76936,77150,77658,78064,78497,78824,79251,79824,80026,80151,80270,80409,80552,80651,80695,80735,80754,80778,80793,80813,80824,80844,80860,80881,80894,80928,80967,81008,81054,81093,81171,81218,81285,81340,81394,81439,81439,81518,81554,81589,81620,81639,81669,81708,81740,81802,81865,81907,81953,82052,82160,82249,82295,82341,82367,82692,82719,82735,82747,82758,82788,82798,82804,82816,82827,82830,82836,82858,82862,82874,82875,82877,82880,82881,82883,82885,82886,82887,82901,82918,82919,82926,82929,82933,82941,82947,82954,82960,82965], accRate: [0.31, 0.04999999999999999, -0.010000000000000009, -0.06999999999999995, 0.10999999999999999, -0.15000000000000002, -0.009999999999999981, -0.03, -0.020000000000000018, 0.0, -0.01999999999999999, 0.0, 0.0, -0.03, -0.03, 0.0, -0.03, 0.0, -0.010000000000000009, -0.009999999999999995, 0.19, -0.15999999999999998, -0.04, -0.010000000000000002, 0.0, 0.0, -0.009999999999999998, -0.01, 0.0, 0.0, 0.0, -0.01, 0.01, 0.0, 0.0, -0.01, 0.01, 0.0, -0.01, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], newCase: [0,259,457,688,769,1771,1459,1737,1981,2099,2589,2825,3235,3884,3694,3143,3385,2652,2973,2467,2015,14108,5090,2641,2008,2048,1888,1749,391,889,823,648,214,508,406,433,327,427,573,202,125,119,139,143,99,44,40,19,24,15,20,11,20,16,21,13,34,39,41,46,39,78,47,67,55,54,45,0,79,36,35,31,19,30,39,32,62,63,42,46,99,108,89,46,46,26,325,27,16,12,11,30,10,6,12,11,3,6,22,4,12,1,2,3,1,2,2,1,1,14,17,1,7,3,4,8,6,7,6,5], totalDeath: [17,25,41,56,80,106,132,170,213,259,304,361,425,490,563,636,722,811,908,1016,1113,1259,1380,1523,1665,1770,1868,2004,2118,2236,2345,2442,2592,2663,2715,2744,2788,2835,2870,2912,2943,2981,3012,3042,3070,3097,3119,3136,3158,3169,3176,3189,3199,3213,3226,3237,3245,3248,3255,3261,3270,3277,3281,3287,3292,3295,3300,3300,3305,3312,3318,3322,3326,3329,3331,3331,3333,3335,3336,3339,3339,3341,3341,3342,3342,3342,4632,4632,4632,4632,4632,4632,4632,4632,4632,4632,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4634,4634,4634,4634], deathRate: [0.03, 0.03, 0.03, 0.03, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06], newDeath: [0,8,16,15,24,26,26,38,43,46,45,57,64,65,73,73,86,89,97,108,97,146,121,143,142,105,98,136,114,118,109,97,150,71,52,29,44,47,35,42,31,38,31,30,28,27,22,17,22,11,7,13,10,14,13,11,8,3,7,6,9,7,4,6,5,3,5,0,5,7,6,4,4,3,2,0,2,2,1,3,0,2,0,1,0,0,1290,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], increaseRate: [0.0, 0.31, 0.36, 0.35, 0.28, 0.39, 0.24, 0.23, 0.2, 0.18, 0.18, 0.16, 0.16, 0.16, 0.13, 0.1, 0.1, 0.07, 0.07, 0.06, 0.05, 0.24, 0.08, 0.04, 0.03, 0.03, 0.03, 0.02, 0.01, 0.01, 0.01, 0.01, 0.0, 0.01, 0.01, 0.01, 0.0, 0.01, 0.01, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}}, "Israel": {startDate: new Date(2020, 1, 21), text: "Israel", data: {totalCase: [1,1,2,2,2,2,3,7,7,10,12,12,15,17,21,25,39,50,75,97,109,143,193,213,298,337,433,677,705,883,1071,1442,1930,2369,2693,3035,3619,4247,4695,5358,6092,6857,7428,7851,8430,8904,9248,9404,9968,10408,10743,11145,11586,12046,12501,12758,12982,13265,13491,13713,13942,14498,14803,15058,15298,15443,15555,15728,15834,15946,16101,16185,16208,16246,16289,16310,16381,16436,16454,16477,16506,16529,16548,16579,16589,16607,16617,16643,16659,16667], accRate: [0.0, 0.5, -0.5, 0.0, 0.0, 0.33, 0.23999999999999994, -0.57, 0.3, -0.12999999999999998, -0.17, 0.2, -0.08000000000000002, 0.07, -0.03, 0.19999999999999998, -0.13999999999999999, 0.11000000000000001, -0.1, -0.12000000000000001, 0.13, 0.020000000000000018, -0.17, 0.19999999999999998, -0.16999999999999998, 0.1, 0.13999999999999999, -0.32, 0.16, -0.020000000000000018, 0.08000000000000002, -0.010000000000000009, -0.06, -0.07, -0.009999999999999995, 0.05, -0.010000000000000009, -0.04999999999999999, 0.01999999999999999, 0.0, -0.009999999999999995, -0.03, -0.03, 0.020000000000000004, -0.020000000000000004, -0.010000000000000002, -0.02, 0.039999999999999994, -0.019999999999999997, -0.010000000000000002, 0.010000000000000002, 0.0, 0.0, 0.0, -0.02, 0.0, 0.0, 0.0, 0.0, 0.0, 0.02, -0.02, 0.0, 0.0, -0.01, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.01, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], newCase: [0,0,1,0,0,0,1,4,0,3,2,0,3,2,4,4,14,11,25,22,12,34,50,20,85,39,96,244,28,178,188,371,488,439,324,342,584,628,448,663,734,765,571,423,579,474,344,156,564,440,335,402,441,460,455,257,224,283,226,222,229,556,305,255,240,145,112,173,106,112,155,84,23,38,43,21,71,55,18,23,29,23,19,31,10,18,10,26,16,8], totalDeath: [0,0,0,0,1,1,1,1,3,5,8,12,12,15,16,20,26,36,40,44,49,57,65,73,86,95,101,103,116,123,130,142,151,164,172,177,184,189,192,194,199,201,204,210,215,222,225,229,232,235,238,239,240,245,247,252,258,260,264,265,266,268,272,276,278,279], deathRate: [0.0, 0.0, 0.0, 0.0, 0.5, 0.5, 0.33, 0.14, 0.43, 0.5, 0.67, 1.0, 0.8, 0.88, 0.76, 0.8, 0.67, 0.72, 0.53, 0.45, 0.45, 0.4, 0.34, 0.34, 0.29, 0.28, 0.23, 0.15, 0.16, 0.14, 0.12, 0.1, 0.08, 0.07, 0.06, 0.06, 0.05, 0.04, 0.04, 0.04, 0.03, 0.03, 0.03, 0.03, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02], newDeath: [0,0,0,0,1,0,0,0,2,2,3,4,0,3,1,4,6,10,4,4,5,8,8,8,13,9,6,2,13,7,7,12,9,13,8,5,7,5,3,2,5,2,3,6,5,7,3,4,3,3,3,1,1,5,2,5,6,2,4,1,1,2,4,4,2,1], increaseRate: [0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.33, 0.57, 0.0, 0.3, 0.17, 0.0, 0.2, 0.12, 0.19, 0.16, 0.36, 0.22, 0.33, 0.23, 0.11, 0.24, 0.26, 0.09, 0.29, 0.12, 0.22, 0.36, 0.04, 0.2, 0.18, 0.26, 0.25, 0.19, 0.12, 0.11, 0.16, 0.15, 0.1, 0.12, 0.12, 0.11, 0.08, 0.05, 0.07, 0.05, 0.04, 0.02, 0.06, 0.04, 0.03, 0.04, 0.04, 0.04, 0.04, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.04, 0.02, 0.02, 0.02, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}}, "Switzerland": {startDate: new Date(2020, 1, 25), text: "Switzerland", data: {totalCase: [1,1,8,15,19,24,30,58,93,120,214,268,332,374,497,652,868,1139,1375,2217,2353,2742,3115,4222,5615,6863,7474,8795,9877,10897,11811,12928,14076,14829,15922,16605,17768,18827,19606,20505,21100,21657,22253,23280,24051,24551,25107,25415,25688,25936,26336,26732,27078,27404,27740,27944,28063,28268,28496,28677,28894,29061,29164,29264,29407,29586,29705,29817,29905,29981,30009,30060,30126,30207,30251,30305,30344,30380,30413,30463,30514,30572,30587,30597,30618,30658], accRate: [0.0, 0.88, -0.41000000000000003, -0.26, 0.0, -0.009999999999999981, 0.27999999999999997, -0.09999999999999998, -0.15, 0.21, -0.24, -0.010000000000000009, -0.08, 0.14, -0.010000000000000009, 0.010000000000000009, -0.010000000000000009, -0.06999999999999998, 0.21, -0.32, 0.08000000000000002, -0.020000000000000018, 0.14, -0.010000000000000009, -0.07, -0.09999999999999999, 0.06999999999999999, -0.039999999999999994, -0.020000000000000004, -0.009999999999999995, 0.009999999999999995, -0.009999999999999995, -0.03, 0.020000000000000004, -0.030000000000000006, 0.030000000000000006, -0.010000000000000009, -0.019999999999999997, 0.0, -0.010000000000000002, 0.0, 0.0, 0.010000000000000002, -0.010000000000000002, -0.009999999999999998, 0.0, -0.01, 0.0, 0.0, 0.01, -0.01, 0.0, 0.0, 0.0, 0.0, -0.01, 0.01, 0.0, 0.0, 0.0, 0.0, -0.01, 0.0, 0.0, 0.01, -0.01, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], newCase: [0,0,7,7,4,5,6,28,35,27,94,54,64,42,123,155,216,271,236,842,136,389,373,1107,1393,1248,611,1321,1082,1020,914,1117,1148,753,1093,683,1163,1059,779,899,595,557,596,1027,771,500,556,308,273,248,400,396,346,326,336,204,119,205,228,181,217,167,103,100,143,179,119,112,88,76,28,51,66,81,44,54,39,36,33,50,51,58,15,10,21,40], totalDeath: [0,0,0,0,0,0,0,0,0,1,1,1,2,2,3,4,7,11,13,14,19,27,33,43,56,80,98,120,122,153,192,231,264,300,359,433,488,536,591,666,715,765,821,895,948,1002,1036,1106,1138,1174,1239,1281,1327,1368,1393,1429,1478,1509,1549,1589,1599,1610,1665,1699,1716,1737,1754,1762,1762,1784,1795,1805,1810,1823,1830,1833,1845,1867,1870,1872,1878,1879,1881,1886,1891,1892], deathRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.01, 0.0, 0.0, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.02, 0.02, 0.02, 0.02, 0.02, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06], newDeath: [0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,3,4,2,1,5,8,6,10,13,24,18,22,2,31,39,39,33,36,59,74,55,48,55,75,49,50,56,74,53,54,34,70,32,36,65,42,46,41,25,36,49,31,40,40,10,11,55,34,17,21,17,8,0,22,11,10,5,13,7,3,12,22,3,2,6,1,2,5,5,1], increaseRate: [0.0, 0.0, 0.88, 0.47, 0.21, 0.21, 0.2, 0.48, 0.38, 0.23, 0.44, 0.2, 0.19, 0.11, 0.25, 0.24, 0.25, 0.24, 0.17, 0.38, 0.06, 0.14, 0.12, 0.26, 0.25, 0.18, 0.08, 0.15, 0.11, 0.09, 0.08, 0.09, 0.08, 0.05, 0.07, 0.04, 0.07, 0.06, 0.04, 0.04, 0.03, 0.03, 0.03, 0.04, 0.03, 0.02, 0.02, 0.01, 0.01, 0.01, 0.02, 0.01, 0.01, 0.01, 0.01, 0.01, 0.0, 0.01, 0.01, 0.01, 0.01, 0.01, 0.0, 0.0, 0.0, 0.01, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}}, "Indonesia": {startDate: new Date(2020, 2, 02), text: "Indonesia", data: {totalCase: [2,2,2,2,4,4,6,19,27,34,34,69,96,117,134,172,227,309,369,450,514,579,686,790,893,1046,1155,1285,1414,1528,1677,1790,1986,2092,2273,2491,2738,2956,3293,3512,3842,4241,4557,4839,5136,5516,5923,6248,6575,6760,7135,7418,7775,8211,8607,8882,9096,9511,9771,10118,10551,10843,11192,11587,12071,12438,12776,13112,13645,14032,14265,14749,15438,16006,16496,17025,17514,18010,18496,19189], accRate: [0.0, 0.0, 0.0, 0.5, -0.5, 0.33, 0.35000000000000003, -0.38000000000000006, -0.09, -0.21, 0.51, -0.22999999999999998, -0.10000000000000003, -0.04999999999999999, 0.09, 0.01999999999999999, 0.030000000000000027, -0.11000000000000001, 0.01999999999999999, -0.06, -0.009999999999999995, 0.05, -0.03, -0.010000000000000009, 0.03, -0.06, 0.010000000000000009, -0.010000000000000009, -0.01999999999999999, 0.01999999999999999, -0.03, 0.04000000000000001, -0.05, 0.03, 0.009999999999999995, 0.0, -0.01999999999999999, 0.03, -0.04000000000000001, 0.03, 0.0, -0.01999999999999999, -0.010000000000000009, 0.0, 0.010000000000000009, 0.0, -0.020000000000000004, 0.0, -0.020000000000000004, 0.020000000000000004, -0.010000000000000002, 0.010000000000000002, 0.0, 0.0, -0.020000000000000004, -0.009999999999999998, 0.02, -0.010000000000000002, 0.0, 0.010000000000000002, -0.010000000000000002, 0.0, 0.0, 0.010000000000000002, -0.010000000000000002, 0.0, 0.0, 0.010000000000000002, -0.010000000000000002, -0.009999999999999998, 0.009999999999999998, 0.010000000000000002, 0.0, -0.010000000000000002, 0.0, 0.0, 0.0, 0.0, 0.010000000000000002], newCase: [0,0,0,0,2,0,2,13,8,7,0,35,27,21,17,38,55,82,60,81,64,65,107,104,103,153,109,130,129,114,149,113,196,106,181,218,247,218,337,219,330,399,316,282,297,380,407,325,327,185,375,283,357,436,396,275,214,415,260,347,433,292,349,395,484,367,338,336,533,387,233,484,689,568,490,529,489,496,486,693], totalDeath: [0,0,0,0,0,0,0,0,0,1,1,4,5,5,5,7,19,25,32,38,48,49,55,58,78,87,102,114,122,136,157,170,181,191,198,209,221,240,280,306,327,373,399,459,469,496,520,535,582,590,616,635,647,689,720,743,765,773,784,792,800,831,845,864,872,895,930,943,959,973,991,1007,1028,1043,1076,1089,1148,1191,1221,1242], deathRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.03, 0.03, 0.06, 0.05, 0.04, 0.04, 0.04, 0.08, 0.08, 0.09, 0.08, 0.09, 0.08, 0.08, 0.07, 0.09, 0.08, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.08, 0.08, 0.08, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.06, 0.07, 0.07, 0.07, 0.06], newDeath: [0,0,0,0,0,0,0,0,0,1,0,3,1,0,0,2,12,6,7,6,10,1,6,3,20,9,15,12,8,14,21,13,11,10,7,11,12,19,40,26,21,46,26,60,10,27,24,15,47,8,26,19,12,42,31,23,22,8,11,8,8,31,14,19,8,23,35,13,16,14,18,16,21,15,33,13,59,43,30,21], increaseRate: [0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.33, 0.68, 0.3, 0.21, 0.0, 0.51, 0.28, 0.18, 0.13, 0.22, 0.24, 0.27, 0.16, 0.18, 0.12, 0.11, 0.16, 0.13, 0.12, 0.15, 0.09, 0.1, 0.09, 0.07, 0.09, 0.06, 0.1, 0.05, 0.08, 0.09, 0.09, 0.07, 0.1, 0.06, 0.09, 0.09, 0.07, 0.06, 0.06, 0.07, 0.07, 0.05, 0.05, 0.03, 0.05, 0.04, 0.05, 0.05, 0.05, 0.03, 0.02, 0.04, 0.03, 0.03, 0.04, 0.03, 0.03, 0.03, 0.04, 0.03, 0.03, 0.03, 0.04, 0.03, 0.02, 0.03, 0.04, 0.04, 0.03, 0.03, 0.03, 0.03, 0.03, 0.04]}}, "Ireland": {startDate: new Date(2020, 1, 29), text: "Ireland", data: {totalCase: [1,1,1,2,6,13,18,19,21,24,34,43,70,90,129,170,223,292,366,557,683,785,906,1125,1329,1564,1819,2121,2415,2615,2910,3235,3447,3849,4273,4604,4994,5364,5709,6074,6574,8089,8928,9655,10647,11479,12547,13271,13980,14758,15251,15652,16040,16671,17607,18184,18561,19262,19648,19877,20253,20612,20833,21176,21506,21772,21983,22248,22385,22541,22760,22996,23135,23242,23401,23827,23956,24048,24112,24200,24251,24315], accRate: [0.0, 0.0, 0.5, 0.17000000000000004, -0.13, -0.26, -0.23000000000000004, 0.05, 0.01999999999999999, 0.16999999999999998, -0.07999999999999999, 0.18000000000000002, -0.17, 0.07999999999999999, -0.06, 0.0, 0.0, -0.03999999999999998, 0.14, -0.16000000000000003, -0.04999999999999999, 0.0, 0.06, -0.04000000000000001, 0.0, -0.009999999999999981, 0.0, -0.020000000000000018, -0.039999999999999994, 0.020000000000000004, 0.0, -0.04000000000000001, 0.04000000000000001, 0.0, -0.03, 0.009999999999999995, -0.009999999999999995, -0.010000000000000009, 0.0, 0.020000000000000004, 0.11, -0.1, -0.009999999999999995, 0.009999999999999995, -0.01999999999999999, 0.01999999999999999, -0.039999999999999994, 0.0, 0.0, -0.020000000000000004, 0.0, -0.009999999999999998, 0.02, 0.010000000000000002, -0.020000000000000004, -0.009999999999999998, 0.02, -0.02, -0.01, 0.01, 0.0, -0.01, 0.01, 0.0, -0.01, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.01, 0.01, 0.01, -0.01, -0.01, 0.0, 0.0, 0.0, 0.0], newCase: [0,0,0,1,4,7,5,1,2,3,10,9,27,20,39,41,53,69,74,191,126,102,121,219,204,235,255,302,294,200,295,325,212,402,424,331,390,370,345,365,500,1515,839,727,992,832,1068,724,709,778,493,401,388,631,936,577,377,701,386,229,376,359,221,343,330,266,211,265,137,156,219,236,139,107,159,426,129,92,64,88,51,64], totalDeath: [0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,3,3,3,4,6,7,9,19,22,36,46,54,71,85,98,120,137,158,174,210,235,263,287,320,334,365,406,444,486,530,571,610,687,730,769,794,1014,1063,1087,1102,1159,1190,1232,1265,1286,1303,1319,1339,1375,1403,1429,1446,1458,1467,1488,1497,1506,1518,1533,1543,1547,1561,1571], deathRate: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.02, 0.01, 0.01, 0.02, 0.01, 0.01, 0.01, 0.01, 0.01, 0.0, 0.0, 0.0, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.02, 0.02, 0.02, 0.02, 0.03, 0.03, 0.03, 0.03, 0.03, 0.04, 0.04, 0.04, 0.04, 0.04, 0.03, 0.03, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.05, 0.05, 0.05, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06], newDeath: [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,2,1,2,10,3,14,10,8,17,14,13,22,17,21,16,36,25,28,24,33,14,31,41,38,42,44,41,39,77,43,39,25,220,49,24,15,57,31,42,33,21,17,16,20,36,28,26,17,12,9,21,9,9,12,15,10,4,14,10], increaseRate: [0.0, 0.0, 0.0, 0.5, 0.67, 0.54, 0.28, 0.05, 0.1, 0.12, 0.29, 0.21, 0.39, 0.22, 0.3, 0.24, 0.24, 0.24, 0.2, 0.34, 0.18, 0.13, 0.13, 0.19, 0.15, 0.15, 0.14, 0.14, 0.12, 0.08, 0.1, 0.1, 0.06, 0.1, 0.1, 0.07, 0.08, 0.07, 0.06, 0.06, 0.08, 0.19, 0.09, 0.08, 0.09, 0.07, 0.09, 0.05, 0.05, 0.05, 0.03, 0.03, 0.02, 0.04, 0.05, 0.03, 0.02, 0.04, 0.02, 0.01, 0.02, 0.02, 0.01, 0.02, 0.02, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.0, 0.01, 0.02, 0.01, 0.0, 0.0, 0.0, 0.0, 0.0]}}}