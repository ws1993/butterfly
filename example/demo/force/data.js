'use stice';

import Node from './node';
let num = 200;

function genNode() {
	let nodes = [];
	for(let i = 0; i < num; i++) {
		nodes.push({
			id: i.toString(),
			index: i.toString(),
			Class: Node
		});
	}
	return nodes;
}

function genEdge() {
	let edges = [];
	let index = 0;
	let count = 0;
	for (let i = 0; i < num; i++, count++) {
		if (count > 2 * index + 1) {
			index ++;
			count = 0;
		}
		edges.push({
			// source: index.toString(),
			source: '1',
			target: i.toString()
		});
	}
	// 把自我循环那个东西去掉
	edges.shift();
	return edges;
}

export default {
	nodes: genNode(),
	edges: genEdge()
}

let nodes = [{
	"id": "0",
	"index": "0",
	"Class": Node
}, {
	"id": "1",
	"index": "1",
	"Class": Node
}, {
	"id": "2",
	"index": "2",
	"Class": Node
}, {
	"id": "3",
	"index": "3",
	"Class": Node
}, {
	"id": "4",
	"index": "4",
	"Class": Node
}, {
	"id": "5",
	"index": "5",
	"Class": Node
}, {
	"id": "6",
	"index": "6",
	"Class": Node
}, {
	"id": "7",
	"index": "7",
	"Class": Node
}, {
	"id": "8",
	"index": "8",
	"Class": Node
}, {
	"id": "9",
	"index": "9",
	"Class": Node
}, {
	"id": "10",
	"index": "10",
	"Class": Node
}, {
	"id": "11",
	"index": "11",
	"Class": Node
}, {
	"id": "12",
	"index": "12",
	"Class": Node
}, {
	"id": "13",
	"index": "13",
	"Class": Node
}, {
	"id": "14",
	"index": "14",
	"Class": Node
}, {
	"id": "15",
	"index": "15",
	"Class": Node
}, {
	"id": "16",
	"index": "16",
	"Class": Node
}, {
	"id": "17",
	"index": "17",
	"Class": Node
}, {
	"id": "18",
	"index": "18",
	"Class": Node
}, {
	"id": "19",
	"index": "19",
	"Class": Node
}, {
	"id": "20",
	"index": "20",
	"Class": Node
}, {
	"id": "21",
	"index": "21",
	"Class": Node
}, {
	"id": "22",
	"index": "22",
	"Class": Node
}, {
	"id": "23",
	"index": "23",
	"Class": Node
}, {
	"id": "24",
	"index": "24",
	"Class": Node
}, {
	"id": "25",
	"index": "25",
	"Class": Node
}, {
	"id": "26",
	"index": "26",
	"Class": Node
}, {
	"id": "27",
	"index": "27",
	"Class": Node
}, {
	"id": "28",
	"index": "28",
	"Class": Node
}, {
	"id": "29",
	"index": "29",
	"Class": Node
}, {
	"id": "30",
	"index": "30",
	"Class": Node
}, {
	"id": "31",
	"index": "31",
	"Class": Node
}, {
	"id": "32",
	"index": "32",
	"Class": Node
}, {
	"id": "33",
	"index": "33",
	"Class": Node
}, {
	"id": "34",
	"index": "34",
	"Class": Node
}, {
	"id": "35",
	"index": "35",
	"Class": Node
}, {
	"id": "36",
	"index": "36",
	"Class": Node
}, {
	"id": "37",
	"index": "37",
	"Class": Node
}, {
	"id": "38",
	"index": "38",
	"Class": Node
}, {
	"id": "39",
	"index": "39",
	"Class": Node
}, {
	"id": "40",
	"index": "40",
	"Class": Node
}, {
	"id": "41",
	"index": "41",
	"Class": Node
}, {
	"id": "42",
	"index": "42",
	"Class": Node
}, {
	"id": "43",
	"index": "43",
	"Class": Node
}, {
	"id": "44",
	"index": "44",
	"Class": Node
}, {
	"id": "45",
	"index": "45",
	"Class": Node
}, {
	"id": "46",
	"index": "46",
	"Class": Node
}, {
	"id": "47",
	"index": "47",
	"Class": Node
}, {
	"id": "48",
	"index": "48",
	"Class": Node
}, {
	"id": "49",
	"index": "49",
	"Class": Node
}, {
	"id": "50",
	"index": "50",
	"Class": Node
}, {
	"id": "51",
	"index": "51",
	"Class": Node
}, {
	"id": "52",
	"index": "52",
	"Class": Node
}, {
	"id": "53",
	"index": "53",
	"Class": Node
}, {
	"id": "54",
	"index": "54",
	"Class": Node
}, {
	"id": "55",
	"index": "55",
	"Class": Node
}, {
	"id": "56",
	"index": "56",
	"Class": Node
}, {
	"id": "57",
	"index": "57",
	"Class": Node
}, {
	"id": "58",
	"index": "58",
	"Class": Node
}, {
	"id": "59",
	"index": "59",
	"Class": Node
}, {
	"id": "60",
	"index": "60",
	"Class": Node
}, {
	"id": "61",
	"index": "61",
	"Class": Node
}, {
	"id": "62",
	"index": "62",
	"Class": Node
}, {
	"id": "63",
	"index": "63",
	"Class": Node
}, {
	"id": "64",
	"index": "64",
	"Class": Node
}, {
	"id": "65",
	"index": "65",
	"Class": Node
}, {
	"id": "66",
	"index": "66",
	"Class": Node
}, {
	"id": "67",
	"index": "67",
	"Class": Node
}, {
	"id": "68",
	"index": "68",
	"Class": Node
}, {
	"id": "69",
	"index": "69",
	"Class": Node
}, {
	"id": "70",
	"index": "70",
	"Class": Node
}, {
	"id": "71",
	"index": "71",
	"Class": Node
}, {
	"id": "72",
	"index": "72",
	"Class": Node
}, {
	"id": "73",
	"index": "73",
	"Class": Node
}, {
	"id": "74",
	"index": "74",
	"Class": Node
}, {
	"id": "75",
	"index": "75",
	"Class": Node
}, {
	"id": "76",
	"index": "76",
	"Class": Node
}, {
	"id": "77",
	"index": "77",
	"Class": Node
}, {
	"id": "78",
	"index": "78",
	"Class": Node
}, {
	"id": "79",
	"index": "79",
	"Class": Node
}, {
	"id": "80",
	"index": "80",
	"Class": Node
}, {
	"id": "81",
	"index": "81",
	"Class": Node
}, {
	"id": "82",
	"index": "82",
	"Class": Node
}, {
	"id": "83",
	"index": "83",
	"Class": Node
}, {
	"id": "84",
	"index": "84",
	"Class": Node
}, {
	"id": "85",
	"index": "85",
	"Class": Node
}, {
	"id": "86",
	"index": "86",
	"Class": Node
}, {
	"id": "87",
	"index": "87",
	"Class": Node
}, {
	"id": "88",
	"index": "88",
	"Class": Node
}, {
	"id": "89",
	"index": "89",
	"Class": Node
}, {
	"id": "90",
	"index": "90",
	"Class": Node
}, {
	"id": "91",
	"index": "91",
	"Class": Node
}, {
	"id": "92",
	"index": "92",
	"Class": Node
}, {
	"id": "93",
	"index": "93",
	"Class": Node
}, {
	"id": "94",
	"index": "94",
	"Class": Node
}, {
	"id": "95",
	"index": "95",
	"Class": Node
}, {
	"id": "96",
	"index": "96",
	"Class": Node
}, {
	"id": "97",
	"index": "97",
	"Class": Node
}, {
	"id": "98",
	"index": "98",
	"Class": Node
}, {
	"id": "99",
	"index": "99",
	"Class": Node
}];

