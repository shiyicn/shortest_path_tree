// A sequence of points to be plotted, in standard [latitude, longitude] coordinates, expressed in degrees.
var plottedPoints = [
[49.255403, 1.205718],
[49.41496, 2.10568],
[49.10211, 3.374333],
[49.418, 2.092376],
[48.135809, 2.474732],
[48.00056, 2.668325],
[48.00056, 2.668325],
[48.794598, 3.206716],
[49.417464, 2.101997],
[48.90108, 3.225596],
[49.211751, 1.170495],
[49.205487, 1.378127],
[49.205487, 1.378127],
[49.053032, 3.399108],
[48.138051, 2.480781],
[49.056827, 1.213435],
[49.422261, 2.806235],
[48.319665, 2.991631],
[49.247121, 1.209675],
[48.189801, 2.381144],
[48.059685, 3.095465],
[49.414067, 2.81619],
[48.268891, 1.267481],
[49.414294, 2.138172],
[49.245424, 1.82919],
[48.1426, 2.47002],
[49.164968, 1.44504],
[48.326656, 3.082519],
[49.202653, 1.56014],
[49.209678, 1.573025],
[49.25895, 2.373399],
[48.145585, 2.921897],
[49.341187, 2.198943],
[48.142205, 2.90142],
[48.346512, 3.133029],
[48.310683, 2.947406],
[48.422088, 3.122562],
[48.012402, 1.878291],
[49.282102, 2.273624],
[49.406063, 2.819854],
[49.23806, 3.023144],
[49.229432, 1.223327],
[49.366183, 2.121685],
[49.025287, 3.348291],
[49.365114, 2.121829],
[49.208391, 1.172337],
[48.852311, 3.238349],
[49.417291, 2.101206],
[49.43346, 2.115194],
[49.128185, 1.21596],
[49.164367, 1.448528],
[49.302113, 2.558984],
[48.47638, 1.314138],
[48.054039, 2.758748],
[49.247327, 1.947766],
[49.192609, 1.464827],
[48.34657, 3.132621],
[49.283802, 2.276011],
[49.212068, 1.171514],
[48.570387, 1.384301],
[48.107016, 1.709384],
[48.821223, 1.16234],
[48.97898, 3.283133],
[49.322145, 2.414934],
[49.338786, 2.437502],
[49.238565, 3.023743],
[49.08122, 1.227024],
[48.12958, 1.653881],
[49.411935, 2.795578],
[48.269197, 1.267822],
[49.277417, 2.356902],
[48.190312, 2.246839],
[48.112783, 1.688174],
[49.257002, 2.374307],
[49.444605, 2.736949],
[48.053432, 2.761941],
[48.417322, 1.346398],
[49.244073, 1.177962],
[48.049711, 3.108722],
[49.26176, 2.407001],
[49.351975, 2.553369],
[49.278845, 2.311487],
[48.147259, 2.924996],
[49.332123, 2.441714],
[49.426831, 2.653141],
[48.475294, 1.321501],
[49.091229, 3.25657],
[48.143309, 2.900263],
[49.312391, 2.248285],
[49.424885, 2.652473],
[49.419162, 2.103358],
[48.990224, 1.246198],
[49.203656, 1.380623],
[49.203656, 1.380623],
[49.243995, 1.838251],
[49.208645, 1.570066],
[49.292548, 2.810585],
[49.240178, 1.199039],
[49.413372, 2.089966],
[49.212239, 1.171845],
[49.256481, 1.203768],
[49.418774, 2.102298],
[48.512482, 3.104058],
[49.417015, 2.102396],
[49.293709, 2.80965],
[48.076079, 2.809948],
[48.53781, 1.345018],
[48.958822, 1.28615],
[49.29955, 2.263173],
[49.056038, 3.39393],
[49.326592, 2.456439],
[48.838668, 3.236571],
[49.054306, 3.406058],
[49.213185, 1.174016],
[49.164424, 1.446063],
[49.242858, 1.195133],
[48.47479, 1.314476],
[49.205812, 1.380356],
[48.91021, 1.268627],
[49.231147, 1.224623],
[48.510658, 3.102996],
[48.605973, 3.115396],
[48.510565, 3.102586],
[49.413231, 2.817186],
[48.344691, 3.113986],
[49.44196, 2.733517],
[47.987945, 2.667539],
[48.08979, 1.787968],
[49.426902, 2.640931],
[49.339663, 2.152803],
[48.329739, 3.089764],
[49.38004, 2.102621],
[48.128858, 2.855319],
[48.415564, 1.355624],
[48.413616, 3.151231],
[49.055194, 3.385233],
[48.152602, 2.449084],
[49.115443, 1.214527],
[49.272253, 2.363053],
[49.16965, 1.402652],
[49.205355, 1.380872],
[48.504814, 1.310717],
[48.35352, 1.308988],
[48.905723, 3.226019],
[47.987406, 2.668438],
[48.20163, 2.188889],
[48.507509, 1.308591],
[48.507509, 1.308591],
[49.322027, 2.468432],
[48.581883, 1.332866],
[49.327064, 2.453677],
[48.152784, 2.44917],
[49.054319, 3.406043],
[49.42105, 2.795608],
[49.114443, 3.170065],
[49.114594, 1.207789],
[49.299568, 2.261876],
[49.078299, 1.223499],
[49.405145, 2.823497],
[48.502949, 1.309235],
[49.188447, 1.324886],
[48.371081, 1.306608],
[49.254443, 1.205056],
[49.206168, 1.382343],
[49.304426, 2.809805],
[49.212869, 1.172361],
[49.266831, 1.887177],
[49.247121, 1.830421],
[48.104812, 1.767936],
[48.104812, 1.767936],
[49.123722, 3.184892],
[49.324091, 2.413594],
[49.407424, 2.814623],
[49.211312, 1.169874],
[48.053587, 3.086054],
[48.992585, 1.244575],
[48.194626, 2.376123],
[48.473339, 1.326009],
[49.433512, 2.128259],
[49.361794, 2.113141],
[48.905746, 3.226024],
[48.347399, 3.139579],
[49.205969, 1.379593],
[49.326413, 2.457082],
[48.086232, 1.956426],
[48.27077, 1.269805],
[49.277863, 2.357928],
[48.986209, 3.282432],
[48.656071, 1.196554],
[48.911773, 1.27908],
[49.316338, 2.524498],
[48.771981, 1.090894],
[49.235662, 1.181001],
[49.38722, 2.145049],
[49.319364, 2.527095],
[48.955889, 3.245416],
[48.511838, 3.104798],
[48.583465, 1.329605],
[49.272395, 2.363176],
[48.137247, 2.894388],
[49.244201, 1.212618],
[49.055018, 3.319127],
[48.913024, 1.275345],
[48.702224, 3.241859],
[49.411753, 2.801759],
[49.220648, 1.179401],
[48.320333, 2.99024],
[48.910572, 1.271736],
[49.410892, 2.81682],
[48.967876, 3.2367],
[48.988607, 1.245599],
[49.130348, 1.218786],
[48.940553, 1.299649],
[48.076274, 2.80929],
[49.245386, 1.655893],
[49.413481, 2.815956],
[48.28332, 2.956298],
[48.145717, 2.920621],
[48.098576, 2.83916],
[48.314335, 1.32192],
[49.438132, 2.121481],
[48.239203, 1.434638],
[49.169543, 1.400871],
[49.203669, 1.302999],
[48.393525, 1.319933],
[49.212054, 1.172069],
[49.268406, 1.873311],
[49.430394, 2.64543],
[48.978244, 3.282931],
[49.249792, 1.208857],
[49.335419, 2.844863],
[48.064845, 2.775823],
[48.475029, 1.322596],
[49.058594, 1.2385],
[48.076552, 2.810173],
[48.164057, 2.942578],
[48.700997, 3.249461],
[47.995868, 2.683451],
[48.105005, 2.842185],
[48.133562, 2.85854],
[49.411709, 2.811675],
[49.106781, 3.16452],
[48.917593, 3.272732],
[48.60651, 1.301468],
[48.271877, 1.277495],
[49.317047, 2.525566],
[48.733157, 3.193503],
[48.703092, 3.243016],
[49.243408, 1.656422],
[49.265371, 2.358971],
[48.357183, 3.152717],
[48.32011, 2.992293],
[48.082456, 2.720834],
[48.472892, 1.324587],
[49.305536, 2.806081],
[49.244757, 1.212654],
[49.260311, 1.202282],
[49.412716, 2.800146],
[48.392296, 1.315956],
[49.120259, 3.181845],
[48.452296, 1.334729],
[49.207422, 1.624297],
[48.612985, 3.119534],
[49.413622, 2.793814],
[48.320527, 2.99027],
[48.912403, 1.275142],
[49.338607, 2.154374],
[49.243627, 1.213517],
[49.248739, 1.939737],
[48.902718, 3.228723],
[47.947751, 1.864182],
[48.987973, 1.24674],
[48.301104, 2.937107],
[48.400497, 3.204498],
[49.123376, 3.183198],
[48.205089, 2.192279],
[49.39178, 2.146907],
[48.611572, 3.144236],
[49.314266, 2.522379],
[48.179521, 1.655535],
[48.322693, 1.227369],
[48.622686, 1.289315],
[49.34017, 2.017735],
[49.055694, 3.394111],
[49.027656, 1.188945],
[48.14077, 2.483052],
[49.049487, 3.3976],
[48.989525, 3.288631],
[48.979979, 3.284272],
[49.328202, 2.556009],
[49.169586, 1.394708],
[48.097898, 1.727188],
[48.150758, 1.637071],
[49.206194, 1.382539],
[49.40098, 2.780591],
[48.068329, 2.745634],
[49.245469, 1.65074],
[48.246646, 2.95641],
[49.303162, 2.810318],
[48.978348, 3.283344],
[48.105685, 1.767701],
[49.01462, 1.210299],
[49.247719, 2.93085],
[48.47363, 1.316537],
[49.292715, 2.811025],
[48.976373, 3.276097],
[49.090476, 3.23383],
[49.407805, 2.79317],
[48.203305, 2.986672],
[49.210409, 1.169203],
[49.408336, 2.814434],
[48.400962, 3.18957],
[49.283888, 2.282026],
[48.176142, 2.935766],
[49.292587, 2.811018],
[49.427481, 2.64976],
[49.395942, 2.098256],
[49.26305, 2.853804],
[49.049668, 3.398206],
[48.735631, 3.186882],
[48.053062, 2.760015],
[49.405163, 2.822806],
[49.419107, 2.11213],
[48.120491, 1.935465],
[49.407455, 2.8174],
[49.338979, 2.20967],
[49.411725, 2.797056],
[49.049383, 3.397949],
[49.097338, 1.206057],
[49.139417, 1.307378],
[49.413056, 2.137571],
[49.206443, 1.599088],
[49.408297, 2.812083],
[48.542216, 1.389747],
[49.296148, 2.258212],
[49.244757, 1.655827],
[48.76795, 3.195625],
[48.163649, 2.93848],
[48.137687, 2.89915],
[48.231684, 1.408111],
[49.444571, 2.73637],
[49.250107, 1.187962],
[48.339596, 3.118585],
[48.147762, 2.918788],
[49.408084, 2.819373],
[48.923594, 3.273288],
[48.923594, 3.273288],
[48.322379, 3.015005],
[49.208612, 1.539597],
[49.015543, 1.180312],
[49.338222, 2.185656],
[48.049798, 1.915549],
[49.241671, 2.963738],
[48.760689, 3.170579],
[48.333002, 3.107866],
[49.444113, 2.733995],
[49.063282, 3.308917],
[49.170288, 1.404799],
[49.428585, 2.642702],
[49.416918, 2.098231],
[49.418499, 2.105028],
[49.267852, 1.886585],
[49.389694, 2.139039],
[49.296304, 1.975785],
[48.188483, 2.955748],
[49.130381, 1.213389],
[49.411933, 2.795566],
[48.195925, 1.642607],
[49.206665, 1.382101],
[49.225442, 1.689428],
[48.58223, 1.331704],
[49.404039, 2.825779],
[49.414995, 2.092053],
[48.798336, 3.207128],
[48.799681, 3.209474],
[48.277697, 1.527386],
[48.604328, 1.303712],
[49.374052, 2.09837],
[48.054889, 1.935452],
[49.274133, 2.360977],
[48.245095, 2.947759],
[49.092678, 2.999519],
[49.324333, 2.246257],
[48.767824, 3.187574],
[49.389153, 2.142451],
[49.202437, 1.598718],
[49.314298, 2.53088],
[49.305059, 2.80749],
[49.270506, 1.871671],
[48.955527, 3.245392],
[49.215517, 1.506017],
[48.335663, 1.290419],
[48.90248, 3.229215],
[49.263338, 1.199806],
[49.391523, 2.137615],
[48.148143, 2.928363],
[49.247647, 1.937408],
[48.900261, 1.269482],
[49.122015, 3.181345],
[49.117093, 1.213051],
[48.542291, 1.302922],
[49.247061, 1.950452],
[49.240932, 3.029634],
[49.232802, 3.020027],
[49.242306, 1.219152],
[49.304375, 2.809838],
[48.13549, 2.860866],
[48.976597, 3.275802],
[48.967764, 3.264913],
[48.221758, 2.963107],
[49.245917, 1.841911],
[49.392595, 2.087074],
[49.207897, 1.382061],
[49.360406, 2.115423],
[49.210078, 1.168627],
[48.447885, 1.333646],
[48.798658, 3.185761],
[48.098782, 2.842263],
[49.433465, 2.130761],
[48.204286, 2.287846],
[49.248766, 1.939828],
[48.589413, 3.113753],
[48.65622, 1.193082],
[49.092734, 2.991114],
[48.245748, 2.948349],
[49.295714, 2.261077],
[49.444092, 2.737116],
[49.257341, 2.406462],
[49.431669, 2.81162],
[48.624858, 1.290989],
[49.005324, 1.219731],
[48.73426, 3.193594],
[49.249314, 1.212649],
[49.337402, 2.433378],
[48.332054, 3.050454],
[49.52006, 2.721184],
[49.241239, 3.0314],
[49.272107, 2.330767],
[49.207838, 1.382871],
[49.057169, 1.214118],
[49.152678, 1.424284],
[48.328828, 3.087012],
[48.040409, 1.860614],
[49.265989, 1.888531],
[48.204381, 2.98678],
[48.348452, 3.142029],
[48.281173, 2.958738],
[49.437033, 2.115351],
[48.075773, 2.731996],
[48.856042, 3.239874],
[49.311372, 2.504898],
[48.771199, 1.090203],
[49.252275, 2.402824],
[49.189856, 1.466382],
[49.32967, 2.001799],
[47.931113, 1.849259],
[48.204424, 2.987261],
[49.413843, 2.142289],
[48.205525, 2.107501],
[48.05225, 1.7854],
[49.015588, 1.180041],
[48.19718, 2.3753],
[48.439448, 1.325201],
[49.407037, 2.820258],
[49.116513, 1.212817],
[49.090953, 3.066158],
[49.429756, 2.125716],
[49.244876, 1.728719],
[49.20901, 1.170775],
[49.355884, 2.14993],
[49.088847, 3.380392],
[49.208995, 1.170788],
[48.136532, 2.893184],
[49.262999, 1.194948],
[48.531303, 3.095849],
[49.235075, 1.220792],
[49.393376, 2.131491],
[49.431786, 2.116356],
[49.389459, 2.10069],
[48.39947, 1.344253],
[48.619537, 1.287662],
[49.253039, 3.010626],
[49.252653, 1.920851],
[49.201057, 3.016504],
[48.78934, 3.228044],
[48.040078, 1.848066],
[49.218773, 1.181529],
[48.980008, 3.284407],
[49.329301, 2.421969],
[49.213442, 1.173178],
[49.027315, 1.18989],
[48.9183, 3.278577],
[48.699758, 3.248899],
[49.08163, 3.04965],
[48.195936, 1.642618],
[47.989075, 2.690104],
[49.215056, 1.596949],
[48.162557, 2.035951],
[48.816145, 1.158173],
[49.040915, 1.211006],
[49.194367, 1.318196],
[48.619804, 3.197927],
[49.119265, 3.217131],
[48.20954, 2.310072],
[49.41935, 2.115844],
[48.292477, 2.945862],
[49.076741, 3.40693],
[49.43374, 2.115388],
[49.431991, 2.117128],
[48.99045, 1.235003],
[49.265889, 1.888542],
[48.196135, 2.375665],
[49.208444, 1.385628],
[48.842961, 3.24267],
[48.703128, 3.242633],
[49.247029, 1.930792],
[48.977012, 3.277511],
[48.801892, 3.214994],
[48.101277, 1.925386],
[49.141454, 1.213781],
[49.263369, 1.181719],
[48.806399, 1.131351],
[48.619046, 3.194831],
[48.138596, 2.900537],
[49.300337, 2.810574],
[48.472878, 1.324545],
[49.450544, 2.701559],
[48.840242, 3.23661],
[48.853304, 1.218896],
[48.985645, 3.28335],
[48.415436, 1.355886],
[48.415436, 1.355886],
[49.379794, 2.616486],
[48.307184, 1.58712],
[48.218498, 2.279808],
[49.321862, 2.465923],
[49.062866, 1.215256],
[49.243431, 1.658344],
[48.459834, 3.134334],
[49.1193, 1.215007],
[48.11116, 2.64897],
[49.244857, 1.180277],
[49.182508, 1.656262],
[48.947824, 1.289858],
[48.152424, 2.450526],
[48.976597, 3.276523],
[49.389434, 2.1394],
[49.111465, 3.493371],
[49.311613, 2.460776],
[48.176134, 2.409833],
[48.056053, 2.766943],
[49.390462, 2.584863],
[48.975454, 1.244014],
[48.792767, 3.224264],
[48.878878, 1.229654],
[48.251631, 1.65221],
[48.800568, 1.124016],
[48.548061, 1.298316],
[49.051536, 3.400218],
[49.427959, 2.638097],
[48.064885, 2.791772],
[49.437283, 2.114978],
[49.298306, 2.452166],
[49.420335, 2.13084],
[48.331131, 3.102194],
[48.144833, 2.924184],
[48.429072, 3.125783],
[48.046667, 1.83463],
[49.074424, 1.223248],
[48.145326, 2.921152],
[48.375874, 1.305654],
[49.245756, 1.937109],
[48.216561, 2.987185],
[48.207361, 2.032956],
[49.09683, 2.979588],
[48.075289, 2.72463],
[48.285005, 2.947009],
[48.96209, 3.236365],
[48.776911, 1.097253],
[49.242023, 2.970357],
[49.098589, 3.084258],
[49.34735, 2.431059],
[48.201074, 2.992189],
[48.666509, 3.21498],
[48.915493, 3.262277],
[48.341549, 3.128603],
[48.932081, 1.297255],
[49.063288, 3.30891],
[48.501873, 1.305695],
[48.691783, 3.245769],
[48.241211, 1.383591],
[49.018335, 1.184352],
[49.196939, 1.466203],
[49.296105, 2.810535],
[48.375478, 1.305763],
[48.512735, 3.101358],
[48.098722, 2.701709],
[48.085438, 1.956601],
[49.433114, 2.129391],
[47.996689, 2.691587],
[48.107709, 1.93714],
[48.343597, 3.132934],
[48.973417, 1.2444],
[48.223077, 2.28641],
[49.421483, 2.106065],
[47.948312, 1.865656],
[49.352566, 2.427426],
[48.231548, 1.412142],
[49.203029, 1.28689],
[49.269503, 1.867632],
[48.986511, 3.28285],
[48.476864, 3.148679],
[48.20349, 2.988255],
[49.259934, 1.861524],
[48.771904, 1.090431],
[48.135812, 2.475322],
[49.095056, 3.035128],
[49.121779, 2.977191],
[48.483836, 3.138807],
[49.241187, 1.218797],
[48.145432, 2.92038],
[49.109934, 3.112118],
[49.021075, 3.317126],
[48.563673, 1.388747],
[49.252037, 2.402701],
[49.380762, 2.623773],
[48.722993, 3.203701],
[49.201774, 1.352849],
[48.976915, 3.270547],
[49.243037, 1.707886],
[48.272764, 1.242479],
[49.185341, 1.465838],
[48.867431, 3.240168],
[48.02174, 1.857008],
[49.300261, 2.417544],
[49.241816, 2.962492],
[49.350064, 2.041203],
[48.137328, 2.869738],
[48.137328, 2.869738],
[49.195216, 1.17364],
[48.307683, 1.57458],
[48.401482, 3.176257],
[49.42801, 2.638861],
[49.190978, 1.167511],
[49.279295, 2.321765],
[48.559198, 3.145167],
[48.841755, 1.208302],
[49.095859, 1.206844],
[49.095859, 1.206844],
[49.262862, 2.849999],
[49.161286, 1.431017],
[49.439945, 2.680278],
[48.908714, 1.265048],
[49.312178, 2.506785],
[49.05613, 1.216489],
[49.04245, 3.350527],
[49.371686, 2.589324],
[49.295857, 2.265915],
[49.007417, 1.187506],
[49.129947, 3.000157],
[48.381472, 3.173619],
[49.348137, 2.858932],
[48.298932, 1.643202],
[49.402401, 2.830636],
[49.520904, 2.721122],
[49.321603, 2.144811],
[49.056014, 1.210999],
[49.456437, 2.15359],
[48.87687, 3.248695],
[49.228063, 1.221929],
[49.26505, 1.887351],
[48.318039, 1.636562],
[49.449308, 2.715655],
[48.09394, 2.680499],
[48.326276, 3.059695],
[49.007347, 1.218426],
[48.356979, 3.146783],
[49.257097, 1.970124],
[48.277828, 3.272591],
[49.091604, 3.066726],
[49.271176, 2.841021],
[49.400887, 2.102181],
[49.263196, 2.853515],
[49.074296, 3.293575],
[48.322697, 1.234143],
[48.535269, 1.292816],
[49.273411, 2.351755],
[48.127972, 1.917437],
[48.432844, 3.127807],
[48.538052, 1.293006],
[49.106148, 3.405535],
[49.451195, 2.707771],
[49.183546, 1.641588],
[49.311377, 2.482868],
[49.256376, 2.879338],
[48.284975, 1.544951],
[48.18924, 2.381716],
[48.481672, 3.140764],
[48.728725, 1.131835],
[48.681087, 3.235132],
[49.261148, 1.890196],
[48.769291, 3.201462],
[49.446627, 2.692568],
[48.652158, 1.208515],
[48.753732, 1.124589],
[48.361137, 1.304735],
[48.967229, 1.258881],
[49.42028, 2.114786],
[48.538069, 1.293009],
[48.111316, 2.848489],
[48.090886, 2.694148],
[48.651653, 1.20798],
[49.409605, 2.796325],
[48.293228, 2.942518],
[48.017107, 1.8807],
[49.255144, 1.186668],
[49.114489, 3.395451],
[48.801486, 3.215514],
[48.193951, 2.028257],
[49.06631, 3.376949],
[48.274568, 1.217569],
[48.827495, 3.242195],
[48.332068, 3.109886],
[49.331999, 2.545412],
[48.228302, 1.405179],
[48.329755, 3.095869],
[49.243476, 1.610839],
[49.342016, 2.192964],
[48.333815, 1.283308],
[49.263792, 1.165193],
[48.210819, 2.175195],
[48.332676, 1.311609],
[49.245742, 1.713336],
[48.897947, 3.231317],
[49.308499, 1.978666],
[49.190598, 1.321585],
[48.646353, 1.235209],
[49.426338, 2.632063],
[48.464689, 3.148266],
[48.277191, 1.271892],
[48.696997, 1.137669],
[49.098031, 1.206274],
[49.207659, 1.544717],
[48.029843, 1.8913],
[49.022066, 1.195086],
[49.240438, 3.030524],
[48.299799, 1.198258],
[48.081369, 1.952169],
[49.25002, 1.811361],
[49.04752, 3.355209],
[48.573685, 1.359159],
[48.965041, 3.259506],
[48.1415, 2.579996],
[49.008093, 1.187857],
[49.206671, 1.465437],
[48.325382, 1.231683],
[48.929638, 3.26836],
[48.100257, 2.820469],
[49.248251, 2.983897],
[48.31692, 1.208594],
[48.125485, 2.829224],
[49.082517, 3.049766],
[48.88419, 1.237185],
[48.756857, 1.12184],
[49.227381, 3.018492],
[49.116185, 3.133282],
[49.213244, 1.520918],
[48.523352, 1.291764],
[49.312636, 2.424507],
[49.206556, 1.477689],
[48.682048, 1.15906],
[49.43208, 2.671901],
[49.240061, 1.599388],
[49.354207, 2.063363],
[49.078033, 3.279009],
[49.320871, 2.527876],
[49.414977, 2.595203],
[48.299701, 1.644731],
[48.268167, 2.953344],
[49.366543, 2.841337],
[48.459804, 3.134874],
[49.210392, 1.388869],
[47.988532, 2.661343],
[49.23449, 1.597639],
[48.834914, 1.170491],
[49.242528, 1.172731],
[49.269489, 1.867626],
[48.659326, 3.211568],
[48.098576, 2.820058],
[48.83145, 1.194432],
[48.275093, 1.220909],
[48.917256, 1.281567],
[48.413157, 1.348591],
[48.205261, 2.294659],
[49.180166, 1.183788],
[48.274256, 1.217972],
[48.25388, 2.959255],
[49.234287, 1.204782],
[49.088619, 1.215325],
[48.785972, 1.102148],
[48.022926, 1.855896],
[49.241797, 3.004012],
[48.21743, 2.138741],
[48.621231, 3.164509],
[49.191634, 1.167542],
[49.446464, 2.718632],
[48.293598, 1.644871],
[48.850981, 3.244436],
[48.278182, 1.535417],
[49.413857, 2.143639],
[49.110018, 3.399879],
[48.416554, 3.146838],
[48.402556, 3.183158],
[48.250195, 2.959],
[48.198188, 2.216991],
[49.088981, 3.38009],
[49.417216, 2.597815],
[49.114678, 1.207434],
[48.308403, 1.205125],
[48.62109, 1.256916],
[48.222773, 1.633488],
[49.388841, 2.14685],
[48.542277, 3.131283],
[48.009233, 2.676562],
[48.282526, 1.541829],
[48.361538, 1.303694],
[48.108002, 1.938415],
[49.11249, 3.221844],
[48.62377, 3.19735],
[48.659961, 1.190653],
[48.902723, 1.261105],
[48.717279, 1.132531],
[49.165324, 3.0107],
[48.444452, 1.32055],
[48.113514, 2.644436],
[48.770953, 1.092126],
[48.113877, 1.661525],
[49.285694, 1.135547],
[49.103303, 3.37386],
[48.449938, 1.330051],
[48.19017, 2.058577],
[49.250106, 1.789501],
[48.23456, 1.395496],
[49.28711, 2.29494],
[49.347331, 2.857042],
[48.865431, 1.177203],
[48.652649, 3.198631],
[48.766491, 1.110578],
[49.213862, 1.514776],
[48.087478, 2.80945],
[48.265972, 1.494771],
[48.082802, 1.790799],
[48.138792, 1.63046],
[48.258796, 1.475836],
[48.296701, 1.556002],
[49.349238, 2.855682],
[49.252775, 2.904572],
[49.013209, 1.188338],
[48.19976, 2.092813],
[48.548705, 1.320232],
[48.047502, 1.794631],
[48.057563, 1.786528],
[49.006772, 1.217985],
[48.122607, 2.604223],
[48.230269, 2.287051],
[48.297266, 1.199803],
[48.821622, 1.16147],
[49.334242, 2.217471],
[48.777427, 3.212633],
[48.097871, 1.727161],
[48.087314, 1.956205],
[48.260198, 1.486294],
[48.767722, 3.201037],
[48.097886, 1.722287],
[49.204213, 1.38959],
[48.259181, 1.656655],
[48.872086, 1.217857],
[48.872086, 1.217857],
[48.542007, 1.331044],
[48.728887, 1.131225],
[48.842874, 1.182097],
[49.247748, 1.738645],
[48.203895, 2.287683],
[49.282743, 1.986086],
[49.426293, 2.796548],
[48.264342, 1.312011],
[49.230747, 1.677647],
[48.126714, 1.982774],
[48.273075, 1.662762],
[49.367362, 2.842737],
[48.151474, 2.926472],
[48.008413, 2.678462],
[49.308019, 2.26414],
[49.175423, 1.403615],
[48.538787, 1.347103],
[49.156948, 2.996032],
[48.254361, 1.131056],
[48.877986, 3.248438],
[48.332591, 1.257241],
[48.589092, 3.114083],
[48.16762, 1.64743],
[48.266593, 1.340448],
[48.811441, 1.13502],
[49.205049, 1.343852],
[48.604838, 1.300804],
[48.476077, 3.148703],
[48.053252, 2.759466],
[49.44098, 2.74423],
[48.056419, 1.784833],
[48.386601, 3.190559],
[48.206401, 2.309499],
[49.201695, 1.350996],
[48.160836, 2.420599],
[48.208268, 2.345134],
[48.259098, 1.369798],
[48.339639, 1.387402],
[49.247853, 1.763786],
[48.390066, 3.196453],
[49.270533, 1.870314],
[48.060269, 2.748358],
[48.226027, 1.635106],
[48.094188, 2.556826],
[48.055451, 1.784409],
[49.069179, 3.339931],
[48.067523, 1.978961],
[47.959628, 2.673937],
];

var centralMarker =[48.783477, 2.277576];