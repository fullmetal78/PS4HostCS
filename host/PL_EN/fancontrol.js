var temperature = readCookie("fancontrol");
var payload = [233,142,6,0,0,85,83,187,130,0,0,192,72,131,236,120,72,137,217,72,199,68,36,16,102,6,0,0,15,50,72,193,226,32,198,4,36,127,72,9,208,198,68,36,1,69,198,68,36,2,76,72,137,245,198,68,36,3,70,72,137,230,72,141,184,64,254,255,255,186,4,0,0,0,255,21,120,27,0,0,76,139,5,113,27,0,0,133,192,15,133,185,1,0,0,72,137,217,198,68,36,28,85,15,50,72,193,226,32,198,68,36,29,72,72,137,211,198,68,36,30,137,72,9,195,198,68,36,31,229,198,68,36,32,83,72,141,116,36,28,198,68,36,33,72,72,141,187,192,48,18,0,198,68,36,34,131,186,12,0,0,0,198,68,36,35,236,198,68,36,36,88,198,68,36,37,72,198,68,36,38,141,198,68,36,39,29,65,255,208,133,192,117,21,72,199,68,36,16,114,6,0,0,72,129,195,240,20,60,0,233,141,3,0,0,198,68,36,40,85,72,141,116,36,40,198,68,36,41,72,72,141,187,128,94,67,0,198,68,36,42,137,186,12,0,0,0,198,68,36,43,229,198,68,36,44,83,198,68,36,45,72,198,68,36,46,131,198,68,36,47,236,198,68,36,48,88,198,68,36,49,72,198,68,36,50,141,198,68,36,51,29,255,21,158,26,0,0,133,192,117,11,72,199,68,36,16,5,5,0,0,235,96,198,68,36,52,85,72,141,116,36,52,198,68,36,53,72,72,141,187,64,94,67,0,198,68,36,54,137,186,12,0,0,0,198,68,36,55,229,198,68,36,56,83,198,68,36,57,72,198,68,36,58,131,198,68,36,59,236,198,68,36,60,88,198,68,36,61,72,198,68,36,62,141,198,68,36,63,29,255,21,60,26,0,0,133,192,117,21,72,199,68,36,16,3,5,0,0,72,129,195,112,164,30,0,233,191,2,0,0,198,68,36,64,85,72,141,116,36,64,198,68,36,65,72,72,141,187,176,90,67,0,198,68,36,66,137,186,12,0,0,0,198,68,36,67,229,198,68,36,68,83,198,68,36,69,72,198,68,36,70,131,198,68,36,71,236,198,68,36,72,88,198,68,36,73,72,198,68,36,74,141,198,68,36,75,29,255,21,208,25,0,0,133,192,116,7,49,219,233,97,2,0,0,72,199,68,36,16,1,5,0,0,72,129,195,96,163,30,0,233,76,2,0,0,72,137,217,198,68,36,4,127,15,50,72,193,226,32,198,68,36,5,69,72,9,208,198,68,36,6,76,198,68,36,7,70,72,141,116,36,4,72,141,184,48,72,207,255,186,4,0,0,0,65,255,208,76,139,5,117,25,0,0,133,192,15,133,131,0,0,0,72,137,217,198,68,36,76,85,15,50,72,137,211,198,68,36,77,72,72,193,227,32,198,68,36,78,137,72,9,216,198,68,36,79,229,72,141,152,48,72,207,255,198,68,36,80,83,198,68,36,81,72,72,141,116,36,76,198,68,36,82,131,72,141,187,48,127,1,0,198,68,36,83,236,186,12,0,0,0,198,68,36,84,88,198,68,36,85,72,198,68,36,86,141,198,68,36,87,29,65,255,208,133,192,15,133,51,255,255,255,72,199,68,36,16,116,4,0,0,72,129,195,64,158,20,0,233,134,1,0,0,72,137,217,198,68,36,8,127,15,50,72,193,226,32,198,68,36,9,69,72,9,208,198,68,36,10,76,198,68,36,11,70,72,141,116,36,8,72,141,184,48,106,207,255,186,4,0,0,0,65,255,208,76,139,5,175,24,0,0,133,192,15,133,131,0,0,0,72,137,217,198,68,36,88,85,15,50,72,137,211,198,68,36,89,72,72,193,227,32,198,68,36,90,137,72,9,216,198,68,36,91,229,72,141,152,48,106,207,255,198,68,36,92,83,198,68,36,93,72,72,141,116,36,88,198,68,36,94,131,72,141,187,48,127,1,0,198,68,36,95,236,186,12,0,0,0,198,68,36,96,88,198,68,36,97,72,198,68,36,98,141,198,68,36,99,29,65,255,208,133,192,15,133,109,254,255,255,72,199,68,36,16,85,4,0,0,72,129,195,176,167,20,0,233,192,0,0,0,72,137,217,198,68,36,12,127,15,50,72,137,215,198,68,36,13,69,72,193,231,32,198,68,36,14,76,72,9,248,198,68,36,15,70,186,4,0,0,0,72,141,116,36,12,72,141,184,208,20,207,255,65,255,208,131,202,255,133,192,15,133,147,0,0,0,72,137,217,198,68,36,100,85,15,50,72,193,226,32,198,68,36,101,72,72,9,194,198,68,36,102,137,198,68,36,103,229,72,141,186,80,138,3,0,198,68,36,104,83,72,141,154,208,20,207,255,198,68,36,105,72,72,141,116,36,100,198,68,36,106,131,186,12,0,0,0,198,68,36,107,236,198,68,36,108,88,198,68,36,109,72,198,68,36,110,141,198,68,36,111,29,255,21,124,23,0,0,133,192,15,133,168,253,255,255,72,199,68,36,16,5,4,0,0,72,129,195,112,109,40,0,72,139,69,8,186,8,0,0,0,72,141,124,36,16,72,139,48,255,211,49,210,72,131,196,120,137,208,91,93,195,72,139,71,8,76,139,72,72,76,139,64,64,72,139,70,8,72,139,16,72,129,250,5,4,0,0,117,35,185,130,0,0,192,15,50,72,137,209,72,193,225,32,72,9,200,72,141,144,224,116,193,0,72,5,32,231,213,1,233,231,0,0,0,72,129,250,85,4,0,0,117,32,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,144,224,3,211,0,72,5,96,100,234,1,233,190,0,0,0,72,129,250,116,4,0,0,117,35,185,130,0,0,192,15,50,72,137,209,72,193,225,32,72,9,200,72,141,144,224,114,211,0,72,5,16,210,234,1,233,146,0,0,0,72,129,250,1,5,0,0,117,29,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,144,224,132,9,1,72,5,48,24,44,2,235,108,72,129,250,3,5,0,0,117,16,185,130,0,0,192,15,50,72,137,209,72,193,225,32,235,23,72,129,250,5,5,0,0,117,32,185,130,0,0,192,15,50,72,193,226,32,72,137,209,72,9,200,72,141,144,224,132,9,1,72,5,176,24,44,2,235,42,131,200,255,72,129,250,114,6,0,0,117,124,185,130,0,0,192,15,50,72,137,209,72,193,225,32,72,9,200,72,141,144,88,227,19,1,72,5,96,1,48,2,73,139,136,24,1,0,0,65,199,64,4,0,0,0,0,72,139,18,65,199,64,8,0,0,0,0,65,199,64,20,0,0,0,0,72,190,19,0,0,0,0,0,1,56,199,1,0,0,0,0,73,137,80,48,72,139,0,73,137,65,32,73,137,65,24,72,139,135,48,1,0,0,72,199,64,96,255,255,255,255,72,137,112,88,72,199,64,104,255,255,255,255,49,192,195,83,69,49,201,72,131,236,16,65,131,200,255,185,2,16,0,0,186,3,0,0,0,190,8,0,0,0,49,255,72,199,4,36,102,6,0,0,232,245,2,0,0,72,141,116,36,8,72,141,61,200,249,255,255,72,137,195,72,137,68,36,8,232,143,9,0,0,72,137,231,72,137,222,186,8,0,0,0,255,21,173,20,0,0,72,137,223,190,8,0,0,0,232,202,2,0,0,72,139,4,36,72,131,196,16,91,195,72,131,236,24,72,137,124,36,8,72,141,116,36,8,72,141,61,251,253,255,255,232,77,9,0,0,49,192,72,131,196,24,195,85,83,72,129,236,24,1,0,0,232,68,9,0,0,232,224,2,0,0,232,207,7,0,0,232,87,255,255,255,72,141,92,36,16,72,137,199,232,181,255,255,255,232,152,1,0,0,49,210,49,246,72,141,61,255,12,0,0,232,152,0,0,0,133,192,127,25,72,141,21,252,12,0,0,190,0,1,0,0,72,137,223,49,192,255,21,19,20,0,0,235,79,137,197,72,141,124,36,6,49,192,185,10,0,0,0,243,170,72,141,84,36,6,190,7,143,28,192,137,239,198,68,36,11,temperature,232,184,8,0,0,137,239,232,90,0,0,0,65,184,140,0,0,0,185,temperature,0,0,0,72,141,21,200,12,0,0,190,0,1,0,0,72,137,223,49,192,255,21,194,19,0,0,72,137,223,232,122,1,0,0,72,129,196,24,1,0,0,49,192,91,93,195,72,199,192,3,0,0,0,233,67,12,0,0,72,199,192,4,0,0,0,233,55,12,0,0,72,199,192,5,0,0,0,233,43,12,0,0,72,199,192,6,0,0,0,233,31,12,0,0,72,199,192,10,0,0,0,233,19,12,0,0,72,199,192,9,0,0,0,233,7,12,0,0,72,199,192,58,0,0,0,233,251,11,0,0,72,199,192,57,0,0,0,233,239,11,0,0,72,199,192,21,0,0,0,233,227,11,0,0,72,199,192,122,1,0,0,233,215,11,0,0,72,199,192,22,0,0,0,233,203,11,0,0,72,199,192,123,0,0,0,233,191,11,0,0,72,199,192,124,0,0,0,233,179,11,0,0,72,199,192,128,0,0,0,233,167,11,0,0,72,199,192,136,0,0,0,233,155,11,0,0,72,199,192,137,0,0,0,233,143,11,0,0,72,199,192,188,0,0,0,233,131,11,0,0,72,199,192,189,0,0,0,233,119,11,0,0,72,199,192,190,0,0,0,233,107,11,0,0,72,199,192,16,1,0,0,233,95,11,0,0,72,199,192,222,1,0,0,233,83,11,0,0,72,199,192,237,1,0,0,233,71,11,0,0,85,83,69,49,201,80,69,49,192,49,201,49,210,49,246,72,141,61,168,11,0,0,255,21,98,21,0,0,49,201,69,49,201,137,197,69,49,192,49,210,49,246,72,141,61,179,11,0,0,255,21,71,21,0,0,137,239,72,141,21,22,18,0,0,137,195,72,141,53,199,11,0,0,232,76,0,0,0,89,137,223,91,72,141,21,13,18,0,0,93,72,141,53,216,11,0,0,233,52,0,0,0,83,72,137,250,72,129,236,0,2,0,0,72,141,53,226,11,0,0,72,137,231,49,192,255,21,131,19,0,0,72,137,230,191,222,0,0,0,255,21,197,17,0,0,72,129,196,0,2,0,0,91,195,72,199,192,79,2,0,0,233,161,10,0,0,72,199,192,80,2,0,0,233,149,10,0,0,72,137,241,80,49,210,72,137,254,69,49,192,191,82,2,0,0,49,192,232,122,10,0,0,90,195,72,199,192,221,1,0,0,233,111,10,0,0,72,199,192,73,0,0,0,233,99,10,0,0,72,199,192,74,0,0,0,233,87,10,0,0,72,199,192,65,0,0,0,233,75,10,0,0,72,199,192,203,0,0,0,233,63,10,0,0,72,199,192,204,0,0,0,233,51,10,0,0,72,199,192,35,2,0,0,233,39,10,0,0,72,199,192,60,2,0,0,233,27,10,0,0,83,69,49,201,69,49,192,49,201,49,210,49,246,72,141,61,19,12,0,0,255,21,56,20,0,0,72,141,21,121,17,0,0,72,141,53,23,12,0,0,137,195,137,199,232,61,255,255,255,137,223,72,141,21,248,18,0,0,72,141,53,5,12,0,0,232,40,255,255,255,137,223,72,141,21,115,17,0,0,72,141,53,245,11,0,0,232,19,255,255,255,137,223,72,141,21,206,17,0,0,72,141,53,231,11,0,0,232,254,254,255,255,137,223,72,141,21,89,18,0,0,72,141,53,218,11,0,0,232,233,254,255,255,137,223,72,141,21,4,18,0,0,72,141,53,206,11,0,0,232,212,254,255,255,137,223,72,141,21,223,16,0,0,72,141,53,192,11,0,0,232,191,254,255,255,137,223,72,141,21,138,17,0,0,72,141,53,178,11,0,0,232,170,254,255,255,137,223,72,141,21,149,16,0,0,72,141,53,164,11,0,0,232,149,254,255,255,137,223,72,141,21,72,17,0,0,72,141,53,150,11,0,0,232,128,254,255,255,137,223,72,141,21,243,16,0,0,72,141,53,137,11,0,0,232,107,254,255,255,137,223,72,141,21,70,17,0,0,72,141,53,123,11,0,0,232,86,254,255,255,137,223,72,141,21,241,17,0,0,72,141,53,110,11,0,0,232,65,254,255,255,137,223,72,141,21,140,17,0,0,72,141,53,96,11,0,0,232,44,254,255,255,137,223,72,141,21,215,16,0,0,72,141,53,82,11,0,0,232,23,254,255,255,137,223,72,141,21,122,17,0,0,72,141,53,69,11,0,0,232,2,254,255,255,137,223,72,141,21,5,16,0,0,72,141,53,56,11,0,0,232,237,253,255,255,137,223,72,141,21,192,16,0,0,72,141,53,44,11,0,0,232,216,253,255,255,137,223,72,141,21,123,17,0,0,72,141,53,30,11,0,0,232,195,253,255,255,137,223,72,141,21,6,16,0,0,72,141,53,16,11,0,0,232,174,253,255,255,137,223,72,141,21,57,16,0,0,72,141,53,3,11,0,0,232,153,253,255,255,137,223,72,141,21,140,16,0,0,72,141,53,245,10,0,0,232,132,253,255,255,137,223,72,141,21,127,16,0,0,72,141,53,232,10,0,0,232,111,253,255,255,137,223,72,141,21,194,15,0,0,72,141,53,210,10,0,0,232,90,253,255,255,137,223,72,141,21,213,16,0,0,72,141,53,196,10,0,0,232,69,253,255,255,137,223,72,141,21,208,16,0,0,72,141,53,183,10,0,0,232,48,253,255,255,137,223,72,141,21,211,15,0,0,72,141,53,167,10,0,0,232,27,253,255,255,137,223,72,141,21,22,15,0,0,72,141,53,154,10,0,0,232,6,253,255,255,137,223,72,141,21,97,15,0,0,72,141,53,142,10,0,0,232,241,252,255,255,137,223,72,141,21,220,15,0,0,72,141,53,132,10,0,0,232,220,252,255,255,137,223,72,141,21,159,15,0,0,72,141,53,118,10,0,0,232,199,252,255,255,137,223,72,141,21,242,15,0,0,72,141,53,103,10,0,0,232,178,252,255,255,137,223,72,141,21,69,15,0,0,72,141,53,83,10,0,0,232,157,252,255,255,137,223,72,141,21,144,14,0,0,72,141,53,67,10,0,0,232,136,252,255,255,137,223,72,141,21,147,15,0,0,72,141,53,54,10,0,0,232,115,252,255,255,137,223,72,141,21,222,14,0,0,72,141,53,27,10,0,0,232,94,252,255,255,137,223,72,141,21,201,15,0,0,72,141,53,14,10,0,0,232,73,252,255,255,137,223,72,141,21,132,15,0,0,72,141,53,242,9,0,0,232,52,252,255,255,137,223,72,141,21,199,15,0,0,72,141,53,236,9,0,0,232,31,252,255,255,137,223,72,141,21,114,15,0,0,72,141,53,222,9,0,0,232,10,252,255,255,137,223,72,141,21,29,15,0,0,72,141,53,210,9,0,0,232,245,251,255,255,137,223,72,141,21,104,15,0,0,72,141,53,199,9,0,0,232,224,251,255,255,137,223,72,141,21,99,14,0,0,72,141,53,190,9,0,0,232,203,251,255,255,137,223,72,141,21,14,15,0,0,72,141,53,176,9,0,0,232,182,251,255,255,137,223,72,141,21,241,13,0,0,72,141,53,163,9,0,0,232,161,251,255,255,137,223,72,141,21,204,13,0,0,72,141,53,150,9,0,0,232,140,251,255,255,137,223,72,141,21,63,15,0,0,72,141,53,139,9,0,0,232,119,251,255,255,137,223,72,141,21,138,13,0,0,72,141,53,126,9,0,0,232,98,251,255,255,137,223,72,141,21,125,13,0,0,72,141,53,113,9,0,0,232,77,251,255,255,137,223,72,141,21,248,14,0,0,72,141,53,102,9,0,0,232,56,251,255,255,137,223,72,141,21,211,13,0,0,72,141,53,90,9,0,0,232,35,251,255,255,137,223,72,141,21,86,13,0,0,72,141,53,75,9,0,0,232,14,251,255,255,137,223,72,141,21,17,14,0,0,72,141,53,66,9,0,0,232,249,250,255,255,137,223,72,141,21,220,13,0,0,72,141,53,51,9,0,0,232,228,250,255,255,137,223,72,141,21,103,14,0,0,72,141,53,36,9,0,0,232,207,250,255,255,137,223,72,141,21,74,13,0,0,72,141,53,22,9,0,0,232,186,250,255,255,137,223,72,141,21,221,13,0,0,72,141,53,7,9,0,0,232,165,250,255,255,137,223,72,141,21,216,13,0,0,72,141,53,248,8,0,0,232,144,250,255,255,137,223,91,72,141,21,242,12,0,0,72,141,53,233,8,0,0,233,122,250,255,255,80,139,61,183,14,0,0,72,141,21,144,14,0,0,72,141,53,215,8,0,0,232,96,250,255,255,139,61,158,14,0,0,72,141,21,71,14,0,0,72,141,53,207,8,0,0,232,71,250,255,255,139,61,133,14,0,0,72,141,21,30,14,0,0,72,141,53,197,8,0,0,232,46,250,255,255,139,61,108,14,0,0,72,141,21,61,14,0,0,72,141,53,189,8,0,0,232,21,250,255,255,139,61,83,14,0,0,72,141,21,4,14,0,0,72,141,53,179,8,0,0,232,252,249,255,255,139,61,58,14,0,0,72,141,21,219,13,0,0,72,141,53,170,8,0,0,232,227,249,255,255,139,61,33,14,0,0,72,141,21,170,13,0,0,72,141,53,160,8,0,0,232,202,249,255,255,139,61,8,14,0,0,72,141,21,193,13,0,0,72,141,53,152,8,0,0,232,177,249,255,255,139,61,239,13,0,0,72,141,21,112,13,0,0,72,141,53,147,8,0,0,232,152,249,255,255,139,61,214,13,0,0,72,141,21,183,13,0,0,72,141,53,145,8,0,0,232,127,249,255,255,139,61,189,13,0,0,72,141,21,78,13,0,0,72,141,53,140,8,0,0,232,102,249,255,255,139,61,164,13,0,0,72,141,21,109,13,0,0,72,141,53,138,8,0,0,232,77,249,255,255,139,61,139,13,0,0,72,141,21,76,13,0,0,89,72,141,53,137,8,0,0,233,51,249,255,255,72,199,192,37,0,0,0,233,212,3,0,0,72,199,192,54,0,0,0,233,200,3,0,0,72,199,192,11,0,0,0,233,188,3,0,0,72,141,53,76,13,0,0,82,72,141,61,154,5,0,0,72,199,5,185,13,0,0,0,0,0,0,232,8,249,255,255,133,192,116,42,72,141,53,41,13,0,0,72,141,61,69,8,0,0,232,241,248,255,255,133,192,116,19,72,141,53,18,13,0,0,72,141,61,65,8,0,0,232,218,248,255,255,139,61,0,13,0,0,72,141,21,1,13,0,0,72,141,53,59,8,0,0,232,169,248,255,255,139,61,231,12,0,0,72,141,21,40,13,0,0,72,141,53,52,8,0,0,232,144,248,255,255,139,61,206,12,0,0,72,141,21,71,13,0,0,72,141,53,44,8,0,0,232,119,248,255,255,139,61,181,12,0,0,72,141,21,14,13,0,0,72,141,53,27,8,0,0,232,94,248,255,255,139,61,156,12,0,0,72,141,21,53,13,0,0,72,141,53,17,8,0,0,232,69,248,255,255,139,61,131,12,0,0,72,141,21,68,13,0,0,72,141,53,17,8,0,0,232,44,248,255,255,139,61,106,12,0,0,72,141,21,179,12,0,0,72,141,53,22,8,0,0,232,19,248,255,255,139,61,81,12,0,0,72,141,21,90,12,0,0,72,141,53,22,8,0,0,232,250,247,255,255,139,61,56,12,0,0,72,141,21,201,12,0,0,72,141,53,26,8,0,0,232,225,247,255,255,139,61,31,12,0,0,72,141,21,8,13,0,0,72,141,53,15,8,0,0,232,200,247,255,255,139,61,6,12,0,0,72,141,21,111,12,0,0,72,141,53,4,8,0,0,232,175,247,255,255,139,61,237,11,0,0,72,141,21,118,12,0,0,72,141,53,249,7,0,0,232,150,247,255,255,139,61,212,11,0,0,72,141,21,117,12,0,0,72,141,53,239,7,0,0,232,125,247,255,255,139,61,187,11,0,0,72,141,21,220,11,0,0,72,141,53,229,7,0,0,232,100,247,255,255,139,61,162,11,0,0,72,141,21,107,12,0,0,72,141,53,219,7,0,0,232,75,247,255,255,139,61,137,11,0,0,72,141,21,114,11,0,0,72,141,53,210,7,0,0,232,50,247,255,255,139,61,112,11,0,0,72,141,21,33,12,0,0,72,141,53,207,7,0,0,232,25,247,255,255,139,61,87,11,0,0,72,141,21,128,11,0,0,72,141,53,206,7,0,0,232,0,247,255,255,139,61,62,11,0,0,72,141,21,159,11,0,0,72,141,53,204,7,0,0,232,231,246,255,255,139,61,37,11,0,0,72,141,21,38,12,0,0,72,141,53,186,7,0,0,232,206,246,255,255,139,61,12,11,0,0,72,141,21,93,11,0,0,72,141,53,174,7,0,0,232,181,246,255,255,139,61,243,10,0,0,72,141,21,4,11,0,0,72,141,53,157,7,0,0,232,156,246,255,255,139,61,218,10,0,0,72,141,21,179,11,0,0,72,141,53,139,7,0,0,232,131,246,255,255,139,61,193,10,0,0,72,141,21,106,11,0,0,72,141,53,127,7,0,0,232,106,246,255,255,139,61,168,10,0,0,72,141,21,137,11,0,0,72,141,53,125,7,0,0,232,81,246,255,255,139,61,143,10,0,0,72,141,21,192,10,0,0,72,141,53,122,7,0,0,232,56,246,255,255,139,61,118,10,0,0,72,141,21,71,11,0,0,72,141,53,119,7,0,0,232,31,246,255,255,139,61,93,10,0,0,72,141,21,86,11,0,0,72,141,53,116,7,0,0,232,6,246,255,255,139,61,68,10,0,0,72,141,21,125,10,0,0,72,141,53,113,7,0,0,232,237,245,255,255,139,61,43,10,0,0,72,141,21,28,10,0,0,72,141,53,95,7,0,0,232,212,245,255,255,139,61,18,10,0,0,72,141,21,43,10,0,0,72,141,53,77,7,0,0,232,187,245,255,255,139,61,249,9,0,0,72,141,21,234,10,0,0,72,141,53,59,7,0,0,232,162,245,255,255,139,61,224,9,0,0,72,141,21,97,10,0,0,72,141,53,41,7,0,0,232,137,245,255,255,139,61,199,9,0,0,72,141,21,128,10,0,0,72,141,53,23,7,0,0,232,112,245,255,255,139,61,174,9,0,0,72,141,21,31,10,0,0,88,72,141,53,6,7,0,0,233,86,245,255,255,72,49,192,73,137,202,15,5,114,1,195,72,131,61,7,10,0,0,0,116,24,80,255,21,254,9,0,0,89,137,8,72,199,192,255,255,255,255,72,199,194,255,255,255,255,195,47,100,101,118,47,105,99,99,95,102,97,110,0,85,110,97,98,108,101,32,116,111,32,79,112,101,110,32,70,97,110,32,83,101,116,116,105,110,103,115,33,0,70,97,110,32,84,104,114,101,115,104,111,108,100,32,83,101,116,32,116,111,32,37,105,194,176,67,47,37,105,194,176,70,33,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,83,99,101,83,121,115,85,116,105,108,46,115,112,114,120,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,83,99,101,83,121,115,116,101,109,83,101,114,118,105,99,101,46,115,112,114,120,0,115,99,101,83,121,115,85,116,105,108,83,101,110,100,83,121,115,116,101,109,78,111,116,105,102,105,99,97,116,105,111,110,87,105,116,104,84,101,120,116,0,115,99,101,83,121,115,116,101,109,83,101,114,118,105,99,101,76,97,117,110,99,104,87,101,98,66,114,111,119,115,101,114,0,37,115,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,83,99,101,85,115,101,114,83,101,114,118,105,99,101,46,115,112,114,120,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,73,110,105,116,105,97,108,105,122,101,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,71,101,116,76,111,103,105,110,85,115,101,114,73,100,76,105,115,116,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,84,101,114,109,105,110,97,116,101,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,71,101,116,85,115,101,114,78,97,109,101,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,71,101,116,73,110,105,116,105,97,108,85,115,101,114,0,83,99,101,83,121,115,67,111,114,101,82,101,98,111,111,116,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,107,101,114,110,101,108,46,115,112,114,120,0,115,99,101,75,101,114,110,101,108,82,101,98,111,111,116,0,108,105,98,83,99,101,76,105,98,99,73,110,116,101,114,110,97,108,46,115,112,114,120,0,109,97,108,108,111,99,0,102,114,101,101,0,99,97,108,108,111,99,0,114,101,97,108,108,111,99,0,109,101,109,97,108,105,103,110,0,109,101,109,115,101,116,0,109,101,109,99,112,121,0,109,101,109,99,109,112,0,115,116,114,99,112,121,0,115,116,114,110,99,112,121,0,115,116,114,99,97,116,0,115,116,114,110,99,97,116,0,115,116,114,108,101,110,0,115,116,114,99,109,112,0,115,116,114,110,99,109,112,0,115,112,114,105,110,116,102,0,115,110,112,114,105,110,116,102,0,115,115,99,97,110,102,0,115,116,114,99,104,114,0,115,116,114,114,99,104,114,0,115,116,114,115,116,114,0,115,116,114,100,117,112,0,114,105,110,100,101,120,0,105,115,100,105,103,105,116,0,97,116,111,105,0,115,116,114,108,99,112,121,0,115,116,114,101,114,114,111,114,0,95,71,101,116,112,99,116,121,112,101,0,95,83,116,111,117,108,0,98,99,111,112,121,0,115,114,97,110,100,0,97,115,99,116,105,109,101,0,97,115,99,116,105,109,101,95,114,0,103,109,116,105,109,101,0,103,109,116,105,109,101,95,115,0,108,111,99,97,108,116,105,109,101,0,108,111,99,97,108,116,105,109,101,95,114,0,109,107,116,105,109,101,0,111,112,101,110,100,105,114,0,114,101,97,100,100,105,114,0,114,101,97,100,100,105,114,95,114,0,116,101,108,108,100,105,114,0,115,101,101,107,100,105,114,0,114,101,119,105,110,100,100,105,114,0,99,108,111,115,101,100,105,114,0,100,105,114,102,100,0,103,101,116,112,114,111,103,110,97,109,101,0,102,111,112,101,110,0,102,114,101,97,100,0,102,119,114,105,116,101,0,102,115,101,101,107,0,102,116,101,108,108,0,102,99,108,111,115,101,0,102,112,114,105,110,116,102,0,115,99,101,80,116,104,114,101,97,100,67,114,101,97,116,101,0,115,99,101,80,116,104,114,101,97,100,69,120,105,116,0,115,99,101,80,116,104,114,101,97,100,68,101,116,97,99,104,0,115,99,101,80,116,104,114,101,97,100,74,111,105,110,0,115,99,101,80,116,104,114,101,97,100,89,105,101,108,100,0,115,99,101,80,116,104,114,101,97,100,83,101,108,102,0,115,99,101,80,116,104,114,101,97,100,67,97,110,99,101,108,0,115,99,101,80,116,104,114,101,97,100,77,117,116,101,120,73,110,105,116,0,115,99,101,80,116,104,114,101,97,100,77,117,116,101,120,68,101,115,116,114,111,121,0,115,99,101,80,116,104,114,101,97,100,77,117,116,101,120,76,111,99,107,0,115,99,101,80,116,104,114,101,97,100,77,117,116,101,120,84,114,121,108,111,99,107,0,115,99,101,80,116,104,114,101,97,100,77,117,116,101,120,84,105,109,101,100,108,111,99,107,0,115,99,101,80,116,104,114,101,97,100,77,117,116,101,120,85,110,108,111,99,107,0,108,105,98,107,101,114,110,101,108,95,119,101,98,46,115,112,114,120,0,108,105,98,107,101,114,110,101,108,95,115,121,115,46,115,112,114,120,0,95,95,115,116,97,99,107,95,99,104,107,95,103,117,97,114,100,0,95,95,115,116,97,99,107,95,99,104,107,95,102,97,105,108,0,95,95,101,114,114,111,114,0,115,99,101,75,101,114,110,101,108,69,114,114,111,114,0,115,99,101,75,101,114,110,101,108,76,111,97,100,83,116,97,114,116,77,111,100,117,108,101,0,115,99,101,75,101,114,110,101,108,65,108,108,111,99,97,116,101,68,105,114,101,99,116,77,101,109,111,114,121,0,115,99,101,75,101,114,110,101,108,77,97,112,68,105,114,101,99,116,77,101,109,111,114,121,0,115,99,101,75,101,114,110,101,108,71,101,116,68,105,114,101,99,116,77,101,109,111,114,121,83,105,122,101,0,115,99,101,75,101,114,110,101,108,83,116,97,116,0,115,99,101,75,101,114,110,101,108,79,112,101,110,0,115,99,101,75,101,114,110,101,108,82,101,97,100,0,115,99,101,75,101,114,110,101,108,76,115,101,101,107,0,115,99,101,75,101,114,110,101,108,67,108,111,115,101,0,115,99,101,75,101,114,110,101,108,83,108,101,101,112,0,115,99,101,75,101,114,110,101,108,85,115,108,101,101,112,0,115,99,101,75,101,114,110,101,108,71,101,116,116,105,109,101,111,102,100,97,121,0,115,99,101,75,101,114,110,101,108,71,101,116,80,114,111,99,101,115,115,84,105,109,101,0,115,99,101,75,101,114,110,101,108,71,101,116,67,117,114,114,101,110,116,67,112,117,0,115,121,115,99,116,108,0,115,121,115,99,116,108,98,121,110,97,109,101,0,115,121,115,97,114,99,104,0,101,120,101,99,118,101,0,112,116,104,114,101,97,100,95,115,101,108,102,0,112,116,104,114,101,97,100,95,115,101,116,97,102,102,105,110,105,116,121,95,110,112,0,115,99,101,75,101,114,110,101,108,67,114,101,97,116,101,69,113,117,101,117,101,0,115,99,101,75,101,114,110,101,108,68,101,108,101,116,101,69,113,117,101,117,101,0,115,99,101,75,101,114,110,101,108,65,100,100,85,115,101,114,69,118,101,110,116,0,115,99,101,75,101,114,110,101,108,65,100,100,82,101,97,100,69,118,101,110,116,0,103,101,116,117,105,100,0,103,101,116,103,105,100,0,103,101,116,112,105,100,0,115,101,116,117,105,100,0,115,101,116,103,105,100,0,115,101,116,114,101,117,105,100,0,115,101,116,114,101,103,105,100,0];

window.mira_blob_2_len = 0x1aa8;
window.mira_blob_2 = malloc(window.mira_blob_2_len);
write_mem(window.mira_blob_2, payload);
