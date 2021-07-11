module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Rewrite everything to use `pages/index`
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};
