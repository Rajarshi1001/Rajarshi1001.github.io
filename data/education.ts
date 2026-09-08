export type EducationEntry = {
  range: string;
  degree: string;
  org: string;
  detail: string;
  tags: string[];
};

export const education: EducationEntry[] = [
  {
    range: '2020 — 2024',
    degree: 'B.Tech, Materials Science & Engineering',
    org: 'Indian Institute of Technology (IIT) Kanpur',
    detail:
      'Four years of materials science along with other courses across Control Systems, Machine learning, NLP and RL. Involved with Aerial Robotics as a Team Head, Secretary of the Programming Club.',
    tags: ['CPI 8.2 / 10.0'],
  },
  {
    range: 'Achievements',
    degree: 'Recognition along the way',
    org: '',
    detail:
      'A few of the ones that stuck: an Analyst of the Quarter award at American Express for optimizing usage of the Email Response model, and two Inter IIT Tech Meet results working on ISRO challenges and winning a Shastra Challenge in Orbital Mechanics track.',
    tags: [
      "Analyst of the Quarter, Q3'25 — American Express",
      'Bronze Medal — Inter IIT Tech Meet 11.0 (ISRO Chandrayaan Moon Mapping Challenge)',
      '2nd Position — Inter IIT Tech Meet 10.0 (ISRO Web-Based X-Ray Burst Identification)',
      '2nd Position - Orbital Mechanics track (Shastra Challenge - Orbital Mechanics)',
    ],
  },
];
