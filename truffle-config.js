module.exports = {
  compilers: {
    solc: {
      version: "0.4.17", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*", // Match any network id
    },
  },
};
