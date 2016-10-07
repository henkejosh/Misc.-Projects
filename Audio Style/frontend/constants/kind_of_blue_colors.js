const KindOfBlueHex = {
  1	:'#1094E5',
2	:'#1093E3',
3	:'#1193E2',
4	:'#1292E1',
5	:'#1392E0',
6	:'#1492DF',
7	:'#1491DE',
8	:'#1591DD',
9	:'#1691DC',
10	:'#1790DB',
11	:'#1890DA',
12	:'#188FD8',
13	:'#198FD7',
14	:'#1A8FD6',
15	:'#1B8ED5',
16	:'#1C8ED4',
17	:'#1C8ED3',
18	:'#1D8DD2',
19	:'#1E8DD1',
20	:'#1F8DD0',
21	:'#208CCF',
22	:'#218CCE',
23	:'#218BCC',
24	:'#228BCB',
25	:'#238BCA',
26	:'#248AC9',
27	:'#258AC8',
28	:'#258AC7',
29	:'#2689C6',
30	:'#2789C5',
31	:'#2889C4',
32	:'#2988C3',
33	:'#2988C1',
34	:'#2A87C0',
35	:'#2B87BF',
36	:'#2C87BE',
37	:'#2D86BD',
38	:'#2D86BC',
39	:'#2E86BB',
40	:'#2F85BA',
41	:'#3085B9',
42	:'#3185B8',
43	:'#3284B7',
44	:'#3284B5',
45	:'#3383B4',
46	:'#3483B3',
47	:'#3583B2',
48	:'#3682B1',
49	:'#3682B0',
50	:'#3782AF',
51	:'#3881AE',
52	:'#3981AD',
53	:'#3A81AC',
54	:'#3A80AA',
55	:'#3B80A9',
56	:'#3C7FA8',
57	:'#3D7FA7',
58	:'#3E7FA6',
59	:'#3E7EA5',
60	:'#3F7EA4',
61	:'#407EA3',
62	:'#417DA2',
63	:'#427DA1',
64	:'#437DA0',
65	:'#427B9E',
66	:'#417A9C',
67	:'#41789A',
68	:'#407798',
69	:'#3F7596',
70	:'#3F7494',
71	:'#3E7392',
72	:'#3D7190',
73	:'#3D708E',
74	:'#3C6E8C',
75	:'#3B6D8A',
76	:'#3B6B88',
77	:'#3A6A86',
78	:'#396984',
79	:'#396782',
80	:'#386680',
81	:'#37647E',
82	:'#37637C',
83	:'#36617A',
84	:'#356078',
85	:'#355F76',
86	:'#345D74',
87	:'#345C72',
88	:'#335A70',
89	:'#32596E',
90	:'#32576C',
91	:'#31566A',
92	:'#305568',
93	:'#305366',
94	:'#2F5264',
95	:'#2E5062',
96	:'#2E4F60',
97	:'#2D4D5E',
98	:'#2C4C5C',
99	:'#2C4B5A',
100	:'#2B4A59',
101	:'#2B4958',
102	:'#2B4957',
103	:'#2A4856',
104	:'#2A4755',
105	:'#2A4754',
106	:'#2A4654',
107	:'#294653',
108	:'#294552',
109	:'#294451',
110	:'#284450',
111	:'#28434F',
112	:'#28424E',
113	:'#27414D',
114	:'#27414C',
115	:'#27404B',
116	:'#263F4A',
117	:'#263F49',
118	:'##263E48',
119	:'#253D47',
120	:'#253C46',
121	:'#253C45',
122	:'#243B44',
123	:'#243A43',
124	:'#243A42',
125	:'#243942',
126	:'#233941',
127	:'#233840',
128	:'#23373F',
129	:'#22373E',
130	:'#22363D',
131	:'#22353C',
132	:'#21343B',
133	:'#21343A',
134	:'#213339',
135	:'#203238',
136	:'#203237',
137	:'#203136',
138	:'#1F3035',
139	:'#1F2F34',
140	:'#1F2F33',
141	:'#1E2E32',
142	:'#1E2D31',
143	:'#1E2D30',
144	:'#1E2C30',
145	:'#1D2C2F',
146	:'#1D2B2E',
147	:'#1D2A2D',
148	:'#1C2A2C',
149	:'#1C292B',
150	:'#1C282A'
};

const hexToRgb = function(hex){
    hex = hex.replace('#','');
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);

    let result = 'rgb('+r+','+g+','+b+')';
    return result;
};

const KindOfBlueRgb = {};

Object.keys(KindOfBlueHex).forEach( id  => {
  KindOfBlueRgb[id] = hexToRgb(KindOfBlueHex[id]);
});

module.exports = KindOfBlueRgb;