let edges = [{
	"source": "0",
	"target": "1"
}, {
	"source": "1",
	"target": "2"
}, {
	"source": "1",
	"target": "3"
}, {
	"source": "1",
	"target": "4"
}, {
	"source": "2",
	"target": "5"
}, {
	"source": "2",
	"target": "6"
}, {
	"source": "2",
	"target": "7"
}, {
	"source": "2",
	"target": "8"
}, {
	"source": "2",
	"target": "9"
}, {
	"source": "3",
	"target": "10"
}, {
	"source": "3",
	"target": "11"
}, {
	"source": "3",
	"target": "12"
}, {
	"source": "3",
	"target": "13"
}, {
	"source": "3",
	"target": "14"
}, {
	"source": "3",
	"target": "15"
}, {
	"source": "3",
	"target": "16"
}, {
	"source": "4",
	"target": "17"
}, {
	"source": "4",
	"target": "18"
}, {
	"source": "4",
	"target": "19"
}, {
	"source": "4",
	"target": "20"
}, {
	"source": "4",
	"target": "21"
}, {
	"source": "4",
	"target": "22"
}, {
	"source": "4",
	"target": "23"
}, {
	"source": "4",
	"target": "24"
}, {
	"source": "4",
	"target": "25"
}, {
	"source": "5",
	"target": "26"
}, {
	"source": "5",
	"target": "27"
}, {
	"source": "5",
	"target": "28"
}, {
	"source": "5",
	"target": "29"
}, {
	"source": "5",
	"target": "30"
}, {
	"source": "5",
	"target": "31"
}, {
	"source": "5",
	"target": "32"
}, {
	"source": "5",
	"target": "33"
}, {
	"source": "5",
	"target": "34"
}, {
	"source": "5",
	"target": "35"
}, {
	"source": "5",
	"target": "36"
}, {
	"source": "6",
	"target": "37"
}, {
	"source": "6",
	"target": "38"
}, {
	"source": "6",
	"target": "39"
}, {
	"source": "6",
	"target": "40"
}, {
	"source": "6",
	"target": "41"
}, {
	"source": "6",
	"target": "42"
}, {
	"source": "6",
	"target": "43"
}, {
	"source": "6",
	"target": "44"
}, {
	"source": "6",
	"target": "45"
}, {
	"source": "6",
	"target": "46"
}, {
	"source": "6",
	"target": "47"
}, {
	"source": "6",
	"target": "48"
}, {
	"source": "6",
	"target": "49"
}, {
	"source": "7",
	"target": "50"
}, {
	"source": "7",
	"target": "51"
}, {
	"source": "7",
	"target": "52"
}, {
	"source": "7",
	"target": "53"
}, {
	"source": "7",
	"target": "54"
}, {
	"source": "7",
	"target": "55"
}, {
	"source": "7",
	"target": "56"
}, {
	"source": "7",
	"target": "57"
}, {
	"source": "7",
	"target": "58"
}, {
	"source": "7",
	"target": "59"
}, {
	"source": "7",
	"target": "60"
}, {
	"source": "7",
	"target": "61"
}, {
	"source": "7",
	"target": "62"
}, {
	"source": "7",
	"target": "63"
}, {
	"source": "7",
	"target": "64"
}, {
	"source": "8",
	"target": "65"
}, {
	"source": "8",
	"target": "66"
}, {
	"source": "8",
	"target": "67"
}, {
	"source": "8",
	"target": "68"
}, {
	"source": "8",
	"target": "69"
}, {
	"source": "8",
	"target": "70"
}, {
	"source": "8",
	"target": "71"
}, {
	"source": "8",
	"target": "72"
}, {
	"source": "8",
	"target": "73"
}, {
	"source": "8",
	"target": "74"
}, {
	"source": "8",
	"target": "75"
}, {
	"source": "8",
	"target": "76"
}, {
	"source": "8",
	"target": "77"
}, {
	"source": "8",
	"target": "78"
}, {
	"source": "8",
	"target": "79"
}, {
	"source": "8",
	"target": "80"
}, {
	"source": "8",
	"target": "81"
}, {
	"source": "9",
	"target": "82"
}, {
	"source": "9",
	"target": "83"
}, {
	"source": "9",
	"target": "84"
}, {
	"source": "9",
	"target": "85"
}, {
	"source": "9",
	"target": "86"
}, {
	"source": "9",
	"target": "87"
}, {
	"source": "9",
	"target": "88"
}, {
	"source": "9",
	"target": "89"
}, {
	"source": "9",
	"target": "90"
}, {
	"source": "9",
	"target": "91"
}, {
	"source": "9",
	"target": "92"
}, {
	"source": "9",
	"target": "93"
}, {
	"source": "9",
	"target": "94"
}, {
	"source": "9",
	"target": "95"
}, {
	"source": "9",
	"target": "96"
}, {
	"source": "9",
	"target": "97"
}, {
	"source": "9",
	"target": "98"
}, {
	"source": "9",
	"target": "99"
}];

// module.exports = {
//   nodes,
//   edges
// }