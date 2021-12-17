export const defaultUserList = {
  1: "Sameer",
  2: "Aayushi",
  3: "Bhaskar",
  4: "Kamalnath Sharma",
  5: "Shanti Kumar Saha",
};

export const defaultUserConnections = {
  1: ["2", "4"],
  2: ["3"],
  3: [],
  4: ["5"],
  5: ["3"],
};

export const defaultNetwork = {
  key: 0,
  graph: {
    nodes: [
      { id: 1, label: "Sammer" },
      { id: 2, label: "Aayushi" },
      { id: 3, label: "Bhaskar" },
      { id: 4, label: "Kamalnath Sharma" },
      { id: 5, label: "Shanti Kumar Saha" },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 1, to: 4 },
      { from: 4, to: 5 },
      { from: 5, to: 3 },
    ],
  },
};
