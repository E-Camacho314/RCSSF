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
      { party: presidentialcandidatesProjection[0].party, name: presidentialcandidatesProjection[0].name, votes: 300000 },
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
  "AL": {
    "01": [
      { party: "Republican", name: "Representative A", votes: 220000 },
      { party: "Democratic", name: "Representative B", votes: 180000 }
    ],
    "02": [
      { party: "Republican", name: "Representative C", votes: 210000 },
      { party: "Democratic", name: "Representative D", votes: 190000 }
    ],
    "03": [
      { party: "Republican", name: "Representative E", votes: 230000 },
      { party: "Democratic", name: "Representative F", votes: 200000 }
    ]
  },
  "AK": {
    "01": [
      { party: "Republican", name: "Representative A", votes: 300000 },
      { party: "Democratic", name: "Representative B", votes: 290000 }
    ]
  },
  "AZ": {
    "01": [
      { party: "Republican", name: "Representative A", votes: 1400000 },
      { party: "Democratic", name: "Representative B", votes: 1300000 }
    ],
    "02": [
      { party: "Democratic", name: "Representative C", votes: 1350000 },
      { party: "Republican", name: "Representative D", votes: 1250000 }
    ],
    "03": [
      { party: "Republican", name: "Representative E", votes: 1500000 },
      { party: "Democratic", name: "Representative F", votes: 1400000 }
    ]
  },
  "CA": {
    "01": [
      { party: "Democratic", name: "Representative A", votes: 700000 },
      { party: "Republican", name: "Representative B", votes: 680000 }
    ],
    "02": [
      { party: "Democratic", name: "Representative C", votes: 850000 },
      { party: "Republican", name: "Representative D", votes: 830000 }
    ],
    "03": [
      { party: "Republican", name: "Representative E", votes: 900000 },
      { party: "Democratic", name: "Representative F", votes: 860000 }
    ],
    "04": [
      { party: "Democratic", name: "Representative G", votes: 1100000 },
      { party: "Republican", name: "Representative H", votes: 1000000 }
    ]
  },
  "FL": {
    "01": [
      { party: "Republican", name: "Representative A", votes: 250000 },
      { party: "Democratic", name: "Representative B", votes: 220000 }
    ],
    "02": [
      { party: "Democratic", name: "Representative C", votes: 210000 },
      { party: "Republican", name: "Representative D", votes: 230000 }
    ],
    "03": [
      { party: "Republican", name: "Representative E", votes: 260000 },
      { party: "Democratic", name: "Representative F", votes: 240000 }
    ]
  },
  "NY": {
    "01": [
      { party: "Democratic", name: "Representative A", votes: 1100000 },
      { party: "Republican", name: "Representative B", votes: 1050000 }
    ],
    "02": [
      { party: "Republican", name: "Representative C", votes: 950000 },
      { party: "Democratic", name: "Representative D", votes: 920000 }
    ],
    "03": [
      { party: "Democratic", name: "Representative E", votes: 1200000 },
      { party: "Republican", name: "Representative F", votes: 1100000 }
    ]
  },
  "TX": {
    "01": [
      { party: "Republican", name: "Representative A", votes: 1600000 },
      { party: "Democratic", name: "Representative B", votes: 1400000 }
    ],
    "02": [
      { party: "Democratic", name: "Representative C", votes: 1550000 },
      { party: "Republican", name: "Representative D", votes: 1450000 }
    ],
    "03": [
      { party: "Republican", name: "Representative E", votes: 1700000 },
      { party: "Democratic", name: "Representative F", votes: 1600000 }
    ]
  }
};
