module.exports = {
  branches: [
    "main",
    {
      name: "next",
      prerelease: "next",
    },
    {
      name: "canary",
      prerelease: "canary",
    },
  ],

  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["package.json"],
        avatar: {
          name: "abdirahmanmahamoud",
          email: "abdirahmanmahamoud@gmail.com",
        },
        message:
          "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}",
      },
    ],
  ],
};
