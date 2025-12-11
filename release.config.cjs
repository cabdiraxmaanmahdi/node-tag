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
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "feat", release: "patch" },
          { type: "fix", release: "patch" },
          { breaking: true, release: "major" },
        ],
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",

    [
      "@semantic-release/git",
      {
        assets: ["package.json"],
        gitAuthor: "abdirahmanmahamoud <abdirahmanmahamoud@gmail.com>",
        message:
          "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}",
      },
    ],
  ],
};
