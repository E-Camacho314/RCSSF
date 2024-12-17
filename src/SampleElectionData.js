import donaldTrumpImg from './Assets/Images/DonaldTrump.png';
import kamalaHarrisImg from './Assets/Images/KamalaHarris.png';
import mrfrogImg from './Assets/Images/MrFrog.png';
import jimbleImg from './Assets/Images/Jimble.png';

export const presidentialcandidatesProjection = [
    { name: "Kamala Harris", party: "Democratic", photo: kamalaHarrisImg},
    { name: "Donald Trump", party: "Republican", photo: donaldTrumpImg},
    { name: "Mr. Frog", party: "Green", photo: mrfrogImg},
    { name: "Jimble", party: "Independent", photo: jimbleImg},
    { name: "Jo Jorgensen", party: "Libertarian"},
    { name: "None of These Candidates", party: "NONE"}
  ];
  
    // List of states with their results (Democrat = "Dem", Republican = "Rep")
export const presidentialResultsProjection = {
    "AL": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1200000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2180000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "AK": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 300000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 310000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "AZ": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1400000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 1350000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "AR": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 800000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 990000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "CA": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 7000000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 6800000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "CO": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1800000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 1700000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "CT": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1600000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 1580000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "DC": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1600000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 1580000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "DE": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 600000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 580000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "FL": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 4000000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 9500000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "GA": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 2300000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2250000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "HI": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 800000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 790000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "ID": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 600000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 680000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "IL": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 2700000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2600000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "IN": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1800000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2700000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "IA": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1000000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 190000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "KS": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 700000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 880000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "KY": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1400000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2350000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "LA": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1200000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2150000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "ME": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 700000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 690000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "MD": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1900000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 1850000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "MA": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 2400000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2300000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "MI": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 2600000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2500000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "MN": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1500000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 1450000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "MS": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 800000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 790000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "MO": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1400000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2350000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "MT": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 400000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 490000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "NE": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 600000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 690000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "NV": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 800000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 780000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 170000000 },
      { party: presidentialcandidatesProjection[5].party, name: presidentialcandidatesProjection[5].name, votes: 250 }
    ],
    "NH": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 600000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 590000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "NJ": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 2800000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2700000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "NM": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 700000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 680000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 1700000000 },
      { party: presidentialcandidatesProjection[4].party, name: presidentialcandidatesProjection[4].name, votes: 2550 }
    ],
    "NY": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 5500000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 5400000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "NC": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 2400000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 3350000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "ND": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 3000000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 390000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "OH": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 2900000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 3850000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "OK": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 900000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 980000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "OR": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1400000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 1350000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "PA": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 2800000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2700000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "RI": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 400000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 390000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "SC": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1200000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2150000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "SD": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1200000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2150000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "TN": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1200000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2150000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "TX": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1200000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2150000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "UT": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1200000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2150000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "VT": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1200000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 1150000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "VA": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1200000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 1150000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "WA": [
        { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1200000 },
        { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 1150000 },
        { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
        { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "WI": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1200000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 1150000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "WV": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1200000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2150000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 250000000 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
    "WY": [
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 1200000 },
      { party: presidentialcandidatesProjection[1].party, name: presidentialcandidatesProjection[1].name, votes: 2150000 },
      { party: presidentialcandidatesProjection[2].party, name: presidentialcandidatesProjection[2].name, votes: 2500 },
      { party: presidentialcandidatesProjection[3].party, name: presidentialcandidatesProjection[3].name, votes: 13450000 }
    ],
};

export const currentSenateProjection = [
  { party: "Democratic", seats: 34},
  { party: "Republican", seats: 30},
  { party: "Independent", seats: 1}
];
  
export const senateResultsProjection = {
    "AL": [
      { party: "Democratic", name: "Senator A", votes: 1200000 },
      { party: "Republican", name: "Senator B", votes: 2180000 }
    ],
    "AK": [
      { party: "Independent", name: "Senator A", votes: 300000 },
      { party: "Republican", name: "Senator B", votes: 310000 }
    ],
    "AZ": [
      { party: "Democratic", name: "Senator A", votes: 1400000 },
      { party: "Republican", name: "Senator B", votes: 1350000 }
    ],
    "AR": [
      { party: "Democratic", name: "Senator A", votes: 800000 },
      { party: "Republican", name: "Senator B", votes: 990000 }
    ],
    "CA": [
      { party: "Democratic", name: "Senator A", votes: 7000000 },
      { party: "Republican", name: "Senator B", votes: 6800000 }
    ],
    "CO": [
      { party: "Democratic", name: "Senator A", votes: 1800000 },
      { party: "Republican", name: "Senator B", votes: 1700000 }
    ],
    "CT": [
      { party: "Democratic", name: "Senator A", votes: 1600000 },
      { party: "Republican", name: "Senator B", votes: 1580000 }
    ],
    "DC": "No Election",
    "DE": [
      { party: "Democratic", name: "Senator A", votes: 600000 },
      { party: "Republican", name: "Senator B", votes: 580000 }
    ],
    "FL": [
      { party: "Democratic", name: "Senator A", votes: 4000000 },
      { party: "Republican", name: "Senator B", votes: 9500000 }
    ],
    "GA": [
      { party: "Democratic", name: "Senator A", votes: 2300000 },
      { party: "Republican", name: "Senator B", votes: 2250000 }
    ],
    "HI": [
      { party: "Democratic", name: "Senator A", votes: 800000 },
      { party: "Republican", name: "Senator B", votes: 790000 }
    ],
    "ID": [
      { party: "Democratic", name: "Senator A", votes: 600000 },
      { party: "Republican", name: "Senator B", votes: 680000 }
    ],
    "IL": [
      { party: "Democratic", name: "Senator A", votes: 2700000 },
      { party: "Republican", name: "Senator B", votes: 2600000 }
    ],
    "IN": [
      { party: "Democratic", name: "Senator A", votes: 1800000 },
      { party: "Republican", name: "Senator B", votes: 2700000 }
    ],
    "IA": [
      { party: "Democratic", name: "Senator A", votes: 1000000 },
      { party: "Republican", name: "Senator B", votes: 190000 }
    ],
    "KS": [
      { party: "Democratic", name: "Senator A", votes: 700000 },
      { party: "Republican", name: "Senator B", votes: 880000 }
    ],
    "KY": [
      { party: "Democratic", name: "Senator A", votes: 1400000 },
      { party: "Republican", name: "Senator B", votes: 2350000 }
    ],
    "LA": [
      { party: "Democratic", name: "Senator A", votes: 1200000 },
      { party: "Republican", name: "Senator B", votes: 2150000 }
    ],
    "ME": [
      { party: "Democratic", name: "Senator A", votes: 700000 },
      { party: "Independent", name: "Senator B", votes: 690000 }
    ],
    "MD": [
      { party: "Democratic", name: "Senator A", votes: 1900000 },
      { party: "Republican", name: "Senator B", votes: 1850000 }
    ],
    "MA": [
      { party: "Democratic", name: "Senator A", votes: 2400000 },
      { party: "Republican", name: "Senator B", votes: 2300000 }
    ],
    "MI": [
      { party: "Democratic", name: "Senator A", votes: 2600000 },
      { party: "Republican", name: "Senator B", votes: 2500000 }
    ],
    "MN": [
      { party: "Democratic", name: "Senator A", votes: 1500000 },
      { party: "Republican", name: "Senator B", votes: 1450000 }
    ],
    "MS": [
      { party: "Democratic", name: "Senator A", votes: 800000 },
      { party: "Republican", name: "Senator B", votes: 790000 }
    ],
    "MO": [
      { party: "Democratic", name: "Senator A", votes: 1400000 },
      { party: "Republican", name: "Senator B", votes: 2350000 }
    ],
    "MT": [
      { party: "Democratic", name: "Senator A", votes: 400000 },
      { party: "Republican", name: "Senator B", votes: 490000 }
    ],
    "NE": [
      { party: "Democratic", name: "Senator A", votes: 600000 },
      { party: "Republican", name: "Senator B", votes: 690000 }
    ],
    "NV": [
      { party: "Democratic", name: "Senator A", votes: 800000 },
      { party: "Republican", name: "Senator B", votes: 780000 }
    ],
    "NH": [
      { party: "Democratic", name: "Senator A", votes: 600000 },
      { party: "Republican", name: "Senator B", votes: 590000 }
    ],
    "NJ": [
      { party: "Democratic", name: "Senator A", votes: 2800000 },
      { party: "Republican", name: "Senator B", votes: 2700000 }
    ],
    "NM": [
      { party: "Democratic", name: "Senator A", votes: 700000 },
      { party: "Republican", name: "Senator B", votes: 680000 }
    ],
    "NY": [
      { party: "Democratic", name: "Senator A", votes: 5500000 },
      { party: "Republican", name: "Senator B", votes: 5400000 }
    ],
    "NC": [
      { party: "Democratic", name: "Senator A", votes: 2400000 },
      { party: "Republican", name: "Senator B", votes: 3350000 }
    ],
    "ND": [
      { party: "Democratic", name: "Senator A", votes: 300000 },
      { party: "Republican", name: "Senator B", votes: 390000 }
    ],
    "OH": [
      { party: "Democratic", name: "Senator A", votes: 2900000 },
      { party: "Republican", name: "Senator B", votes: 3850000 }
    ],
    "OK": [
      { party: "Democratic", name: "Senator A", votes: 900000 },
      { party: "Republican", name: "Senator B", votes: 980000 }
    ],
    "OR": [
      { party: "Democratic", name: "Senator A", votes: 1400000 },
      { party: "Republican", name: "Senator B", votes: 1350000 }
    ],
    "PA": [
      { party: "Democratic", name: "Senator A", votes: 2800000 },
      { party: "Republican", name: "Senator B", votes: 2700000 }
    ],
    "RI": [
      { party: "Democratic", name: "Senator A", votes: 400000 },
      { party: "Republican", name: "Senator B", votes: 390000 }
    ],
    "SC": [
      { party: "Democratic", name: "Senator A", votes: 1200000 },
      { party: "Republican", name: "Senator B", votes: 2150000 }
    ],
    "SD": [
      { party: "Democratic", name: "Senator A", votes: 1200000 },
      { party: "Republican", name: "Senator B", votes: 2150000 }
    ],
    "TN": [
      { party: "Democratic", name: "Senator A", votes: 1200000 },
      { party: "Republican", name: "Senator B", votes: 2150000 }
    ],
    "TX": [
      { party: "Democratic", name: "Senator A", votes: 1200000 },
      { party: "Republican", name: "Senator B", votes: 2150000 }
    ],
    "UT": [
      { party: "Democratic", name: "Senator A", votes: 1200000 },
      { party: "Republican", name: "Senator B", votes: 2150000 }
    ],
    "VT": [
      { party: "Independent", name: "Senator A", votes: 1200000 },
      { party: "Republican", name: "Senator B", votes: 1150000 }
    ],
    "VA": [
      { party: "Democratic", name: "Senator A", votes: 1200000 },
      { party: "Republican", name: "Senator B", votes: 1150000 }
    ],
    "WA": "No Election",
    "WI": [
      { party: "Democratic", name: "Senator A", votes: 1200000 },
      { party: "Republican", name: "Senator B", votes: 1150000 }
    ],
    "WV": [
      { party: "Democratic", name: "Senator A", votes: 1200000 },
      { party: "Republican", name: "Senator B", votes: 2150000 }
    ],
    "WY": "No Election"
};

export const houseResultsProjection = {
  "AL": [
    {"Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 150000 },{ 
          name: "Democratic Candidate", 
          party: "Democratic", 
          votes: 120000 
        }
      ]
    },
    {
      "Congressional District 2": [
        { 
          name: "Republican Candidate", 
          party: "Republican", 
          votes: 160000 
        },
        { 
          name: "Democratic Candidate", 
          party: "Democratic", 
          votes: 130000 
        }
      ]
    },
    {
      "Congressional District 3": [
        { 
          name: "Republican Candidate", 
          party: "Republican", 
          votes: 170000 
        },
        { 
          name: "Democratic Candidate", 
          party: "Democratic", 
          votes: 140000 
        }
      ]
    },
    {
      "Congressional District 4": [
        { 
          name: "Republican Candidate", 
          party: "Republican", 
          votes: 180000 
        },
        { 
          name: "Democratic Candidate", 
          party: "Democratic", 
          votes: 150000 
        }
      ]
    },
    {
      "Congressional District 5": [
        { 
          name: "Republican Candidate", 
          party: "Republican", 
          votes: 190000 
        },
        { 
          name: "Democratic Candidate", 
          party: "Democratic", 
          votes: 160000 
        }
      ]
    },
    {
      "Congressional District 6": [
        { 
          name: "Republican Candidate", 
          party: "Republican", 
          votes: 200000 
        },
        { 
          name: "Democratic Candidate", 
          party: "Democratic", 
          votes: 170000 
        }
      ]
    },
    {
      "Congressional District 7": [
        { 
          name: "Republican Candidate", 
          party: "Republican", 
          votes: 210000 
        },
        { 
          name: "Democratic Candidate", 
          party: "Democratic", 
          votes: 180000 
        }
      ]
    }
  ],
  "AK": [{"Congressional District (at Large)": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 140000 }]}
  ],
  "AZ": [
    {
      "Congressional District 1": [
        { name: "Republican Candidate", party: "Republican", votes: 160000 },
        { name: "Democratic Candidate", party: "Democratic", votes: 155000 }
      ]
    },
    {
      "Congressional District 2": [
        { name: "Republican Candidate", party: "Republican", votes: 165000 },
        { name: "Democratic Candidate", party: "Democratic", votes: 150000 }
      ]
    },
    {
      "Congressional District 3": [
        { name: "Republican Candidate", party: "Republican", votes: 170000 },
        { name: "Democratic Candidate", party: "Democratic", votes: 160000 }
      ]
    },
    {
      "Congressional District 4": [
        { name: "Republican Candidate", party: "Republican", votes: 180000 },
        { name: "Democratic Candidate", party: "Democratic", votes: 170000 }
      ]
    },
    {
      "Congressional District 5": [
        { name: "Republican Candidate", party: "Republican", votes: 175000 },
        { name: "Democratic Candidate", party: "Democratic", votes: 165000 }
      ]
    },
    {
      "Congressional District 6": [
        { name: "Republican Candidate", party: "Republican", votes: 185000 },
        { name: "Democratic Candidate", party: "Democratic", votes: 175000 }
      ]
    },
    {
      "Congressional District 7": [
        { name: "Republican Candidate", party: "Republican", votes: 190000 },
        { name: "Democratic Candidate", party: "Democratic", votes: 180000 }
      ]
    },
    {"Congressional District 8": [{ name: "Republican Candidate", party: "Republican", votes: 195000 }, { name: "Democratic Candidate", party: "Democratic", votes: 185000 }]},
    {"Congressional District 9": [{ name: "Republican Candidate", party: "Republican", votes: 200000 }, { name: "Democratic Candidate", party: "Democratic", votes: 190000 }]}
  ],
  "AR": [
    {"Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 130000 }]},
    {"Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 140000 }]},
    {"Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }]},
    {"Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }]}
  ],
  "CA": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 200000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 190000 }, { name: "Democratic Candidate", party: "Democratic", votes: 210000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 175000 }, { name: "Democratic Candidate", party: "Democratic", votes: 185000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 200000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 195000 }] },
    { "Congressional District 7": [{ name: "Republican Candidate", party: "Republican", votes: 210000 }, { name: "Democratic Candidate", party: "Democratic", votes: 220000 }] },
    { "Congressional District 8": [{ name: "Republican Candidate", party: "Republican", votes: 140000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }] },
    { "Congressional District 9": [{ name: "Republican Candidate", party: "Republican", votes: 160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 10": [{ name: "Republican Candidate", party: "Republican", votes: 155000 }, { name: "Democratic Candidate", party: "Democratic", votes: 145000 }] },
    { "Congressional District 11": [{ name: "Republican Candidate", party: "Republican", votes: 145000 }, { name: "Democratic Candidate", party: "Democratic", votes: 175000 }] },
    { "Congressional District 12": [{ name: "Republican Candidate", party: "Republican", votes: 120000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 13": [{ name: "Republican Candidate", party: "Republican", votes: 125000 }, { name: "Democratic Candidate", party: "Democratic", votes: 135000 }] },
    { "Congressional District 14": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 200000 }] },
    { "Congressional District 15": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 16": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 200000 }] },
    { "Congressional District 17": [{ name: "Republican Candidate", party: "Republican", votes: 190000 }, { name: "Democratic Candidate", party: "Democratic", votes: 205000 }] },
    { "Congressional District 18": [{ name: "Republican Candidate", party: "Republican", votes: 165000 }, { name: "Democratic Candidate", party: "Democratic", votes: 185000 }] },
    { "Congressional District 19": [{ name: "Republican Candidate", party: "Republican", votes: 155000 }, { name: "Democratic Candidate", party: "Democratic", votes: 145000 }] },
    { "Congressional District 20": [{ name: "Republican Candidate", party: "Republican", votes: 140000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 21": [{ name: "Republican Candidate", party: "Republican", votes: 135000 }, { name: "Democratic Candidate", party: "Democratic", votes: 155000 }] },
    { "Congressional District 22": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 175000 }] },
    { "Congressional District 23": [{ name: "Republican Candidate", party: "Republican", votes: 140000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 24": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 25": [{ name: "Republican Candidate", party: "Republican", votes: 165000 }, { name: "Democratic Candidate", party: "Democratic", votes: 185000 }] },
    { "Congressional District 26": [{ name: "Republican Candidate", party: "Republican", votes: 130000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 27": [{ name: "Republican Candidate", party: "Republican", votes: 175000 }, { name: "Democratic Candidate", party: "Democratic", votes: 185000 }] },
    { "Congressional District 28": [{ name: "Republican Candidate", party: "Republican", votes: 120000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 29": [{ name: "Republican Candidate", party: "Republican", votes: 140000 }, { name: "Democratic Candidate", party: "Democratic", votes: 200000 }] },
    { "Congressional District 30": [{ name: "Republican Candidate", party: "Republican", votes: 155000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 31": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 210000 }] },
    { "Congressional District 32": [{ name: "Republican Candidate", party: "Republican", votes: 140000 }, { name: "Democratic Candidate", party: "Democratic", votes: 145000 }] },
    { "Congressional District 33": [{ name: "Republican Candidate", party: "Republican", votes: 160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 165000 }] },
    { "Congressional District 34": [{ name: "Republican Candidate", party: "Republican", votes: 135000 }, { name: "Democratic Candidate", party: "Democratic", votes: 175000 }] },
    { "Congressional District 35": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 36": [{ name: "Republican Candidate", party: "Republican", votes: 155000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 37": [{ name: "Republican Candidate", party: "Republican", votes: 125000 }, { name: "Democratic Candidate", party: "Democratic", votes: 185000 }] },
    { "Congressional District 38": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 190000 }] },
    { "Congressional District 39": [{ name: "Republican Candidate", party: "Republican", votes: 130000 }, { name: "Democratic Candidate", party: "Democratic", votes: 165000 }] },
    { "Congressional District 40": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 200000 }] },
    { "Congressional District 41": [{ name: "Republican Candidate", party: "Republican", votes: 135000 }, { name: "Democratic Candidate", party: "Democratic", votes: 155000 }] },
    { "Congressional District 42": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 43": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 190000 }] },
    { "Congressional District 44": [{ name: "Republican Candidate", party: "Republican", votes: 145000 }, { name: "Democratic Candidate", party: "Democratic", votes: 165000 }] },
    { "Congressional District 45": [{ name: "Republican Candidate", party: "Republican", votes: 175000 }, { name: "Democratic Candidate", party: "Democratic", votes: 195000 }] },
    { "Congressional District 46": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 210000 }] },
    { "Congressional District 47": [{ name: "Republican Candidate", party: "Republican", votes: 120000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 48": [{ name: "Republican Candidate", party: "Republican", votes: 140000 }, { name: "Democratic Candidate", party: "Democratic", votes: 165000 }] },
    { "Congressional District 49": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 50": [{ name: "Republican Candidate", party: "Republican", votes: 155000 }, { name: "Democratic Candidate", party: "Democratic", votes: 185000 }] },
    { "Congressional District 51": [{ name: "Republican Candidate", party: "Republican", votes: 135000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 52": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 200000 }] }
  ],
  "CO": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 130000 }, { name: "Democratic Candidate", party: "Democratic", votes: 140000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 145000 }, { name: "Democratic Candidate", party: "Democratic", votes: 155000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 165000 }, { name: "Democratic Candidate", party: "Democratic", votes: 175000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 140000 }, { name: "Democratic Candidate", party: "Democratic", votes: 130000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 7": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 8": [{ name: "Republican Candidate", party: "Republican", votes: 140000 }, { name: "Democratic Candidate", party: "Democratic", votes: 145000 }] }
  ],
  "CT": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 120000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 140000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 130000 }, { name: "Democratic Candidate", party: "Democratic", votes: 140000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 110000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] }
  ],
  "DE": [
    { "Congressional District (at Large)": [{ name: "Republican Candidate", party: "Republican", votes: 120000 }, { name: "Democratic Candidate", party: "Democratic", votes: 135000 }] }
  ],
  "FL": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 140000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 190000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 175000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 200000 }, { name: "Democratic Candidate", party: "Democratic", votes: 190000 }] },
    { "Congressional District 7": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 8": [{ name: "Republican Candidate", party: "Republican", votes: 165000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }] },
    { "Congressional District 9": [{ name: "Republican Candidate", party: "Republican", votes: 175000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 10": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 140000 }] },
    { "Congressional District 11": [{ name: "Republican Candidate", party: "Republican", votes: 160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 12": [{ name: "Republican Candidate", party: "Republican", votes: 190000 }, { name: "Democratic Candidate", party: "Democratic", votes: 200000 }] },
    { "Congressional District 13": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }] },
    { "Congressional District 14": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 15": [{ name: "Republican Candidate", party: "Republican", votes: 190000 }, { name: "Democratic Candidate", party: "Democratic", votes: 175000 }] },
    { "Congressional District 16": [{ name: "Republican Candidate", party: "Republican", votes: 200000 }, { name: "Democratic Candidate", party: "Democratic", votes: 190000 }] },
    { "Congressional District 17": [{ name: "Republican Candidate", party: "Republican", votes: 165000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 18": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 140000 }] },
    { "Congressional District 19": [{ name: "Republican Candidate", party: "Republican", votes: 200000 }, { name: "Democratic Candidate", party: "Democratic", votes: 210000 }] },
    { "Congressional District 20": [{ name: "Democratic Candidate", party: "Democratic", votes: 230000 }, { name: "Republican Candidate", party: "Republican", votes: 180000 }] },
    { "Congressional District 21": [{ name: "Democratic Candidate", party: "Democratic", votes: 220000 }, { name: "Republican Candidate", party: "Republican", votes: 200000 }] },
    { "Congressional District 22": [{ name: "Republican Candidate", party: "Republican", votes: 175000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 23": [{ name: "Republican Candidate", party: "Republican", votes: 190000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 24": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 25": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 26": [{ name: "Republican Candidate", party: "Republican", votes: 160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }] },
    { "Congressional District 27": [{ name: "Republican Candidate", party: "Republican", votes: 190000 }, { name: "Democratic Candidate", party: "Democratic", votes: 175000 }] },
    { "Congressional District 28": [{ name: "Democratic Candidate", party: "Democratic", votes: 230000 }, { name: "Republican Candidate", party: "Republican", votes: 210000 }] }
  ],
  "GA": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 120000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 190000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 200000 }, { name: "Democratic Candidate", party: "Democratic", votes: 210000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 7": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }] },
    { "Congressional District 8": [{ name: "Republican Candidate", party: "Republican", votes: 190000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 9": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 140000 }] },
    { "Congressional District 10": [{ name: "Republican Candidate", party: "Republican", votes: 160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 11": [{ name: "Republican Candidate", party: "Republican", votes: 175000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 12": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 190000 }] },
    { "Congressional District 13": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 14": [{ name: "Republican Candidate", party: "Republican", votes: 200000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] }
  ],
  "HI": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 130000 }, { name: "Republican Candidate", party: "Republican", votes: 90000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 140000 }, { name: "Republican Candidate", party: "Republican", votes: 110000 }] }
  ],
  "ID": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 190000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] }
  ],
  "IL": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 210000 }, { name: "Republican Candidate", party: "Republican", votes: 180000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 220000 }, { name: "Republican Candidate", party: "Republican", votes: 190000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 250000 }, { name: "Republican Candidate", party: "Republican", votes: 200000 }] },
    { "Congressional District 5": [{ name: "Democratic Candidate", party: "Democratic", votes: 230000 }, { name: "Republican Candidate", party: "Republican", votes: 210000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 7": [{ name: "Democratic Candidate", party: "Democratic", votes: 240000 }, { name: "Republican Candidate", party: "Republican", votes: 220000 }] },
    { "Congressional District 8": [{ name: "Democratic Candidate", party: "Democratic", votes: 200000 }, { name: "Republican Candidate", party: "Republican", votes: 180000 }] },
    { "Congressional District 9": [{ name: "Democratic Candidate", party: "Democratic", votes: 230000 }, { name: "Republican Candidate", party: "Republican", votes: 210000 }] },
    { "Congressional District 10": [{ name: "Republican Candidate", party: "Republican", votes: 190000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 11": [{ name: "Democratic Candidate", party: "Democratic", votes: 220000 }, { name: "Republican Candidate", party: "Republican", votes: 200000 }] },
    { "Congressional District 12": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 13": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 14": [{ name: "Republican Candidate", party: "Republican", votes: 190000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 15": [{ name: "Democratic Candidate", party: "Democratic", votes: 210000 }, { name: "Republican Candidate", party: "Republican", votes: 200000 }] },
    { "Congressional District 16": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] },
    { "Congressional District 17": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 170000 }] }
  ],
  "IN": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 200000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 210000 }, { name: "Democratic Candidate", party: "Democratic", votes: 190000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 220000 }, { name: "Democratic Candidate", party: "Democratic", votes: 200000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 230000 }, { name: "Democratic Candidate", party: "Democratic", votes: 210000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 240000 }, { name: "Democratic Candidate", party: "Democratic", votes: 220000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 250000 }, { name: "Democratic Candidate", party: "Democratic", votes: 230000 }] },
    { "Congressional District 7": [{ name: "Republican Candidate", party: "Republican", votes: 260000 }, { name: "Democratic Candidate", party: "Democratic", votes: 240000 }] },
    { "Congressional District 8": [{ name: "Republican Candidate", party: "Republican", votes: 270000 }, { name: "Democratic Candidate", party: "Democratic", votes: 250000 }] },
    { "Congressional District 9": [{ name: "Republican Candidate", party: "Republican", votes: 280000 }, { name: "Democratic Candidate", party: "Democratic", votes: 260000 }] }
  ],
  "IA": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 130000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 140000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] }
  ],
  "KS": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 220000 }, { name: "Democratic Candidate", party: "Democratic", votes: 200000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 230000 }, { name: "Democratic Candidate", party: "Democratic", votes: 210000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 240000 }, { name: "Democratic Candidate", party: "Democratic", votes: 220000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 250000 }, { name: "Democratic Candidate", party: "Democratic", votes: 230000 }] }
  ],
  "KY": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 200000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 210000 }, { name: "Democratic Candidate", party: "Democratic", votes: 190000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 220000 }, { name: "Democratic Candidate", party: "Democratic", votes: 200000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 230000 }, { name: "Democratic Candidate", party: "Democratic", votes: 210000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 240000 }, { name: "Democratic Candidate", party: "Democratic", votes: 220000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 250000 }, { name: "Democratic Candidate", party: "Democratic", votes: 230000 }] }
  ],
  "LA": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 250000 }, { name: "Democratic Candidate", party: "Democratic", votes: 230000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 260000 }, { name: "Democratic Candidate", party: "Democratic", votes: 240000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 270000 }, { name: "Democratic Candidate", party: "Democratic", votes: 250000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 280000 }, { name: "Democratic Candidate", party: "Democratic", votes: 260000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 290000 }, { name: "Democratic Candidate", party: "Democratic", votes: 270000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 300000 }, { name: "Democratic Candidate", party: "Democratic", votes: 280000 }] }
  ],
  "ME": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 130000 }, { name: "Republican Candidate", party: "Republican", votes: 110000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 140000 }, { name: "Democratic Candidate", party: "Democratic", votes: 120000 }] }
  ],
  "MD": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 160000 }, { name: "Republican Candidate", party: "Republican", votes: 140000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }] },
    { "Congressional District 3": [{ name: "Democratic Candidate", party: "Democratic", votes: 180000 }, { name: "Republican Candidate", party: "Republican", votes: 160000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 190000 }, { name: "Republican Candidate", party: "Republican", votes: 170000 }] },
    { "Congressional District 5": [{ name: "Democratic Candidate", party: "Democratic", votes: 200000 }, { name: "Republican Candidate", party: "Republican", votes: 180000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 210000 }, { name: "Democratic Candidate", party: "Democratic", votes: 190000 }] },
    { "Congressional District 7": [{ name: "Democratic Candidate", party: "Democratic", votes: 220000 }, { name: "Republican Candidate", party: "Republican", votes: 200000 }] },
    { "Congressional District 8": [{ name: "Democratic Candidate", party: "Democratic", votes: 230000 }, { name: "Republican Candidate", party: "Republican", votes: 210000 }] }
  ],
  "MA": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 220000 }, { name: "Republican Candidate", party: "Republican", votes: 200000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 230000 }, { name: "Republican Candidate", party: "Republican", votes: 210000 }] },
    { "Congressional District 3": [{ name: "Democratic Candidate", party: "Democratic", votes: 240000 }, { name: "Republican Candidate", party: "Republican", votes: 220000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 250000 }, { name: "Republican Candidate", party: "Republican", votes: 230000 }] },
    { "Congressional District 5": [{ name: "Democratic Candidate", party: "Democratic", votes: 260000 }, { name: "Republican Candidate", party: "Republican", votes: 240000 }] },
    { "Congressional District 6": [{ name: "Democratic Candidate", party: "Democratic", votes: 270000 }, { name: "Republican Candidate", party: "Republican", votes: 250000 }] },
    { "Congressional District 7": [{ name: "Democratic Candidate", party: "Democratic", votes: 280000 }, { name: "Republican Candidate", party: "Republican", votes: 260000 }] },
    { "Congressional District 8": [{ name: "Democratic Candidate", party: "Democratic", votes: 290000 }, { name: "Republican Candidate", party: "Republican", votes: 270000 }] },
    { "Congressional District 9": [{ name: "Democratic Candidate", party: "Democratic", votes: 290000 }, { name: "Republican Candidate", party: "Republican", votes: 270000 }] }
  ],
  "MI": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 300000 }, { name: "Democratic Candidate", party: "Democratic", votes: 280000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 310000 }, { name: "Democratic Candidate", party: "Democratic", votes: 290000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 320000 }, { name: "Democratic Candidate", party: "Democratic", votes: 300000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 330000 }, { name: "Democratic Candidate", party: "Democratic", votes: 310000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 340000 }, { name: "Democratic Candidate", party: "Democratic", votes: 320000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 350000 }, { name: "Democratic Candidate", party: "Democratic", votes: 330000 }] },
    { "Congressional District 7": [{ name: "Republican Candidate", party: "Republican", votes: 360000 }, { name: "Democratic Candidate", party: "Democratic", votes: 340000 }] },
    { "Congressional District 8": [{ name: "Republican Candidate", party: "Republican", votes: 370000 }, { name: "Democratic Candidate", party: "Democratic", votes: 350000 }] },
    { "Congressional District 9": [{ name: "Republican Candidate", party: "Republican", votes: 380000 }, { name: "Democratic Candidate", party: "Democratic", votes: 360000 }] },
    { "Congressional District 10": [{ name: "Republican Candidate", party: "Republican", votes: 390000 }, { name: "Democratic Candidate", party: "Democratic", votes: 370000 }] },
    { "Congressional District 11": [{ name: "Republican Candidate", party: "Republican", votes: 370000 }, { name: "Democratic Candidate", party: "Democratic", votes: 350000 }] },
    { "Congressional District 12": [{ name: "Republican Candidate", party: "Republican", votes: 380000 }, { name: "Democratic Candidate", party: "Democratic", votes: 360000 }] },
    { "Congressional District 13": [{ name: "Republican Candidate", party: "Republican", votes: 390000 }, { name: "Democratic Candidate", party: "Democratic", votes: 370000 }] }
  ],
  "MN": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 200000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 210000 }, { name: "Republican Candidate", party: "Republican", votes: 190000 }] },
    { "Congressional District 3": [{ name: "Democratic Candidate", party: "Democratic", votes: 220000 }, { name: "Republican Candidate", party: "Republican", votes: 200000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 230000 }, { name: "Republican Candidate", party: "Republican", votes: 210000 }] },
    { "Congressional District 5": [{ name: "Democratic Candidate", party: "Democratic", votes: 240000 }, { name: "Republican Candidate", party: "Republican", votes: 220000 }] },
    { "Congressional District 6": [{ name: "Democratic Candidate", party: "Democratic", votes: 220000 }, { name: "Republican Candidate", party: "Republican", votes: 200000 }] },
    { "Congressional District 7": [{ name: "Democratic Candidate", party: "Democratic", votes: 230000 }, { name: "Republican Candidate", party: "Republican", votes: 210000 }] },
    { "Congressional District 8": [{ name: "Democratic Candidate", party: "Democratic", votes: 240000 }, { name: "Republican Candidate", party: "Republican", votes: 220000 }] }
  ],
  "MS": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 150000 }, { name: "Democratic Candidate", party: "Democratic", votes: 130000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 160000 }, { name: "Republican Candidate", party: "Republican", votes: 140000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] }
  ],
  "MO": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 250000 }, { name: "Republican Candidate", party: "Republican", votes: 230000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 260000 }, { name: "Democratic Candidate", party: "Democratic", votes: 240000 }] },
    { "Congressional District 3": [{ name: "Democratic Candidate", party: "Democratic", votes: 270000 }, { name: "Republican Candidate", party: "Republican", votes: 250000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 280000 }, { name: "Democratic Candidate", party: "Democratic", votes: 260000 }] },
    { "Congressional District 5": [{ name: "Democratic Candidate", party: "Democratic", votes: 290000 }, { name: "Republican Candidate", party: "Republican", votes: 270000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 300000 }, { name: "Democratic Candidate", party: "Democratic", votes: 280000 }] },
    { "Congressional District 7": [{ name: "Democratic Candidate", party: "Democratic", votes: 310000 }, { name: "Republican Candidate", party: "Republican", votes: 290000 }] },
    { "Congressional District 8": [{ name: "Republican Candidate", party: "Republican", votes: 320000 }, { name: "Democratic Candidate", party: "Democratic", votes: 300000 }] }
  ],
  "MT": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 140000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 140000 }] }
  ],
  "NE": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 180000 }, { name: "Democratic Candidate", party: "Democratic", votes: 160000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 190000 }, { name: "Republican Candidate", party: "Republican", votes: 170000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 200000 }, { name: "Democratic Candidate", party: "Democratic", votes: 180000 }] }
  ],
  "NV": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 220000 }, { name: "Republican Candidate", party: "Republican", votes: 200000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 230000 }, { name: "Democratic Candidate", party: "Democratic", votes: 210000 }] },
    { "Congressional District 3": [{ name: "Democratic Candidate", party: "Democratic", votes: 240000 }, { name: "Republican Candidate", party: "Republican", votes: 220000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 240000 }, { name: "Republican Candidate", party: "Republican", votes: 220000 }] }
  ],
  "NH": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 180000 }, { name: "Republican Candidate", party: "Republican", votes: 160000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 190000 }, { name: "Republican Candidate", party: "Republican", votes: 170000 }] }
  ],
  "NJ": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 200000 }, { name: "Republican Candidate", party: "Republican", votes: 180000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 210000 }, { name: "Democratic Candidate", party: "Democratic", votes: 190000 }] },
    { "Congressional District 3": [{ name: "Democratic Candidate", party: "Democratic", votes: 220000 }, { name: "Republican Candidate", party: "Republican", votes: 200000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 230000 }, { name: "Democratic Candidate", party: "Democratic", votes: 210000 }] },
    { "Congressional District 5": [{ name: "Democratic Candidate", party: "Democratic", votes: 240000 }, { name: "Republican Candidate", party: "Republican", votes: 220000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 250000 }, { name: "Democratic Candidate", party: "Democratic", votes: 230000 }] },
    { "Congressional District 7": [{ name: "Democratic Candidate", party: "Democratic", votes: 260000 }, { name: "Republican Candidate", party: "Republican", votes: 240000 }] },
    { "Congressional District 8": [{ name: "Republican Candidate", party: "Republican", votes: 270000 }, { name: "Democratic Candidate", party: "Democratic", votes: 250000 }] },
    { "Congressional District 9": [{ name: "Democratic Candidate", party: "Democratic", votes: 240000 }, { name: "Republican Candidate", party: "Republican", votes: 220000 }] },
    { "Congressional District 10": [{ name: "Republican Candidate", party: "Republican", votes: 250000 }, { name: "Democratic Candidate", party: "Democratic", votes: 230000 }] },
    { "Congressional District 11": [{ name: "Democratic Candidate", party: "Democratic", votes: 260000 }, { name: "Republican Candidate", party: "Republican", votes: 240000 }] },
    { "Congressional District 12": [{ name: "Republican Candidate", party: "Republican", votes: 270000 }, { name: "Democratic Candidate", party: "Democratic", votes: 250000 }] }
  ],
  "NM": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 160000 }, { name: "Republican Candidate", party: "Republican", votes: 140000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 170000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }] },
    { "Congressional District 3": [{ name: "Democratic Candidate", party: "Democratic", votes: 180000 }, { name: "Republican Candidate", party: "Republican", votes: 160000 }] }
  ],
  "NY": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 350000 }, { name: "Democratic Candidate", party: "Democratic", votes: 330000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 360000 }, { name: "Republican Candidate", party: "Republican", votes: 340000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 370000 }, { name: "Democratic Candidate", party: "Democratic", votes: 350000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 380000 }, { name: "Republican Candidate", party: "Republican", votes: 360000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 390000 }, { name: "Democratic Candidate", party: "Democratic", votes: 370000 }] },
    { "Congressional District 6": [{ name: "Democratic Candidate", party: "Democratic", votes: 400000 }, { name: "Republican Candidate", party: "Republican", votes: 380000 }] },
    { "Congressional District 7": [{ name: "Republican Candidate", party: "Republican", votes: 410000 }, { name: "Democratic Candidate", party: "Democratic", votes: 390000 }] },
    { "Congressional District 8": [{ name: "Democratic Candidate", party: "Democratic", votes: 420000 }, { name: "Republican Candidate", party: "Republican", votes: 400000 }] },
    { "Congressional District 9": [{ name: "Republican Candidate", party: "Republican", votes: 430000 }, { name: "Democratic Candidate", party: "Democratic", votes: 410000 }] },
    { "Congressional District 10": [{ name: "Democratic Candidate", party: "Democratic", votes: 440000 }, { name: "Republican Candidate", party: "Republican", votes: 420000 }] },
    { "Congressional District 11": [{ name: "Republican Candidate", party: "Republican", votes: 450000 }, { name: "Democratic Candidate", party: "Democratic", votes: 430000 }] },
    { "Congressional District 12": [{ name: "Democratic Candidate", party: "Democratic", votes: 460000 }, { name: "Republican Candidate", party: "Republican", votes: 440000 }] },
    { "Congressional District 13": [{ name: "Republican Candidate", party: "Republican", votes: 470000 }, { name: "Democratic Candidate", party: "Democratic", votes: 450000 }] },
    { "Congressional District 14": [{ name: "Democratic Candidate", party: "Democratic", votes: 480000 }, { name: "Republican Candidate", party: "Republican", votes: 460000 }] },
    { "Congressional District 15": [{ name: "Republican Candidate", party: "Republican", votes: 490000 }, { name: "Democratic Candidate", party: "Democratic", votes: 470000 }] },
    { "Congressional District 16": [{ name: "Democratic Candidate", party: "Democratic", votes: 500000 }, { name: "Republican Candidate", party: "Republican", votes: 480000 }] },
    { "Congressional District 17": [{ name: "Republican Candidate", party: "Republican", votes: 510000 }, { name: "Democratic Candidate", party: "Democratic", votes: 490000 }] },
    { "Congressional District 18": [{ name: "Democratic Candidate", party: "Democratic", votes: 520000 }, { name: "Republican Candidate", party: "Republican", votes: 500000 }] },
    { "Congressional District 19": [{ name: "Republican Candidate", party: "Republican", votes: 530000 }, { name: "Democratic Candidate", party: "Democratic", votes: 510000 }] },
    { "Congressional District 20": [{ name: "Democratic Candidate", party: "Democratic", votes: 540000 }, { name: "Republican Candidate", party: "Republican", votes: 520000 }] },
    { "Congressional District 21": [{ name: "Republican Candidate", party: "Republican", votes: 550000 }, { name: "Democratic Candidate", party: "Democratic", votes: 530000 }] },
    { "Congressional District 22": [{ name: "Democratic Candidate", party: "Democratic", votes: 560000 }, { name: "Republican Candidate", party: "Republican", votes: 540000 }] },
    { "Congressional District 23": [{ name: "Republican Candidate", party: "Republican", votes: 570000 }, { name: "Democratic Candidate", party: "Democratic", votes: 550000 }] },
    { "Congressional District 24": [{ name: "Democratic Candidate", party: "Democratic", votes: 580000 }, { name: "Republican Candidate", party: "Republican", votes: 560000 }] },
    { "Congressional District 25": [{ name: "Republican Candidate", party: "Republican", votes: 590000 }, { name: "Democratic Candidate", party: "Democratic", votes: 570000 }] },
    { "Congressional District 26": [{ name: "Democratic Candidate", party: "Democratic", votes: 600000 }, { name: "Republican Candidate", party: "Republican", votes: 580000 }] }
  ],
  "NC": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 500000 }, { name: "Republican Candidate", party: "Republican", votes: 480000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 510000 }, { name: "Democratic Candidate", party: "Democratic", votes: 490000 }] },
    { "Congressional District 3": [{ name: "Democratic Candidate", party: "Democratic", votes: 520000 }, { name: "Republican Candidate", party: "Republican", votes: 500000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 530000 }, { name: "Democratic Candidate", party: "Democratic", votes: 510000 }] },
    { "Congressional District 5": [{ name: "Democratic Candidate", party: "Democratic", votes: 540000 }, { name: "Republican Candidate", party: "Republican", votes: 520000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 550000 }, { name: "Democratic Candidate", party: "Democratic", votes: 530000 }] },
    { "Congressional District 7": [{ name: "Democratic Candidate", party: "Democratic", votes: 560000 }, { name: "Republican Candidate", party: "Republican", votes: 540000 }] },
    { "Congressional District 8": [{ name: "Republican Candidate", party: "Republican", votes: 570000 }, { name: "Democratic Candidate", party: "Democratic", votes: 550000 }] },
    { "Congressional District 9": [{ name: "Democratic Candidate", party: "Democratic", votes: 580000 }, { name: "Republican Candidate", party: "Republican", votes: 560000 }] },
    { "Congressional District 10": [{ name: "Republican Candidate", party: "Republican", votes: 590000 }, { name: "Democratic Candidate", party: "Democratic", votes: 570000 }] },
    { "Congressional District 11": [{ name: "Democratic Candidate", party: "Democratic", votes: 600000 }, { name: "Republican Candidate", party: "Republican", votes: 580000 }] },
    { "Congressional District 12": [{ name: "Republican Candidate", party: "Republican", votes: 610000 }, { name: "Democratic Candidate", party: "Democratic", votes: 590000 }] },
    { "Congressional District 13": [{ name: "Democratic Candidate", party: "Democratic", votes: 620000 }, { name: "Republican Candidate", party: "Republican", votes: 600000 }] },
    { "Congressional District 14": [{ name: "Democratic Candidate", party: "Democratic", votes: 620000 }, { name: "Republican Candidate", party: "Republican", votes: 600000 }] }
  ],
  "ND": [
    { "Congressional District (at Large)": [{ name: "Republican Candidate", party: "Republican", votes: 250000 }, { name: "Democratic Candidate", party: "Democratic", votes: 230000 }] }
  ],
  "OH": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 500000 }, { name: "Democratic Candidate", party: "Democratic", votes: 480000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 510000 }, { name: "Republican Candidate", party: "Republican", votes: 490000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 520000 }, { name: "Democratic Candidate", party: "Democratic", votes: 500000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 530000 }, { name: "Republican Candidate", party: "Republican", votes: 510000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 540000 }, { name: "Democratic Candidate", party: "Democratic", votes: 520000 }] },
    { "Congressional District 6": [{ name: "Democratic Candidate", party: "Democratic", votes: 550000 }, { name: "Republican Candidate", party: "Republican", votes: 530000 }] },
    { "Congressional District 7": [{ name: "Republican Candidate", party: "Republican", votes: 560000 }, { name: "Democratic Candidate", party: "Democratic", votes: 540000 }] },
    { "Congressional District 8": [{ name: "Democratic Candidate", party: "Democratic", votes: 570000 }, { name: "Republican Candidate", party: "Republican", votes: 550000 }] },
    { "Congressional District 9": [{ name: "Republican Candidate", party: "Republican", votes: 580000 }, { name: "Democratic Candidate", party: "Democratic", votes: 560000 }] },
    { "Congressional District 10": [{ name: "Democratic Candidate", party: "Democratic", votes: 590000 }, { name: "Republican Candidate", party: "Republican", votes: 570000 }] },
    { "Congressional District 11": [{ name: "Republican Candidate", party: "Republican", votes: 600000 }, { name: "Democratic Candidate", party: "Democratic", votes: 580000 }] },
    { "Congressional District 12": [{ name: "Democratic Candidate", party: "Democratic", votes: 610000 }, { name: "Republican Candidate", party: "Republican", votes: 590000 }] },
    { "Congressional District 13": [{ name: "Republican Candidate", party: "Republican", votes: 620000 }, { name: "Democratic Candidate", party: "Democratic", votes: 600000 }] },
    { "Congressional District 14": [{ name: "Democratic Candidate", party: "Democratic", votes: 630000 }, { name: "Republican Candidate", party: "Republican", votes: 610000 }] },
    { "Congressional District 15": [{ name: "Republican Candidate", party: "Republican", votes: 640000 }, { name: "Democratic Candidate", party: "Democratic", votes: 620000 }] },
    { "Congressional District 16": [{ name: "Democratic Candidate", party: "Democratic", votes: 650000 }, { name: "Republican Candidate", party: "Republican", votes: 630000 }] }
  ],
  "OK": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 350000 }, { name: "Democratic Candidate", party: "Democratic", votes: 330000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 360000 }, { name: "Republican Candidate", party: "Republican", votes: 340000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 370000 }, { name: "Democratic Candidate", party: "Democratic", votes: 350000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 380000 }, { name: "Republican Candidate", party: "Republican", votes: 360000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 390000 }, { name: "Democratic Candidate", party: "Democratic", votes: 370000 }] }
  ],
  "OR": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 450000 }, { name: "Republican Candidate", party: "Republican", votes: 430000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 460000 }, { name: "Democratic Candidate", party: "Democratic", votes: 440000 }] },
    { "Congressional District 3": [{ name: "Democratic Candidate", party: "Democratic", votes: 470000 }, { name: "Republican Candidate", party: "Republican", votes: 450000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 480000 }, { name: "Democratic Candidate", party: "Democratic", votes: 460000 }] },
    { "Congressional District 5": [{ name: "Democratic Candidate", party: "Democratic", votes: 490000 }, { name: "Republican Candidate", party: "Republican", votes: 470000 }] },
    { "Congressional District 6": [{ name: "Democratic Candidate", party: "Democratic", votes: 490000 }, { name: "Republican Candidate", party: "Republican", votes: 470000 }] }
  ],
  "PA": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 520000 }, { name: "Democratic Candidate", party: "Democratic", votes: 500000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 530000 }, { name: "Republican Candidate", party: "Republican", votes: 510000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 540000 }, { name: "Democratic Candidate", party: "Democratic", votes: 520000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 550000 }, { name: "Republican Candidate", party: "Republican", votes: 530000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 560000 }, { name: "Democratic Candidate", party: "Democratic", votes: 540000 }] },
    { "Congressional District 6": [{ name: "Democratic Candidate", party: "Democratic", votes: 570000 }, { name: "Republican Candidate", party: "Republican", votes: 550000 }] },
    { "Congressional District 7": [{ name: "Republican Candidate", party: "Republican", votes: 580000 }, { name: "Democratic Candidate", party: "Democratic", votes: 560000 }] },
    { "Congressional District 8": [{ name: "Democratic Candidate", party: "Democratic", votes: 590000 }, { name: "Republican Candidate", party: "Republican", votes: 570000 }] },
    { "Congressional District 9": [{ name: "Republican Candidate", party: "Republican", votes: 600000 }, { name: "Democratic Candidate", party: "Democratic", votes: 580000 }] },
    { "Congressional District 10": [{ name: "Democratic Candidate", party: "Democratic", votes: 610000 }, { name: "Republican Candidate", party: "Republican", votes: 590000 }] },
    { "Congressional District 11": [{ name: "Republican Candidate", party: "Republican", votes: 620000 }, { name: "Democratic Candidate", party: "Democratic", votes: 600000 }] },
    { "Congressional District 12": [{ name: "Democratic Candidate", party: "Democratic", votes: 630000 }, { name: "Republican Candidate", party: "Republican", votes: 610000 }] },
    { "Congressional District 13": [{ name: "Republican Candidate", party: "Republican", votes: 640000 }, { name: "Democratic Candidate", party: "Democratic", votes: 620000 }] },
    { "Congressional District 14": [{ name: "Democratic Candidate", party: "Democratic", votes: 650000 }, { name: "Republican Candidate", party: "Republican", votes: 630000 }] },
    { "Congressional District 15": [{ name: "Republican Candidate", party: "Republican", votes: 660000 }, { name: "Democratic Candidate", party: "Democratic", votes: 640000 }] },
    { "Congressional District 16": [{ name: "Democratic Candidate", party: "Democratic", votes: 670000 }, { name: "Republican Candidate", party: "Republican", votes: 650000 }] },
    { "Congressional District 17": [{ name: "Republican Candidate", party: "Republican", votes: 680000 }, { name: "Democratic Candidate", party: "Democratic", votes: 660000 }] },
    { "Congressional District 18": [{ name: "Democratic Candidate", party: "Democratic", votes: 690000 }, { name: "Republican Candidate", party: "Republican", votes: 670000 }] }
  ],
  "RI": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 220000 }, { name: "Republican Candidate", party: "Republican", votes: 200000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 210000 }, { name: "Democratic Candidate", party: "Democratic", votes: 190000 }] }
  ],
  "SC": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 300000 }, { name: "Democratic Candidate", party: "Democratic", votes: 280000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 310000 }, { name: "Republican Candidate", party: "Republican", votes: 290000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 320000 }, { name: "Democratic Candidate", party: "Democratic", votes: 300000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 330000 }, { name: "Republican Candidate", party: "Republican", votes: 310000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 340000 }, { name: "Democratic Candidate", party: "Democratic", votes: 320000 }] },
    { "Congressional District 6": [{ name: "Democratic Candidate", party: "Democratic", votes: 350000 }, { name: "Republican Candidate", party: "Republican", votes: 330000 }] },
    { "Congressional District 7": [{ name: "Republican Candidate", party: "Republican", votes: 360000 }, { name: "Democratic Candidate", party: "Democratic", votes: 340000 }] }
  ],
  "SD": [
    { "Congressional District (at Large)": [{ name: "Republican Candidate", party: "Republican", votes: 250000 }, { name: "Democratic Candidate", party: "Democratic", votes: 230000 }] }
  ],
  "TN": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 400000 }, { name: "Democratic Candidate", party: "Democratic", votes: 380000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 410000 }, { name: "Republican Candidate", party: "Republican", votes: 390000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 420000 }, { name: "Democratic Candidate", party: "Democratic", votes: 400000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 430000 }, { name: "Republican Candidate", party: "Republican", votes: 410000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 440000 }, { name: "Democratic Candidate", party: "Democratic", votes: 420000 }] },
    { "Congressional District 6": [{ name: "Democratic Candidate", party: "Democratic", votes: 450000 }, { name: "Republican Candidate", party: "Republican", votes: 430000 }] },
    { "Congressional District 7": [{ name: "Republican Candidate", party: "Republican", votes: 460000 }, { name: "Democratic Candidate", party: "Democratic", votes: 440000 }] },
    { "Congressional District 8": [{ name: "Democratic Candidate", party: "Democratic", votes: 470000 }, { name: "Republican Candidate", party: "Republican", votes: 450000 }] },
    { "Congressional District 9": [{ name: "Republican Candidate", party: "Republican", votes: 480000 }, { name: "Democratic Candidate", party: "Democratic", votes: 460000 }] }
  ],
  "TX": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 800000 }, { name: "Democratic Candidate", party: "Democratic", votes: 780000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 810000 }, { name: "Republican Candidate", party: "Republican", votes: 790000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 820000 }, { name: "Democratic Candidate", party: "Democratic", votes: 800000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 830000 }, { name: "Republican Candidate", party: "Republican", votes: 810000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 840000 }, { name: "Democratic Candidate", party: "Democratic", votes: 820000 }] },
    { "Congressional District 6": [{ name: "Democratic Candidate", party: "Democratic", votes: 850000 }, { name: "Republican Candidate", party: "Republican", votes: 830000 }] },
    { "Congressional District 7": [{ name: "Republican Candidate", party: "Republican", votes: 860000 }, { name: "Democratic Candidate", party: "Democratic", votes: 840000 }] },
    { "Congressional District 8": [{ name: "Democratic Candidate", party: "Democratic", votes: 870000 }, { name: "Republican Candidate", party: "Republican", votes: 850000 }] },
    { "Congressional District 9": [{ name: "Republican Candidate", party: "Republican", votes: 880000 }, { name: "Democratic Candidate", party: "Democratic", votes: 860000 }] },
    { "Congressional District 10": [{ name: "Democratic Candidate", party: "Democratic", votes: 890000 }, { name: "Republican Candidate", party: "Republican", votes: 870000 }] },
    { "Congressional District 11": [{ name: "Republican Candidate", party: "Republican", votes: 900000 }, { name: "Democratic Candidate", party: "Democratic", votes: 880000 }] },
    { "Congressional District 12": [{ name: "Democratic Candidate", party: "Democratic", votes: 910000 }, { name: "Republican Candidate", party: "Republican", votes: 890000 }] },
    { "Congressional District 13": [{ name: "Republican Candidate", party: "Republican", votes: 920000 }, { name: "Democratic Candidate", party: "Democratic", votes: 900000 }] },
    { "Congressional District 14": [{ name: "Democratic Candidate", party: "Democratic", votes: 930000 }, { name: "Republican Candidate", party: "Republican", votes: 910000 }] },
    { "Congressional District 15": [{ name: "Republican Candidate", party: "Republican", votes: 940000 }, { name: "Democratic Candidate", party: "Democratic", votes: 920000 }] },
    { "Congressional District 16": [{ name: "Democratic Candidate", party: "Democratic", votes: 950000 }, { name: "Republican Candidate", party: "Republican", votes: 930000 }] },
    { "Congressional District 17": [{ name: "Republican Candidate", party: "Republican", votes: 960000 }, { name: "Democratic Candidate", party: "Democratic", votes: 940000 }] },
    { "Congressional District 18": [{ name: "Democratic Candidate", party: "Democratic", votes: 970000 }, { name: "Republican Candidate", party: "Republican", votes: 950000 }] },
    { "Congressional District 19": [{ name: "Republican Candidate", party: "Republican", votes: 980000 }, { name: "Democratic Candidate", party: "Democratic", votes: 960000 }] },
    { "Congressional District 20": [{ name: "Democratic Candidate", party: "Democratic", votes: 990000 }, { name: "Republican Candidate", party: "Republican", votes: 970000 }] },
    { "Congressional District 21": [{ name: "Republican Candidate", party: "Republican", votes: 1000000 }, { name: "Democratic Candidate", party: "Democratic", votes: 980000 }] },
    { "Congressional District 22": [{ name: "Democratic Candidate", party: "Democratic", votes: 1010000 }, { name: "Republican Candidate", party: "Republican", votes: 990000 }] },
    { "Congressional District 23": [{ name: "Republican Candidate", party: "Republican", votes: 1020000 }, { name: "Democratic Candidate", party: "Democratic", votes: 1000000 }] },
    { "Congressional District 24": [{ name: "Democratic Candidate", party: "Democratic", votes: 1030000 }, { name: "Republican Candidate", party: "Republican", votes: 1010000 }] },
    { "Congressional District 25": [{ name: "Republican Candidate", party: "Republican", votes: 1040000 }, { name: "Democratic Candidate", party: "Democratic", votes: 1020000 }] },
    { "Congressional District 26": [{ name: "Democratic Candidate", party: "Democratic", votes: 1050000 }, { name: "Republican Candidate", party: "Republican", votes: 1030000 }] },
    { "Congressional District 27": [{ name: "Republican Candidate", party: "Republican", votes: 1060000 }, { name: "Democratic Candidate", party: "Democratic", votes: 1040000 }] },
    { "Congressional District 28": [{ name: "Democratic Candidate", party: "Democratic", votes: 1070000 }, { name: "Republican Candidate", party: "Republican", votes: 1050000 }] },
    { "Congressional District 29": [{ name: "Republican Candidate", party: "Republican", votes: 1080000 }, { name: "Democratic Candidate", party: "Democratic", votes: 1060000 }] },
    { "Congressional District 30": [{ name: "Democratic Candidate", party: "Democratic", votes: 1090000 }, { name: "Republican Candidate", party: "Republican", votes: 1070000 }] },
    { "Congressional District 31": [{ name: "Republican Candidate", party: "Republican", votes: 1100000 }, { name: "Democratic Candidate", party: "Democratic", votes: 1080000 }] },
    { "Congressional District 32": [{ name: "Democratic Candidate", party: "Democratic", votes: 1110000 }, { name: "Republican Candidate", party: "Republican", votes: 1090000 }] },
    { "Congressional District 33": [{ name: "Republican Candidate", party: "Republican", votes: 1120000 }, { name: "Democratic Candidate", party: "Democratic", votes: 1100000 }] },
    { "Congressional District 34": [{ name: "Democratic Candidate", party: "Democratic", votes: 1130000 }, { name: "Republican Candidate", party: "Republican", votes: 1110000 }] },
    { "Congressional District 35": [{ name: "Republican Candidate", party: "Republican", votes: 1140000 }, { name: "Democratic Candidate", party: "Democratic", votes: 1120000 }] },
    { "Congressional District 36": [{ name: "Democratic Candidate", party: "Democratic", votes: 1150000 }, { name: "Republican Candidate", party: "Republican", votes: 1130000 }] },
    { "Congressional District 37": [{ name: "Republican Candidate", party: "Republican", votes: 1160000 }, { name: "Democratic Candidate", party: "Democratic", votes: 1140000 }] },
    { "Congressional District 38": [{ name: "Democratic Candidate", party: "Democratic", votes: 1170000 }, { name: "Republican Candidate", party: "Republican", votes: 1150000 }] }
  ],
  "UT": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 400000 }, { name: "Democratic Candidate", party: "Democratic", votes: 380000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 410000 }, { name: "Republican Candidate", party: "Republican", votes: 390000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 420000 }, { name: "Democratic Candidate", party: "Democratic", votes: 400000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 430000 }, { name: "Republican Candidate", party: "Republican", votes: 410000 }] }
  ],
  "VT": [
    { "Congressional District (at Large)": [{ name: "Democratic Candidate", party: "Democratic", votes: 200000 }, { name: "Republican Candidate", party: "Republican", votes: 190000 }] }
  ],
  "VA": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 700000 }, { name: "Democratic Candidate", party: "Democratic", votes: 690000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 710000 }, { name: "Republican Candidate", party: "Republican", votes: 700000 }] },
    { "Congressional District 3": [{ name: "Republican Candidate", party: "Republican", votes: 720000 }, { name: "Democratic Candidate", party: "Democratic", votes: 710000 }] },
    { "Congressional District 4": [{ name: "Democratic Candidate", party: "Democratic", votes: 730000 }, { name: "Republican Candidate", party: "Republican", votes: 720000 }] },
    { "Congressional District 5": [{ name: "Republican Candidate", party: "Republican", votes: 740000 }, { name: "Democratic Candidate", party: "Democratic", votes: 730000 }] },
    { "Congressional District 6": [{ name: "Democratic Candidate", party: "Democratic", votes: 750000 }, { name: "Republican Candidate", party: "Republican", votes: 740000 }] },
    { "Congressional District 7": [{ name: "Republican Candidate", party: "Republican", votes: 760000 }, { name: "Democratic Candidate", party: "Democratic", votes: 750000 }] },
    { "Congressional District 8": [{ name: "Democratic Candidate", party: "Democratic", votes: 770000 }, { name: "Republican Candidate", party: "Republican", votes: 760000 }] },
    { "Congressional District 9": [{ name: "Republican Candidate", party: "Republican", votes: 780000 }, { name: "Democratic Candidate", party: "Democratic", votes: 770000 }] },
    { "Congressional District 10": [{ name: "Democratic Candidate", party: "Democratic", votes: 790000 }, { name: "Republican Candidate", party: "Republican", votes: 780000 }] },
    { "Congressional District 11": [{ name: "Republican Candidate", party: "Republican", votes: 800000 }, { name: "Democratic Candidate", party: "Democratic", votes: 790000 }] }
  ],
  "WA": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 900000 }, { name: "Republican Candidate", party: "Republican", votes: 890000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 910000 }, { name: "Democratic Candidate", party: "Democratic", votes: 900000 }] },
    { "Congressional District 3": [{ name: "Democratic Candidate", party: "Democratic", votes: 920000 }, { name: "Republican Candidate", party: "Republican", votes: 910000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 930000 }, { name: "Democratic Candidate", party: "Democratic", votes: 920000 }] },
    { "Congressional District 5": [{ name: "Democratic Candidate", party: "Democratic", votes: 940000 }, { name: "Republican Candidate", party: "Republican", votes: 930000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 950000 }, { name: "Democratic Candidate", party: "Democratic", votes: 940000 }] },
    { "Congressional District 7": [{ name: "Democratic Candidate", party: "Democratic", votes: 960000 }, { name: "Republican Candidate", party: "Republican", votes: 950000 }] },
    { "Congressional District 8": [{ name: "Republican Candidate", party: "Republican", votes: 970000 }, { name: "Democratic Candidate", party: "Democratic", votes: 960000 }] },
    { "Congressional District 9": [{ name: "Democratic Candidate", party: "Democratic", votes: 980000 }, { name: "Republican Candidate", party: "Republican", votes: 970000 }] },
    { "Congressional District 10": [{ name: "Republican Candidate", party: "Republican", votes: 990000 }, { name: "Democratic Candidate", party: "Democratic", votes: 980000 }] }
  ],
  "WV": [
    { "Congressional District 1": [{ name: "Republican Candidate", party: "Republican", votes: 500000 }, { name: "Democratic Candidate", party: "Democratic", votes: 490000 }] },
    { "Congressional District 2": [{ name: "Democratic Candidate", party: "Democratic", votes: 510000 }, { name: "Republican Candidate", party: "Republican", votes: 500000 }] }
  ],
  "WI": [
    { "Congressional District 1": [{ name: "Democratic Candidate", party: "Democratic", votes: 600000 }, { name: "Republican Candidate", party: "Republican", votes: 590000 }] },
    { "Congressional District 2": [{ name: "Republican Candidate", party: "Republican", votes: 610000 }, { name: "Democratic Candidate", party: "Democratic", votes: 600000 }] },
    { "Congressional District 3": [{ name: "Democratic Candidate", party: "Democratic", votes: 620000 }, { name: "Republican Candidate", party: "Republican", votes: 610000 }] },
    { "Congressional District 4": [{ name: "Republican Candidate", party: "Republican", votes: 630000 }, { name: "Democratic Candidate", party: "Democratic", votes: 620000 }] },
    { "Congressional District 5": [{ name: "Democratic Candidate", party: "Democratic", votes: 640000 }, { name: "Republican Candidate", party: "Republican", votes: 630000 }] },
    { "Congressional District 6": [{ name: "Republican Candidate", party: "Republican", votes: 650000 }, { name: "Democratic Candidate", party: "Democratic", votes: 640000 }] },
    { "Congressional District 7": [{ name: "Democratic Candidate", party: "Democratic", votes: 660000 }, { name: "Republican Candidate", party: "Republican", votes: 650000 }] },
    { "Congressional District 8": [{ name: "Republican Candidate", party: "Republican", votes: 670000 }, { name: "Democratic Candidate", party: "Democratic", votes: 660000 }] }
  ],
  "WY": [
    { "Congressional District (at Large)": [{ name: "Republican Candidate", party: "Republican", votes: 200000 }, { name: "Democratic Candidate", party: "Democratic", votes: 150000 }] }
  ]
};