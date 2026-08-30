// This file is the "table of contents" for the whole site.
// Every time you add a new month, or add photos/letters to an existing
// month, update this file so the site knows the files exist.
//
// id     -> must match the folder name exactly (e.g. "2026-01" matches
//           the folders photos/2026-01 and letters/2026-01)
// label  -> what's shown on the site (e.g. "January 2026")
// photos -> just the filenames (must already be inside photos/<id>/)
// letters-> just the filenames of .txt files (must already be inside letters/<id>/)

const MONTHS = [
  {
    id: "2026-01",
    label: "January 2026",
    photos: [
      // "us-at-the-beach.jpg",
      // "coffee-date.jpg"
    ],
    letters: [
      "welcome.txt"
    ]
  },
  {
    id: "2026-02",
    label: "February 2026",
    photos: [],
    letters: []
  }

  // Add new months like this:
  // {
  //   id: "2026-03",
  //   label: "March 2026",
  //   photos: ["photo1.jpg", "photo2.jpg"],
  //   letters: ["letter1.txt"]
  // },
];
