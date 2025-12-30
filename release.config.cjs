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
          { type: "fix", release: "patch" },
          { type: "feat", release: "patch" },
          { type: "featRefactor", release: "minor" },
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
        assets: ["package.json", "CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}",
      },
    ],
  ],
};
